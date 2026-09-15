const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => nav?.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

menuBtn?.addEventListener('click', () => {
  const open = navLinks?.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(Boolean(open)));
  document.body.classList.toggle('menu-open', Boolean(open));
});

document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  navLinks?.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));

/* Hero only: generated Smart Living x Industrial Automation visual */
const hero = document.querySelector('.hero');
if (hero) {
  hero.innerHTML = `
    <div class="evo-hero-media" aria-hidden="true"></div>
    <div class="evo-hero-shade" aria-hidden="true"></div>
    <div class="evo-hero-grid" aria-hidden="true"></div>
    <div class="shell evo-hero-content">
      <div class="evo-hero-copy">
        <div class="eyebrow"><span></span> Sri Lanka · Engineering & Smart Systems</div>
        <h1>Where Smart Living Meets<br><em>Industrial Automation</em></h1>
        <p>EVO brings together industrial-grade engineering, intelligent control, and elegant smart living experiences for homes, buildings, and technical spaces.</p>
        <div class="hero-actions">
          <a class="btn btn-orange" href="#projects">Explore Our Work <span>↘</span></a>
          <a class="btn btn-ghost" href="#contact">Talk to EVO</a>
        </div>
        <div class="evo-hero-tags" aria-label="EVO capabilities">
          <span>Industrial Automation</span>
          <span>Smart Home & Building Automation</span>
          <span>Custom Engineering</span>
        </div>
      </div>
    </div>
    <div class="scroll-note"><span></span> SCROLL TO EXPLORE</div>
  `;

  const style = document.createElement('style');
  style.id = 'evo-generated-hero';
  style.textContent = `
    .hero{position:relative;min-height:900px;overflow:hidden;background:#080b0f;color:#fff;padding-top:82px}
    .evo-hero-media{position:absolute;inset:-3%;background-image:url("assets/roofing.webp");background-position:center center;background-size:cover;background-repeat:no-repeat;transform:scale(1.02);filter:saturate(1.03) contrast(1.03);animation:evoHeroDrift 24s ease-in-out infinite alternate;will-change:transform}
    .evo-hero-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,7,11,.96) 0%,rgba(5,8,12,.90) 25%,rgba(5,8,12,.69) 45%,rgba(5,8,12,.34) 68%,rgba(4,7,11,.14) 100%),linear-gradient(180deg,rgba(4,7,11,.10),rgba(4,7,11,.48) 100%)}
    .evo-hero-grid{position:absolute;inset:0;opacity:.10;background-image:linear-gradient(rgba(255,255,255,.065) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.065) 1px,transparent 1px);background-size:72px 72px;mask-image:linear-gradient(90deg,#000 0%,rgba(0,0,0,.55) 58%,transparent 84%);pointer-events:none}
    .evo-hero-content{position:relative;z-index:2;min-height:818px;display:flex;align-items:center}
    .evo-hero-copy{max-width:910px;padding:64px 0 82px;animation:evoHeroIn .85s cubic-bezier(.2,.75,.25,1) both}
    .evo-hero-copy h1{font-size:clamp(57px,6.85vw,106px);line-height:.89;letter-spacing:-.064em;margin:24px 0 28px;font-weight:830;text-wrap:balance}
    .evo-hero-copy h1 em{font-style:normal;color:var(--orange)}
    .evo-hero-copy>p{max-width:720px;margin:0 0 34px;color:#d3d7dc;font-size:18px;line-height:1.6;text-shadow:0 2px 18px rgba(0,0,0,.25)}
    .evo-hero-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:48px}
    .evo-hero-tags span{padding:10px 14px;border:1px solid rgba(255,255,255,.17);background:rgba(8,12,17,.34);backdrop-filter:blur(12px);border-radius:999px;color:#dde1e6;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    .hero .btn-ghost{background:rgba(9,12,16,.32);backdrop-filter:blur(10px)}
    @keyframes evoHeroDrift{from{transform:scale(1.02) translate3d(0,0,0)}to{transform:scale(1.08) translate3d(-12px,-7px,0)}}
    @keyframes evoHeroIn{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
    @media(max-width:1020px){
      .hero{min-height:850px}.evo-hero-content{min-height:768px}.evo-hero-copy{max-width:800px}.evo-hero-media{background-position:54% center}.evo-hero-shade{background:linear-gradient(90deg,rgba(4,7,11,.96) 0%,rgba(5,8,12,.87) 36%,rgba(5,8,12,.46) 78%,rgba(4,7,11,.24) 100%),linear-gradient(180deg,rgba(4,7,11,.08),rgba(4,7,11,.52))}
    }
    @media(max-width:680px){
      .hero{min-height:790px;padding-top:72px}.evo-hero-content{min-height:718px;align-items:flex-end}.evo-hero-copy{padding:76px 0 70px}.evo-hero-copy h1{font-size:clamp(48px,14.7vw,72px);line-height:.91}.evo-hero-copy>p{font-size:16px;line-height:1.55}.evo-hero-tags{margin-top:31px;gap:7px}.evo-hero-tags span{font-size:9px;padding:8px 10px}.evo-hero-media{background-position:58% center}.evo-hero-shade{background:linear-gradient(90deg,rgba(4,7,11,.96) 0%,rgba(5,8,12,.82) 58%,rgba(5,8,12,.52) 100%),linear-gradient(180deg,rgba(4,7,11,.18),rgba(4,7,11,.63) 100%)}.scroll-note{display:none}
    }
    @media(prefers-reduced-motion:reduce){.evo-hero-media,.evo-hero-copy{animation:none}}
  `;
  document.head.appendChild(style);

  const heroParts = [
    'assets/hero1024-01.txt',
    'assets/hero1024-02.txt',
    'assets/hero1024-03.txt',
    'assets/hero1024-04.txt',
    'assets/hero1024-07.txt',
    'assets/hero1024-05.txt',
    'assets/hero1024-06.txt',
    'assets/hero1024-08a.txt',
    'assets/hero1024-08b.txt',
    'assets/hero1024-09.txt'
  ];

  Promise.all(heroParts.map(url => fetch(url, { cache: 'force-cache' }).then(r => {
    if (!r.ok) throw new Error(`Hero asset failed: ${url}`);
    return r.text();
  }))).then(parts => {
    const media = document.querySelector('.evo-hero-media');
    if (media) media.style.backgroundImage = `url("data:image/webp;base64,${parts.join('')}")`;
  }).catch(err => console.warn('EVO hero fallback image used.', err));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
