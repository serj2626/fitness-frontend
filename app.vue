<script setup lang="ts">
const config = useRuntimeConfig();
console.log("config", config);
onMounted(() => {
  const replainSettings = { id: config.public.yandexMaps.apikey };

  // Сначала задаем настройки
  window.replainSettings = replainSettings;

  // Теперь подключаем внешний скрипт
  const script = document.createElement("script");
  script.src = "https://widget.replain.cc/dist/client.js";
  script.async = true;

  document.body.appendChild(script);
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <BaseSeoMeta /> -->
  </div>
</template>
<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in;
  transition-duration: 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
