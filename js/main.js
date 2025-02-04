class PortfolioApp {
    constructor() {
        this.setupFontAwesome();
        this.setupMobileMenu();
        this.setupScrollEvents();
    }

    setupFontAwesome() {
        // Add Font Awesome CDN
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        document.head.appendChild(link);
    }

    setupMobileMenu() {
        // Create mobile menu button
        const nav = document.querySelector('.nav-container');
        const mobileButton = document.createElement('button');
        mobileButton.className = 'mobile-menu-btn';
        mobileButton.innerHTML = '<i class="fas fa-bars"></i>';
        nav.insertBefore(mobileButton, nav.querySelector('.nav-links'));

        // Mobile menu functionality
        mobileButton.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
            mobileButton.innerHTML = navLinks.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const navLinks = document.querySelector('.nav-links');
            const isClickInside = nav.contains(e.target);

            if (!isClickInside && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileButton.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    setupScrollEvents() {
        // Update active nav link on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Smooth scroll behavior for Safari and other browsers that don't support scroll-behavior: smooth
        if (!('scrollBehavior' in document.documentElement.style)) {
            this.polyfillSmoothScroll();
        }
    }

    polyfillSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Add CSS styles for mobile menu
    addMobileStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .mobile-menu-btn {
                display: none;
                background: none;
                border: none;
                color: var(--text-primary);
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
            }

            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: block;
                }

                .nav-links {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: var(--glass-bg);
                    backdrop-filter: blur(10px);
                    padding: 1rem;
                    border-radius: 0 0 1rem 1rem;
                    border: 1px solid var(--glass-border);
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .nav-links.active {
                    display: flex;
                }

                .nav-links a {
                    padding: 0.75rem 1rem;
                    width: 100%;
                    text-align: center;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize app when page loads
window.addEventListener('load', () => {
    const app = new PortfolioApp();
    app.addMobileStyles();
});