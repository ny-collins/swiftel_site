<script lang="ts">
    import { onMount } from 'svelte';

    let currentWordIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let typingSpeed = 150;

    const words = ['Lightning Fast', 'Ultra Reliable', 'Future Ready', 'Simply Better'];

    onMount(() => {
        typeText();
    });

    function typeText() {
        const currentWord = words[currentWordIndex];

        if (!isDeleting) {
            currentText = currentWord.substring(0, currentText.length + 1);
            typingSpeed = 150;

            if (currentText === currentWord) {
                setTimeout(() => {
                    isDeleting = true;
                    typeText();
                }, 2000);
                return;
            }
        } else {
            currentText = currentWord.substring(0, currentText.length - 1);
            typingSpeed = 75;

            if (currentText === '') {
                isDeleting = false;
                currentWordIndex = (currentWordIndex + 1) % words.length;
            }
        }

        setTimeout(typeText, typingSpeed);
    }
</script>

<section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <!-- Animated gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5"></div>

    <!-- Animated mesh gradient blobs -->
    <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-primary/50 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto">
            <!-- Live badge -->
            <div class="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary/20 mb-8 animate-fade-in">
        <span class="relative flex h-3 w-3 mr-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
        </span>
                <span class="text-sm font-medium text-primary">Now available in your area</span>
            </div>

            <!-- Main heading with typing animation -->
            <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                Internet That's
                <span class="block gradient-text mt-2 min-h-[1.2em]">
          {currentText}<span class="animate-pulse">|</span>
        </span>
            </h1>

            <p class="text-xl md:text-2xl text-muted mb-12 animate-fade-in-up stagger-1">
                Experience pure fibre optic broadband with speeds up to 1Gbps. No contracts. No compromises.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-2">
                <a
                        href="#packages"
                        class="btn-glow px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all inline-block"
                >
                    View Our Packages
                </a>
                <a
                        href="#why-swiftel"
                        class="px-8 py-4 bg-card text-DEFAULT rounded-lg font-semibold text-lg border-2 border-DEFAULT hover:border-primary transition-all inline-block"
                >
                    Learn More
                </a>
            </div>

            <!-- Stats Counter -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up stagger-3">
                <div class="stat-card">
                    <div class="text-4xl md:text-5xl font-bold gradient-text">
                        <span class="counter" data-target="10000">0</span>+
                    </div>
                    <div class="text-sm md:text-base text-muted mt-2">Happy Customers</div>
                </div>
                <div class="stat-card">
                    <div class="text-4xl md:text-5xl font-bold gradient-text">
                        <span class="counter" data-target="99">0</span>.<span class="counter" data-target="9">0</span>%
                    </div>
                    <div class="text-sm md:text-base text-muted mt-2">Uptime Guarantee</div>
                </div>
                <div class="stat-card">
                    <div class="text-4xl md:text-5xl font-bold gradient-text">
                        <span class="counter" data-target="24">0</span>/7
                    </div>
                    <div class="text-sm md:text-base text-muted mt-2">Support Available</div>
                </div>
                <div class="stat-card">
                    <div class="text-4xl md:text-5xl font-bold gradient-text">
                        <span class="counter" data-target="1">0</span>Gbps
                    </div>
                    <div class="text-sm md:text-base text-muted mt-2">Maximum Speed</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
    </div>
</section>

<script>
    // Counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target') || '0');
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toString();
                }
            };

            // Use Intersection Observer to start animation when visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(counter);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', animateCounters);
    } else {
        animateCounters();
    }
</script>

<style>
    .stat-card {
        transition: transform 0.3s ease;
    }

    .stat-card:hover {
        transform: translateY(-5px);
    }
</style>