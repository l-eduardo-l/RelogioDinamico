// pega o id da tag no html
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let datetoday = new Date(); // Pega a hora atual do computador 

// pegar a hora da data de hoja 
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let sec = datetoday.getSeconds();

// Adiciona um '0' se o número exibido for menor que '10'
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = "0" + sec;

// muda o texto do html 
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})