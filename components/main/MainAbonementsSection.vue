<script lang="ts" setup>
import { abonements } from "~/assets/data/moke.data";
import { HeroIcons } from "~/assets/icons/types/hero-icons";
const priceAbon = (rub: number) => {
  if (String(rub).length === 4) {
    return String(rub).slice(0, 1) + " " + String(rub).slice(1);
  } else {
    return String(rub).slice(0, 2) + " " + String(rub).slice(2);
  }
};
</script>
<template>
  <section id="main-abonements-section" class="main-abonements-section">
    <div class="main-abonement-section__wraper container">
      <!-- <h2 class="main-abonements-section__wraper">Наши абонементы</h2> -->
      <ul class="main-abonements-section__wraper-list">
        <li
          v-for="abon in abonements"
          :key="abon.title"
          class="main-abonements-section__wraper-list-item"
        >
          <p class="main-abonements-section__wraper-list-item-top">
            {{ abon.title }}
          </p>
          <div class="main-abonements-section__wraper-list-item-body">
            <p
              class="main-abonements-section__wraper-list-item-body-price-months"
            >
              <span
                class="main-abonements-section__wraper-list-item-body-price"
              >
                {{ priceAbon(abon.price) }} &nbsp;₽
              </span>
              <span
                class="main-abonements-section__wraper-list-item-body-period"
              >
                {{ abon.period }} месяцев
              </span>
            </p>
            <p class="main-abonements-section__wraper-list-item-body-desc">
              {{ abon.description }}
            </p>
          </div>
          <div class="main-abonements-section__wraper-list-item-footer">
            <ul
              class="main-abonements-section__wraper-list-item-footer-services"
            >
              <li
                class="main-abonements-section__wraper-list-item-footer-services-item"
              >
                <Icon
                  class="main-abonements-section__wraper-list-item-footer-services-item-icon"
                  :name="HeroIcons.CHECK"
                />
                <span
                  class="main-abonements-section__wraper-list-item-footer-services-item-text"
                >
                  Безлимитные тренировки
                </span>
              </li>
              <li
                class="main-abonements-section__wraper-list-item-footer-services-item"
              >
                <Icon
                  class="main-abonements-section__wraper-list-item-footer-services-item-icon"
                  :name="HeroIcons.CHECK"
                />
                <span
                  class="main-abonements-section__wraper-list-item-footer-services-item-text"
                >
                  Бассейн
                </span>
              </li>
              <li
                class="main-abonements-section__wraper-list-item-footer-services-item"
              >
                <Icon
                  class="main-abonements-section__wraper-list-item-footer-services-item-icon"
                  :name="HeroIcons.CHECK"
                />
                <span
                  class="main-abonements-section__wraper-list-item-footer-services-item-text"
                >
                  SPA
                </span>
              </li>
              <li
                class="main-abonements-section__wraper-list-item-footer-services-item"
              >
                <Icon
                  class="main-abonements-section__wraper-list-item-footer-services-item-icon"
                  :name="HeroIcons.CHECK"
                />
                <span
                  class="main-abonements-section__wraper-list-item-footer-services-item-text"
                >
                  Косметология
                </span>
              </li>
              <li
                class="main-abonements-section__wraper-list-item-footer-services-item"
              >
                <Icon
                  class="main-abonements-section__wraper-list-item-footer-services-item-icon"
                  :name="HeroIcons.CHECK"
                />
                <span
                  class="main-abonements-section__wraper-list-item-footer-services-item-text"
                >
                  Йога
                </span>
              </li>
            </ul>
          </div>
          <button class="main-abonements-section__wraper-list-item-btn">
            Подробнее
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.main-abonements-section__wraper-list-item:hover {
  .main-abonements-section__wraper-list-item-btn {
    color: $txt;
    &:before {
      transform: scale3d(1, 1, 1);
      transform-origin: 0% 50%;
      transition-timing-function: ease;
    }
  }
}

.main-abonements-section {
  padding-block: 100px;
  &__wraper-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @include mediaTablet {
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;
    }
    @include mediaLaptop {
      grid-template-columns: repeat(3, 1fr);
    }

    &-item {
      padding: 25px 32px;
      background-color: $bg;
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.222);
      color: $white;
      transition: all 0.35s ease-in;

      &:hover {
        box-shadow: 0 0 20px $accent;
        // scale: 1.1;
      }
      &-top {
        text-transform: uppercase;
        padding-bottom: 30px;
        border-bottom: 1px solid #bdbdbd82;
        font-weight: 600;
      }
      &-body {
        padding-top: 30px;
        &-desc {
          color: $white;
          font-weight: 350;
          margin-top: 20px;
        }
        &-price {
          font-weight: 500;
          font-size: 30px;
        }
        &-period {
          color: $accent;
        }
        &-price-months {
          display: flex;
          align-items: start;
          justify-content: space-between;
        }
      }
      &-btn {
        position: relative;
        margin-top: 30px;
        width: 100%;
        padding: 15px 0;
        background-color: transparent;
        color: $white;
        border-radius: 10px;
        border: 1px solid $accent;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.3s ease-in;
        z-index: 2;

        &:before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-color: $accent;
          z-index: -1;
          transition: transform 0.35s;
          transition-timing-function: cubic-bezier(0.05, 0.73, 0.48, 0.97);
          transform: scale3d(0, 1, 1);
          transform-origin: 100% 50%;
          will-change: transform, background-color;
        }
      }

      &-footer {
        padding-top: 30px;
        &-services {
          padding-top: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          &-item {
            display: flex;
            align-items: center;
            gap: 10px;
            &-icon {
              color: $accent;
              font-size: 26px;
            }
          }
        }
      }
    }
  }
}
</style>
