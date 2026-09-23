'use strict';
const contactForm = document.getElementById('contactForm');
const steps = [...contactForm.querySelectorAll('.step-content')];
const progressBar = document.getElementById('progressBar');
const stepIndicator = document.getElementById('stepIndicator');
const summaryBox = document.getElementById('summaryBox');
const status = document.getElementById('formStatus');
const undecidedFields = [
  [document.getElementById('undecidedWorkers'), document.getElementById('teamSize')],
  [document.getElementById('undecidedPeriod'), document.getElementById('period')]
];
let currentStep = 1;
let submitting = false;
const totalSteps = steps.length;

steps.forEach(step => {
  const question = step.querySelector('p');
  question.classList.add('step-question');
  question.tabIndex = -1;
});

function syncFields() {
  undecidedFields.forEach(([checkbox, input]) => {
    input.disabled = checkbox.checked;
    input.required = !checkbox.checked;
  });
  contactForm.querySelectorAll('.radio-card').forEach(card => {
    card.classList.toggle('active', card.querySelector('input').checked);
  });
}

function updateSummary() {
  const values = [
    ['Equipe', undecidedFields[0][0].checked ? 'Ainda definindo' : `${undecidedFields[0][1].value} pessoas`],
    ['Período', undecidedFields[1][0].checked ? 'Datas não definidas' : undecidedFields[1][1].value],
    ['Cenário atual', contactForm.querySelector('input[name="current_scenario"]:checked')?.value || 'Não informado']
  ];
  summaryBox.replaceChildren(...values.map(([label, value]) => {
    const row = document.createElement('div');
    row.className = 'summary-item';
    const answer = document.createElement('strong');
    answer.textContent = value;
    row.append(`${label}: `, answer);
    return row;
  }));
}

function updateStepUI(focus = true) {
  saveDraft();
  steps.forEach((step, index) => step.classList.toggle('active', index + 1 === currentStep));
  progressBar.style.width = `${currentStep / totalSteps * 100}%`;
  stepIndicator.textContent = `Passo ${currentStep} de ${totalSteps}`;
  if (currentStep === totalSteps) updateSummary();
  if (focus) {
    const question = steps[currentStep - 1].querySelector('.step-question');
    question.focus({ preventScroll: true });
    question.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
}

function firstInvalid(scope) {
  return [...scope.querySelectorAll('input, select, textarea')]
    .find(input => !input.disabled && !input.checkValidity());
}

function advance() {
  if (submitting) return;
  const invalid = firstInvalid(steps[currentStep - 1]);
  if (invalid) { invalid.reportValidity(); return; }
  if (currentStep < totalSteps) { currentStep++; updateStepUI(); }
}

contactForm.querySelectorAll('.btn-next').forEach(button => button.addEventListener('click', advance));
contactForm.querySelectorAll('.btn-prev').forEach(button => button.addEventListener('click', () => {
  if (!submitting && currentStep > 1) { currentStep--; updateStepUI(); }
}));
undecidedFields.forEach(([checkbox]) => checkbox.addEventListener('change', syncFields));
contactForm.querySelectorAll('.radio-card input').forEach(radio => radio.addEventListener('change', syncFields));

contactForm.addEventListener('submit', async event => {
  event.preventDefault();
  if (submitting) return;
  if (currentStep < totalSteps) { advance(); return; }
  const invalid = firstInvalid(contactForm);
  if (invalid) {
    const step = invalid.closest('.step-content');
    if (step) { currentStep = Number(step.dataset.step); updateStepUI(false); }
    invalid.reportValidity();
    return;
  }
  const data = new FormData(contactForm);
  undecidedFields.forEach(([checkbox, input]) => {
    if (checkbox.checked) data.set(input.name, checkbox.value);
  });
  const button = contactForm.querySelector('button[type="submit"]');
  const original = button.innerHTML;
  const buttons = [...contactForm.querySelectorAll('button')];
  submitting = true;
  buttons.forEach(control => { control.disabled = true; });
  contactForm.setAttribute('aria-busy', 'true');
  button.textContent = 'Enviando solicitação…';
  status.className = 'form-status';
  status.textContent = '';
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(contactForm.action, {
      method: 'POST', body: data,
      headers: { Accept: 'application/json' }, signal: controller.signal
    });
    if (!response.ok) throw new Error('Submission rejected');
    contactForm.reset();
    try { sessionStorage.removeItem("topfacil-v4-draft"); } catch {}
    syncFields();
    currentStep = 1;
    summaryBox.replaceChildren();
    updateStepUI(false);
    status.classList.add('success');
    status.textContent = 'Solicitação enviada! A equipe TopFácil recebeu seus dados para entrar em contato.';
  } catch {
    status.classList.add('error');
    status.textContent = 'Não foi possível confirmar o envio. Seus dados continuam preenchidos. Tente novamente ou escreva para contato@topfacilalojamentos.com.br.';
  } finally {
    clearTimeout(timeout);
    submitting = false;
    buttons.forEach(control => { control.disabled = false; });
    contactForm.removeAttribute('aria-busy');
    button.innerHTML = original;
    status.focus();
    if (status.classList.contains("success")) { try { sessionStorage.removeItem("topfacil-v4-draft"); } catch {} }
  }
});

function saveDraft() {
  const fields = {};
  contactForm.querySelectorAll('input[name], textarea[name]').forEach(input => {
    if (input.type === 'hidden' || input.name === '_gotcha') return;
    if (input.type === 'radio') { if (input.checked) fields[input.name] = input.value; }
    else fields[input.name] = input.type === 'checkbox' ? input.checked : input.value;
  });
  try { sessionStorage.setItem('topfacil-v4-draft', JSON.stringify({ fields, step: currentStep })); } catch {}
}
try {
  const draft = JSON.parse(sessionStorage.getItem('topfacil-v4-draft') || 'null');
  if (draft && draft.fields) {
    contactForm.querySelectorAll('input[name], textarea[name]').forEach(input => {
      if (input.type === 'hidden' || input.name === '_gotcha') return;
      const value = draft.fields[input.name];
      if (input.type === 'checkbox') input.checked = value === true;
      else if (input.type === 'radio') input.checked = value === input.value;
      else if (typeof value === 'string') input.value = value;
    });
    currentStep = Math.max(1, Math.min(totalSteps, Number(draft.step) || 1));
  }
} catch {}
contactForm.addEventListener('input', saveDraft);
contactForm.addEventListener('change', saveDraft);
// Native validation and all questions remain available when scripts are unavailable.
syncFields();
contactForm.noValidate = true;
contactForm.classList.add('steps-ready');
updateStepUI(false);
