'use strict';
if (window.lucide) { window.lucide.createIcons(); document.querySelectorAll('svg.lucide').forEach(icon => icon.setAttribute('aria-hidden','true')); }
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const scenes=[...document.querySelectorAll('.scene')];
const menu=document.getElementById('siteMenu');
const toggle=document.querySelector('.menu-toggle');
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
let destination=null;
function navigate(url){
  const section=scenes.find(scene=>url.hash==='#'+scene.id);
  if(section && url.pathname===location.pathname){
    if(location.hash!==url.hash) history.pushState(null,'',url.hash);
    section.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});
    section.querySelector('h1,h2')?.focus({preventScroll:true});
  }else location.href=url.href;
}
menu?.addEventListener('shown.bs.offcanvas',()=>toggle.setAttribute('aria-expanded','true'));
menu?.addEventListener('hidden.bs.offcanvas',()=>{toggle.setAttribute('aria-expanded','false');if(destination){const url=destination;destination=null;navigate(url);}});
document.addEventListener('click',event=>{
  const link=event.target.closest('a[href]');
  if(!link||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  const url=new URL(link.href,location.href);
  if(scenes.length && url.origin===location.origin && url.pathname!==location.pathname) {
    history.replaceState({ ...(history.state || {}), topfacilScroll: scrollY }, '', location.href);
  }
  if(url.origin!==location.origin)return;
  if(menu?.classList.contains('show')&&menu.contains(link)&&window.bootstrap){event.preventDefault();destination=url;window.bootstrap.Offcanvas.getOrCreateInstance(menu).hide();}
  else if(url.pathname===location.pathname&&scenes.some(scene=>url.hash==='#'+scene.id)){event.preventDefault();navigate(url);}
});
if(scenes.length){
  let scheduled=false;
  function track(){
    scheduled=false;
    const marker=innerHeight*.4;
    let active=scenes[0];
    scenes.forEach(scene=>{if(scene.getBoundingClientRect().top<=marker)active=scene;});
    document.querySelectorAll('.story-rail a').forEach(link=>{if(link.hash==='#'+active.id)link.setAttribute('aria-current','step');else link.removeAttribute('aria-current');});
    try{sessionStorage.setItem('topfacil-v4-scene',active.id);}catch{}
    const visual=document.querySelector('[data-parallax]');
    if(visual&&!reduced.matches){const rect=scenes[0].getBoundingClientRect();if(rect.bottom>0)visual.style.transform=`translateY(${Math.max(-25,Math.min(25,-rect.top*.08))}px)`;}
  }
  addEventListener('scroll',()=>{if(!scheduled){requestAnimationFrame(track);scheduled=true;}},{passive:true});
  addEventListener('resize',track);
  addEventListener('popstate',()=>{
    if (Number.isFinite(history.state?.topfacilScroll)) window.scrollTo({top:history.state.topfacilScroll,behavior:'instant'});
    else { const scene=scenes.find(s=>'#'+s.id===location.hash)||scenes[0];scene.scrollIntoView({behavior:'instant'}); }
    track();
  });
  addEventListener('pageshow', () => {
    if (performance.getEntriesByType('navigation')[0]?.type === 'back_forward' && Number.isFinite(history.state?.topfacilScroll)) {
      window.scrollTo({top:history.state.topfacilScroll,behavior:'instant'});track();
    }
  });
  if(!location.hash){try{const last=sessionStorage.getItem('topfacil-v4-scene');const scene=scenes.find(s=>s.id===last);if(scene)scene.scrollIntoView({behavior:'instant'});}catch{}}
  track();
}
