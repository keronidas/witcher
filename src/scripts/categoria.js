
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
        window.location.href='./gerald.html';
    });
    personaje2.addEventListener('mouseover', () => {
        texto.innerHTML = "Princesa Cirilla de Cintra";
    });
    personaje2.addEventListener('click', () => {
        window.location.href='./ciri.html';
    });
    personaje3.addEventListener('mouseover', () => {
        texto.innerHTML = "Yennefer de Vengerberg";
    });
    personaje3.addEventListener('click', () => {
        window.location.href='./yennefer.html';
    });
    personaje4.addEventListener('mouseover', () => {
        texto.innerHTML = "Jaskier de Lettenhove";
    });
    personaje4.addEventListener('click', () => {
        window.location.href='./jaskier.html';
    });
    personaje5.addEventListener('mouseover', () => {
        texto.innerHTML = "Emir var Emreis";
    });
    personaje5.addEventListener('click', () => {
        window.location.href='./emir.html';
    });
});