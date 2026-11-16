// ==========================================================================
// VITALCENIT - INTERACTIVIDAD Y FUNCIONALIDAD OFICIAL
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 2. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                item.classList.toggle('active', !isActive);
            });
        }
    });

    // 3. Contact Form Submission (Feedback)
    const contactForm = document.getElementById('vitalcenit-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando mensaje...';

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Mensaje Enviado con Éxito!';
                submitBtn.style.backgroundColor = '#2f5645';

                // Success Message Box
                let successNotice = document.getElementById('form-success-alert');
                if (!successNotice) {
                    successNotice = document.createElement('div');
                    successNotice.id = 'form-success-alert';
                    successNotice.style.cssText = 'background:#f2f7f4; border:1px solid #6ea087; color:#1f3b2e; padding:1rem; border-radius:8px; margin-top:1rem; font-size:0.9rem; text-align:center;';
                    contactForm.appendChild(successNotice);
                }
                successNotice.innerHTML = '<strong>Gracias por escribirnos.</strong> Nuestro equipo de Talento Humano y Bienestar se pondrá en contacto contigo a la mayor brevedad.';

                contactForm.reset();

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.backgroundColor = '';
                }, 4000);
            }, 1200);
        });
    }
});
