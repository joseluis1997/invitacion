// Asegurarse de que el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el audio
    const audio = document.getElementById("backgroundAudio");
    
    // Asegurarse de que el audio existe antes de proceder
    if (audio) {
        // Precargar el audio al cargar la página
        window.addEventListener("load", () => {
            audio.load(); // Asegura que el archivo de audio esté cargado
        });

        // Función para reproducir audio
        function playAudio() {
            audio.play()
                .then(() => console.log("Audio reproduciéndose"))
                .catch(err => console.error("Error al reproducir audio:", err));
        }

        // Detectar cualquier interacción del usuario (toque o clic)
        document.body.addEventListener("click", playAudio);
        document.body.addEventListener("touchstart", playAudio);
    }

    // Cambiar el contenido de los divs al hacer clic en el botón
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const firstDiv = document.querySelector('.first');
            const secondDiv = document.querySelector('.second');
            if (firstDiv && secondDiv) {
                firstDiv.classList.remove('show');
                secondDiv.classList.add('show');
            }
        });
    }

    // Función para confirmar asistencia a través de WhatsApp
    function confirmAttendance() {
        const phoneNumber = "59167691341"; // Número de WhatsApp al que se enviará el mensaje
        const message = "¡Confirmo%20mi%20asistencia%20a%20la%20graduación!"; // Mensaje predefinido
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        
        // Abrir el enlace de WhatsApp en una nueva ventana
        window.open(url, "_blank");
    }

    // Generar lluvia de tocas (iconos de graduación)
    const rainContainer = document.querySelector('.rain');
    if (rainContainer) {
        for (let i = 0; i < 50; i++) {
            const drop = document.createElement('i');
            drop.classList.add('fas', 'fa-graduation-cap');
            drop.style.left = `${Math.random() * 100}vw`;
            drop.style.animationDuration = `${2 + Math.random() * 3}s`;
            drop.style.fontSize = `${1 + Math.random() * 2}em`;
            rainContainer.appendChild(drop);
        }
    }

    // Función para cambiar de divs
    function changeDiv() {
        const firstDiv = document.getElementById('firstDiv');
        const secondDiv = document.getElementById('secondDiv');
        
        if (firstDiv && secondDiv) {
            // Ocultar el primer div
            firstDiv.classList.remove('show');
        
            // Mostrar el segundo div después de 3 segundos
            setTimeout(function() {
                secondDiv.classList.add('show');
            }, 3000); // 3000 milisegundos (3 segundos)
        }
    }

    // Llamar a la función para cambiar de div después de 8 segundos
    setTimeout(changeDiv, 8000); // Después de 8 segundos, cambiar de div
});
