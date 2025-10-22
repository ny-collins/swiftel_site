<script>
  import { onMount, onDestroy } from 'svelte';
  import { tick } from 'svelte';

  export let totalItems = 0;
  export let containerId = '';
  export let itemSelector = '';

  let activeIndex = 0;
  let items = [];
  let container;
  let observer;

  async function initObserver() {
    await tick();
    cleanupObserver();

    container = document.getElementById(containerId);
    if (!container) return;

    items = Array.from(container.querySelectorAll(itemSelector));
    if (!items.length) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = items.indexOf(entry.target);
          if (index >= 0) activeIndex = index;
        }
      });
    }, {
      root: container,
      threshold: 0.6
    });

    items.forEach(item => observer.observe(item));
  }

  function cleanupObserver() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }

  onMount(() => {
    initObserver();
  });

  onDestroy(() => {
    cleanupObserver();
  });

  function scrollToIndex(index) {
    if (items[index]) {
      items[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }

  export { initObserver, scrollToIndex };
</script>

<div class="indicator-container">
  {#each Array(totalItems) as _, i}
    <button
      type="button"
      on:click={() => scrollToIndex(i)}
      class="indicator-dot"
      class:active={activeIndex === i}
      aria-label={`Go to item ${i + 1}`}
    ></button>
  {/each}
</div>