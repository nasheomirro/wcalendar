<script lang="ts">
  import { app } from "$lib/app/app.svelte";
  import { isSameDate } from "./utils";

  type Props = {
    /** the current date to display wins for */
    date: Date;
  };

  const { date }: Props = $props();
  const wins = $derived(app.wins.filter((win) => isSameDate(date, win.date)));
</script>

<div>
  {#each wins as win (win.id)}
    <div>{win.attributes.reason}</div>
    <div>{win.attributes.stregth}</div>
  {/each}
</div>
