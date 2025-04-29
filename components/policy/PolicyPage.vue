<template>
  <div class="policy-page">
    <div class="container">
      <BaseBreadcrumbs class="policy-page__breadcrumbs" :current-page="title" />
      <BaseWysiwyg class="policy-page__wysiwyg" :html="policyHtml" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { policyHtml } from "~/assets/data/moke.data";
const title = ref("Политика конфиденциальности");
</script>

<style scoped lang="scss">
.policy-page {
  padding-block: 100px;

  &__breadcrumbs {
    margin-bottom: 50px;
  }

  &__wysiwyg {
  }
}
</style>
