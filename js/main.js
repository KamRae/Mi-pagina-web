
const translations = {
  es: {
    nav_home:"Inicio", nav_about:"Sobre mí", nav_projects:"Proyectos", nav_skills:"Habilidades", nav_experience:"Experiencia", nav_contact:"Contacto",
    hero_eyebrow:"DATA • PEOPLE • IMPACT", hero_hello:"Hola, soy",
    hero_title:"Ingeniero en Ciencia de Datos | Data Science & Artificial Intelligence",
    hero_text:"Transformo datos en decisiones, modelos y soluciones inteligentes con una visión técnica y de negocio.",
    cta_projects:"Ver mis proyectos", cta_contact:"Contáctame", coming_soon:"próximamente",
    hero_quote:"“Better Decisions. A Brighter Tomorrow.”",
    stat_exp:"años de experiencia profesional", stat_projects:"proyectos objetivo", stat_bilingual:"portafolio bilingüe", stat_learning:"aprendizaje continuo",
    about_eyebrow:"PERFIL", about_title:"Sobre mí",
    about_p1:"Ingeniero en Ciencia de Datos con interés en resolver problemas reales mediante análisis, inteligencia artificial y visualización.",
    about_p2:"Combino experiencia en coordinación de servicio global, gestión de stakeholders, operaciones y toma de decisiones con un enfoque técnico en datos.",
    skills_eyebrow:"STACK", skills_title:"Habilidades y tecnologías", skills_text:"Herramientas para analizar, modelar, visualizar y transformar datos en valor.",
    projects_eyebrow:"FEATURED WORK", projects_title:"Proyectos destacados", projects_text:"Cada proyecto contará el problema, los datos, el modelo, las métricas y el impacto.",
    p1_title:"Predicción de precios de vivienda", p1_text:"Modelo de regresión y red neuronal para estimar el valor de propiedades.",
    p2_title:"Crime Data Analytics", p2_text:"Análisis exploratorio de patrones temporales y geográficos con datos reales.",
    p3_title:"Dashboard de operaciones", p3_text:"KPIs, modelo estrella y DAX para seguimiento y toma de decisiones.",
    p4_title:"Proyecto de IA Generativa", p4_text:"Aplicación práctica con LLM/NLP orientada a resolver un problema concreto.",
    view_case:"Ver case study →", exp_eyebrow:"JOURNEY", exp_title:"Experiencia profesional", exp_now:"Actualidad",
    exp_text1:"Coordinación de iniciativas, stakeholders, operación global, seguimiento de objetivos, análisis y resolución de problemas.",
    ongoing:"en curso", degree:"Ingeniería en Ciencia de Datos", contact_eyebrow:"LET'S CONNECT", contact_title:"Construyamos algo con datos",
    contact_text:"¿Buscas un perfil que combine análisis, IA, visión de negocio y coordinación? Conectemos.", email_btn:"Enviar correo"
  },
  en: {
    nav_home:"Home", nav_about:"About", nav_projects:"Projects", nav_skills:"Skills", nav_experience:"Experience", nav_contact:"Contact",
    hero_eyebrow:"DATA • PEOPLE • IMPACT", hero_hello:"Hi, I’m",
    hero_title:"Data Science Engineer | Data Science & Artificial Intelligence",
    hero_text:"I turn data into decisions, models and intelligent solutions with both technical and business perspective.",
    cta_projects:"View my projects", cta_contact:"Contact me", coming_soon:"coming soon",
    hero_quote:"“Better Decisions. A Brighter Tomorrow.”",
    stat_exp:"years of professional experience", stat_projects:"target portfolio projects", stat_bilingual:"bilingual portfolio", stat_learning:"continuous learning",
    about_eyebrow:"PROFILE", about_title:"About me",
    about_p1:"Data Science Engineer focused on solving real problems through analytics, artificial intelligence and visualization.",
    about_p2:"I combine global service coordination, stakeholder management, operations and decision-making experience with a technical data mindset.",
    skills_eyebrow:"STACK", skills_title:"Skills & technologies", skills_text:"Tools to analyze, model, visualize and transform data into value.",
    projects_eyebrow:"FEATURED WORK", projects_title:"Featured projects", projects_text:"Each project will explain the problem, data, model, metrics and impact.",
    p1_title:"House price prediction", p1_text:"Regression and neural network model to estimate property values.",
    p2_title:"Crime Data Analytics", p2_text:"Exploratory analysis of temporal and geographic patterns using real-world data.",
    p3_title:"Operations dashboard", p3_text:"KPIs, star schema and DAX for monitoring and decision support.",
    p4_title:"Generative AI project", p4_text:"Practical LLM/NLP application focused on a concrete problem.",
    view_case:"View case study →", exp_eyebrow:"JOURNEY", exp_title:"Professional experience", exp_now:"Present",
    exp_text1:"Coordination of initiatives, stakeholders, global operations, goal tracking, analysis and problem solving.",
    ongoing:"ongoing", degree:"Data Science Engineering", contact_eyebrow:"LET'S CONNECT", contact_title:"Let’s build something with data",
    contact_text:"Looking for a profile that combines analytics, AI, business perspective and coordination? Let’s connect.", email_btn:"Send email"
  }
};

function setLanguage(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));
  localStorage.setItem("portfolio-lang", lang);
}
document.querySelectorAll(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem("portfolio-lang") || "es");

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click",()=>mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mainNav.classList.remove("open")));

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
