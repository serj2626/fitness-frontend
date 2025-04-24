<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";
import { coaches } from "~/assets/data/moke.data";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>
<template>
  <section id="main-coaches-section" class="main-coaches-section">
    <div class="main-coaches-section__wraper">
      <Swiper
        :slides-per-view="6"
        :space-between="20"
        :loop="true"
        :autoplay="{
          delay: 2500,
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }"
        class="my-swiper"
      >
        <SwiperSlide v-for="(slide, idx) in coaches" :key="idx" class="slide">
          <p class="slide__title">{{ slide.name }}</p>
          <button class="slide__btn">
            <Icon class="slide__btn-icon" :name="HeroIcons.UP" />
          </button>
          <NuxtImg :src="slide.img" :alt="slide.name" class="slide__img" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<style scoped lang="scss">
.main-coaches-section {
  padding-block: 100px;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #f9f9f9;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  &__title {
    position: absolute;
    top: 5%;
    left: 10%;
    transform: translate(-10%, -5%);
    z-index: 100;
    color: $white;
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    text-transform: uppercase;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    .slide__title {
      transform: translate(-10px, 100%);
      opacity: 0;
    }
    .slide__btn {
      opacity: 1;
      scale: 1;
      // transform: translate(-50%, -50%) scale(1.2);
    }
  }

  &__btn {
    content: "";
    pointer-events: none;
    display: block;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;

    width: 120px;
    height: 120px;
    border-radius: 50%;

    background-color: #ffc5519a;

    opacity: 0;
    scale: 0;
    transition: opacity 0.3s ease-in-out;
    &-icon {
      rotate: 90deg;
      font-size: 40px;
      color: $white;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // filter: brightness(0.8);
    // transition: filter 0.3s ease-in, transform 6s ease-in-out;

    // &:hover {
    //   filter: brightness(1);
    //   transform: scale(2);
    // }
  }
}
</style>
