// JavaScript para controlar el despliegue/ocultación de la sección de comentarios
const toggleCommentsBtn = document.querySelector('.toggle-comments');
const commentsSection = document.querySelector('.comments-section');
const arrowIcon = toggleCommentsBtn.querySelector('i');

toggleCommentsBtn.addEventListener('click', function () {
    commentsSection.classList.toggle('open');

    // Imprimir el valor de arrowIcon.classList
    console.log('Clases de arrowIcon:', arrowIcon.classList);

    // Cambiar la dirección del icono de flecha
    if (arrowIcon.classList.contains('fa-chevron-left')) {
        arrowIcon.classList.remove('fa-chevron-left');
        arrowIcon.classList.add('fa-chevron-right');
        console.log('LO TIENE');
    } else {
        arrowIcon.classList.remove('fa-chevron-right');
        arrowIcon.classList.add('fa-chevron-left');
        console.log('NO');

    }
});
