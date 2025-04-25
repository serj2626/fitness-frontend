<script lang="ts" setup>
interface IProps {
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
}

const { label = "Button", size = "md", color = "#ffc451" } = defineProps<IProps>();
</script>
<template>
  <button class="base-button">{{ label }}</button>
</template>
<style lang="scss">
.base-button {
  font-size: 14px;
  padding: 8px 30px;
  border-radius: 4px;
  transition: all 0.3s ease-in;
  border: 2px solid v-bind(color);
  color: $header_link;

  &:hover {
    background-color: $accent;
    color: $txt;
  }
}
</style>
