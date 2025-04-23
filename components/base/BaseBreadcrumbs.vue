<template>
  <nav class="common-breadcrumbs">
    <ul class="common-breadcrumbs__list">
      <li class="common-breadcrumbs__list__go-back" >
        <NuxtLink class="common-breadcrumbs__list-item-link" to="/">
          <span>< Назад</span>
        </NuxtLink>
      </li>
      <li class="common-breadcrumbs__list-item">
        <NuxtLink 
          class="common-breadcrumbs__list-item-link" 
          to="/"
        > 
          Главная
        </NuxtLink>
      </li>
      <li
        class="common-breadcrumbs__list-item"
        v-for="breadcrumb in breadcrumbs"
        :key="breadcrumb.title + breadcrumb.path"
      >
        <NuxtLink 
        class="common-breadcrumbs__list-item-link" 
        :to="breadcrumb.path">
          {{ breadcrumb.title }}
        </NuxtLink>
      </li>
      <li v-if="currentPage"
      class="common-breadcrumbs__list-item common-breadcrumbs__list-item_current" 
      >
        {{ currentPage }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    default: () => []
  },
  currentPage: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: "#7e7e7e"
  }
})
</script>

<style lang="scss" scoped>
.common-breadcrumbs {
  &__list {
    display: flex;
    align-items: center;

    @include inter(12px, v-bind(color), 130%, 400);

    &__go-back {
      display: flex;
      align-items: center;
      width: 74px;
      height: 17px;

      @include mediaLaptop {
        display: none;
      }
    }

    &-item {
      display: none;

      &-link {
        display: flex;
        gap: 5px;

        &-icon {
          display: flex;
        }
      }

      @include mediaLaptop {
        display: flex;
      }

      &_current {
        color: v-bind(color);
      }
    }

    &-item:last-child {
      color: v-bind(color);
    }

    &-item:not(:last-child)::after {
      content: '>';
      padding: 0 5px;
      color: v-bind(color);
    }
  }
}
</style>
