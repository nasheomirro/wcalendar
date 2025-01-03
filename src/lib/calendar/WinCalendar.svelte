<script lang="ts">
  import { selection } from "./selection.svelte";
  import MonthDisplay from "./MonthDisplay.svelte";

  function handleDateChange(date: number) {
    selection.setCurrentDate(
      new Date(
        selection.currentDate.getFullYear(),
        selection.currentDate.getMonth(),
        date
      )
    );
  }
</script>

<div class="max-w-screen-sm mx-auto">
  <MonthDisplay date={selection.currentDate} ondatechange={handleDateChange} />
</div>
