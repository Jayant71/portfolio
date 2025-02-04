class ParticleNetwork {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor(0x000000, 0);

        // Insert canvas as the first child of body
        document.body.insertBefore(this.renderer.domElement, document.body.firstChild);
        this.renderer.domElement.style.position = 'fixed';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.left = '0';
        this.renderer.domElement.style.zIndex = '-1';
        this.renderer.domElement.style.pointerEvents = 'none';

        // Initialize arrays before using them
        this.particles = [];
        this.connections = [];

        // Increase particle count while maintaining performance
        this.particleCount = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 25000));
        this.animationFrameId = null;
        this.lastTime = 0;
        this.fps = 40; // Reduced FPS for better performance
        this.fpsInterval = 1000 / this.fps;

        this.init();
        this.animate();
        this.handleResize();
    }

    init() {
        // Create particles with optimized geometry
        const particleGeometry = new THREE.SphereGeometry(0.06, 6, 6); // Slightly smaller for more particles
        const particleMaterial = new THREE.MeshBasicMaterial({
            color: 0x4f46e5,
            transparent: true,
            opacity: 0.4
        });

        // Create particles with optimized spread
        for (let i = 0; i < this.particleCount; i++) {
            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            particle.position.set(
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 12
            );
            particle.velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 0.015,
                (Math.random() - 0.5) * 0.015,
                (Math.random() - 0.5) * 0.015
            );
            this.particles.push(particle);
            this.scene.add(particle);
        }

        // Create fewer connections with optimized visibility
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x4f46e5,
            transparent: true,
            opacity: 0.15
        });

        // Only connect to closest neighbors to maintain performance
        for (let i = 0; i < this.particles.length; i++) {
            const particleA = this.particles[i];
            const neighbors = this.findNearestNeighbors(particleA, 3); // Connect to 3 closest neighbors

            neighbors.forEach(particleB => {
                const geometry = new THREE.BufferGeometry().setFromPoints([
                    particleA.position,
                    particleB.position
                ]);
                const line = new THREE.Line(geometry, lineMaterial);
                this.connections.push({
                    line,
                    particleA,
                    particleB
                });
                this.scene.add(line);
            });
        }

        // Adjust camera position
        this.camera.position.z = 8;
    }

    findNearestNeighbors(particle, count) {
        return this.particles
            .filter(p => p !== particle)
            .sort((a, b) =>
                particle.position.distanceTo(a.position) -
                particle.position.distanceTo(b.position)
            )
            .slice(0, count);
    }

    animate(currentTime = 0) {
        this.animationFrameId = requestAnimationFrame(time => this.animate(time));

        // Throttle frame rate
        const elapsed = currentTime - this.lastTime;
        if (elapsed < this.fpsInterval) return;
        this.lastTime = currentTime - (elapsed % this.fpsInterval);

        // Update particle positions with optimized calculations
        this.particles.forEach(particle => {
            particle.position.add(particle.velocity);

            // Simplified boundary checking
            ['x', 'y', 'z'].forEach(axis => {
                if (Math.abs(particle.position[axis]) > 4) {
                    particle.velocity[axis] *= -1;
                }
            });
        });

        // Batch update connections
        this.connections.forEach(({ line, particleA, particleB }) => {
            line.geometry.setFromPoints([particleA.position, particleB.position]);
            line.geometry.attributes.position.needsUpdate = true;
        });

        this.renderer.render(this.scene, this.camera);
    }

    handleResize() {
        const debounce = (func, wait) => {
            let timeout;
            return () => {
                clearTimeout(timeout);
                timeout = setTimeout(() => func(), wait);
            };
        };

        window.addEventListener('resize', debounce(() => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
        }, 250)); // Increased debounce time
    }

    cleanup() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        // Clean up THREE.js resources
        this.scene.clear();
        this.renderer.dispose();
    }
}

// Initialize background with cleanup
document.addEventListener('DOMContentLoaded', () => {
    const background = new ParticleNetwork();

    // Clean up on page unload
    window.addEventListener('unload', () => background.cleanup());
});