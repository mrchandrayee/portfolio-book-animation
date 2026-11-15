/*
  Portfolio Book Animation
  Edit this data object to personalize the portfolio content.
*/
const portfolio = {
  name: "Nilesh Mhatre",
  role: "UI/UX Designer · Web Developer · Technology Consultant",
  intro: "Crafting intuitive digital experiences, scalable web apps & strategic technology consulting.",
  email: "hello@example.com",
  phone: "+91 00000 00000",
  location: "Mumbai, Maharashtra, India",
  about: "I'm a UI/UX Designer, Web Developer, and Technology Consultant focused on creating intuitive, high-performing digital experiences that help businesses grow with fewer user obstacles.",
  stats: [["375+", "Projects Done"], ["15+", "Years Exp."], ["115+", "Happy Clients"]],
  philosophy: "Design starts with empathy, development powers it, and technology makes it scale.",
  values: [
    ["✦", "Strategic Leadership", "Aligning technology investments with long-term business goals."],
    ["✧", "Cross-Functional Teamwork", "Connecting product and design teams to deliver excellence."]
  ],
  skills: [
    ["UI/UX Design & Prototyping", 94],
    ["Full-Stack Development", 92],
    ["Project Management & Strategy", 96],
    ["Mobile App & Database Design", 88]
  ],
  experience: [
    ["2018 — 2024", "Project Manager", "FutureTech Solutions Pvt. Ltd."],
    ["2015 — 2018", "UI Design & Developer", "WebWorks Creative Group"],
    ["2012 — 2015", "Web Developer", "Pixel & Code Technologies"],
    ["2009 — 2012", "Web Designer Officer", "Times Group Digital"]
  ],
  projects: [
    ["Elemental Branding", "Branding", "Comprehensive brand identity design focusing on a minimal aesthetic and sustainable business practices."],
    ["Digital Workspace", "Web App", "Modern web application designed for intuitive collaboration with intuitive user experience and clean aesthetics."],
    ["Urban Narratives", "Photography", "Street photography series capturing the essence of metropolitan life and human connections."],
    ["Sustainable Commerce", "E-commerce", "Eco-conscious e-commerce platform design promoting sustainable products with seamless shopping."]
  ]
};

const spreads = [
  {
    left: { meta:["CONTENTS","INDEX"], body:`
      <div class="page-content">
        <h3>Table of Contents</h3>
        <ul class="toc-list">
          <li><span class="toc-icon">♟</span>01. About Nilesh & Philosophy<small>Page 1</small></li>
          <li><span class="toc-icon">✣</span>02. Skills & Core Expertise<small>Page 2</small></li>
          <li><span class="toc-icon">▣</span>03. Professional Experience<small>Page 3</small></li>
          <li><span class="toc-icon">◈</span>04. Selected Portfolio Projects<small>Page 4</small></li>
          <li><span class="toc-icon">✉</span>05. Services & Contact<small>Page 5</small></li>
        </ul>
      </div>` },
    right: { meta:["SECTION 01","ABOUT ME"], body:`
      <div class="page-content">
        <div class="profile-row"><div class="avatar">NM</div><div><h4>${portfolio.name}</h4><small>UI/UX & Tech Consultant</small><small>✦ Mumbai, India</small></div></div>
        <p>${portfolio.about}</p>
        <div class="stats">${portfolio.stats.map(s=>`<div class="stat"><strong>${s[0]}</strong><span>${s[1]}</span></div>`).join("")}</div>
      </div>` }
  },
  {
    left: { meta:["PHILOSOPHY","CORE VALUES"], body:`
      <div class="page-content">
        <div class="callout"><strong>❝ DESIGN PHILOSOPHY</strong><p>“${portfolio.philosophy}”</p></div>
        ${portfolio.values.map(v=>`<div class="value-row"><div class="value-icon">${v[0]}</div><div><strong>${v[1]}</strong><span>${v[2]}</span></div></div>`).join("")}
      </div>` },
    right: { meta:["SECTION 02","EXPERTISE"], body:`
      <div class="page-content"><h4>Core Competencies</h4>
      ${portfolio.skills.map(s=>`<div class="skill"><div class="skill-head"><span>${s[0]}</span><b>${s[1]}%</b></div><div class="skill-track"><div class="skill-fill" style="width:${s[1]}%"></div></div></div>`).join("")}
      </div>` }
  },
  {
    left: { meta:["SECTION 03","EXPERIENCE (1/2)"], body:`
      <div class="page-content"><h4>Background</h4><div class="timeline">
      ${portfolio.experience.map(e=>`<div class="timeline-item"><small>${e[0]}</small><strong>${e[1]}</strong><span>${e[2]}</span></div>`).join("")}
      </div></div>` },
    right: { meta:["SECTION 04","PROJECTS (1/2)"], body:`
      <div class="page-content"><h4>Featured Work</h4>
      ${portfolio.projects.slice(0,2).map(p=>`<div class="project"><div class="project-top"><h4>✦ ${p[0]}</h4><span class="tag">${p[1]}</span></div><p>${p[2]}</p><a href="#contact">Explore Project</a></div>`).join("")}
      </div>` }
  },
  {
    left: { meta:["SECTION 04","PROJECTS (2/2)"], body:`
      <div class="page-content"><h4>More Case Studies</h4>
      ${portfolio.projects.slice(2).map(p=>`<div class="project"><div class="project-top"><h4>✦ ${p[0]}</h4><span class="tag">${p[1]}</span></div><p>${p[2]}</p><a href="#contact">View Details</a></div>`).join("")}
      </div>` },
    right: { meta:["SECTION 05","GET IN TOUCH"], body:`
      <div class="page-content" id="contact"><h3>Let's Connect</h3><p>Let's connect to design, build, and create intuitive digital solutions that align with your business goals and deliver measurable results.</p>
      <div class="contact-list">
        <div class="contact-item"><b>✉</b><span>EMAIL<br>${portfolio.email}</span></div>
        <div class="contact-item"><b>☎</b><span>CALL US<br>${portfolio.phone}</span></div>
        <div class="contact-item"><b>⌖</b><span>LOCATION<br>${portfolio.location}</span></div>
      </div></div>` }
  }
];

