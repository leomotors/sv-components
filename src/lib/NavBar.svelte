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
  export let mobileBreakpoint: "sm" | "md" | "lg" = "sm";

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
  class="mx-auto flex h-32 w-4/5 select-none flex-row items-center justify-between text-black dark:text-white"
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

    <div class="desktopnav flex-row items-center justify-end gap-2 px-4">
      {#each Object.entries(routes) as [url, name]}
        <a
          class="rounded p-2 text-xl transition-all {(
            url == '/'
              ? $page.url.pathname == '/'
              : $page.url.pathname == '/' + url
          )
            ? `${
                colors.bgSelected ?? 'bg-slate-400 dark:bg-slate-800'
              } cursor-default`
            : colors.bgUnselected ??
              'hover:bg-slate-300 dark:hover:bg-slate-700'}"
          sveltekit:prefetch
          href={url}
        >
          {name}
        </a>
      {/each}
    </div>

    <!-- Mobile Menu -->
    <div
      class="mobilemenu {colors.bgMenu ??
        'bg-slate-200 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-600'} rounded p-2 transition-all"
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
      'bg-slate-200 dark:bg-slate-800'} flex flex-col rounded {popup
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
          : colors.mobileUnselected ?? ''} rounded p-2 transition-all"
        sveltekit:prefetch
        href={url}
      >
        {name}
      </a>
    {/each}
  </div>
</nav>

{#if mobileBreakpoint == "sm"}
  <style lang="css">
    .mobilemenu {
      display: inline;
    }

    .desktopnav {
      display: none;
    }

    @media (min-width: 640px) {
      .mobilemenu {
        display: none;
      }

      .desktopnav {
        display: flex;
      }
    }
  </style>
{:else if mobileBreakpoint == "md"}
  <style lang="css">
    .mobilemenu {
      display: inline;
    }

    .desktopnav {
      display: none;
    }

    @media (min-width: 768px) {
      .mobilemenu {
        display: none;
      }

      .desktopnav {
        display: flex;
      }
    }
  </style>
{:else}
  <style lang="css">
    .mobilemenu {
      display: inline;
    }

    .desktopnav {
      display: none;
    }

    @media (min-width: 1024px) {
      .mobilemenu {
        display: none;
      }

      .desktopnav {
        display: flex;
      }
    }
  </style>
{/if}

<!-- prettier-ignore -->
<style lang="css">
  nav {
    width: 90%;
  }

  @media (min-width: 1024px) {
    nav {
      width: 66.666667%;
    }
  }
</style>
