<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";

// const modalStore = useModalsStore();
const text = ref("Начни сейчас и никогда не останавливайся.".split(""));
</script>
<template>
  <section class="main-first-section">
    <div class="main-first-section__wraper">
      <h1 class="main-first-section__wraper-title">
        <span
          v-for="(letter, indx) in text"
          :key="indx"
          class="letter"
          :style="{ animationDelay: `${indx * 0.1}s` }"
        >
          {{ letter === " " ? "\u00A0" : letter }}
        </span>
      </h1>
      <a class="main-first-section__wraper-arrow" href="#main-abonements-section" >
        <Icon
          class="main-first-section__wraper-arrow-icon"
          :name="HeroIcons.DOWN"
        />
        <Icon
          class="main-first-section__wraper-arrow-icon"
          :name="HeroIcons.DOWN"
        />
        <Icon
          class="main-first-section__wraper-arrow-icon"
          :name="HeroIcons.DOWN"
        />
      </a>
    </div>
  </section>
</template>
<style scoped lang="scss">
.main-first-section {
  height: 100vh;
  width: 100%;
  position: relative;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/first-section.jpg");

  background-size: cover;
  background-position: center;

  background-repeat: no-repeat;

  &__wraper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    &-arrow {
      display: flex;
      flex-direction: column;
      color: $accent;

      &-icon {
        font-size: 48px;
      }
    }

    &-title {
      font-weight: 400;
      font-size: 46px;
      width: 600px;
      margin-bottom: 20px;
      text-align: center;
      text-shadow: 0px 4px 4px rgba(160, 33, 33, 0.25);
    }
  }
}

.letter {
  display: inline-block;
  opacity: 0;
  color: $white;
  animation: opacity_letter 0.5s ease forwards;
}

@keyframes opacity_letter {
  from {
    opacity: 0;
    scale: 0.9;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
.main-first-section__wraper-arrow-icon:nth-child(1) {
  animation: arrow_wave 2s ease-in-out 0s infinite;
}
.main-first-section__wraper-arrow-icon:nth-child(2) {
  animation: arrow_wave 2s ease-in-out 0.4s infinite;
}
.main-first-section__wraper-arrow-icon:nth-child(3) {
  animation: arrow_wave 2s ease-in-out 0.8s infinite;
}

@keyframes arrow_wave {
  0% {
    opacity: 0;
    transform: translateY(0px) scale(0.5);
  }
  50% {
    opacity: 1;
    transform: translateY(-10px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(0px) scale(0.5);
  }
}
</style>
