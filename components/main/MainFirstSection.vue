<script lang="ts" setup></script>
<template>
  <section id="main-first-section" class="main-first-section"></section>
</template>
<style lang="scss" scoped>
.main-first-section {
  position: relative;
  top: 0;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/first-section.jpg");

  background-size: cover;
  background-position: center;

  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}
</style>
