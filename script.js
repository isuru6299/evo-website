const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 24), {passive:true});

menuBtn?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});

document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12, rootMargin:'0px 0px -40px 0px'});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* Hero concept: Smart Living x Industrial Automation */
const hero = document.querySelector('.hero');
if(hero){
  hero.innerHTML = `
    <div class="evo-hero-media" aria-hidden="true"></div>
    <div class="evo-hero-overlay" aria-hidden="true"></div>
    <div class="evo-hero-grid" aria-hidden="true"></div>
    <div class="evo-hero-scan" aria-hidden="true"></div>
    <div class="evo-rings" aria-hidden="true">
      <span class="evo-ring ring-one"></span>
      <span class="evo-ring ring-two"></span>
      <span class="evo-ring ring-three"></span>
    </div>

    <div class="shell evo-hero-layout">
      <div class="evo-hero-copy">
        <div class="eyebrow"><span></span> Sri Lanka · Engineering & Smart Systems</div>
        <h1>Where Smart Living Meets<br><em>Industrial Automation</em></h1>
        <p>EVO brings together industrial-grade engineering, intelligent control, and elegant smart living experiences for homes, buildings, and technical spaces.</p>
        <div class="hero-actions">
          <a class="btn btn-orange" href="#projects">Explore our work <span>↘</span></a>
          <a class="btn btn-ghost" href="#contact">Talk to EVO</a>
        </div>
        <div class="evo-hero-meta">
          <div><strong>Industrial Automation</strong><span>PLC, HMI, sensors, controls and machine logic.</span></div>
          <div><strong>Smart Living</strong><span>Lighting, curtains, HVAC, scenes and intelligent control.</span></div>
          <div><strong>One Integrated Flow</strong><span>Design, build, commission and long-term support.</span></div>
        </div>
      </div>

      <div class="evo-hero-stage">
        <div class="evo-console">
          <div class="evo-console-head">
            <div><small>Unified automation experience</small><h3>Integrated Control</h3></div>
            <span class="evo-status">INTEGRATED</span>
          </div>

          <div class="evo-orbit-zone">
            <span class="evo-orbit orbit-a"></span>
            <span class="evo-orbit orbit-b"></span>
            <span class="evo-orbit orbit-c"></span>
            <div class="evo-core">EVO</div>
            <div class="evo-node node-light"><small>Lighting</small><b>Scenes</b></div>
            <div class="evo-node node-hvac"><small>Climate</small><b>HVAC</b></div>
            <div class="evo-node node-plc"><small>Control</small><b>PLC / HMI</b></div>
            <div class="evo-node node-curtain"><small>Comfort</small><b>Curtains</b></div>
          </div>

          <div class="evo-console-bottom">
            <div><small>Factory floor</small><b>Industrial logic</b></div>
            <div><small>Modern spaces</small><b>Smart experience</b></div>
            <div><small>EVO approach</small><b>Design → Commission</b></div>
          </div>
        </div>

        <div class="evo-float float-one"><span class="pulse"></span><div><b>Industrial Core</b><small>Reliable automation architecture</small></div></div>
        <div class="evo-float float-two"><span class="evo-float-icon">⌂</span><div><b>Smart Living</b><small>Comfort, scenes and connected control</small></div></div>
        <div class="evo-float float-three"><span class="evo-float-icon">⌁</span><div><b>One EVO Flow</b><small>Engineering precision + premium experience</small></div></div>
      </div>
    </div>

    <div class="scroll-note"><span></span> SCROLL TO EXPLORE</div>
  `;

  const heroStyle = document.createElement('style');
  heroStyle.id = 'evo-hero-v2';
  heroStyle.textContent = `
    .hero{min-height:920px;background:#080a0d;color:#fff;position:relative;overflow:hidden;padding-top:82px}
    .evo-hero-media{position:absolute;inset:-5%;background:url("assets/roofing.webp") center/cover no-repeat;filter:saturate(.82) contrast(1.08);animation:evoHeroZoom 22s ease-in-out infinite alternate}
    .evo-hero-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,7,10,.97) 0%,rgba(7,10,14,.91) 36%,rgba(6,10,15,.63) 63%,rgba(5,7,10,.30) 100%),linear-gradient(180deg,rgba(4,6,9,.10),rgba(4,6,9,.56))}
    .evo-hero-grid{position:absolute;inset:0;opacity:.14;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:64px 64px;mask-image:linear-gradient(90deg,#000 0%,rgba(0,0,0,.58) 58%,transparent 100%)}
    .evo-hero-scan{position:absolute;left:0;right:0;height:180px;top:-220px;background:linear-gradient(180deg,transparent,rgba(93,173,255,.055),transparent);animation:evoScan 9s linear infinite;pointer-events:none}
    .evo-rings{position:absolute;inset:0;pointer-events:none}.evo-ring{position:absolute;border-radius:50%;border:1px solid rgba(255,255,255,.10);box-shadow:0 0 0 28px rgba(255,255,255,.014),0 0 0 56px rgba(255,255,255,.009)}
    .ring-one{width:420px;height:420px;right:7%;top:145px;animation:evoRing 28s linear infinite}.ring-two{width:260px;height:260px;right:16%;top:225px;border-style:dashed;border-color:rgba(255,138,31,.38);animation:evoRingReverse 18s linear infinite}.ring-three{width:170px;height:170px;right:21%;top:270px;border-color:rgba(160,210,255,.28);animation:evoRingPulse 6.5s ease-in-out infinite}
    .evo-hero-layout{min-height:790px;display:grid;grid-template-columns:1.05fr .95fr;gap:54px;align-items:center;position:relative;z-index:2}
    .evo-hero-copy{animation:evoIn .9s cubic-bezier(.2,.75,.25,1) both}.evo-hero-copy h1{font-size:clamp(56px,6.6vw,102px);line-height:.9;letter-spacing:-.064em;margin:24px 0;max-width:790px;font-weight:820}.evo-hero-copy h1 em{font-style:normal;color:var(--orange)}.evo-hero-copy>p{max-width:680px;font-size:18px;color:#c7ccd2;margin:0 0 33px}
    .evo-hero-meta{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:50px;padding-top:23px;border-top:1px solid rgba(255,255,255,.12)}.evo-hero-meta strong{display:block;font-size:12px}.evo-hero-meta span{display:block;margin-top:5px;color:#98a0aa;font-size:11px;line-height:1.5}
    .evo-hero-stage{position:relative;min-height:620px;display:flex;align-items:center;justify-content:center;animation:evoIn .9s .12s cubic-bezier(.2,.75,.25,1) both}
    .evo-console{width:min(100%,540px);padding:24px;border-radius:34px;border:1px solid rgba(255,255,255,.12);background:linear-gradient(145deg,rgba(15,19,24,.80),rgba(7,10,14,.58));backdrop-filter:blur(24px);box-shadow:0 42px 120px rgba(0,0,0,.44);position:relative;overflow:hidden}.evo-console:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 84% 18%,rgba(255,138,31,.18),transparent 24%),radial-gradient(circle at 20% 82%,rgba(104,169,255,.14),transparent 27%);pointer-events:none}
    .evo-console-head{position:relative;z-index:2;display:flex;align-items:flex-start;justify-content:space-between;gap:15px}.evo-console-head small{display:block;color:#969ea8;font-size:10px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:6px}.evo-console-head h3{margin:0;font-size:28px;letter-spacing:-.04em}.evo-status{display:inline-flex;align-items:center;gap:7px;padding:9px 12px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);font-size:9px;font-weight:850;letter-spacing:.11em}.evo-status:before{content:"";width:8px;height:8px;border-radius:50%;background:#70d87a;box-shadow:0 0 0 6px rgba(112,216,122,.11)}
    .evo-orbit-zone{height:340px;position:relative;display:grid;place-items:center;margin:16px 0}.evo-core{width:128px;height:128px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 30% 30%,#ffbb70,#ff8a1f 62%,#a95008);box-shadow:0 0 0 14px rgba(255,138,31,.10),0 0 45px rgba(255,138,31,.24);position:relative;z-index:3;font-size:30px;font-weight:950;letter-spacing:-.06em;color:#111}.evo-orbit{position:absolute;left:50%;top:50%;border-radius:50%;border:1px solid rgba(255,255,255,.12);transform:translate(-50%,-50%)}.orbit-a{width:210px;height:210px;animation:evoOrbit 18s linear infinite}.orbit-b{width:290px;height:290px;border-style:dashed;animation:evoOrbitReverse 22s linear infinite}.orbit-c{width:360px;height:360px;border-color:rgba(168,215,255,.24);animation:evoOrbitPulse 7s ease-in-out infinite}
    .evo-node{position:absolute;z-index:4;min-width:112px;padding:12px 14px;border-radius:18px;background:rgba(255,255,255,.075);border:1px solid rgba(255,255,255,.11);backdrop-filter:blur(14px);box-shadow:0 18px 40px rgba(0,0,0,.18)}.evo-node small{display:block;color:#969ea8;font-size:9px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:4px}.evo-node b{font-size:13px}.node-light{left:2%;top:17%}.node-hvac{right:0;top:22%}.node-plc{right:7%;bottom:12%}.node-curtain{left:6%;bottom:14%}
    .evo-console-bottom{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.evo-console-bottom>div{padding:13px 14px;border-radius:17px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)}.evo-console-bottom small{display:block;color:#8e97a0;font-size:9px;text-transform:uppercase;letter-spacing:.10em;margin-bottom:5px}.evo-console-bottom b{font-size:12px;line-height:1.35}
    .evo-float{position:absolute;z-index:5;display:flex;gap:12px;align-items:center;padding:14px 17px;border:1px solid rgba(255,255,255,.13);background:rgba(18,21,25,.82);backdrop-filter:blur(18px);border-radius:16px;box-shadow:0 18px 45px rgba(0,0,0,.28)}.evo-float b{display:block;font-size:12px}.evo-float small{display:block;font-size:10px;color:#8f969e;margin-top:2px}.evo-float-icon{display:grid;place-items:center;width:28px;height:28px;border-radius:9px;background:var(--orange);color:#111;font-weight:900}.float-one{top:32px;right:-4px}.float-two{left:-38px;top:250px}.float-three{bottom:28px;left:-8px}
    @keyframes evoHeroZoom{from{transform:scale(1.02) translate3d(0,0,0)}to{transform:scale(1.10) translate3d(-10px,-12px,0)}}@keyframes evoScan{0%{transform:translateY(0)}100%{transform:translateY(1180px)}}@keyframes evoRing{to{transform:rotate(360deg)}}@keyframes evoRingReverse{to{transform:rotate(-360deg)}}@keyframes evoRingPulse{50%{transform:scale(1.07);opacity:.75}}@keyframes evoOrbit{from{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(360deg)}}@keyframes evoOrbitReverse{from{transform:translate(-50%,-50%) rotate(360deg)}to{transform:translate(-50%,-50%) rotate(0)}}@keyframes evoOrbitPulse{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.55}50%{transform:translate(-50%,-50%) scale(1.06);opacity:1}}@keyframes evoIn{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
    @media(max-width:1020px){.evo-hero-layout{grid-template-columns:1fr;padding:76px 0 86px}.evo-hero-stage{min-height:560px}.evo-console{max-width:680px}.float-two{left:0}.evo-hero-meta{max-width:760px}}
    @media(max-width:680px){.hero{min-height:auto}.evo-hero-layout{min-height:0;padding-top:56px}.evo-hero-copy h1{font-size:clamp(48px,15vw,72px)}.evo-hero-copy>p{font-size:16px}.evo-hero-meta{grid-template-columns:1fr;gap:10px}.evo-hero-stage{min-height:530px;margin-top:12px}.evo-console{padding:18px 15px;border-radius:28px}.evo-console-head h3{font-size:23px}.evo-orbit-zone{height:300px}.orbit-c{width:305px;height:305px}.evo-node{min-width:94px;padding:10px 11px}.evo-node b{font-size:11px}.evo-console-bottom{grid-template-columns:1fr}.float-one{right:0;top:12px}.float-two{left:0;top:208px}.float-three{left:0;bottom:16px}.scroll-note{display:none}}
  `;
  document.head.appendChild(heroStyle);
}
