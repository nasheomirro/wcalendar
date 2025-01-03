<script lang="ts">
  import Swiper from "swiper";
  import { onMount } from "svelte";
  import { twConfig } from "$/tailwind-config";
  import MonthDisplay from "$lib/calendar/MonthDisplay.svelte";

  import "swiper/css";

  onMount(() => {
    new Swiper(".yearly-display", {
      centeredSlides: true,
      slidesPerView: 1,
      breakpoints: {
        [parseInt(twConfig.theme.screens.lg)]: {
          slidesPerView: 3,
        },
      },
    });
  });
</script>

<div class="px-10 py-10">
  <div class="swiper yearly-display !overflow-visible">
    <div class="swiper-wrapper !overflow-visible">
      {#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as i}
        <div class="swiper-slide px-4">
          <MonthDisplay date={new Date(2025, i, 1)} />
        </div>
      {/each}
    </div>
  </div>
</div>
