<script lang="ts">
    let postcode = '';
    let isChecking = false;
    let result: { available: boolean; message: string } | null = null;

    function checkAvailability() {
        isChecking = true;
        result = null;

        // Simulate API call
        setTimeout(() => {
            // Simple simulation - in reality, this would call your backend API
            const random = Math.random();
            if (random > 0.5) {
                result = {
                    available: true,
                    message: '🎉 Great news! Swiftel Fibre is available in your area. Our fastest speeds are ready for you.'
                };
            } else {
                result = {
                    available: false,
                    message: '😔 We\'re not in your area yet, but we\'re expanding fast! Register your interest and we\'ll notify you when we arrive.'
                };
            }
            isChecking = false;
        }, 1500);
    }

    function handleSubmit(e: Event) {
        e.preventDefault();
        if (postcode.trim()) {
            checkAvailability();
        }
    }
</script>

<section class="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
                Check <span class="gradient-text">Availability</span>
            </h2>
            <p class="text-xl text-muted max-w-2xl mx-auto">
                Enter your postcode to see if Swiftel Fibre is available in your area
            </p>
        </div>

        <div class="max-w-2xl mx-auto">
            <!-- Postcode checker -->
            <form on:submit={handleSubmit} class="mb-8">
                <div class="flex flex-col sm:flex-row gap-4">
                    <input
                            type="text"
                            bind:value={postcode}
                            placeholder="Enter your postcode (e.g., SW1A 1AA)"
                            class="flex-1 px-6 py-4 rounded-lg border-2 border-DEFAULT bg-card focus:border-primary outline-none transition-colors text-lg"
                            required
                    />
                    <button
                            type="submit"
                            disabled={isChecking}
                            class="btn-glow px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {#if isChecking}
              <span class="flex items-center gap-2">
                <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Checking...
              </span>
                        {:else}
                            Check Now
                        {/if}
                    </button>
                </div>
            </form>

            <!-- Result -->
            {#if result}
                <div class="animate-scale-in p-6 rounded-2xl {result.available ? 'bg-green-500/10 border-2 border-green-500' : 'bg-yellow-500/10 border-2 border-yellow-500'}">
                    <p class="text-lg leading-relaxed mb-4">{result.message}</p>
                    {#if result.available}
                        <a
                                href="#packages"
                                class="btn-glow inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all"
                        >
                            View Packages
                        </a>
                    {:else}
                        <button
                                class="btn-glow inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all"
                        >
                            Register Interest
                        </button>
                    {/if}
                </div>
            {/if}

            <!-- Coverage stats -->
            <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="text-center p-6 bg-card rounded-xl card-hover">
                    <div class="text-4xl font-bold gradient-text mb-2">150+</div>
                    <p class="text-muted">Cities Covered</p>
                </div>
                <div class="text-center p-6 bg-card rounded-xl card-hover">
                    <div class="text-4xl font-bold gradient-text mb-2">5M+</div>
                    <p class="text-muted">Homes Passed</p>
                </div>
                <div class="text-center p-6 bg-card rounded-xl card-hover">
                    <div class="text-4xl font-bold gradient-text mb-2">24/7</div>
                    <p class="text-muted">Support Available</p>
                </div>
            </div>
        </div>
    </div>
</section>