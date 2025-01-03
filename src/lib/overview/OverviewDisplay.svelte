<script lang="ts">
  import { app } from "$lib/app/app.svelte";
  import { isSameMonthAndYear } from "$lib/calendar/utils";

  type Props = {
    /** a date object to extract what exact month should be represented */
    date: Date;
  };

  const { date }: Props = $props();

  const wins = $derived(
    app.wins.filter((win) => isSameMonthAndYear(win.date, date))
  );
</script>

<div>
  {#each wins as win (win.id)}
    <div>{win.attributes.reason}</div>
  {/each}
</div>
