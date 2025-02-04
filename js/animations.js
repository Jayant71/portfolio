class AnimationController {
    constructor() {
        this.sections = document.querySelectorAll('.section');
        this.loadingScreen = document.querySelector('.loading-screen');
        this.mainContainer = document.querySelector('.main-container');
        this.initialized = false;
        this.timeline = null;

        // Initialize GSAP ScrollTrigger
        gsap.registerPlugin(ScrollToPlugin);

        this.init();
    }

    init() {
        // Set initial state
        gsap.set(this.mainContainer, { opacity: 0 });

        // Wait for page load
        window.addEventListener('load', () => {
            // Wait for assets to load
            Promise.all([
                document.fonts.ready,
                this.loadImages()
            ]).then(() => {
                this.onPageLoad();
            }).catch(error => {
                console.error('Error loading assets:', error);
                this.onPageLoad(); // Continue anyway
            });
        });

        // Setup scroll animations
        this.setupScrollAnimations();

        // Setup intersection observer for section animations
        this.setupIntersectionObserver();
    }

    loadImages() {
        return new Promise((resolve) => {
            // Get all images in the document
            const images = Array.from(document.images);
            const loadedImages = images.map(img => {
                if (img.complete) {
                    return Promise.resolve();
                } else {
                    return new Promise(resolve => {
                        img.addEventListener('load', resolve);
                        img.addEventListener('error', resolve); // Proceed on error
                    });
                }
            });

            Promise.all(loadedImages).then(() => resolve());
        });
    }

    onPageLoad() {
        this.timeline = gsap.timeline({
            defaults: { ease: 'power2.out' }
        });

        // Fade out loading screen
        this.timeline.to(this.loadingScreen, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                this.loadingScreen.style.display = 'none';
            }
        })
            // Fade in main container
            .to(this.mainContainer, {
                opacity: 1,
                duration: 0.3
            })
            // Animate hero section
            .from('.hero-content', {
                y: 20,
                opacity: 0,
                duration: 0.5
            })
            .from('.nav-container', {
                y: -20,
                opacity: 0,
                duration: 0.4
            }, '-=0.3');

        this.initialized = true;
    }

    setupScrollAnimations() {
        // Smooth scroll to sections
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href').slice(1);
                const target = document.getElementById(targetId);

                if (target) {
                    const headerHeight = document.querySelector('.nav-container').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update active state
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('active');
                    });
                    anchor.classList.add('active');
                }
            });
        });

        // Update active nav link
        window.addEventListener('scroll', () => {
            this.updateActiveNavLink();
        });
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '-50px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && this.initialized) {
                    this.animateSection(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        this.sections.forEach(section => observer.observe(section));
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

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
    }

    animateSection(section) {
        const timeline = gsap.timeline({
            defaults: { ease: 'power2.out' }
        });

        // Animate section title
        const title = section.querySelector('.section-title');
        if (title) {
            timeline.from(title, {
                opacity: 0,
                y: 20,
                duration: 0.4
            });
        }

        // Animate cards with stagger
        const cards = section.querySelectorAll('.card');
        if (cards.length) {
            timeline.from(cards, {
                opacity: 0,
                y: 20,
                duration: 0.4,
                stagger: 0.1
            }, '-=0.2');
        }

        // Animate lists with stagger
        const listItems = section.querySelectorAll('li, .skill-item');
        if (listItems.length) {
            timeline.from(listItems, {
                opacity: 0,
                x: -10,
                duration: 0.3,
                stagger: 0.05
            }, '-=0.2');
        }

        // Add hover animations
        this.addHoverAnimations(section);
    }

    addHoverAnimations(section) {
        // Cards hover effect
        section.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.02,
                    duration: 0.2,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.2,
                    ease: 'power2.out'
                });
            });
        });

        // Skill items hover effect
        section.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    y: -3,
                    duration: 0.2,
                    ease: 'power2.out'
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    y: 0,
                    duration: 0.2,
                    ease: 'power2.out'
                });
            });
        });
    }
}

// Initialize animations
let animationController = null;

window.addEventListener('load', () => {
    if (!animationController) {
        animationController = new AnimationController();
    }
});