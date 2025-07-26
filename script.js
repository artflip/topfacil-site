// Elementos do DOM
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contactForm');

// Menu mobile
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulário de contato
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular envio
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Simular delay de envio
        setTimeout(() => {
            // Limpar formulário
            this.reset();
            
            // Mostrar mensagem de sucesso
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
            
            this.appendChild(successMessage);
            
            // Restaurar botão
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Remover mensagem após 5 segundos
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }, 2000);
    });
}

// Formatação de telefone
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            if (value.length <= 2) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else if (value.length <= 10) {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
            } else {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
            }
        }
        
        e.target.value = value;
    });
}

// Animação de scroll suave para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.highlight-card, .structure-card, .contact-item, .point');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Header com scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Tooltip para WhatsApp
const whatsappBtn = document.querySelector('.whatsapp-btn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Fale conosco no WhatsApp';
        tooltip.style.cssText = `
            position: absolute;
            bottom: 100%;
            right: 0;
            background: #333;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            white-space: nowrap;
            margin-bottom: 8px;
            z-index: 1001;
        `;
        
        whatsappBtn.style.position = 'relative';
        whatsappBtn.appendChild(tooltip);
        
        setTimeout(() => {
            tooltip.remove();
        }, 3000);
    });
}

// Preloader simples
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Inicializar com opacidade 0 para preloader
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease'; 