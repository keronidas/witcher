
document.addEventListener('DOMContentLoaded', () => {

  


    const personaje1 = document.getElementById("gerald")
    const personaje2 = document.getElementById("cirilla")
    const personaje3 = document.getElementById("yennefer")
    const personaje4 = document.getElementById("jaskier")
    const personaje5 = document.getElementById("emir")
    const texto = document.querySelector(".nombre-personaje")

    personaje1.addEventListener('mouseover', () => {
        texto.innerHTML = "Gerald de Rivia";
    });
    personaje1.addEventListener('click', () => {
        window.location.href='/build/pages/gerald.html';
    });
    personaje2.addEventListener('mouseover', () => {
        texto.innerHTML = "Ciri";
    });
    personaje2.addEventListener('click', () => {
        window.location.href='/build/pages/ciri.html';
    });
    personaje3.addEventListener('mouseover', () => {
        texto.innerHTML = "Yennefer";
    });
    personaje3.addEventListener('click', () => {
        window.location.href='/build/pages/yennefer.html';
    });
    personaje4.addEventListener('mouseover', () => {
        texto.innerHTML = "Jaskier";
    });
    personaje4.addEventListener('click', () => {
        window.location.href='/build/pages/jaskier.html';
    });
    personaje5.addEventListener('mouseover', () => {
        texto.innerHTML = "Cahir";
    });
    personaje5.addEventListener('click', () => {
        window.location.href='/build/pages/emir.html';
    });
});