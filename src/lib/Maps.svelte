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
      console.log(err.data);
    }
  }

  async function deleteMap(id) {}

  onMount(() => getMaps());
</script>

<button
  on:click={() => console.log("new map")}
  class="rounded-full bg-slate-500 h-12 w-12 text-3xl text-center align-middle fixed z-90 bottom-10 right-8"
  >+</button
>
<div class="grid grid-flow-col auto-cols-[minmax(0,_2fr)] gap-4 p-4">
  {#each maps as map (map.id)}
    <article class="bg-slate-600 px-4 py-2 rounded">
      <h2 class="font-bold">{map.name}</h2>
      <p class="text-slate-300 text-ellipsis overflow-hidden whitespace-nowrap">{map.description}</p>
    </article>
  {/each}
</div>
