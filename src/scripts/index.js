
const textoCambiante1 = document.getElementById('texto-cambiante1');
const textoCambiante2 = document.getElementById('texto-cambiante2');
const textoCambiante3 = document.getElementById('texto-cambiante3');
const cuadroContenido = document.getElementById('cuadro-contenido');



cuadroContenido.addEventListener('mouseover', () => {
    textoCambiante1.innerHTML = 'The Witcher';
    textoCambiante2.innerHTML = 'La';
    textoCambiante3.innerHTML = ' Serie';


});

cuadroContenido.addEventListener('mouseleave', () => {
    textoCambiante1.innerHTML = '&#5813;&#5844;&#5812;&#5821;&#5806;&#5848;&#5824; &#5828;&#5857;&#5812;&#5822;';
    textoCambiante2.innerHTML = '&#5838;&#5829;&#5837;&#5849;&#5819;';
    textoCambiante3.innerHTML = '&#5804;&#5841;&#5826;&#5827;&#5829;&#5842;&#5841;';
});

cuadroContenido.addEventListener('click', () => {
    window.location.href='presentacion.html';
});