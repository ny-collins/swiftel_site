<script>
  import { slide } from 'svelte/transition';

  export let name = '';
  export let speed = '';
  export let price = '';
  export let description = '';
  export let features = [];
  export let isFeatured = false;

  let expanded = false;

  function toggleExpand() {
    expanded = !expanded;
  }
</script>

<<div class={`
  relative flex flex-col text-center p-6 md:p-6 lg:p-8 rounded-2xl border-2 transition-all duration-300 h-full
  ${isFeatured 
    ? 'bg-card border-primary shadow-2xl shadow-primary/20 transform lg:scale-105' 
    : 'bg-card/50 border-DEFAULT'}
`}>
  
  {#if isFeatured}
    <div class="absolute top-0 right-4 lg:right-6 bg-accent text-neutral-900 font-bold text-xs md:text-sm px-3 py-1 rounded-b-lg">
      Best Value
    </div>
  {/if}

  <h3 class="text-2xl lg:text-3xl font-bold text-DEFAULT">{name}</h3>
  
  <div class="my-4 lg:my-6">
    <span class="text-5xl lg:text-6xl font-extrabold text-accent leading-none">{speed}</span>
    <span class="text-lg lg:text-xl font-medium text-muted"> Mbps</span>
  </div>
  
  <p class="text-lg lg:text-xl text-DEFAULT">
    Ksh. {price}<span class="text-muted text-base">/month</span>
  </p>

  <p class="text-muted mt-4 flex-grow text-sm md:text-base min-h-[5rem]">
    {description}
  </p>
  
  <button 
    on:click={toggleExpand} 
    class="mx-auto my-4 text-muted hover:text-primary transition-colors"
    aria-label={expanded ? 'Collapse details' : 'Expand details'}
  >
    </button>

  {#if expanded}
    <div class="border-t-2 border-DEFAULT pt-6 text-left" transition:slide={{ duration: 300 }}>
      <ul class="space-y-3">
        {#each features as feature}
          <li class="flex items-start gap-3">
            <span class="text-muted text-sm">{feature}</span>
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  <div class="mt-8">
    <a href="/contact" class={`
      block w-full text-center font-bold py-3 px-6 rounded-lg transition-colors
      ${isFeatured 
        ? 'bg-primary hover:bg-primary-dark text-white' 
        : 'bg-border hover:bg-primary text-DEFAULT hover:text-white'}
    `}>
      Order Now
    </a>
  </div>
</div>