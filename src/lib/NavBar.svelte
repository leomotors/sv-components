<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import LightDark from "./icons/LightDark.svelte";

  let popup = false;

  export let routes: Record<string, string>;
  export let useLightDark = false;
  export let defaultDark = true;
  export let dark = defaultDark;
  export let popupOnOffset = "right-8";
  export let popupOffOffset = "-right-28";

  interface ColorsProp {
    bgUnselected?: string;
    bgSelected?: string;
    bgMenu?: string;
    bgFlyout?: string;
    mobileSelected?: string;
    mobileUnselected?: string;
  }

  export let colors: ColorsProp = {};

  function toggleDark() {
    dark = !dark;
    localStorage.setItem("dark", dark ? "true" : "false");
  }

  onMount(() => {
    window.addEventListener("click", () => (popup = false));

    if (!useLightDark) return;

    const prefered =
      localStorage.getItem("dark") ??
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefered && prefered == "true") dark = true;
    else dark = false;
  });
</script>

<nav
  class="w-4/5 lg:w-2/3 mx-auto h-32 flex flex-row items-center justify-between select-none text-black dark:text-white"
>
  <slot name="left">
    <p>Your Logo Here Please</p>
  </slot>

  <!-- Desktop Nav -->
  <div class="right flex flex-row gap-4">
    {#if useLightDark}
      <button on:click={toggleDark}>
        <LightDark {dark} />
      </button>
    {/if}

    <div class="px-4 flex-row hidden sm:flex justify-end items-center gap-2">
      {#each Object.entries(routes) as [url, name]}
        <a
          class="text-xl p-2 rounded transition-all {(
            url == '/'
              ? $page.url.pathname == '/'
              : $page.url.pathname == '/' + url
          )
            ? `${
                colors.bgSelected ?? 'bg-slate-400 dark:bg-slate-800'
              } cursor-default`
            : colors.bgUnselected ??
              'hover:bg-slate-300 dark:hover:bg-slate-700'}"
          href={url}
        >
          {name}
        </a>
      {/each}
    </div>

    <!-- Mobile Menu -->
    <div
      class="inline sm:hidden {colors.bgMenu ??
        'bg-slate-200 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-600'} p-2 rounded transition-all"
      on:click={() => setTimeout(() => (popup = !popup), 10)}
    >
      <!-- https://icons.getbootstrap.com/icons/list -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </div>
  </div>

  <!-- Flying for Mobile -->
  <div
    class="{colors.bgFlyout ??
      'bg-slate-200 dark:bg-slate-800'} rounded flex flex-col {popup
      ? `${popupOnOffset} opacity-100`
      : `${popupOffOffset} opacity-0`} absolute top-4 p-2 transition-all"
  >
    {#each Object.entries(routes) as [url, name]}
      <a
        class="text-xl {(
          url == '/'
            ? $page.url.pathname == '/'
            : $page.url.pathname == '/' + url
        )
          ? colors.mobileSelected ?? 'text-pink-500'
          : colors.mobileUnselected ?? ''} p-2 rounded transition-all"
        href={url}
      >
        {name}
      </a>
    {/each}
  </div>
</nav>
