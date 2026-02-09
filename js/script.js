/* =====================================================
   ESPERA O HTML CARREGAR
===================================================== */
document.addEventListener("DOMContentLoaded", function(){

/* =====================================================
   CONTAGEM REGRESSIVA — 17 DE FEVEREIRO
===================================================== */
const countdown = document.getElementById("countdown");
const eventDate = new Date("Feb 17, 2026 16:30:00").getTime();

function updateCountdown(){
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div class="time-box">
      <h3>${days}</h3>
      <span>DIAS</span>
    </div>
    <div class="time-box">
      <h3>${hours}</h3>
      <span>HORAS</span>
    </div>
    <div class="time-box">
      <h3>${minutes}</h3>
      <span>MIN</span>
    </div>
    <div class="time-box">
      <h3>${seconds}</h3>
      <span>SEG</span>
    </div>
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* =====================================================
   BOTÃO HERO → INSCRIÇÃO
===================================================== */
const botaoHero = document.getElementById('btnHero');

if(botaoHero){
  botaoHero.addEventListener('click', function(){
    document.getElementById('ingressos').scrollIntoView({
      behavior: 'smooth'
    });
  });
}


/* =====================================================
   SCROLL SUAVE DO MENU
===================================================== */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href');
    const destino = document.querySelector(id);

    if(destino){
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/* =====================================================
   NAVBAR MUDA AO ROLAR
===================================================== */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if(nav){
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }
});


/* =====================================================
   ANIMAÇÃO DAS SEÇÕES (WOW)
===================================================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('section').forEach(sec => {
  sec.classList.add('hidden');
  observer.observe(sec);
});


/* =====================================================
   FORMULÁRIO — FEEDBACK BONITO
===================================================== */
const form = document.getElementById('formInscricao');
const msg = document.getElementById('msg');

if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();

    if(msg){
      msg.innerText = "Inscrição enviada com sucesso! 🌴 Nos vemos no Luau!";
      msg.style.marginTop = "15px";
      msg.style.color = "#ff7a00";
    }

    form.reset();
  });
}

});