document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.querySelector('.comment-form');
    const commentList = document.querySelector('.comment-list');
    const commentInput = document.getElementById('commentInput');

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('nameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        let commentText = commentInput.value.trim();

        // Comprobación de campos vacíos
        if (name === '' || email === '' || commentText === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Validación de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese una dirección de correo electrónico válida.');
            return;
        }

        // Creación del nuevo comentario
        const newComment = document.createElement('li');
        newComment.innerHTML = `
            <div class="comment-header">
                <div class="comment-author">${name}</div>
                <div class="comment-date">${getCurrentDateTime()}</div>
            </div>
            <div class="comment-text">${censorWords(commentText)}</div>
        `;
        commentList.appendChild(newComment);

        // Limpiar campos del formulario
        document.getElementById('nameInput').value = '';
        document.getElementById('emailInput').value = '';
        commentInput.value = '';
    });

    // Evento de escucha para censurar palabras en tiempo real mientras se escribe el comentario
    commentInput.addEventListener('input', function () {
        const censoredText = censorWords(commentInput.value);
        commentInput.value = censoredText;
    });

    // Función para obtener la fecha y hora actual en el formato deseado
    function getCurrentDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString('es-ES');
        const time = now.toLocaleTimeString('es-ES');
        return `${date} ${time}`;
    }

    // Función para censurar palabras prohibidas en el comentario
    function censorWords(comment) {
        const prohibitedWords = ['puta', 'guarra', 'cabrón', 'idiota', 'imbécil', 'pendejo', 'zorra', 'maricón', 'bastardo', 'gonorrea'];
        let censoredComment = comment;
        prohibitedWords.forEach(word => {
            const regex = new RegExp('\\b' + word + '\\b', 'gi');
            censoredComment = censoredComment.replace(regex, match => '*'.repeat(match.length));
        });
        return censoredComment;
    }
});
