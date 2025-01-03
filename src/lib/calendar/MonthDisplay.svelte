<script lang="ts">
  import { getFirstDayOfMonth, getDaysInMonth } from "./utils";

  type Props = {
    /** a date object to extract what exact month should be represented */
    date: Date;
    /** called when selected day changes */
    ondatechange?: (date: number) => void;
  };

  const { date, ondatechange }: Props = $props();
  let currentSelectedDay = $state(date.getDate());

  // an array representing the days of the month, padded at the start
  // to adjust its alignment visually (0 represents padding)
  const days = $derived.by(() => {
    const padding = Array.from({ length: getFirstDayOfMonth(date) }).map(
      () => 0
    );
    const actual = Array.from({
      length: getDaysInMonth(date),
    }).map((_, i) => i + 1);

    return padding.concat(actual);
  });
</script>

<div class="grid grid-cols-7 gap-4 w-full">
  {#each days as day}
    {#if day !== 0}
      <label class="aspect-square bg-main-100 rounded-md flex">
        <input
          value={day}
          bind:group={currentSelectedDay}
          onchange={(e) => ondatechange && ondatechange(currentSelectedDay)}
          name="calendar"
          type="radio"
          class="hidden"
        />
      </label>
    {:else}
      <!-- padding for alignment -->
      <div></div>
    {/if}
  {/each}
</div>
