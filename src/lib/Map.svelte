<script lang="ts">
  import L from "leaflet";
  import { onMount } from "svelte";
  import mapTiles from "./mapTiles.json";

  onMount(() => {
    const map = L.map("map", {
      center: [51.505, -0.09],
      zoom: 13,
    });

    const mapTile = mapTiles[0];
    L.tileLayer(mapTile.url, { attribution: mapTile.attribution }).addTo(map);
  });
</script>

<div id="map" />

<style>
  #map {
    height: 100vh;
  }
</style>
