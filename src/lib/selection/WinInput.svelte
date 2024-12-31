<script lang="ts">
  import { app } from "$lib/app/app.svelte";

  type Props = {
    /** a date object to extract what date should the win be */
    date: Date;
  };

  const { date }: Props = $props();

  let reason = $state("");
  let stregth = $state<1 | 2 | 3>(1);

  async function submitWin() {
    await app.createWin({ reason, stregth }, date);
    reason = "";
    stregth = 1;
  }
</script>

<div>
  <input class="text-black" bind:value={reason} />
  {#each [1, 2, 3] as number}
    <input type="radio" value={number} bind:group={stregth} />
  {/each}
</div>
