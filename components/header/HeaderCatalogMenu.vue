<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";
const modalsStore = useModalsStore();

onMounted(() => {
  document.documentElement.style.overflowY = "hidden";
});
onUnmounted(() => {
  document.documentElement.style.overflowY = "auto";
});
</script>
<template>
  <div class="header-catalog-menu">
    <div class="header-catalog-menu__wraper container">
      <div class="header-catalog-menu__wraper-header">
        <NuxtLink class="header-catalog-menu__wraper-header-logo" to="/">
          <span class="header-catalog-menu__wraper-header-logo-title">DV</span>
          <span class="header-catalog-menu__wraper-header-logo-text"
            >Fitness</span
          >
          <BaseDot />
        </NuxtLink>
        <BaseButtonBurger @click="modalsStore.closeModal('menu')" />
      </div>
      <nav class="header-catalog-menu__wraper-list">
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
    </div>
  </div>
</template>
<style lang="scss">
.header-catalog-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  overflow: hidden;
  z-index: 140;
  transition: all 0.5s ease-in-out;

  &__wraper {
    padding-block: 10px;
    padding-inline: 12px;
    position: relative;
    width: 100%;
    height: 100%;
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    }
    &-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      margin-top: 20px;
      &-item {
        font-size: 26px;
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
  }
}
</style>
