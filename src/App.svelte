<script lang="ts">
  import Login from "./lib/Login.svelte";
  import Maps from "./lib/Maps.svelte";
  import Map from "./lib/Map.svelte";
  import { currentUser } from "./lib/pocketbase";
</script>

<h1>Map Sharing</h1>
<Login />
<Map />
{#if $currentUser}
  <Maps />
{/if}
