<script lang="ts">
  import type { State } from "poxi";
  import type { Link } from "./state";
  import { createEventDispatcher } from "svelte"
  export let link: State<Link>;

  const dispatch = createEventDispatcher()
  const deleteLink = () => {
    dispatch("delete")
  }
</script>

<div class="flex justify-between">
  <a class="text-base-content" target="_blank" href={link.url}> {link.text} </a>
  <button class="h-6 w-6 text-base-content text-center" on:click={deleteLink}>x</button>
</div>

<style>
</style>
