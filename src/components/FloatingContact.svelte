<script lang="ts">
    import { onMount } from 'svelte';

    let isVisible = false;
    let isOpen = false;

    onMount(() => {
        const handleScroll = () => {
            // Show button after scrolling 300px
            isVisible = window.scrollY > 300;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    function toggleChat() {
        isOpen = !isOpen;
    }
</script>

{#if isVisible}
    <div class="fixed bottom-6 right-6 z-50">
        <!-- Chat bubble -->
        {#if isOpen}
            <div class="mb-4 bg-card rounded-2xl shadow-2xl border border-DEFAULT w-80 animate-scale-in">
                <div class="p-4 bg-gradient-to-r from-primary to-accent rounded-t-2xl">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <span class="text-xl">💬</span>
                            </div>
                            <div>
                                <h3 class="font-semibold text-white">Chat with us</h3>
                                <p class="text-xs text-white/80">We typically reply in minutes</p>
                            </div>
                        </div>
                        <button on:click={toggleChat} class="text-white hover:text-white/80 transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="p-6">
                    <div class="space-y-3">
                        <a
                                href="tel:08001234567"
                                class="flex items-center gap-3 p-3 rounded-lg hover:bg-bg transition-colors"
                        >
                            <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <span class="text-xl">📞</span>
                            </div>
                            <div>
                                <p class="font-semibold text-sm">Call us</p>
                                <p class="text-xs text-muted">0800 123 4567</p>
                            </div>
                        </a>

                        <a
                                href="mailto:hello@swiftel.com"
                                class="flex items-center gap-3 p-3 rounded-lg hover:bg-bg transition-colors"
                        >
                            <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                                <span class="text-xl">✉️</span>
                            </div>
                            <div>
                                <p class="font-semibold text-sm">Email us</p>
                                <p class="text-xs text-muted">hello@swiftel.com</p>
                            </div>
                        </a>

                        <a
                                href="#contact"
                                class="flex items-center gap-3 p-3 rounded-lg hover:bg-bg transition-colors"
                        >
                            <div class="w-10 h-10 bg-secondary-accent/10 rounded-full flex items-center justify-center">
                                <span class="text-xl">📝</span>
                            </div>
                            <div>
                                <p class="font-semibold text-sm">Contact form</p>
                                <p class="text-xs text-muted">Get a quote</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        {/if}

        <!-- Floating button -->
        <button
                on:click={toggleChat}
                class="btn-glow w-16 h-16 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-2xl flex items-center justify-center text-2xl transform transition-transform hover:scale-110"
                aria-label="Toggle chat"
        >
            {#if isOpen}
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            {:else}
                <span>💬</span>
            {/if}
        </button>

        <!-- Pulse ring -->
        {#if !isOpen}
            <div class="absolute inset-0 rounded-full bg-primary animate-ping opacity-25"></div>
        {/if}
    </div>
{/if}