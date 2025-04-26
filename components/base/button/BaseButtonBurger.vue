<script setup lang="ts"></script>
<template>
  <button class="btn">
    <span class="btn__line-one"></span>
    <span class="btn__line-two"></span>
  </button>
</template>
<style scoped lang="scss">
.btn {
  position: absolute;
  top: 40px;
  right: 60px;
  cursor: pointer;

  & span {
    display: block;
    opacity: 1;
    background: $accent;
    width: 40px;
    height: 2px;
    margin-bottom: 8px;
    transition: 0.6s ease;
    box-sizing: border-box;
  }
}

.btn:hover {
  .btn__line-one {
    // rotate: -45deg;
    opacity: 1;
    transform: translateY(4px) rotate(-45deg);
  }
  .btn__line-two {
    // rotate: 45deg;
    opacity: 1;
    transform: translateY(-4px) rotate(45deg);
  }
}
</style>
