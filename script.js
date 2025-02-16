// Data
const features = [
    {
        icon: 'users',
        title: '5 Números Simultaneamente',
        description: 'Utilize até 5 números diferentes ao mesmo tempo para suas automações.'
    },
    {
        icon: 'zap',
        title: 'Uso Ilimitado',
        description: 'Sem limites de mensagens ou automações. Use quanto precisar.'
    },
    {
        icon: 'message-square',
        title: 'Modo Campanha',
        description: 'Realize disparos em massa de forma organizada e eficiente.'
    },
    {
        icon: 'bot',
        title: 'Flows Condicionais',
        description: 'Crie fluxos de resposta personalizados baseados em condições.'
    },
    {
        icon: 'calendar',
        title: 'Agendamento',
        description: 'Agende suas mensagens e automações para qualquer momento.'
    },
    {
        icon: 'shield',
        title: 'Backups Automáticos',
        description: 'Seus dados sempre seguros com backups automáticos.'
    },
    {
        icon: 'moon',
        title: 'Tema Escuro',
        description: 'Interface adaptada para uso noturno, reduzindo o cansaço visual.'
    },
    {
        icon: 'database',
        title: 'Gestão de Funis',
        description: 'Organize e gerencie seus funis de venda de forma eficiente.'
    }
];

const planos = [
    {
        nome: "PLANO MENSAL",
        icon: "🎯",
        precoOriginal: "R$49,90",
        precoParcelado: "3 x de R$ 8,78",
        precoAVista: "R$ 24,90",
        precoMensal: "R$ 24,90/mês",
        link: "https://abrir.link/pTBtE"
    },
    {
        nome: "PLANO SEMESTRAL",
        icon: "🔥",
        precoOriginal: "R$199,90",
        precoParcelado: "12 x de R$ 9,97",
        precoAVista: "R$ 99,90",
        precoMensal: "R$ 16,65/mês",
        destaque: true,
        link: "https://abrir.link/xzKBi"
    },
    {
        nome: "PLANO ANUAL",
        icon: "⭐",
        precoOriginal: "R$299,90",
        precoParcelado: "12 x de R$ 17,95",
        precoAVista: "R$ 179,90",
        precoMensal: "R$ 14,99/mês",
        link: "https://abrir.link/jkPVl"
    },
    {
        nome: "PLANO DE 2 ANOS",
        icon: "🤑",
        precoOriginal: "R$499,90",
        precoParcelado: "12 x de R$ 29,84",
        precoAVista: "R$ 299,00",
        precoMensal: "R$ 12,45/mês",
        link: "https://abrir.link/uYnkD"
    }
];

const tutoriais = [
    {
        titulo: "Instalando a Extensão",
        duracao: "2 min",
        descricao: "Instale a extensão DarkVoice no seu navegador.",
        link: "https://chrome.google.com/webstore/detail/darkvoice"
    },
    {
        titulo: "Recebendo sua Chave",
        duracao: "1 min",
        descricao: "Verifique seu email para receber sua chave de ativação."
    },
    {
        titulo: "Ativando no WhatsApp",
        duracao: "2 min",
        descricao: "Insira sua chave de ativação no campo especial do WhatsApp."
    }
];

const faqs = [
    {
        question: "Como funciona o DarkVoice?",
        answer: "O DarkVoice é uma plataforma de automação que permite gerenciar múltiplos números, criar fluxos de mensagens automáticas e campanhas em massa de forma organizada e eficiente."
    },
    {
        question: "É seguro usar o DarkVoice?",
        answer: "Sim, utilizamos criptografia de ponta a ponta e seguimos todas as diretrizes de segurança e privacidade. Seus dados estão protegidos com backups automáticos e medidas de segurança avançadas."
    },
    {
        question: "Como começar a usar?",
        answer: "Basta se cadastrar em nossa plataforma, escolher um plano e seguir o tutorial de configuração. Em poucos minutos você já pode começar a usar todas as funcionalidades."
    },
    {
        question: "Quais são as formas de pagamento?",
        answer: "Aceitamos cartões de crédito, PIX e boleto bancário. Todos os pagamentos são processados de forma segura através de gateways certificados."
    },
    {
        question: "Posso cancelar a qualquer momento?",
        answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem multa ou taxas adicionais."
    }
];

const testimonials = [
  {
    name: "João Silva",
    role: "Empresário",
    content: "Revolucionou completamente minha forma de trabalhar. Economizo horas todos os dias!",
  },
  {
    name: "Maria Santos",
    role: "Marketing Digital",
    content: "O melhor investimento que fiz para minha agência. O suporte é incrível!",
  },
  {
    name: "Pedro Costa",
    role: "Vendedor",
    content: "Aumentei minhas vendas em 300% com as automações. Simplesmente fantástico!",
  },
];

// Utility Functions
function createSVGIcon(name) {
    const icons = {
        users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
        zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
        'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
        bot: '<path d="M12 2L2 7l10 5 10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>',
        calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
        shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
        moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
        database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
        check: '<polyline points="20 6 9 17 4 12"></polyline>'
    };

    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    toast.style.backgroundColor = type === 'success' ? 'var(--primary)' : 'var(--error)';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Initialize Features
const featuresGrid = document.querySelector('.features-grid');
features.forEach(feature => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature-card fade-in';
    featureCard.innerHTML = `
        <div class="feature-icon">${createSVGIcon(feature.icon)}</div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
    `;
    featuresGrid.appendChild(featureCard);
});

