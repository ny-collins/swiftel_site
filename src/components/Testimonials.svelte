<script lang="ts">
    import { onMount } from 'svelte';

    let currentIndex = 0;
    let autoplayInterval: number;

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Homeowner',
            avatar: '👩‍💼',
            rating: 5,
            text: 'Switched to Swiftel 6 months ago and haven\'t looked back. The speeds are incredible and customer service is top-notch!',
            location: 'Manchester'
        },
        {
            name: 'David Chen',
            role: 'Small Business Owner',
            avatar: '👨‍💻',
            rating: 5,
            text: 'Our business relies on fast, reliable internet. Swiftel delivers every single day. The business package with static IP is perfect for us.',
            location: 'London'
        },
        {
            name: 'Emma Williams',
            role: 'Remote Worker',
            avatar: '👩‍🎨',
            rating: 5,
            text: 'As someone who works from home, having reliable internet is crucial. Swiftel has been flawless. Video calls are crystal clear!',
            location: 'Birmingham'
        },
        {
            name: 'Michael Brown',
            role: 'Gamer',
            avatar: '🎮',
            rating: 5,
            text: 'The low latency is a game-changer for online gaming. No more lag, no more excuses! Absolutely love the 500Mbps package.',
            location: 'Leeds'
        },
        {
            name: 'Lisa Thompson',
            role: 'Family of 5',
            avatar: '👨‍👩‍👧‍👦',
            rating: 5,
            text: 'With 5 people streaming, gaming, and working simultaneously, we needed serious bandwidth. Swiftel handles it all without breaking a sweat!',
            location: 'Bristol'
        }
    ];

    function next() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        resetAutoplay();
    }

    function prev() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        resetAutoplay();
    }

    function goTo(index: number) {
        currentIndex = index;
        resetAutoplay();
    }

    function resetAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
        startAutoplay();
    }

    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            next();
        }, 5000) as unknown as number;
    }

    onMount(() => {
        startAutoplay();
        return () => {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
            }
        };
    });
</script>

<section class="py-20 bg-card">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
                What Our <span class="gradient-text">Customers Say</span>
            </h2>
            <p class="text-xl text-muted max-w-2xl mx-auto">
                Join thousands of happy customers who've made the switch to Swiftel
            </p>
        </div>

        <div class="max-w-4xl mx-auto">
            <!-- Testimonial cards -->
            <div class="relative overflow-hidden rounded-2xl">
                <div
                        class="flex transition-transform duration-500 ease-out"
                        style="transform: translateX(-{currentIndex * 100}%)"
                >
                    {#each testimonials as testimonial}
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-bg rounded-2xl p-8 md:p-12 card-hover">
                                <!-- Stars -->
                                <div class="flex gap-1 mb-6 justify-center md:justify-start">
                                    {#each Array(testimonial.rating) as _}
                                        <svg class="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                        </svg>
                                    {/each}
                                </div>

                                <!-- Quote -->
                                <blockquote class="text-xl md:text-2xl text-DEFAULT mb-8 leading-relaxed">
                                    "{testimonial.text}"
                                </blockquote>

                                <!-- Author -->
                                <div class="flex items-center gap-4">
                                    <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl flex-shrink-0">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div class="font-bold text-lg">{testimonial.name}</div>
                                        <div class="text-muted">{testimonial.role}</div>
                                        <div class="text-sm text-muted">📍 {testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Navigation -->
            <div class="flex items-center justify-center gap-4 mt-8">
                <button
                        on:click={prev}
                        class="p-3 rounded-full bg-bg hover:bg-border transition-colors"
                        aria-label="Previous testimonial"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>

                <!-- Dots -->
                <div class="flex gap-2">
                    {#each testimonials as _, index}
                        <button
                                on:click={() => goTo(index)}
                                class="w-3 h-3 rounded-full transition-all duration-300 {index === currentIndex ? 'bg-primary w-8' : 'bg-border'}"
                                aria-label="Go to testimonial {index + 1}"
                        />
                    {/each}
                </div>

                <button
                        on:click={next}
                        class="p-3 rounded-full bg-bg hover:bg-border transition-colors"
                        aria-label="Next testimonial"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>

            <!-- Trust indicators -->
            <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="text-center card-hover p-4 rounded-lg">
                    <div class="text-4xl mb-2">⭐</div>
                    <div class="text-2xl font-bold gradient-text">4.9/5</div>
                    <div class="text-sm text-muted">Trustpilot Rating</div>
                </div>
                <div class="text-center card-hover p-4 rounded-lg">
                    <div class="text-4xl mb-2">🏆</div>
                    <div class="text-2xl font-bold gradient-text">#1</div>
                    <div class="text-sm text-muted">ISP Award 2024</div>
                </div>
                <div class="text-center card-hover p-4 rounded-lg">
                    <div class="text-4xl mb-2">💯</div>
                    <div class="text-2xl font-bold gradient-text">99.9%</div>
                    <div class="text-sm text-muted">Uptime</div>
                </div>
                <div class="text-center card-hover p-4 rounded-lg">
                    <div class="text-4xl mb-2">😊</div>
                    <div class="text-2xl font-bold gradient-text">10K+</div>
                    <div class="text-sm text-muted">Happy Customers</div>
                </div>
            </div>
        </div>
    </div>
</section>