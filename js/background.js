class ParticleBackground {
    constructor() {
        try {
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.renderer = new THREE.WebGLRenderer({
                canvas: document.getElementById('bg-canvas'),
                antialias: true,
                alpha: true
            });

            this.particles = [];
            this.mouse = new THREE.Vector2();
            this.targetRotation = new THREE.Vector2();

            this.init();
        } catch (error) {
            console.error('Error initializing background:', error);
            // Hide loading screen if background fails
            this.handleError();
        }
    }

    handleError() {
        const loadingScreen = document.querySelector('.loading-screen');
        const mainContainer = document.querySelector('.main-container');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                if (mainContainer) {
                    mainContainer.style.opacity = '1';
                }
            }, 500);
        }
    }

    init() {
        // Setup
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.z = 30;

        // Create particles
        const particleGeometry = new THREE.BufferGeometry();
        const particleMaterial = new THREE.PointsMaterial({
            size: CONFIG.background.particleSize || 2,
            color: 0x4f46e5,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });

        const positions = [];
        const colors = [];
        const color = new THREE.Color();

        const particleCount = Math.min(CONFIG.background.particleCount || 1000, 2000); // Limit particles for performance
        for (let i = 0; i < particleCount; i++) {
            positions.push(
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100
            );

            // Gradient color based on position
            color.setHSL(Math.random() * 0.1 + 0.6, 0.8, 0.5);
            colors.push(color.r, color.g, color.b);
        }

        particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        particleGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        particleMaterial.vertexColors = true;

        this.particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        this.scene.add(this.particleSystem);

        // Event listeners
        window.addEventListener('resize', () => this.onWindowResize());
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));

        // Start animation
        this.animate();

        // Remove loading screen after successful initialization
        setTimeout(() => {
            const loadingScreen = document.querySelector('.loading-screen');
            const mainContainer = document.querySelector('.main-container');
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    if (mainContainer) {
                        mainContainer.style.opacity = '1';
                    }
                }, 500);
            }
        }, 1000);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onMouseMove(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        this.targetRotation.x = this.mouse.y * 0.3;
        this.targetRotation.y = this.mouse.x * 0.3;
    }

    animate() {
        try {
            requestAnimationFrame(() => this.animate());

            // Smooth rotation
            this.particleSystem.rotation.x += (this.targetRotation.x - this.particleSystem.rotation.x) * 0.05;
            this.particleSystem.rotation.y += (this.targetRotation.y - this.particleSystem.rotation.y) * 0.05;

            // Gentle floating animation
            const time = Date.now() * 0.0005;
            this.particleSystem.rotation.z = Math.sin(time) * 0.1;

            // Update particle positions with reduced movement
            const positions = this.particleSystem.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 2] += Math.sin(time + positions[i]) * 0.005;
            }
            this.particleSystem.geometry.attributes.position.needsUpdate = true;

            this.renderer.render(this.scene, this.camera);
        } catch (error) {
            console.error('Error in animation loop:', error);
            this.handleError();
        }
    }
}

// Initialize background when page loads
window.addEventListener('load', () => {
    try {
        const background = new ParticleBackground();
    } catch (error) {
        console.error('Failed to initialize background:', error);
        // Hide loading screen if initialization fails
        const loadingScreen = document.querySelector('.loading-screen');
        const mainContainer = document.querySelector('.main-container');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                if (mainContainer) {
                    mainContainer.style.opacity = '1';
                }
            }, 500);
        }
    }
});