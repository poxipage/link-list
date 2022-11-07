<script lang="ts">
  import Link from "./Link.svelte";
  import { getLinks, getTitle } from "./state";

  const title = getTitle()
  const links = getLinks();

  const deleteLink = (link: Link) => {
    $links = $links.filter(e => e != link)
  }

  let showInputs = false
  let newText = ""
  let newLink = ""

  const addLink = () => {
    if (newText != "" && newLink != "") {
      if (newLink.substring(0,8) != "https://") newLink = "https://" + newLink
      $links.push({text: newText, url: newLink})
      $links = $links
      showInputs = false
      newText = ""
      newLink = ""
      console.log($links)
    }
  }

  $: console.log($title)
</script>

<div class="w-full h-full overflow-autox">
  <p class="text-xl text-base-content"> {$title} </p>
  {#each $links as link}
    <Link on:delete={() => deleteLink(link)} {link} />
  {/each}

  {#if showInputs}
    <div class=" flex flex-col">
      <input class="border-2 w-48 m-1" bind:value={newText} placeholder="text" type="text">
      <input class="border-2 w-48 m-1" bind:value={newLink} placeholder="link" type="text">
      <button class="w-12 mt-1 btn btn-primary border-base-content border-2" on:click={addLink}>Add</button>
    </div>
  {:else}
    <button class="mt-1 btn btn-primary border-primary-content border-2" on:click={() => showInputs = !showInputs}>Add link</button>
  {/if}
</div>
    



<style>
</style>
