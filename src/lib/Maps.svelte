<script lang="ts">
  import { onMount } from "svelte";
  import { currentUser, pb } from "./pocketbase";

  let maps = [];
  let showCreate = false;

  async function getMaps() {
    try {
      const records = await pb
        .collection("maps")
        .getList(1, 50, { sort: "created" });
      maps = records.items;
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteMap(id) {}

  onMount(() => getMaps());
</script>

<div class="maps">
  <h2>Maps</h2>
  {#each maps as map (map.id)}
    <div class="map-thumb">{map.name}</div>
  {/each}
</div>
