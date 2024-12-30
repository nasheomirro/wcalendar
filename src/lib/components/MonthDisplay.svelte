<script lang="ts">
  import { app } from "$lib/app/app.svelte";
  import {
    getFirstDayOfMonth,
    isSameMonthAndYear,
    getDaysInMonth,
  } from "$lib/utils";

  type Props = {
    /** a date object to extract what exact month should be represented */
    date: Date;
  };

  const { date }: Props = $props();

  // the wins that are on the given month
  const wins = $derived(
    app.wins.filter((win) => isSameMonthAndYear(date, win.date))
  );

  // an array representing the days of the month, padded at the start to adjust its alignment
  // visually (-1 represents padding)
  const days = $derived.by(() => {
    const padding = Array.from({ length: getFirstDayOfMonth(date) }).map(
      () => -1
    );
    const actual = Array.from({
      length: getFirstDayOfMonth(date) + getDaysInMonth(date),
    }).map((_, i) => i);

    return padding.concat(actual);
  });
</script>

<div class="grid grid-cols-7 gap-4">
  <!-- TODO WHEN WE ACTUALLY HAVE DATA -->
</div>
