<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const sections = ref<NodeListOf<HTMLElement>>();
const currentSection = ref(0);
const isScrolling = ref(false);

onMounted(() => {
  sections.value = document.querySelectorAll('section');

  window.addEventListener('wheel', (e) => {
    if (!sections.value) return;
    if (isScrolling.value) return;
    
    const direction = e.deltaY > 0 ? 1 : -1;
    const nextSection = currentSection.value + direction;

    // Проверка выхода за границы
    if (nextSection < 0 || nextSection >= sections.value.length) {
      return;
    }

    isScrolling.value = true;
    currentSection.value = nextSection;

    sections.value[currentSection.value].scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      isScrolling.value = false;
    }, 800); // чуть быстрее отклик
  });
});
</script>
<template>
  <div>
    <MainFirstSection />
    <MainAbonementsSection />
    <MainServicesSection />
    <MainPoolSection />
    <MainCoachesSection />
    <MainReviewsSection />
    <BaseFormFeedback />
  </div>
</template>
