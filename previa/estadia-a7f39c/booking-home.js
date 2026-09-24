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


function updateSummary(){
 const summary=document.getElementById('staySummary');
 if(arrival.value&&departure.value&&departure.value>arrival.value){const nights=Math.round((Date.parse(departure.value)-Date.parse(arrival.value))/86400000);selectedPeriod=nights+' noite'+(nights===1?'':'s');summary.textContent=selectedPeriod+' · valores e vagas confirmados no atendimento.';}
 else {selectedPeriod=preferredPeriod;summary.textContent=selectedPeriod==='A definir'?'Datas em aberto? Você também pode consultar sem preenchê-las.':'Interesse em estadia '+selectedPeriod.toLowerCase()+'. Informe as datas se já souber.';}
}
const dialog=document.getElementById('photoDialog');const large=document.getElementById('largePhoto');
document.querySelectorAll('.photo-open').forEach(button=>button.addEventListener('click',()=>{const img=button.querySelector('img');large.src=img.src;large.alt=img.alt;dialog.showModal();}));
document.getElementById('closePhoto').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});

const bookingDialog=document.getElementById('bookingDialog');
const sidebar=document.getElementById('contato');
const mobileLayout=matchMedia('(max-width:800px)');
let returnFocus=null;
function syncBookingLayout(){
 if(mobileLayout.matches){document.getElementById('bookingDialogContent').append(form);sidebar.hidden=true;}
 else {if(bookingDialog.open)bookingDialog.close();sidebar.hidden=false;sidebar.append(form);}
}
function openBooking(trigger){returnFocus=trigger||document.activeElement;bookingDialog.showModal();document.body.classList.add('booking-modal-open');document.getElementById('closeBooking').focus();}
document.getElementById('closeBooking').addEventListener('click',()=>bookingDialog.close());
bookingDialog.addEventListener('close',()=>{document.body.classList.remove('booking-modal-open');if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});});
bookingDialog.addEventListener('click',event=>{if(event.target===bookingDialog)bookingDialog.close();});
document.addEventListener('click',event=>{
 const link=event.target.closest('a[href]');if(!mobileLayout.matches||!link||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
 const url=new URL(link.href,location.href);if(url.origin!==location.origin||url.pathname!==location.pathname||url.hash!=='#contato')return;
 event.preventDefault();event.stopImmediatePropagation();
 if(link.dataset.stay){preferredPeriod=link.dataset.stay;updateSummary();}
 const menu=document.getElementById('siteMenu');
 if(menu?.classList.contains('show')&&window.bootstrap){menu.addEventListener('hidden.bs.offcanvas',()=>openBooking(document.querySelector('.menu-toggle')),{once:true});bootstrap.Offcanvas.getOrCreateInstance(menu).hide();}
 else openBooking(link);
},true);
mobileLayout.addEventListener('change',syncBookingLayout);syncBookingLayout();
if(mobileLayout.matches&&location.hash==='#contato')openBooking(mobile);
const gallery=document.querySelector('.photo-grid');
function updateGallery(){const index=Math.round(gallery.scrollLeft/(gallery.clientWidth+8));document.getElementById('photoCount').textContent=(index+1)+' / 2';document.getElementById('previousPhoto').disabled=index===0;document.getElementById('nextPhoto').disabled=index===1;}
function slidePhoto(direction){gallery.scrollBy({left:direction*(gallery.clientWidth+8),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
document.getElementById('previousPhoto').addEventListener('click',()=>slidePhoto(-1));document.getElementById('nextPhoto').addEventListener('click',()=>slidePhoto(1));gallery.addEventListener('scroll',updateGallery,{passive:true});window.addEventListener('resize',updateGallery);updateGallery();
