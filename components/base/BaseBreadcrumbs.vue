<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
  currentPage: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: "#fff",
  },
});
</script>
<template>
  <nav class="base-breadcrumbs">
    <ul class="base-breadcrumbs__list">
      <li class="base-breadcrumbs__list-back">
        <NuxtLink class="base-breadcrumbs__list-back-link" to="/">
          <span>Назад</span>
        </NuxtLink>
      </li>
      <li class="base-breadcrumbs__list-home">
        <NuxtLink class="base-breadcrumbs__list-home-link" to="/">
          Главная
        </NuxtLink>
      </li>
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="breadcrumb.title + breadcrumb.path"
        class="base-breadcrumbs__list-item"
      >
        <NuxtLink
          class="base-breadcrumbs__list-item-link"
          :to="breadcrumb.path"
        >
          {{ breadcrumb.title }}
        </NuxtLink>
        <span
          v-if="index !== breadcrumbs.length - 1"
          class="base-breadcrumbs__separator"
          >/</span
        >
      </li>
      <li v-if="currentPage" class="base-breadcrumbs__list-item-current">
        {{ currentPage }}
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.base-breadcrumbs {
  &__separator {
    padding: 0 5px;
    color: v-bind('color');
  }
}

.base-breadcrumbs {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ffffff81;
  }
  &__list {
    display: flex;
    align-items: center;
    gap: 10px;
    color: v-bind("color");

    &-back {
      display: flex;
      align-items: center;
      width: 74px;
      height: 17px;
      color: $accent;

      @include mediaLaptop {
        display: none;
      }
    }

    &-home {
      display: none;

      &-link {
        display: flex;
        gap: 5px;
        color: $header_link;

        &-icon {
          display: flex;
        }
      }

      @include mediaLaptop {
        display: flex;
      }
    }

    &-item {
      &:last-child {
        color: v-bind("color");
      }

      &:not(:last-child)::after {
        content: "/";
        padding: 0 5px;
        color: v-bind("color");
      }
    }

    &-item-current {
      color: $accent;
    }
  }
}
</style>
