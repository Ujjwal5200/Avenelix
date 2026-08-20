(()=>{
'use strict';
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse=window.matchMedia('(pointer: coarse)').matches;
const gs=window.gsap;
const Locomotive=window.LocomotiveScroll;
const root=document.getElementById('scrollRoot');
const header=document.getElementById('siteHeader');
const orbit=document.getElementById('orbitVisual');
const shell=document.getElementById('orbitShell');
const core=document.getElementById('orbitCore');
const pulse=document.getElementById('corePulse');
const transition=document.querySelector('.page-transition');
const preloader=document.getElementById('preloader');
const prePercent=document.getElementById('preloaderPercent');
const preMeter=preloader?.querySelector('.preloader-meter span');
const preStatus=preloader?.querySelector('.preloader-meta span');
const rings=[...document.querySelectorAll('.orbit-ring')];
const nodes=[...document.querySelectorAll('.orbit-node')];
let loco=null;
let scrollY=0;
let pageReady=false;

function showContent(){
  document.querySelectorAll('.kicker,.title,.desc,.actions,.micro,.label,.section-title,.section-body,.principle,.list li,.contact').forEach(el=>{
    el.style.opacity='1';el.style.transform='none';el.style.filter='none';
  });
}

function initPreloader(){
  if(!preloader)return;
  if(reduce){preloader.remove();return;}
  document.body.classList.add('preloading');
  const start=performance.now();
  const duration=1850;
  let finished=false;
  const phases=[['CALIBRATING',0],['CONNECTING',.27],['RENDERING',.58],['READY',.86]];
  function finish(){
    if(finished)return;
    finished=true;
    if(prePercent)prePercent.textContent='100';
    if(preMeter)preMeter.style.width='100%';
    if(preStatus)preStatus.textContent='READY';
    setTimeout(()=>{
      preloader.classList.add('is-exiting');
      document.body.classList.remove('preloading');
      setTimeout(()=>preloader.remove(),1150);
    },180);
  }
  function tick(now){
    if(finished)return;
    const progress=Math.min((now-start)/duration,1);
    const eased=1-Math.pow(1-progress,1.65);
    const value=Math.min(96,Math.floor(eased*96));
    if(prePercent)prePercent.textContent=String(value).padStart(3,'0');
    if(preMeter)preMeter.style.width=value+'%';
    let label='CALIBRATING';
    for(const [name,threshold] of phases)if(progress>=threshold)label=name;
    if(preStatus)preStatus.textContent=label;
    if(progress<1)requestAnimationFrame(tick);else finish();
  }
  requestAnimationFrame(tick);
  setTimeout(()=>finish(),3400);
}

function initScroll(){
  if(!root||reduce||!Locomotive)return;
  try{
    loco=new Locomotive({el:root,smooth:true,lerp:.075,multiplier:.9,getDirection:true,getSpeed:true,offset:['12%','8%'],tablet:{smooth:false},smartphone:{smooth:false}});
    loco.on('scroll',data=>{
      scrollY=data?.scroll?.y||0;
      header?.classList.toggle('scrolled',scrollY>24);
      const max=Math.max(1,root.scrollHeight-innerHeight);
      document.documentElement.style.setProperty('--scroll-progress',Math.min(scrollY/max,1).toFixed(4));
    });
  }catch(error){console.warn('Locomotive Scroll unavailable; using native scroll.',error);loco=null;}
}

function initReveals(){
  const sections=[...document.querySelectorAll('.reveal-section')];
  const reveal=section=>{
    if(section.dataset.revealed==='1')return;
    section.dataset.revealed='1';
    const items=section.querySelectorAll('.label,.section-title,.section-body,.principle,.list li,.contact');
    if(!gs||reduce){items.forEach(showContent);return;}
    gs.fromTo(items,{y:30,opacity:0,filter:'blur(5px)'},{y:0,opacity:1,filter:'blur(0)',duration:.78,stagger:.065,ease:'power3.out',clearProps:'transform,opacity,filter'});
  };
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)reveal(entry.target)}),{rootMargin:'0px 0px -12% 0px',threshold:.08});
    sections.forEach(section=>observer.observe(section));
  }else sections.forEach(reveal);
}

function splitHeadings(){
  if(!gs||reduce)return;
  document.querySelectorAll('.title,.section-title').forEach(el=>{
    if(el.dataset.split)return;
    const text=el.textContent.trim();
    el.dataset.split='1';
    el.setAttribute('aria-label',text);
    el.innerHTML=text.split(' ').map(word=>`<span class="word-wrap"><span class="word">${word}</span></span>`).join(' ');
    const words=el.querySelectorAll('.word');
    gs.fromTo(words,{yPercent:110,opacity:0},{yPercent:0,opacity:1,duration:1.05,stagger:.055,ease:'power4.out',delay:.1,clearProps:'transform,opacity'});
  });
}

