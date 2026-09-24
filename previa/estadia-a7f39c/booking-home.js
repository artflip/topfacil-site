'use strict';
const form=document.getElementById('stayForm');
let selectedPeriod='A definir';let preferredPeriod='A definir';
const arrival=document.getElementById('arrival');
const departure=document.getElementById('departure');
const now=new Date();const today=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
arrival.min=today;departure.min=today;
function validateDates(){departure.min=arrival.value||today;departure.setCustomValidity(arrival.value&&departure.value&&departure.value<=arrival.value?'A saída deve ser depois da entrada.':'');}
arrival.addEventListener('input',()=>{validateDates();updateSummary();});departure.addEventListener('input',()=>{validateDates();updateSummary();});
document.querySelectorAll('[data-stay]').forEach(link=>link.addEventListener('click',()=>{preferredPeriod=link.dataset.stay;updateSummary();}));
form.addEventListener('submit',event=>{
 event.preventDefault();validateDates();if(!form.reportValidity())return;
 const format=value=>value?value.split('-').reverse().join('/'):'ainda sem data definida';
 const message=`Olá, TopFácil! Gostaria de consultar valores e disponibilidade para uma estadia.\nPessoas: ${document.getElementById('guestCount').value}\nPeríodo: ${selectedPeriod}\nEntrada: ${format(arrival.value)}\nSaída: ${format(departure.value)}\nPodem me informar as opções de acomodação, o que está incluído e as condições?`;
 const email=event.submitter?.value==='email';
 location.assign(email?'mailto:contato@topfacilalojamentos.com.br?subject='+encodeURIComponent('Consulta de hospedagem — TopFácil')+'&body='+encodeURIComponent(message):'https://wa.me/5577998560022?text='+encodeURIComponent(message));
});
const mobile=document.querySelector('.mobile-contact');
const observer=new IntersectionObserver(entries=>{for(const entry of entries){mobile.classList.toggle('is-hidden',entry.isIntersecting);}}, {threshold:0.05});observer.observe(document.getElementById('contato'));

function updateSummary(){
 const summary=document.getElementById('staySummary');
 if(arrival.value&&departure.value&&departure.value>arrival.value){const nights=Math.round((Date.parse(departure.value)-Date.parse(arrival.value))/86400000);selectedPeriod=nights+' noite'+(nights===1?'':'s');summary.textContent=selectedPeriod+' · valores e vagas confirmados no atendimento.';}
 else {selectedPeriod=preferredPeriod;summary.textContent=selectedPeriod==='A definir'?'Datas em aberto? Você também pode consultar sem preenchê-las.':'Interesse em estadia '+selectedPeriod.toLowerCase()+'. Informe as datas se já souber.';}
}
const dialog=document.getElementById('photoDialog');const large=document.getElementById('largePhoto');
document.querySelectorAll('.photo-open').forEach(button=>button.addEventListener('click',()=>{const img=button.querySelector('img');large.src=img.src;large.alt=img.alt;dialog.showModal();}));
document.getElementById('closePhoto').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
