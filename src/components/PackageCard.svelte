<script lang="ts">
    export let name: string;
    export let speed: string;
    export let price: string;
    export let features: string[];
    export let isPopular: boolean = false;

    let isExpanded = false;

    const featureIcons: Record<string, string> = {
        'unlimited': '∞',
        'data': '∞',
        'router': '📡',
        'installation': '🔧',
        'support': '💬',
        'static ip': '🌐',
        'priority': '⚡',
        'sla': '✓',
        'wi-fi': '📶',
        'managed': '⚙️',
        'ddos': '🛡️',
        'backup': '🔄',
        'security': '🔒',
        'monitoring': '📊',
        'phone': '☎️'
    };

    function getIcon(feature: string): string {
        const lowerFeature = feature.toLowerCase();
        for (const [key, icon] of Object.entries(featureIcons)) {
            if (lowerFeature.includes(key)) {
                return icon;
            }
        }
        return '✓';
    }
</script>

<div
        class="package-card relative bg-card rounded-2xl p-6 border-2 transition-all duration-300 card-hover {isPopular ? 'border-primary popular-card' : 'border-DEFAULT'}"
        class:expanded={isExpanded}
>
    {#if isPopular}
        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div class="px-4 py-1 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-full popular-badge whitespace-nowrap">
                ⭐ Most Popular
            </div>
        </div>
    {/if}

    <div class="mb-6">
        <h3 class="text-2xl font-bold mb-2 {isPopular ? 'gradient-text' : ''}">{name}</h3>
        <div class="flex items-baseline gap-2">
            <span class="text-4xl font-bold gradient-text">{speed}</span>
            <span class="text-muted text-sm">Mbps</span>
        </div>
    </div>

    <div class="mb-6">
        <div class="flex items-baseline gap-1">
            <span class="text-sm text-muted">From</span>
            <span class="text-3xl font-bold">£{price}</span>
            <span class="text-muted">/month</span>
        </div>
    </div>

    <button
            on:click={() => isExpanded = !isExpanded}
            class="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-6 {isPopular ? 'btn-glow bg-primary text-white hover:bg-primary-dark' : 'bg-bg text-DEFAULT hover:bg-border'}"
    >
        Get Started
    </button>

    <div class="space-y-3">
        {#each features.slice(0, isExpanded ? features.length : 4) as feature, i}
            <div class="flex items-start gap-3 feature-item" style="animation-delay: {i * 0.05}s">
                <span class="text-xl flex-shrink-0 mt-0.5">{getIcon(feature)}</span>
                <span class="text-DEFAULT">{feature}</span>
            </div>
        {/each}
    </div>

    {#if features.length > 4}
        <button
                on:click={() => isExpanded = !isExpanded}
                class="mt-4 text-primary hover:text-primary-dark font-medium flex items-center gap-2 transition-colors"
        >
            <span>{isExpanded ? 'Show less' : `Show ${features.length - 4} more features`}</span>
            <svg
                    class="w-4 h-4 transition-transform duration-300"
                    class:rotate-180={isExpanded}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
    {/if}
</div>

<style>
    .package-card {
        position: relative;
        overflow: hidden;
    }

    .package-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, transparent, rgb(var(--color-primary)), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .package-card:hover::before {
        opacity: 1;
    }

    .popular-card {
        box-shadow: 0 0 0 1px rgb(var(--color-primary)), 0 20px 40px rgba(var(--color-primary), 0.2);
        transform: scale(1.02);
    }

    .popular-badge {
        animation: shimmer 3s infinite;
        background-size: 200% 100%;
        box-shadow: 0 4px 15px rgba(var(--color-primary), 0.4);
    }

    .feature-item {
        opacity: 0;
        animation: fadeInLeft 0.3s ease forwards;
    }

    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-10px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes shimmer {
        0% {
            background-position: -200% 0;
        }
        100% {
            background-position: 200% 0;
        }
    }
</style>