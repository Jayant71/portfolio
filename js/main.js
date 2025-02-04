class PortfolioApp {
    constructor() {
        this.lastScrollTop = 0;
        this.navBar = document.querySelector('.nav-container');
        this.mobileMenuButton = document.querySelector('.mobile-menu-toggle');
        this.navLinks = document.querySelector('.nav-links');

        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupScrollEvents();
    }

    setupMobileMenu() {
        if (!this.mobileMenuButton) return;

        this.mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.navLinks.classList.toggle('active');
            this.mobileMenuButton.innerHTML = this.navLinks.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navBar.contains(e.target) && this.navLinks.classList.contains('active')) {
                this.navLinks.classList.remove('active');
                this.mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Close menu when clicking a link
        this.navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                this.navLinks.classList.remove('active');
                this.mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    setupScrollEvents() {
        let lastScrollTop = 0;
        const threshold = 200; // Minimum scroll amount before hiding nav

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            // Show/hide nav based on scroll direction
            if (currentScroll > threshold) {
                if (currentScroll > lastScrollTop) {
                    // Scrolling down
                    this.navBar.classList.add('nav-hidden');
                } else {
                    // Scrolling up
                    this.navBar.classList.remove('nav-hidden');
                }
            } else {
                // At the top
                this.navBar.classList.remove('nav-hidden');
            }

            lastScrollTop = currentScroll;
        });

        // Update active nav link on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
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

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});