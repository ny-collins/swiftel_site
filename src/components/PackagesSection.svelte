<script>
  import PackageCard from './PackageCard.svelte';
  import ScrollIndicator from './ScrollIndicator.svelte';
  import { tick } from 'svelte';

  export let homePackages = [];
  export let businessPackages = [];

  let activeTab = 'home';
  let wiggleTab = null;
  let homeIndicatorRef;
  let businessIndicatorRef;

  function handleClick(tab) {
    activeTab = tab;
    wiggleTab = tab;
    setTimeout(() => wiggleTab = null, 400);
    tick().then(() => {
      if (tab === 'home' && homeIndicatorRef?.initObserver) homeIndicatorRef.initObserver();
      if (tab === 'business' && businessIndicatorRef?.initObserver) businessIndicatorRef.initObserver();
    });
  }
</script>

<section class="py-16 lg:py-24">
  <div class="container mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-4xl lg:text-5xl font-extrabold">Choose Your Package</h2>
      <p class="text-lg text-muted mt-4">Whether you're at home or running a business, we’ve got you covered.</p>
    </div>

    <div class="package-toggle-container">
      <button
        type="button"
        class="toggle-button"
        class:active={activeTab === 'home'}
        class:wiggle={wiggleTab === 'home'}
        aria-pressed={activeTab === 'home'}
        on:click={() => handleClick('home')}
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
          <title>For Home</title>
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
        </svg>
        <span>For Home</span>
      </button>

      <button
        type="button"
        class="toggle-button"
        class:active={activeTab === 'business'}
        class:wiggle={wiggleTab === 'business'}
        aria-pressed={activeTab === 'business'}
        on:click={() => handleClick('business')}
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
          <title>For Business</title>
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3.75h15a.75.75 0 01.75.75v15a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75v-15a.75.75 0 01.75-.75z" />
        </svg>
        <span>For Business</span>
      </button>
    </div>

    <div class="mt-12">
      {#if activeTab === 'home'}
        <div id="home-scroller" class="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">
          {#each homePackages as pkg}
            <div class="package-item-home snap-start shrink-0 w-[300px] md:w-[340px] lg:w-[360px]">
              <PackageCard {...pkg} />
            </div>
          {/each}
        </div>
        <ScrollIndicator bind:this={homeIndicatorRef} totalItems={homePackages.length} containerId="home-scroller" itemSelector=".package-item-home" />
      {:else}
        <div id="business-scroller" class="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">
          {#each businessPackages as pkg}
            <div class="package-item-business snap-start shrink-0 w-[300px] md:w-[340px] lg:w-[360px]">
              <PackageCard {...pkg} />
            </div>
          {/each}
        </div>
        <ScrollIndicator bind:this={businessIndicatorRef} totalItems={businessPackages.length} containerId="business-scroller" itemSelector=".package-item-business" />
      {/if}
    </div>
  </div>
</section>