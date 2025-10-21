<script>
  import { onMount, onDestroy } from 'svelte';
  
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  // Prevent scrolling the body when the menu is open
  onMount(() => {
    const unsubscribe = () => {
      isOpen = false;
    };
    window.addEventListener('astro:page-load', unsubscribe);
    onDestroy(() => window.removeEventListener('astro:page-load', unsubscribe));
  });

  $: if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Learn", href: "/learn" },
    { name: "Contact", href: "/contact" },
  ];
</script>

<div class="md:hidden">
  <button on:click={toggleMenu} class="z-50 relative p-2 text-DEFAULT" aria-label="Open menu">
    {#if isOpen}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
      </svg>
    {/if}
  </button>

  {#if isOpen}
    <div class="fixed inset-0 bg-DEFAULT z-40 flex flex-col items-center justify-center space-y-8">
      
      {#each navLinks as link}
        <a href={link.href} class="text-3xl font-bold text-DEFAULT hover:text-primary transition-colors">
          {link.name}
        </a>
      {/each}
      
      <a href="/contact" class="text-2xl font-bold bg-accent text-neutral-900 py-3 px-8 rounded-lg transition-colors">
        Get Connected
      </a>
    </div>
  {/if}
</div>