<script>
  import PackageCard from './PackageCard.svelte';
  import ScrollIndicator from './ScrollIndicator.svelte';

  export let homePackages = [];
  export let businessPackages = [];

  let activeTab = 'home';
  let wiggleTab = null;

  function handleClick(tab) {
    activeTab = tab;
    wiggleTab = tab;
    setTimeout(() => {
      wiggleTab = null;
    }, 400);
  }
</script>

<section id="packages" class="py-20 lg:py-32 bg-DEFAULT overflow-hidden">
  <div class="container mx-auto px-6">
    <div class="text-center mb-12 max-w-2xl mx-auto">
      <h2 class="text-4xl lg:text-5xl font-extrabold text-DEFAULT">Find the Perfect Plan</h2>
      <p class="text-lg text-muted mt-4">Simple, transparent pricing for every need. No hidden fees, no data caps, just pure fibre.</p>
    </div>
  </div>

  <div class="flex justify-center mb-12">
    <div class="package-toggle-container">
      <button
        class="toggle-button"
        class:active={activeTab === 'home'}
        class:wiggle={wiggleTab === 'home'}
        on:click={() => handleClick('home')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2"><path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" /></svg>
        <span>For Home</span>
      </button>
      <button
        class="toggle-button"
        class:active={activeTab === 'business'}
        class:wiggle={wiggleTab === 'business'}
        on:click={() => handleClick('business')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2">
          <path fill-rule="evenodd" d="M8 2.25A2.25 2.25 0 0 0 5.75 4.5v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 1 8 3.75h4a.75.75 0 0 1 .75.75v.5a.75.75 0 0 0 1.5 0v-.5A2.25 2.25 0 0 0 12 2.25H8ZM4.75 6.75A.75.75 0 0 0 4 7.5v7.25A2.25 2.25 0 0 0 6.25 17h7.5A2.25 2.25 0 0 0 16 14.75V7.5a.75.75 0 0 0-.75-.75H4.75Z" clip-rule="evenodd" />
        </svg>
        <span>For Business</span>
      </button>
    </div>
  </div>

  {#if activeTab === 'home'}
    <div>
      <div id="home-scroller" class="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory px-6 md:container md:mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:px-6">
        {#each homePackages as pkg}
          <div class="package-item-home flex-shrink-0 w-[80%] max-w-sm md:w-auto md:max-w-none snap-center">
            <PackageCard {...pkg} />
          </div>
        {/each}
      </div>
      <div class="container mx-auto px-6 mt-8 md:hidden">
        <ScrollIndicator totalItems={homePackages.length} containerId="home-scroller" itemSelector=".package-item-home" />
      </div>
    </div>
  {/if}

  {#if activeTab === 'business'}
    <div>
      <div id="business-scroller" class="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory px-6 md:container md:mx-auto md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0 md:px-6">
        {#each businessPackages as pkg}
          <div class="package-item-business flex-shrink-0 w-[80%] max-w-sm md:w-auto md:max-w-none snap-center">
            <PackageCard {...pkg} />
          </div>
        {/each}
      </div>
      <div class="container mx-auto px-6 mt-8 md:hidden">
        <ScrollIndicator totalItems={businessPackages.length} containerId="business-scroller" itemSelector=".package-item-business" />
      </div>
    </div>
  {/if}
</section>