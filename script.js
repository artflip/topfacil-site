// Elementos do DOM
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contactForm');

// Slider elements
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');

// Calculator elements
const workersInput = document.getElementById('workers');
const rentInput = document.getElementById('rent');
const calculateBtn = document.getElementById('calculateBtn');
const currentCostEl = document.getElementById('currentCost');
const savingsEl = document.getElementById('savings');
const yearlySavingsEl = document.getElementById('yearlySavings');

// Slider variables
let currentSlide = 0;
let slideInterval;

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

// Slider functionality
function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

// Auto-play slider
function startSlider() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Event listeners for slider controls
if (prevBtn) {
    prevBtn.addEventListener('click', function() {
        stopSlider();
        prevSlide();
        startSlider();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        stopSlider();
        nextSlide();
        startSlider();
    });
}

// Event listeners for indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        stopSlider();
        showSlide(index);
        startSlider();
    });
});

// Pause slider on hover
const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopSlider);
    sliderContainer.addEventListener('mouseleave', startSlider);
}

// Start the slider
startSlider();

// Calculadora de Economia
function calculateSavings() {
    const workers = parseInt(workersInput.value) || 0;
    const rent = parseInt(rentInput.value) || 0;
    
    if (workers === 0 || rent === 0) return;
    
    // Custo atual (múltiplos alugueis + custos extras)
    const currentCost = workers * rent * 1.3; // 30% a mais para custos extras
    
    // Custo com TopFácil (estimativa baseada em economia real)
    const topfacilCost = workers * 600; // R$ 600 por trabalhador
    
    // Economia
    const savings = currentCost - topfacilCost;
    const yearlySavings = savings * 12;
    
    // Atualizar resultados com animação
    animateValue(currentCostEl, currentCost);
    animateValue(savingsEl, savings);
    animateValue(yearlySavingsEl, yearlySavings);
}

function animateValue(element, target) {
    const start = 0;
    const duration = 1000;
    const increment = target / (duration / 16);
    let current = start;
    
    function updateValue() {
        current += increment;
        if (current < target) {
            element.textContent = `R$ ${Math.floor(current).toLocaleString('pt-BR')}`;
            requestAnimationFrame(updateValue);
        } else {
            element.textContent = `R$ ${target.toLocaleString('pt-BR')}`;
        }
    }
    
    updateValue();
}

// Event listeners para calculadora
if (calculateBtn) {
    calculateBtn.addEventListener('click', calculateSavings);
}

if (workersInput && rentInput) {
    workersInput.addEventListener('input', calculateSavings);
    rentInput.addEventListener('input', calculateSavings);
}

// Calcular economia inicial
setTimeout(calculateSavings, 1000);

// Formulário de contato
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Pegar dados do formulário
        const formData = new FormData(this);
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Mostrar loading
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Remover mensagens anteriores
        const existingMessages = this.querySelectorAll('.success-message, .error-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Enviar para Formspree
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Sucesso
                this.reset();
                
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <strong>Mensagem enviada com sucesso!</strong><br>
                    Vamos calcular sua economia e entrar em contato em breve.
                `;
                
                this.appendChild(successMessage);
                
                // Scroll para a mensagem
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
            } else {
                throw new Error('Erro no envio');
            }
        })
        .catch(error => {
            // Erro
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.innerHTML = `
                <i class="fas fa-exclamation-triangle"></i>
                <strong>Erro ao enviar mensagem.</strong><br>
                Tente novamente ou entre em contato pelo WhatsApp.
            `;
            
            this.appendChild(errorMessage);
        })
        .finally(() => {
            // Restaurar botão
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Remover mensagens após 8 segundos
            setTimeout(() => {
                const messages = this.querySelectorAll('.success-message, .error-message');
                messages.forEach(msg => msg.remove());
            }, 8000);
        });
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
            
            // Animação especial para infográfico
            if (entry.target.classList.contains('infographic-item')) {
                entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}s`;
            }
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.infographic-item, .solution-point, .contact-item, .result-card, .problem-summary');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Adicionar delay para infográfico
        if (el.classList.contains('infographic-item')) {
            el.dataset.delay = index * 0.2;
        }
        
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
        tooltip.textContent = 'Calcular economia no WhatsApp';
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