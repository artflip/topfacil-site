'use strict';
const form=document.getElementById('stayForm');
const period=document.getElementById('stayPeriod');
const arrival=document.getElementById('arrival');
const departure=document.getElementById('departure');
const now=new Date();const today=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
arrival.min=today;departure.min=today;
function validateDates(){departure.min=arrival.value||today;departure.setCustomValidity(arrival.value&&departure.value&&departure.value<=arrival.value?'A saída deve ser depois da entrada.':'');}
arrival.addEventListener('input',validateDates);departure.addEventListener('input',validateDates);
document.querySelectorAll('[data-stay]').forEach(link=>link.addEventListener('click',()=>{period.value=link.dataset.stay;}));
form.addEventListener('submit',event=>{
 event.preventDefault();validateDates();if(!form.reportValidity())return;
 const format=value=>value?value.split('-').reverse().join('/'):'ainda sem data definida';
 const message=`Olá, TopFácil! Gostaria de consultar valores e disponibilidade para uma estadia.\nPessoas: ${document.getElementById('guestCount').value}\nPeríodo: ${period.value}\nEntrada: ${format(arrival.value)}\nSaída: ${format(departure.value)}\nPodem me informar as opções de acomodação, o que está incluído e as condições?`;
 const email=event.submitter?.value==='email';
 location.assign(email?'mailto:contato@topfacilalojamentos.com.br?subject='+encodeURIComponent('Consulta de hospedagem — TopFácil')+'&body='+encodeURIComponent(message):'https://wa.me/5577998560022?text='+encodeURIComponent(message));
});
const mobile=document.querySelector('.mobile-contact');
const observer=new IntersectionObserver(entries=>{for(const entry of entries){mobile.classList.toggle('is-hidden',entry.isIntersecting);}}, {threshold:0.05});observer.observe(document.getElementById('contato'));
