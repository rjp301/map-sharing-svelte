<script lang="ts">
  import Login from "./lib/Login.svelte";
  import Maps from "./lib/Maps.svelte";
  import Map from "./lib/Map.svelte";
  import { currentUser, currentMap } from "./lib/pocketbase";

  import { Router, Link, Route } from "svelte-routing";

  export let url = "";
</script>

<Router {url}>
  <Route path="maps/:id" let:params><Map id={params.id} /></Route>
  <Route path="login"><Login /></Route>
  <Route path="/">
      <Login />
      <nav
        class="flex justify-between items-center p-4 shadow-lg bg-slate-200 dark:bg-slate-700"
      >
        <h1 class="text-xl font-bold">Map Sharing</h1>
        <Login />
      </nav>
      <Maps />
    {/if}
  </Route>
</Router>
