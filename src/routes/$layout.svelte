<!-- src/routes/$layout.svelte -->
<script>
    import { onMount } from "svelte";
    onMount(() => {
      // JavaScript that runs on mount
    });
  </script>
  
  <svelte:head>
    <title>My Svelte App</title>
  </svelte:head>
  
  <header>
    <!-- Header content -->
  </header>
  
  <main>
    <slot></slot>  <!-- This is where the content of child pages will be injected -->
  </main>
  
  <footer>
    <!-- Footer content -->
  </footer>
  