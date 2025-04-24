<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";
import { reviews } from "~/assets/data/moke.data";
</script>
<template>
  <section id="main-reviews-section" class="main-reviews-section">
    <div class="main-reviews-section__wraper">
      <ul class="main-reviews-section__wraper-list">
        <li
          v-for="review in reviews"
          :key="review.id"
          class="main-reviews-section__wraper-list-item"
        >
          <div class="main-reviews-section__wraper-list-item-header">
            <NuxtImg
              width="50"
              height="50"
              :src="review.author.avatar"
              :alt="review.author.name"
            />
            <div
              class="main-reviews-section__wraper-list-item-header-author"
            ></div>
            <div class="main-reviews-section__wraper-list-item-header-raing">
              <Icon
                v-for="x in 5"
                :key="x"
                class="main-reviews-section__wraper-list-item-header-raing-icon"
                :name="HeroIcons.STAR"
                size="22"
              />
            </div>
          </div>
          <div class="main-reviews-section__wraper-list-item-body">
            <p class="main-reviews-section__wraper-list-item-body-text">
              {{ review.text }}
            </p>
          </div>
          <div class="main-reviews-section__wraper-list-item-footer">
            <div class="main-reviews-section__wraper-list-item-footer-company">
              <Icon
                :name="HeroIcons.COMPANY"
                class="main-reviews-section__wraper-list-item-footer-company-icon"
              />
              <p
                class="main-reviews-section__wraper-list-item-footer-company-name"
              >
                {{ review.company.name }}
                <span
                  class="main-reviews-section__wraper-list-item-footer-company-name-sub"
                  >{{ review.company.subName }}</span
                >
                <BaseDot />
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.main-reviews-section {
  padding: 100px 30px;

  &__wraper {
    &-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      &-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: $white;
        border-radius: 5px;
        gap: 10px;
        &-header {
          position: relative;
          margin: 0;
          border-bottom: 1px solid transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5em 22px 0.8em;
        }
        &-body {
          padding: 0 22px;
          max-height: 450px;
          overflow: auto;
          &-text {
            @include text_overflow(5);
          }
        }
        &-footer {
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
              color: #787878;
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
    }
  }
}
</style>
