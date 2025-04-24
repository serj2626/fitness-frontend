<script setup lang="ts">
const {
  mobileCount = 1,
  mobileBetween = 20,
  tabletCount = 3,
  tabletBetween = 30,
  laptopCount = 4,
  laptopBetween = 20,
  desctopCount = 4,
  desctopBetween = 20,
} = defineProps<{
  mobileCount?: number;
  mobileBetween?: number;
  tabletCount?: number;
  tabletBetween?: number;
  laptopCount?: number;
  laptopBetween?: number;
  desctopCount?: number;
  desctopBetween?: number;
}>();

const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    0: {
      slidesPerView: mobileCount,
      spaceBetween: mobileBetween,
    },
    768: {
      slidesPerView: tabletCount,
      spaceBetween: tabletBetween,
    },
    1024: {
      slidesPerView: laptopCount,
      spaceBetween: laptopBetween,
    },
    1200: {
      slidesPerView: desctopCount,
      spaceBetween: desctopBetween,
    },
  },
});

onMounted(() => {
  console.log(swiper.instance);
});
</script>

<template>
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <slot />
      </swiper-container>
    </ClientOnly>
</template>

<style lang="css"></style>
