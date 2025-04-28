<script lang="ts" setup>
import type { ICoach } from "~/assets/data/moke.data";
defineProps<{
  coach: ICoach;
}>();
</script>
<template>
  <NuxtLink>
    <div class="coaches-card">
      <NuxtImg class="coaches-card-img" :src="coach.img" />
    </div>
  </NuxtLink>
</template>
<style scoped lang="scss">
.coaches-card {
  position: relative;
  height: 400px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.611);
  cursor: pointer;
  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.9s ease-in;
  }
}


.coaches-card:hover{
  .coaches-card-img{
    scale: 1.1;
  }
}
</style>
