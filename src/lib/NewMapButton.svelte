<script lang="ts">
  import { prop_dev } from "svelte/internal";
  import { currentMap, currentUser, pb } from "./pocketbase";

  async function createMap() {
    const data = { user_id: $currentUser.id };
    const createdMap = await pb.collection("maps").create(data);
  }
</script>

<button
  on:click={createMap}
  class="rounded-full bg-amber-500 h-12 w-12 text-3xl text-center align-middle fixed z-90 bottom-10 right-8"
  >+</button
>
