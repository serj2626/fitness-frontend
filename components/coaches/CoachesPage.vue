<script lang="ts" setup>
import { coaches } from "~/assets/data/moke.data";
import { HeroIcons } from "~/assets/icons/types/hero-icons";
</script>

<template>
  <div class="coaches-page">
    <div class="container">
      <h1 class="coaches-page__title">Наши тренеры</h1>
      <div class="coaches-page__content">
        <div class="coaches-page__content-search">
          <ul class="coaches-page__content-search-list">
            <li>Фитнес тренер</li>
            <li>Инструктор по йоге</li>
            <li>Инструктор по плаванию</li>
            <li>Тренер по боксу</li>
          </ul>
          <button class="coaches-page__content-search-close">
            Сбросить <Icon :name="HeroIcons.CLOSE" size="22" />
          </button>
        </div>

        <ul class="coaches-page__content-list">
          <CoachesCard
            v-for="coach in coaches"
            :key="coach.id"
            :coach="coach"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coaches-page {
  padding-block: 100px;

  &__title {
    font-size: 50px;
    color: $accent;
    text-align: center;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 30px; // расстояние между колонками
    margin-top: 150px;

    &-search {
      position: sticky;
      top: 100px;
      align-self: start;
      color: $white;
      &-close {
        position: relative;
        margin-top: 60px;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 10px;
        font-size: 17px;
        font-weight: 500;

        &::before {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: $white;
        }
      }
      &-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
        & li {
          padding: 10px 15px;
          border-radius: 10px;
          cursor: pointer;
          background-color: rgb(101, 95, 95);
          border: none;
          transition: all 0.3s ease-in;

          &:hover {
            box-shadow: 0 0 10px #fdfdfd98;
          }
        }
      }
    }

    &-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
  }
}

.coaches-page__content-search-close:hover::before {
  transition: all 0.3s ease-in;
  width: 0;
}
</style>
