<script lang="ts">
  import { selection } from "./selection.svelte";
  
  import MonthDisplay from "./MonthDisplay.svelte";
  import WinInput from "./WinInput.svelte";

</script>

<div class="max-w-screen-sm mx-auto">
  <MonthDisplay date={selection.currentDate} />
  <WinInput date={selection.currentDate} />
</div>