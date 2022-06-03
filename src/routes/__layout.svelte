<script lang="ts">
  import "../app.css";

  import NavBar from "$lib/NavBar.svelte";

  let dark: boolean;
</script>

<div class:dark>
  <main class="dark:bg-slate-900 text-white">
    <NavBar
      routes={{ "/": "Home", about: "About" }}
      useLightDark={true}
      bind:dark
    />

    <hr class="mb-10" />

    <section class="min-h-[calc(100vh-11.6rem)]">
      <slot />
    </section>
  </main>
</div>
