<script lang="ts">
  import Login from "./lib/Login.svelte";
  import Maps from "./lib/Maps.svelte";
  import Map from "./lib/Map.svelte";
  import { currentUser } from "./lib/pocketbase";
</script>

<nav class="flex justify-between items-center p-4 shadow-lg bg-slate-200 dark:bg-slate-700">
  <h1 class="text-xl font-bold">Map Sharing</h1>
  <Login />
</nav>

<!-- <Map /> -->
{#if $currentUser}
  <Maps />
{/if}