function initMotion(){
  if(!gs||reduce){showContent();return;}
  try{
    const hero=[...document.querySelectorAll('.kicker,.title,.desc,.actions,.micro')];
    gs.fromTo(hero,{y:26,opacity:0,filter:'blur(5px)'},{y:0,opacity:1,filter:'blur(0)',duration:.9,stagger:.085,ease:'power4.out',clearProps:'transform,opacity,filter'});
    splitHeadings();
  }catch(error){console.warn('GSAP enhancement unavailable.',error);showContent();}
}

function initOrbital(){
  if(!gs||reduce)return;
  rings.forEach((ring,index)=>gs.to(ring,{rotation:360*(index%2?-1:1),duration:[92,118,140,108,165][index],repeat:-1,ease:'none'}));
  gs.to(core,{scale:1.055,boxShadow:'0 0 82px rgba(217,255,140,.13),inset 0 0 36px rgba(217,255,140,.06)',duration:3.4,repeat:-1,yoyo:true,ease:'sine.inOut'});
  const starts=[.4,1.7,3.05,4.35,5.45],radii=[.34,.37,.32,.36,.29],speeds=[.19,-.15,.12,-.1,.08];
  starts.forEach((start,index)=>{
    const state={a:start};
    gs.to(state,{a:start+Math.PI*2*(speeds[index]>0?1:-1),duration:Math.abs(1/speeds[index])*7,repeat:-1,ease:'none',onUpdate:()=>{
      const a=state.a,r=radii[index];
      nodes[index].style.left=50+Math.cos(a)*r*100+'%';
      nodes[index].style.top=50+Math.sin(a)*r*72+'%';
      nodes[index].style.opacity=.48+.45*(.5+.5*Math.sin(a*2));
      nodes[index].style.transform=`translate(-50%,-50%) scale(${.85+.22*(.5+.5*Math.sin(a*2))})`;
    }});
  });
  const pulseOnce=()=>{
    gs.timeline().to(pulse,{scale:2.8,opacity:.32,duration:.9,ease:'power2.out'}).to(pulse,{scale:4.5,opacity:0,duration:1.5,ease:'power2.in'});
    gs.delayedCall(11+Math.random()*8,pulseOnce);
  };
  gs.delayedCall(6.5,pulseOnce);
}

const pointer={x:innerWidth/2,y:innerHeight/2,tx:innerWidth/2,ty:innerHeight/2};
if(!coarse){
  addEventListener('pointermove',event=>{
    pointer.tx=event.clientX;pointer.ty=event.clientY;
    document.documentElement.style.setProperty('--mx',event.clientX+'px');
    document.documentElement.style.setProperty('--my',event.clientY+'px');
  },{passive:true});
}

function initCursor(){
  if(coarse||reduce)return;
  const cursor=document.createElement('div');
  cursor.className='studio-cursor';
  cursor.innerHTML='<span class="cursor-dot"></span><span class="cursor-ring"></span><span class="cursor-label"></span>';
  document.body.appendChild(cursor);
  const dot=cursor.querySelector('.cursor-dot'),ring=cursor.querySelector('.cursor-ring'),label=cursor.querySelector('.cursor-label');
  let x=pointer.x,y=pointer.y,rx=x,ry=y;
  document.querySelectorAll('a,.principle,.list li').forEach(el=>{
    el.addEventListener('mouseenter',()=>{label.textContent=el.matches('.principle,.list li')?'EXPLORE':'OPEN';cursor.classList.add('is-active');});
    el.addEventListener('mouseleave',()=>{label.textContent='';cursor.classList.remove('is-active');});
  });
  const loop=()=>{x+=(pointer.tx-x)*.24;y+=(pointer.ty-y)*.24;rx+=(x-rx)*.14;ry+=(y-ry)*.14;dot.style.transform=`translate3d(${x}px,${y}px,0)`;ring.style.transform=`translate3d(${rx}px,${ry}px,0)`;requestAnimationFrame(loop);};
  loop();document.documentElement.classList.add('has-studio-cursor');
}

function initMagnetic(){
  if(coarse||reduce)return;
  document.querySelectorAll('.btn,.contact,.brand').forEach(el=>{
    el.addEventListener('pointermove',event=>{const r=el.getBoundingClientRect(),dx=event.clientX-(r.left+r.width/2),dy=event.clientY-(r.top+r.height/2);el.style.transform=`translate3d(${dx*.12}px,${dy*.12}px,0)`;});
    el.addEventListener('pointerleave',()=>{el.style.transform='';});
  });
}

function initCards(){
  if(coarse||reduce)return;
  document.querySelectorAll('.principle').forEach(card=>{
    card.addEventListener('pointermove',event=>{const r=card.getBoundingClientRect(),x=event.clientX/r.width-r.left/r.width-.5,y=event.clientY/r.height-r.top/r.height-.5;card.style.transform=`perspective(900px) rotateX(${y*-3.5}deg) rotateY(${x*4.5}deg) translateY(-7px)`;card.style.setProperty('--card-x',`${(x+.5)*100}%`);card.style.setProperty('--card-y',`${(y+.5)*100}%`);});
    card.addEventListener('pointerleave',()=>{card.style.transform='';card.style.removeProperty('--card-x');card.style.removeProperty('--card-y');});
  });
}

