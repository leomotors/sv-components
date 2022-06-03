<script lang="ts">
  import "../app.css";

  import NavBar from "$lib/NavBar.svelte";
</script>

<NavBar routes={{ "/": "Home", about: "About" }} useLightDark={true} />

<hr class="mb-10" />

<slot />
