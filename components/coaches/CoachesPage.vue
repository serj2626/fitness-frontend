<script lang="ts" setup>
import { coaches } from "~/assets/data/moke.data";
// import { HeroIcons } from "~/assets/icons/types/hero-icons";
</script>

<template>
  <div class="coaches-page">
    <div class="container">
      <!-- <h1 class="coaches-page__title">Наши тренеры</h1> -->
      <div class="coaches-page__search">
        <p class="coaches-page__search-title">Найти своего тренера</p>
        <form class="coaches-page__search-form">
          <div class="coaches-page__search-form-group">
            <label for="select">Выберите направление</label>
            <select id="select">
              <option value="">Все направления</option>
              <option value="month">Фитнес тренер</option>
              <option value="quarter">Инструктор по йоге</option>
              <option value="year">Инструктор по плаванию</option>
              <option value="year">Тренер по боксу</option>
            </select>
          </div>
          <div class="coaches-page__search-form-actions">
            <BaseButton
              class="coaches-page__search-form-actions-submit"
              size="md"
              label="Найти"
            />
            <BaseButton size="md" label="Сбросить" />
          </div>
        </form>
      </div>
      <ul class="coaches-page__content-list">
        <CoachesCard v-for="coach in coaches" :key="coach.id" :coach="coach" />
      </ul>
      <!-- <div class="coaches-page__content">
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
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coaches-page {
  padding-block: 100px;

  &__search {
    position: static;
    top: 20px;
    z-index: 90;

    @include mediaLaptop {
      position: sticky;
    }

    padding: 50px;
    margin-block: 50px 100px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    border-radius: 15px;
    background-color: $bg;
    box-shadow: 0 0 10px white;

    &-form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: $white;

      &-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      &-actions {
        display: flex;
        gap: 10px;
        align-items: center;
        &-submit {
          background-color: $accent;
          color: $txt;
        }
      }
    }
    &-title {
      font-size: 35px;
      color: $accent;
      text-transform: uppercase;
    }
  }

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
      grid-template-columns: 1fr;
      gap: 10px;
      @include mediaTablet{
        grid-template-columns: repeat(2, 1fr);
      }
      @include mediaLaptop{
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
}

.coaches-page__content-search-close:hover::before {
  transition: all 0.3s ease-in;
  width: 0;
}
</style>
