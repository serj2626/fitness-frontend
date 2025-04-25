<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";
const modalsStore = useModalsStore();
</script>
<template>
  <div class="header-catalog-menu">
    <header class="header-catalog-menu__wraper container">
      <NuxtLink class="header-catalog-menu__wraper-logo" to="/">
        <span class="header-catalog-menu__wraper-logo-title">DV</span>
        <span class="header-catalog-menu__wraper-logo-text">Fitness</span>
        <BaseDot />
      </NuxtLink>
      <button
        class="header-catalog-menu__wraper-burger"
        @click="modalsStore.closeModal('menu')"
      >
        <Icon
          class="header-catalog-menu__wraper-burger-icon"
          :name="HeroIcons.CLOSE"
        />
      </button>
    </header>
    <nav class="header-catalog-menu__wraper-list container">
      <NuxtLink class="header-catalog-menu__wraper-list-item" to="/">
        О клубе
      </NuxtLink>
      <NuxtLink class="header-catalog-menu__wraper-list-item" to="/">
        Абонементы
      </NuxtLink>
      <NuxtLink class="header-catalog-menu__wraper-list-item" to="/">
        Тренеры
      </NuxtLink>
      <NuxtLink class="header-catalog-menu__wraper-list-item" to="/">
        Контакты
      </NuxtLink>
      <NuxtLink class="header-catalog-menu__wraper-list-item" to="/">
        Мой профиль
      </NuxtLink>
      <NuxtLink class="header-catalog-menu__wraper-list-item" to="/">
        Войти
      </NuxtLink>
    </nav>
    <BaseButton
      class="header-catalog-menu__wraper-buy"
      label="Купить абонемент"
      @click="modalsStore.openModal('orderAbonement')"
    />
  </div>
</template>
<style lang="scss">
.header-catalog-menu {
  display: block;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 101;
  transition: all 0.5s ease-in-out;
  background-color: rgba(0, 0, 0, 0.7);
  padding-block: 10px;
  overflow: hidden;
  @include medialaptop {
    display: none;
  }

  &__wraper {
    padding-inline: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-list {
      display: none;
      align-items: center;
      gap: 15px;
      @include mediaLaptop {
        display: flex;
      }
      @include mediaDesktop {
        gap: 30px;
      }
      &-item {
        font-size: 15px;
        color: $header_link;
        padding-block: 18px;
        transition: color 0.3s ease-in-out;
        @include mediaDesktop {
          font-size: 16px;
        }
        &:hover {
          color: $accent;
        }
      }
    }
    &-logo {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      &-title {
        text-shadow: 0 0 14px #ffc451;
        margin-right: 5px;
      }
      &-text {
        font-size: 15px;
        text-transform: lowercase;
        font-weight: 500;
        opacity: 0.8;
      }
    }
    &-buy {
      display: none;
      @include mediaLaptop {
        display: block;
      }
    }
    &-burger {
      display: flex;
      flex-direction: column;
      justify-content: center;
      &-icon {
        font-size: 36px;
        color: $accent;
        transition: all 0.2s ease-in;
        &:active {
          scale: 0.91;
        }
        @include mediaTablet {
          font-size: 40px;
        }
        @include mediaLaptop {
          display: none;
        }
      }
    }
  }
}
</style>
