document.addEventListener("DOMContentLoaded", () => {

const emoji = document.getElementById("emoji");

function criarCoracao(){

    const heart = document.createElement("div");
    heart.classList.add("heart");

    const coracoes = [
        "❤️","♥️","❣️",
        "💖","💗","💘","💕","💞","💗","💓","💝",
        "🤍"
    ];

    heart.innerHTML = coracoes[Math.floor(Math.random()*coracoes.length)];

    const rect = emoji.getBoundingClientRect();

    heart.style.left = rect.left + rect.width/2 + "px";
    heart.style.top = rect.top + rect.height/2 + "px";

    heart.style.fontSize = (Math.random()*20 + 16) + "px";

    const x = (Math.random()*1000 - 500) + "px";

    heart.style.setProperty("--x", x);

    heart.style.animationDuration = (Math.random()*4 + 6) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    }, 9000);
}


let intervalo = setInterval(criarCoracao, 140);

setTimeout(()=>{
    clearInterval(intervalo);
}, 15000);



const musica = document.getElementById("musica");
const botao = document.getElementById("btnMusica");

musica.volume = 0.3;

botao.addEventListener("click", () => {

    if(musica.paused){

        musica.play();
        botao.innerHTML = "⏸️";

    }else{

        musica.pause();
        botao.innerHTML = "▶️";

    }

});

});