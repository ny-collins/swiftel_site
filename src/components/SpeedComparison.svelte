<script lang="ts">
    import { onMount } from 'svelte';

    let visible = false;
    let fileSize = 10;
    let userSpeed = 100;

    const comparisons = [
        {
            name: 'ADSL',
            speed: 24,
            color: 'bg-red-500',
            icon: '🐌'
        },
        {
            name: 'Cable',
            speed: 100,
            color: 'bg-yellow-500',
            icon: '🚗'
        },
        {
            name: 'Fibre',
            speed: 1000,
            color: 'bg-green-500',
            icon: '🚀'
        }
    ];

    function calculateDownloadTime(speedMbps: number, fileSizeMB: number): string {
        const timeSeconds = (fileSizeMB * 8) / speedMbps;

        if (timeSeconds < 60) {
            return `${Math.round(timeSeconds)}s`;
        } else if (timeSeconds < 3600) {
            return `${Math.round(timeSeconds / 60)}m`;
        } else {
            const hours = Math.floor(timeSeconds / 3600);
            const minutes = Math.round((timeSeconds % 3600) / 60);
            return `${hours}h ${minutes}m`;
        }
    }

    $: calculatedTime = calculateDownloadTime(userSpeed, fileSize * 1000);

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    visible = true;
                }
            },
            { threshold: 0.3 }
        );

        const element = document.querySelector('.speed-comparison');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    });
</script>

<section class="speed-comparison py-20 bg-bg">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
                Why Choose <span class="gradient-text">Fibre?</span>
            </h2>
            <p class="text-xl text-muted max-w-2xl mx-auto">
                See how fibre optic broadband compares to traditional internet connections
            </p>
        </div>

        <div class="max-w-4xl mx-auto">
            <div class="space-y-8">
                {#each comparisons as comparison, index}
                    <div class="comparison-row">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <span class="text-3xl">{comparison.icon}</span>
                                <div>
                                    <h3 class="text-xl font-bold">{comparison.name}</h3>
                                    <p class="text-sm text-muted">Up to {comparison.speed} Mbps</p>
                                </div>
                            </div>
                            <div class="text-2xl font-bold gradient-text">
                                {comparison.speed} Mbps
                            </div>
                        </div>

                        <div class="relative h-12 bg-border rounded-full overflow-hidden">
                            <div
                                    class="absolute top-0 left-0 h-full {comparison.color} rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                                    style="width: {visible ? (comparison.speed / 1000) * 100 : 0}%"
                            >
                                {#if visible && comparison.speed >= 100}
                  <span class="text-white font-bold text-sm">
                    {((comparison.speed / 1000) * 100).toFixed(0)}%
                  </span>
                                {/if}
                            </div>
                        </div>

                        <!-- Download time examples -->
                        <div class="mt-3 grid grid-cols-2 gap-4 text-sm">
                            <div class="flex items-center gap-2 text-muted">
                                <span>🎬</span>
                                <span>HD Movie (5GB): {calculateDownloadTime(comparison.speed, 5000)}</span>
                            </div>
                            <div class="flex items-center gap-2 text-muted">
                                <span>🎮</span>
                                <span>Game (50GB): {calculateDownloadTime(comparison.speed, 50000)}</span>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>

            <!-- Interactive calculator -->
            <div class="mt-16 p-8 glass-effect rounded-2xl">
                <h3 class="text-2xl font-bold mb-6 text-center">Download Time Calculator</h3>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium mb-2">File Size (GB)</label>
                        <input
                                type="number"
                                bind:value={fileSize}
                                min="1"
                                class="w-full px-4 py-3 rounded-lg border-2 border-DEFAULT bg-card focus:border-primary outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Your Speed (Mbps)</label>
                        <input
                                type="number"
                                bind:value={userSpeed}
                                min="1"
                                class="w-full px-4 py-3 rounded-lg border-2 border-DEFAULT bg-card focus:border-primary outline-none transition-colors"
                        />
                    </div>
                </div>
                <div class="mt-6 p-4 bg-primary/10 rounded-lg text-center">
                    <p class="text-muted mb-2">Estimated download time:</p>
                    <p class="text-3xl font-bold gradient-text">{calculatedTime}</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .comparison-row {
        opacity: 0;
        animation: fadeInUp 0.6s ease-out forwards;
    }

    .comparison-row:nth-child(1) { animation-delay: 0.1s; }
    .comparison-row:nth-child(2) { animation-delay: 0.2s; }
    .comparison-row:nth-child(3) { animation-delay: 0.3s; }
</style>