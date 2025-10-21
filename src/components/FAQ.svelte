<script lang="ts">
    let openIndex: number | null = null;

    const faqs = [
        {
            question: 'What speeds can I expect with Swiftel Fibre?',
            answer: 'Our fibre packages range from 100Mbps to 1Gbps. You\'ll get symmetrical upload and download speeds, meaning your upload speed is just as fast as your download speed - perfect for video calls, cloud backups, and content creation.'
        },
        {
            question: 'Is there a contract or minimum term?',
            answer: 'We offer both contract-free rolling monthly plans and 12-month contracts with discounted rates. You have the flexibility to choose what works best for you. There are no hidden fees or surprise charges.'
        },
        {
            question: 'How long does installation take?',
            answer: 'Installation typically takes 2-3 hours. Our professional engineers will install the fibre line to your property, set up the router, and ensure everything is working perfectly before they leave. We\'ll provide a specific appointment window when you sign up.'
        },
        {
            question: 'What happens if there\'s a problem?',
            answer: 'Our 24/7 UK-based support team is always here to help. We also offer a 99.9% uptime guarantee. If you experience any issues, we\'ll work to resolve them as quickly as possible, and you can track the status through our customer portal.'
        },
        {
            question: 'Can I keep my current phone number?',
            answer: 'Yes! If you\'re switching from another provider, we can port your existing phone number to our service. The process is seamless and usually completed within 10 working days.'
        },
        {
            question: 'Do I need any special equipment?',
            answer: 'No additional equipment needed! We provide a state-of-the-art Wi-Fi 6 router free of charge with all our packages. It\'s pre-configured and ready to use, with excellent coverage for most homes and small offices.'
        },
        {
            question: 'Is fibre available in my area?',
            answer: 'We\'re expanding rapidly across the UK. Enter your postcode on our homepage to check availability. Even if we\'re not in your area yet, you can register your interest, and we\'ll notify you as soon as service becomes available.'
        },
        {
            question: 'What makes Swiftel different from other providers?',
            answer: 'We focus on three things: blazing-fast speeds, rock-solid reliability, and exceptional customer service. Unlike some providers, we don\'t oversell our network, meaning you get the speeds you pay for, even during peak times.'
        }
    ];

    function toggle(index: number) {
        openIndex = openIndex === index ? null : index;
    }
</script>

<section class="py-20 bg-bg">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked <span class="gradient-text">Questions</span>
            </h2>
            <p class="text-xl text-muted max-w-2xl mx-auto">
                Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
            </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
            {#each faqs as faq, index}
                <div class="bg-card rounded-xl border border-DEFAULT overflow-hidden transition-all duration-300 {openIndex === index ? 'shadow-lg' : ''}">
                    <button
                            on:click={() => toggle(index)}
                            class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-bg/50 transition-colors"
                    >
                        <span class="font-semibold text-lg pr-8">{faq.question}</span>
                        <svg
                                class="w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 {openIndex === index ? 'rotate-180' : ''}"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    <div
                            class="overflow-hidden transition-all duration-300"
                            style="max-height: {openIndex === index ? '500px' : '0'}"
                    >
                        <div class="px-6 pb-4 text-muted leading-relaxed">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- CTA -->
        <div class="mt-16 text-center">
            <p class="text-lg text-muted mb-4">Still have questions?</p>
            <a
                    href="#contact"
                    class="btn-glow inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all"
            >
                Contact Support
            </a>
        </div>
    </div>
</section>