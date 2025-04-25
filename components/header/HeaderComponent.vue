<script lang="ts" setup>
const isHidden = ref(false);
const lastScrollY = ref<number>(0);

const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollY.value && currentScroll > 80) {
    isHidden.value = true; // скролл вниз – прячем
  } else {
    isHidden.value = false; // скролл вверх – показываем
  }

  lastScrollY.value = currentScroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <header
    class="header-component"
    :class="{
      'header-component_hidden': isHidden,
      'header-component_opacity': !isHidden && lastScrollY > 0,
    }"
  >
    <nav class="header-component__wraper container">
      <NuxtLink class="header-component__wraper-logo" to="/">
        DV <span class="header-component__wraper-logo-text">Fitness</span> <BaseDot />
      </NuxtLink>
      <ul class="header-component__wraper-list">
        <NuxtLink class="header-component__wraper-list-item" to="/">
          О клубе
        </NuxtLink>
        <NuxtLink class="header-component__wraper-list-item" to="/">
          Абонементы
        </NuxtLink>
        <NuxtLink class="header-component__wraper-list-item" to="/">
          Тренеры
        </NuxtLink>
        <NuxtLink class="header-component__wraper-list-item" to="/">
          Контакты
        </NuxtLink>
        <NuxtLink class="header-component__wraper-list-item" to="/">
          Мой профиль
        </NuxtLink>
        <NuxtLink class="header-component__wraper-list-item" to="/">
          Войти
        </NuxtLink>
      </ul>
      <NuxtLink class="header-component__wraper-buy" to="/">
        <button class="header-component__wraper-buy-btn">
          Купить абонемент
        </button>
      </NuxtLink>
    </nav>
  </header>
</template>
<style lang="scss">
.header-component {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.5s ease-in-out;
  background-color: transparent;
  padding-block: 10px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  &_opacity {
    background-color: rgba(0, 0, 0, 0.7);
  }
  &_hidden {
    transition: transform 0.5s ease-in-out;
    transform: translateY(-100%);
  }
  &__wraper {
    padding-inline: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-list {
      display: flex;
      align-items: center;
      gap: 30px;
      &-item {
        color: $header_link;
        padding-block: 18px;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: $accent;
        }
      }
    }
    &-logo {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      &-text{
        font-size: 15px;
        text-transform: lowercase;
        font-weight: 500;
        opacity: 0.8;
      }
    }
    &-buy {
      &-btn {
        font-size: 14px;
        padding: 8px 30px;
        border-radius: 4px;
        transition: all 0.3s ease-in;
        border: 2px solid $accent;
        color: $header_link;

        &:hover {
          background-color: $accent;
          color: $txt;
        }
      }
    }
  }
}
</style>
