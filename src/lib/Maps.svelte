<script lang="ts">
  import { onMount } from "svelte";
  import { pb } from "./pocketbase";
  import { format } from "timeago.js";
  import NewMapButton from "./NewMapButton.svelte";

  let maps = [];

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

<NewMapButton />
<div class="grid grid-flow-col auto-cols-[minmax(0,_2fr)] gap-4 p-4">
  {#each maps as map (map.id)}
    <article class="dark:bg-slate-600 bg-slate-200 px-4 py-2 rounded">
      <h2 class="text-lg font-bold text-slate-600">{map.name}</h2>
      <h3 class="text-xs font-thin">Updated {format(map.updated)}</h3>
      <p
        class="dark:text-slate-300 font-thin text-ellipsis overflow-hidden whitespace-nowrap text-sm mt-2"
      >
        {map.description}
      </p>
    </article>
  {/each}
</div>
