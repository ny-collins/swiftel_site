<script lang="ts">
    import { onMount } from 'svelte';
    import ThemeToggle from './ThemeToggle.svelte';
    import MobileMenu from './MobileMenu.svelte';

    let isScrolled = false;
    let isMobileMenuOpen = false;

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 20;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }
</script>

<header
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'glass-effect shadow-lg py-3' : 'bg-transparent py-5'}"
>
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <a href="/" class="flex items-center gap-3 group">
                <div class="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <span class="text-white font-bold text-xl">S</span>
                </div>
                <span class="text-2xl font-bold">
          <span class="gradient-text">Swiftel</span>
        </span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-8">
                <a href="/#packages" class="text-muted hover:text-primary transition-colors font-medium">Packages</a>
                <a href="/about" class="text-muted hover:text-primary transition-colors font-medium">About</a>
                <a href="/learn" class="text-muted hover:text-primary transition-colors font-medium">Learn</a>
                <a href="/#contact" class="text-muted hover:text-primary transition-colors font-medium">Contact</a>
                <ThemeToggle />
                <a
                        href="/#packages"
                        class="btn-glow px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all"
                >
                    Get Started
                </a>
            </nav>

            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center gap-4">
                <ThemeToggle />
                <button
                        on:click={toggleMobileMenu}
                        class="p-2 rounded-lg hover:bg-border transition-colors"
                        aria-label="Toggle menu"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {#if isMobileMenuOpen}
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        {:else}
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        {/if}
                    </svg>
                </button>
            </div>
        </div>
    </div>
</header>

<MobileMenu isOpen={isMobileMenuOpen} on:close={() => isMobileMenuOpen = false} />