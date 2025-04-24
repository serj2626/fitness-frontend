<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";
import { reviews } from "~/assets/data/moke.data";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";


const containerRef = ref(null);
// const swiper = useSwiper(containerRef, {
//   effect: "creative",
//   loop: true,
//   autoplay: {
//     delay: 5000,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//     375: {
//       slidesPerView: 2,
//       spaceBetween: 15,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//     1280: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//   },
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: [0, 0, -400],
  //   },
  //   next: {
  //     shadow: true,
  //     translate: [0, 0, -400],
  //   },
  // },
// });

// onMounted(() => {
//   console.log(swiper.instance);
// });
</script>
<template>
  <section id="main-reviews-section" class="main-reviews-section">
    <Swiper
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }"
        class="my-swiper"
      >
        <SwiperSlide v-for="(review, idx) in reviews" :key="idx" class="slide">
          <div class="review">
            <div class="review__header">
              <NuxtImg
                width="50"
                height="50"
                :src="review.author.avatar"
                :alt="review.author.name"
              />
              <div class="review__header-author">
                <span
                  >{{ review.author.platforma }}
                  <Icon
                    :name="HeroIcons.ARROW_UP"
                    style="rotate: 45deg; cursor: pointer"
                    size="14"
                  />
                </span>
                <div class="review__header-author-date">
                  <p>{{ review.author.name }}</p>
                  <p>{{ review.author.date }}</p>
                </div>
              </div>
              <div class="review__header-raing">
                <Icon
                  v-for="x in 5"
                  :key="x"
                  class="review__header-raing-icon"
                  :name="HeroIcons.STAR"
                  size="20"
                />
              </div>
            </div>
            <div class="review__body">
              <p class="review__body-text">
                {{ review.text }}
              </p>
            </div>
            <div class="review__footer">
              <div class="review__footer-company">
                <Icon
                  :name="HeroIcons.COMPANY"
                  class="review__footer-company-icon"
                />
                <p class="review__footer-company-name">
                  {{ review.company.name }}
                  <span class="review__footer-company-name-sub">{{
                    review.company.subName
                  }}</span>
                  <BaseDot />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>


    <!-- <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide v-for="(review, idx) in reviews" :key="idx">
          <div class="review">
            <div class="review__header">
              <NuxtImg
                width="50"
                height="50"
                :src="review.author.avatar"
                :alt="review.author.name"
              />
              <div class="review__header-author">
                <span
                  >{{ review.author.platforma }}
                  <Icon
                    :name="HeroIcons.ARROW_UP"
                    style="rotate: 45deg; cursor: pointer"
                    size="14"
                  />
                </span>
                <div class="review__header-author-date">
                  <p>{{ review.author.name }}</p>
                  <p>{{ review.author.date }}</p>
                </div>
              </div>
              <div class="review__header-raing">
                <Icon
                  v-for="x in 5"
                  :key="x"
                  class="review__header-raing-icon"
                  :name="HeroIcons.STAR"
                  size="20"
                />
              </div>
            </div>
            <div class="review__body">
              <p class="review__body-text">
                {{ review.text }}
              </p>
            </div>
            <div class="review__footer">
              <div class="review__footer-company">
                <Icon
                  :name="HeroIcons.COMPANY"
                  class="review__footer-company-icon"
                />
                <p class="review__footer-company-name">
                  {{ review.company.name }}
                  <span class="review__footer-company-name-sub">{{
                    review.company.subName
                  }}</span>
                  <BaseDot />
                </p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly> -->
  </section>
</template>
<style lang="scss" scoped>
.main-reviews-section {
  padding: 100px 30px;
}

// swiper-slide {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 18px;
//   height: 20vh;
//   font-size: 4rem;
//   font-weight: bold;
//   font-family: 'Roboto', sans-serif;
// }

.review {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $white;
  border-radius: 5px;
  gap: 10px;
  &__header {
    position: relative;
    margin: 0;
    border-bottom: 1px solid transparent;
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 1.5em 22px 0.8em;
    &-author {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      &-date {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #787878;
        font-size: 15px;
        font-weight: 500;
        opacity: 0.8;
      }
    }
    &-rating {
      &:deep(.iconify) {
        background-color: $accent !important;
      }
    }
  }
  &__body {
    padding: 0 22px;
    max-height: 450px;
    overflow: auto;
    flex-grow: 1;
    &-text {
      @include text_overflow(3);
    }
  }
  &__footer {
    display: flex;
    background: #f0efef;
    border-top: 1px solid #e6e6e6;
    padding: 0.8em 22px;
    &-company {
      display: flex;
      align-items: center;
      gap: 10px;

      &-icon {
        color: #787878;
        font-size: 26px;
        font-weight: 600;
      }
      &-name {
        color: #635757;
        &-sub {
          font-size: 15px;
          text-transform: lowercase;
          font-weight: 500;
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