// Initialize Pricing
const pricingGrid = document.querySelector('.pricing-grid');
planos.forEach(plano => {
    const priceCard = document.createElement('div');
    priceCard.className = `price-card ${plano.destaque ? 'featured' : ''}`;
    
    priceCard.innerHTML = `
        ${plano.destaque ? '<div class="featured-badge">Mais Assinado</div>' : ''}
        <div class="price-icon">${plano.icon}</div>
        <h3 class="price-title">${plano.nome}</h3>
        <p class="price-original">${plano.precoOriginal}</p>
        <p class="price-installments">${plano.precoParcelado}</p>
        <p class="price-cash">ou ${plano.precoAVista} à vista</p>
        <p class="price-monthly">${plano.precoMensal}</p>
        <div class="price-features">
            <div class="price-feature">${createSVGIcon('check')} <span>Até 10 números</span></div>
            <div class="price-feature">${createSVGIcon('check')} <span>Disparos ilimitados</span></div>
            <div class="price-feature">${createSVGIcon('check')} <span>Funis ilimitados</span></div>
            <div class="price-feature">${createSVGIcon('check')} <span>Suporte 24/7</span></div>
        </div>
        <a href="${plano.link}" class="primary-button" target="_blank" rel="noopener noreferrer">
            Comprar Agora
        </a>
    `;
    pricingGrid.appendChild(priceCard);
});

// Initialize Tutorials
const tutorialGrid = document.querySelector('.tutorial-grid');
tutoriais.forEach(tutorial => {
    const tutorialCard = document.createElement('div');
    tutorialCard.className = 'tutorial-card fade-in';
    
    tutorialCard.innerHTML = `
        <div class="tutorial-icon">${createSVGIcon('play-circle')}</div>
        <div class="tutorial-content">
            <h3>${tutorial.titulo}</h3>
            <p>${tutorial.descricao}</p>
            <span class="tutorial-duration">${tutorial.duracao}</span>
            ${tutorial.link ? `
                <a href="${tutorial.link}" class="tutorial-link" target="_blank" rel="noopener noreferrer">
                    Acessar Extensão →
                </a>
            ` : ''}
        </div>
    `;
    tutorialGrid.appendChild(tutorialCard);
});

// Initialize FAQ
const accordion = document.querySelector('.accordion');
faqs.forEach((faq, index) => {
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';
    
    accordionItem.innerHTML = `
        <div class="accordion-header" data-index="${index}">
            ${faq.question}
            <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </div>
        <div class="accordion-content">
            ${faq.answer}
        </div>
    `;
    accordion.appendChild(accordionItem);
});

// Add FAQ functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.accordion-icon');
        
        // Close all other items
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.classList.remove('active');
                item.previousElementSibling.querySelector('.accordion-icon').classList.remove('active');
            }
        });
        
        // Toggle current item
        content.classList.toggle('active');
        icon.classList.toggle('active');
    });
});

// Initialize Testimonials
const testimonialsGrid = document.querySelector('.testimonials-grid');
testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card fade-in';
    testimonialCard.innerHTML = `
        <div class="testimonial-icon">
            ${createSVGIcon('message-square')}
        </div>
        <p class="testimonial-content">${testimonial.content}</p>
        <div>
            <p class="testimonial-author">${testimonial.name}</p>
            <p class="testimonial-role">${testimonial.role}</p>
        </div>
    `;
    testimonialsGrid.appendChild(testimonialCard);
});

// Initialize Features Checklist
const checklistGrid = document.querySelector('.checklist-grid');
const checklistItems = [
    "Suporte a 5 números simultâneos",
    "Funcionamento ilimitado",
    "Modo campanha com disparos em massa",
    "Flows condicionais personalizáveis",
    "Sistema de agendamento avançado",
    "Gestão completa de funis",
    "Backups automáticos",
    "Interface com tema escuro",
    "Respostas automáticas inteligentes",
    "Métricas e relatórios detalhados"
];

checklistItems.forEach(item => {
    const checklistItem = document.createElement('div');
    checklistItem.className = 'checklist-item';
    checklistItem.innerHTML = `
        ${createSVGIcon('check')}
        <span>${item}</span>
    `;
    checklistGrid.appendChild(checklistItem);
});

// Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    formData.append('_subject', 'Novo contato do site DarkVoice');
    formData.append('_replyto', formData.get('email'));
    formData.append('_template', 'table');
    formData.append('_captcha', 'true');
    formData.append('_autoresponse', 'Obrigado por entrar em contato! Retornaremos em breve.');

    try {
        showToast('Enviando mensagem...');
        
        const response = await fetch('https://formsubmit.co/darkvoiceeee@gmail.com', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar mensagem');
        }

        showToast('Mensagem enviada com sucesso!');
        contactForm.reset();
    } catch (error) {
        showToast(error.message, 'error');
    }
});

// Mobile Menu
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuButton.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        mobileMenuButton.classList.remove('active');
    }
});

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mobileMenu.classList.remove('active');
            mobileMenuButton.classList.remove('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .tutorial-card, .price-card, .testimonial-card').forEach(element => {
    observer.observe(element);
});
