(function(){
  'use strict';
  var cfg = window.WG_CONFIG || {};
  var $ = function(s,c){return (c||document).querySelector(s)};
  var $$ = function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};

  /* ---------- WhatsApp: todos os [data-wa] ---------- */
  function waLink(key){
    var msg = (cfg.messages && (cfg.messages[key] || cfg.messages.geral)) || '';
    return 'https://wa.me/' + cfg.whatsappNumber + '?text=' + encodeURIComponent(msg);
  }
  $$('[data-wa]').forEach(function(a){ a.href = waLink(a.getAttribute('data-wa')); });

  var ano = $('#ano'); if(ano) ano.textContent = new Date().getFullYear();

  /* ---------- Imagens ausentes (caso o erro ocorra antes do onerror inline) ---------- */
  $$('.ph img').forEach(function(img){
    if(img.complete && img.naturalWidth === 0) img.parentNode.classList.add('is-missing');
  });

  /* ---------- Header + menu mobile ---------- */
  var header = $('.header'), burger = $('.burger'), nav = $('#menu');
  function onScroll(){ header.classList.toggle('is-solid', window.scrollY > 40); }
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  function setMenu(open){
    nav.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    burger.firstElementChild.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }
  burger.addEventListener('click', function(){ setMenu(!nav.classList.contains('is-open')); });
  nav.addEventListener('click', function(e){ if(e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && nav.classList.contains('is-open')){ setMenu(false); burger.focus(); }
  });
  /* nav mobile fechada não deve receber foco */
  var mq = window.matchMedia('(max-width:820px)');
  function syncInert(){ if(mq.matches && !nav.classList.contains('is-open')) nav.setAttribute('inert',''); else nav.removeAttribute('inert'); }
  new MutationObserver(syncInert).observe(nav,{attributes:true,attributeFilter:['class']});
  (mq.addEventListener ? mq.addEventListener('change',syncInert) : mq.addListener(syncInert)); syncInert();

  /* ---------- Link ativo no menu ---------- */
  if('IntersectionObserver' in window){
    var links = $$('.nav a[href^="#"]:not(.btn)');
    var io = new IntersectionObserver(function(es){
      es.forEach(function(en){
        if(en.isIntersecting){
          links.forEach(function(l){ l.classList.toggle('is-active', l.getAttribute('href') === '#'+en.target.id); });
        }
      });
    },{rootMargin:'-45% 0px -50% 0px'});
    ['inicio','produtos','marca','galeria','contato'].forEach(function(id){ var s=document.getElementById(id); if(s) io.observe(s); });
  }

  /* ---------- Barra WhatsApp mobile some perto do CTA final/footer ---------- */
  var bar = $('.wa-bar'), cta = $('#contato');
  if(bar && cta && 'IntersectionObserver' in window){
    new IntersectionObserver(function(es){ bar.classList.toggle('is-hidden', es[0].isIntersecting); },{threshold:.25}).observe(cta);
    var ft = $('.footer');
    new IntersectionObserver(function(es){ if(es[0].isIntersecting) bar.classList.add('is-hidden'); },{threshold:0}).observe(ft);
  }

  /* ---------- GSAP (opcional: o conteúdo é visível sem ele) ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  function initMotion(){
    if(reduce || !window.gsap || !window.ScrollTrigger) return;
    var root = document.documentElement;
    root.classList.add('has-motion');
    gsap.registerPlugin(ScrollTrigger);
    var ctx = gsap.context(function(){
      var tl = gsap.timeline({defaults:{ease:'power3.out'}});
      tl.fromTo('[data-hero]',{opacity:0,y:28},{opacity:1,y:0,duration:.9,stagger:.12})
        .fromTo('[data-hero-img]',{opacity:0,scale:1.04},{opacity:1,scale:1,duration:1.2},0.1);

      ScrollTrigger.batch('[data-reveal]',{
        start:'top 88%', once:true,
        onEnter:function(b){ gsap.fromTo(b,{opacity:0,y:32},{opacity:1,y:0,duration:.8,ease:'power3.out',stagger:.1,overwrite:true}); }
      });

      /* parallax leve só em telas largas com mouse */
      ScrollTrigger.matchMedia && ScrollTrigger.matchMedia({
        '(min-width: 1025px) and (hover:hover)':function(){
          $$('.feat__main img, .hero__img img').forEach(function(img){
            gsap.fromTo(img,{yPercent:-5},{yPercent:5,ease:'none',scrollTrigger:{trigger:img.parentNode,start:'top bottom',end:'bottom top',scrub:true}});
          });
        }
      });
    });
    /* segurança: nada fica invisível se algo falhar */
    setTimeout(function(){
      $$('[data-reveal],[data-hero],[data-hero-img]').forEach(function(el){
        if(getComputedStyle(el).opacity === '0' && el.getBoundingClientRect().top < window.innerHeight) el.style.opacity = 1;
      });
    },3500);
    window.addEventListener('pagehide', function(){ ctx.revert(); });
  }
  if(document.readyState === 'complete') initMotion(); else window.addEventListener('load', initMotion);
})();