const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");
const spread = document.getElementById("bookSpread");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicator = document.getElementById("pageIndicator");
const hint = document.getElementById("hint");
let current = -1; // -1 is the front cover

function pageMarkup(page, number, extraClass="") {
  return `<div class="page-meta"><span>${page.meta?.[0] || ""}</span><span>${page.meta?.[1] || ""}</span></div>
    <div class="page-content ${extraClass}">${page.body || ""}</div>
    <div class="page-number">${String(number).padStart(2,"0")}</div>`;
}

function renderCover() {
  leftPage.innerHTML = `<div class="page-meta"></div><div class="page-number"></div>`;
  rightPage.innerHTML = `<div class="cover-topline"><span>EST. MUMBAI</span><span>PORTFOLIO 2026</span></div>
    <div class="page-content cover-page"><div class="cover-icon">▣</div><h3>${portfolio.name.toUpperCase()}</h3><div class="cover-rule"></div>
    <p>${portfolio.intro}</p><button class="open-btn" id="openBook">Open Portfolio Book&nbsp; →</button>
    <p class="cover-hint">Click page edges or drag to flip</p></div>`;
  document.getElementById("openBook").addEventListener("click",()=>go(0,"next"));
}

function renderSpread() {
  const data = spreads[current];
  leftPage.innerHTML = pageMarkup(data.left,current*2+2);
  rightPage.innerHTML = pageMarkup(data.right,current*2+3);
}

function updateControls() {
  prevBtn.disabled = current < 0;
  nextBtn.disabled = current >= spreads.length-1;
  indicator.textContent = current < 0 ? "Cover" : `Page ${current+1} of ${spreads.length}`;
  hint.textContent = current < 0 ? "Open the book to explore the portfolio" : "Use Previous / Next, keyboard arrows or swipe to turn pages";
}

function go(nextIndex,direction="next") {
  const target=Math.max(-1,Math.min(spreads.length-1,nextIndex));
  if(target===current)return;
  spread.classList.remove("turn-next","turn-prev");
  void spread.offsetWidth;
  spread.classList.add(direction==="next"?"turn-next":"turn-prev");
  current=target;
  if(current<0)renderCover(); else renderSpread();
  updateControls();
  window.setTimeout(()=>spread.classList.remove("turn-next","turn-prev"),560);
}
prevBtn.addEventListener("click",()=>go(current-1,"prev"));
nextBtn.addEventListener("click",()=>go(current+1,"next"));
document.addEventListener("keydown",event=>{
  if(event.key==="ArrowRight"){event.preventDefault();go(current+1,"next")}
  if(event.key==="ArrowLeft"){event.preventDefault();go(current-1,"prev")}
});
let touchStartX=0;
document.getElementById("bookScene").addEventListener("touchstart",e=>{touchStartX=e.changedTouches[0].clientX},{passive:true});
document.getElementById("bookScene").addEventListener("touchend",e=>{
  const dx=e.changedTouches[0].clientX-touchStartX;
  if(Math.abs(dx)>45)go(current+(dx<0?1:-1),dx<0?"next":"prev");
},{passive:true});
renderCover();
updateControls();
