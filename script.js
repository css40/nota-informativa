document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE LOS LIKES ---
    let cantidadLikes = 35;
    let interactuado = false;
    
    const botonLike = document.getElementById('btnReaccion');
    const contador = document.getElementById('contadorLikes');

    // Verificación por si acaso el botón de likes no está en todas las páginas
    if (botonLike && contador) {
        botonLike.addEventListener('click', () => {
            if (!interactuado) {
                cantidadLikes++;
                botonLike.style.backgroundColor = '#b1872c';
                botonLike.innerText = '✓ Te gusta';
                interactuado = true;
            } else {
                cantidadLikes--;
                botonLike.style.backgroundColor = '#001355';
                botonLike.innerText = '👍 Me gusta';
                interactuado = false;
            }
            contador.innerText = `${cantidadLikes} personas les gusta esto`;
        });
    }

    // --- LÓGICA DEL BOTÓN AZUL PARA SUBER (NUEVO) ---
    const botonSubir = document.querySelector('.scroll-up-btn');

    if (botonSubir) {
        // 1. Hace que la página suba suavemente al hacer clic
        botonSubir.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Esto hace que suba con un deslizamiento suave y no de golpe
            });
        });

        // 2. Opcional: El botón se mantiene oculto al inicio y aparece solo cuando bajas la página
        botonSubir.style.display = 'none'; // Lo ocultamos al cargar
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                botonSubir.style.display = 'block'; // Aparece si bajaste más de 300px
            } else {
                botonSubir.style.display = 'none';  // Se oculta si estás arriba
            }
        });
    }

});