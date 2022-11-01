<script lang="ts">
    import { getTitle } from "./state";


    const title = getTitle()
</script>

<div>
    <input bind:value={$title} type="text">
</div>
