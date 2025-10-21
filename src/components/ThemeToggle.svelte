<script>
  import { onMount } from 'svelte';

  let isDark = false;

  // On component mount, check the saved theme
  onMount(() => {
    isDark = document.documentElement.classList.contains('dark');
  });

  function toggleTheme() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
</script>

<button 
  on:click={toggleTheme} 
  class="text-muted hover:text-primary transition-colors p-2 rounded-full"
  aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
>
  {#if isDark}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
      <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1 .75.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM.25 10.75a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM14.596 6.464a.75.75 0 1 0 1.06-1.06l-1.06-1.06a.75.75 0 0 0-1.06 1.06l1.06 1.06ZM5.404 15.657a.75.75 0 1 0 1.06-1.06l-1.06-1.06a.75.75 0 0 0-1.06 1.06l1.06 1.06Z" />
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
      <path fill-rule="evenodd" d="M7.455 1.154a.75.75 0 0 1 .11 1.05l-.09.1a.75.75 0 0 0 .93 1.23l.192-.121a.75.75 0 0 1 1.061 1.06l-.12 1.922a.75.75 0 0 0 1.23.93l.1-.09a.75.75 0 0 1 1.05.11l.121.192a.75.75 0 0 0 .93 1.23l.09-.1a.75.75 0 0 1 1.05.11l1.92.122a.75.75 0 0 0 .93 1.23l.09-.1a.75.75 0 0 1 1.05.11l.192.121a.75.75 0 0 0 1.23.93l-.121.192a.75.75 0 0 1-1.06 1.061l-1.922.12a.75.75 0 0 0-.93 1.23l.1.09a.75.75 0 0 1-.11 1.05l-.192.121a.75.75 0 0 0-1.23.93l.121.192a.75.75 0 0 1-1.06 1.06l-1.92-.12a.75.75 0 0 0-1.23.93l-.1.09a.75.75 0 0 1-1.05.11l-.121-.192a.75.75 0 0 0-1.23-.93l-.09.1a.75.75 0 0 1-1.05-.11l-1.92-.12a.75.75 0 0 0-.93-1.23l-.09.1a.75.75 0 0 1-1.05-.11l-.192-.121a.75.75 0 0 0-1.23-.93l.121-.192a.75.75 0 0 1 1.06-1.061l1.922-.12a.75.75 0 0 0 .93-1.23l-.1-.09a.75.75 0 0 1 .11-1.05l.192-.121a.75.75 0 0 0 1.23-.93l-.121-.192a.75.75 0 0 1 1.06-1.06l1.92.12a.75.75 0 0 0 1.23-.93l.1-.09a.75.75 0 0 1 .11-1.05Z" clip-rule="evenodd" />
    </svg>
  {/if}
</button>