function initPageTransitions(){
  document.querySelectorAll('a[href]').forEach(link=>{
    const href=link.getAttribute('href');
    if(!href||href.startsWith('#')||href.startsWith('mailto:')||href.startsWith('tel:')||link.target==='_blank')return;
    link.addEventListener('click',event=>{
      const url=new URL(href,location.href);
      if(url.origin!==location.origin)return;
      event.preventDefault();
      transition?.classList.add('is-leaving');
      setTimeout(()=>{location.href=url.href;},650);
    });
  });
}

function initParticles(){
  if(!window.THREE||reduce)return;
  try{
    const canvas=document.getElementById('scene');
    const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:false,powerPreference:'high-performance'});
    renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));
    renderer.setSize(innerWidth,innerHeight,false);
    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(38,innerWidth/innerHeight,.1,100);
    camera.position.z=6.5;
    const group=new THREE.Group();scene.add(group);
    const count=innerWidth<600?240:innerWidth<1000?500:850;
    const positions=new Float32Array(count*3),velocity=new Float32Array(count*3),phase=new Float32Array(count);
    for(let i=0;i<count;i++){const r=2.35*Math.pow(Math.random(),.52),a=Math.random()*Math.PI*2,j=i*3;positions[j]=r*Math.cos(a);positions[j+1]=r*Math.sin(a)*.72;positions[j+2]=(Math.random()-.5)*2.4;phase[i]=Math.random()*6.28;}
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
    const points=new THREE.Points(geometry,new THREE.PointsMaterial({color:0xd9ff8c,size:innerWidth<600?.014:.017,transparent:true,opacity:.2,sizeAttenuation:true,depthWrite:false}));
    group.add(points);
    let previous=performance.now(),time=0,running=true;
    function render(now){
      if(!running)return;
      const dt=Math.min(32,now-previous);previous=now;time+=dt*.001;
      for(let i=0;i<count;i++){
        const j=i*3,x=positions[j],y=positions[j+1];
        velocity[j]=(velocity[j]-y*.000018+Math.sin(time*.32+phase[i]+y)*.000012)*.996;
        velocity[j+1]=(velocity[j+1]+x*.000018+Math.cos(time*.27+phase[i]+x)*.000012)*.996;
        positions[j]+=velocity[j]*dt;positions[j+1]+=velocity[j+1]*dt;
        if(x*x+y*y>8.5){positions[j]*=.985;positions[j+1]*=.985;}
      }
      geometry.attributes.position.needsUpdate=true;
      group.rotation.y+=dt*.000045;group.rotation.x=Math.sin(now*.00022)*.018;
      renderer.render(scene,camera);
      requestAnimationFrame(render);
    }
    document.addEventListener('visibilitychange',()=>{running=!document.hidden;if(running){previous=performance.now();requestAnimationFrame(render);}});
    requestAnimationFrame(render);
    addEventListener('resize',()=>{renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();loco?.update();},{passive:true});
  }catch(error){console.warn('Three.js decorative layer disabled.',error);}
}

function visualTick(){
  visualTick.sy+=(scrollY-visualTick.sy)*.055;
  visualTick.x+=(pointer.tx-visualTick.x)*.055;
  visualTick.y+=(pointer.ty-visualTick.y)*.055;
  const max=Math.max(1,(root?.scrollHeight||document.documentElement.scrollHeight)-innerHeight);
  const progress=Math.min(visualTick.sy/max,1);
  const dx=coarse?0:(visualTick.x-innerWidth/2)/innerWidth*16;
  const dy=coarse?0:(visualTick.y-innerHeight/2)/innerHeight*10;
  if(shell)shell.style.transform=`rotateX(${progress*8}deg) rotateZ(${progress*-16}deg)`;
  if(orbit)orbit.style.transform=innerWidth<=640?`translate3d(calc(50% + ${dx}px),calc(-50% + ${dy}px),0)`:`translate3d(${dx}px,calc(-50% + ${dy}px),0)`;
  requestAnimationFrame(visualTick);
}
visualTick.sy=0;visualTick.x=innerWidth/2;visualTick.y=innerHeight/2;

function boot(){
  initPreloader();
  initScroll();
  initMotion();
  initReveals();
  initOrbital();
  initCursor();
  initMagnetic();
  initCards();
  initPageTransitions();
  initParticles();
  requestAnimationFrame(visualTick);
  if(loco&&gs){gs.ticker.add(time=>loco.raf(time*1000));gs.ticker.lagSmoothing(1000,16);}
  else if(!loco){addEventListener('scroll',()=>{scrollY=scrollY||window.scrollY||0;header?.classList.toggle('scrolled',scrollY>24);},{passive:true});}
  addEventListener('load',()=>{pageReady=true;showContent();loco?.update();if(transition&&!reduce)transition.classList.add('is-ready');});
  setTimeout(()=>{if(!pageReady){showContent();loco?.update();}},1200);
}

boot();
})();