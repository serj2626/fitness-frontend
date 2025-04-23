<template>
  <div class="app">
    <HeaderComponent />
    <slot />
    <FooterComponent />
    <LazyScrollToTop />
    <LazyModalComponent />
  </div>
</template>
<style lang="scss">

.app{
  // display: flex;
  // flex-direction: column;
  // min-height: 100vh;
  // height: 100%;
  // justify-content: space-between;
}
</style>