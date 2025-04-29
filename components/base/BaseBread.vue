<script lang="ts" setup>
interface ILink {
  title: string;
  url: string;
}

defineProps<{
  breadcrumbs?: ILink[];
}>();
</script>
<template>
  <div class="base-bread">
    <div class="container">
      <ul class="base-bread__links">
        <NuxtLink class="base-bread__links-home" to="/">Главная</NuxtLink>
        <NuxtLink
          v-for="(link, indx) in breadcrumbs"
          :key="indx"
          :to="link.url"
          class="base-bread__links-item"
        >
          {{ link.title }}
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.base-bread {
  &__links {
    display: flex;
    gap: 10px;
    align-items: center;
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #ffffff81;
    }
    &-item {
      &:not(:last-child)::after {
        content: "/";
        padding: 0 5px;
        color: $white;
      }
    }
  }
}
</style>
