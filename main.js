// Función para mostrar/ocultar contenido de reseñas
function muestra_oculta(contenido, boton) {
    let div = document.getElementById(contenido);
    let btn = document.getElementById(boton);

    if (div.style.display === "none") {
        div.style.display = "flex";
        btn.innerText = "Ocultar";
    } else {
        div.style.display = "none";
        btn.innerText = "Ver más";
    }
}

// ========================================
// SISTEMA DE ANIMACIONES CON SCROLL
// ========================================

// Función para inicializar las animaciones de scroll
function initScrollAnimations() {
    // Configuración del Intersection Observer
    const observerOptions = {
        root: null, // Usa el viewport como root
        rootMargin: '0px 0px -100px 0px', // Activa 100px antes de que el elemento sea visible
        threshold: 0.1 // 10% del elemento debe ser visible
    };

    // Callback que se ejecuta cuando un elemento entra o sale del viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agregar clase 'animated' cuando el elemento es visible
                entry.target.classList.add('animated');
                // Opcionalmente, dejar de observar después de animar
                // observer.unobserve(entry.target);
            }
        });
    };

    // Crear el observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todos los elementos con la clase 'animate-on-scroll'
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Función para agregar animaciones escalonadas a un grupo de elementos
function addStaggeredAnimation(selector, animationClass, delayIncrement = 100) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        element.classList.add('animate-on-scroll');
        element.style.animationDelay = `${index * delayIncrement}ms`;
    });
}

// Función para animar elementos al hacer scroll suave
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar animaciones de scroll
    initScrollAnimations();

    // Aplicar animaciones escalonadas a las cards de reseñas
    addStaggeredAnimation('.card', 'animate-fade-in-up', 150);

    // Aplicar animaciones escalonadas a los géneros
    addStaggeredAnimation('.generos', 'animate-scale-in', 100);

    // Aplicar animaciones a las cajas de beneficios
    addStaggeredAnimation('.caja', 'animate-fade-in-up', 200);

    // Agregar funcionalidad de scroll suave a los enlaces del menú
    const menuLinks = document.querySelectorAll('header a[href^="#"]');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
        });
    });

    // Animación para el logo del header
    const logo = document.querySelector('header img');
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
