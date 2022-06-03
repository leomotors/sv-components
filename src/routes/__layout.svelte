<script lang="ts">
  import "../app.css";

  import NavBar from "$lib/NavBar.svelte";

  let dark: boolean;
</script>

<div class:dark>
  <main class="dark:bg-slate-900 text-black dark:text-white transition-all">
    <NavBar
      routes={{ "/": "Home", about: "About", "9chicken": "ก้าวไก่" }}
      useLightDark={true}
      defaultDark={false}
      colors={{
        bgSelected: "bg-orange-300 dark:bg-orange-500",
        bgUnselected: "hover:bg-orange-100 dark:hover:bg-orange-800",
      }}
      bind:dark
    />

    <hr class="mb-10 w-[90%] mx-auto" />

    <section class="min-h-[calc(100vh-8rem-2.5rem-1px)]">
      <slot />
    </section>
  </main>
</div>
