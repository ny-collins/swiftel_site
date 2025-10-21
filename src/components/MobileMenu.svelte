<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    export let isOpen = false;

    const dispatch = createEventDispatcher();

    function close() {
        dispatch('close');
    }

    function handleLinkClick() {
        close();
    }
</script>

{#if isOpen}
    <!-- Backdrop -->
    <div
            class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
            on:click={close}
            on:keydown={(e) => e.key === 'Escape' && close()}
            role="button"
            tabindex="0"
    ></div>

    <!-- Menu -->
    <div class="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-card shadow-2xl z-50 animate-slide-in-right">
        <div class="flex flex-col h-full">
            <!-- Header -->
            <div class="flex items-center justify-between p-6 border-b border-DEFAULT">
                <span class="text-xl font-bold gradient-text">Menu</span>
                <button
                        on:click={close}
                        class="p-2 rounded-lg hover:bg-bg transition-colors"
                        aria-label="Close menu"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            <!-- Navigation Links -->
            <nav class="flex-1 overflow-y-auto p-6">
                <div class="space-y-2">
                    <a
                            href="/"
                            on:click={handleLinkClick}
                            class="block px-4 py-3 rounded-lg hover:bg-bg transition-colors font-medium animate-fade-in-up stagger-1"
                    >
                        🏠 Home
                    </a>
                    <a
                            href="/#packages"
                            on:click={handleLinkClick}
                            class="block px-4 py-3 rounded-lg hover:bg-bg transition-colors font-medium animate-fade-in-up stagger-2"
                    >
                        📦 Packages
                    </a>
                    <a
                            href="/about"
                            on:click={handleLinkClick}
                            class="block px-4 py-3 rounded-lg hover:bg-bg transition-colors font-medium animate-fade-in-up stagger-3"
                    >
                        ℹ️ About Us
                    </a>
                    <a
                            href="/learn"
                            on:click={handleLinkClick}
                            class="block px-4 py-3 rounded-lg hover:bg-bg transition-colors font-medium animate-fade-in-up stagger-4"
                    >
                        📚 Learn
                    </a>
                    <a
                            href="/#contact"
                            on:click={handleLinkClick}
                            class="block px-4 py-3 rounded-lg hover:bg-bg transition-colors font-medium animate-fade-in-up stagger-5"
                    >
                        ✉️ Contact
                    </a>
                </div>

                <!-- CTA Button -->
                <div class="mt-8 animate-fade-in-up stagger-6">
                    <a
                            href="/#packages"
                            on:click={handleLinkClick}
                            class="btn-glow block w-full py-3 px-6 bg-primary text-white rounded-lg font-semibold text-center hover:bg-primary-dark transition-all"
                    >
                        Get Started
                    </a>
                </div>

                <!-- Contact Info -->
                <div class="mt-8 p-4 bg-bg rounded-lg animate-fade-in-up stagger-6">
                    <p class="text-sm font-semibold mb-3">Contact Us</p>
                    <div class="space-y-2 text-sm text-muted">
                        <a href="tel:08001234567" class="flex items-center gap-2 hover:text-primary transition-colors">
                            <span>📞</span>
                            <span>0800 123 4567</span>
                        </a>
                        <a href="mailto:hello@swiftel.com" class="flex items-center gap-2 hover:text-primary transition-colors">
                            <span>✉️</span>
                            <span>hello@swiftel.com</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
{/if}