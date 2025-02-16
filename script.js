
// Mobile Menu
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    // Animate hamburger menu
    const spans = mobileMenuButton.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});

// Smooth scroll for anchor links
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
        }
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.style.display = 'block';
    toast.style.backgroundColor = type === 'success' ? '#8B5CF6' : '#EF4444';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

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

// Form validation
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function validateInput(input, minLength = 2) {
    const errorMessage = input.nextElementSibling;
    
    if (input.value.length < minLength) {
        errorMessage.textContent = `Deve ter pelo menos ${minLength} caracteres`;
        return false;
    }
    
    if (input.type === 'email' && !input.value.includes('@')) {
        errorMessage.textContent = 'Email inválido';
        return false;
    }
    
    errorMessage.textContent = '';
    return true;
}

[nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('blur', () => {
        validateInput(input, input === messageInput ? 10 : 2);
    });
});

contactForm.addEventListener('submit', (e) => {
    const isNameValid = validateInput(nameInput);
    const isEmailValid = validateInput(emailInput);
    const isMessageValid = validateInput(messageInput, 10);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
        e.preventDefault();
    }
});
