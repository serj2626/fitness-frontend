<script lang="ts" setup></script>
<template>
  <section id="main-about-section" class="main-about-section">
    <div class="container">
      <div class="main-about-section__text" data-aos="fade-up" data-aos-duration="2000">
        <span>СИЛА:</span>
        Тренажерный зал, кардио-зона, TRX, зона свободных весов, бассейн, бокс,
        единоборства, круговая тренировка, BUMS + ABC, PUMP, LOWER BODY, CORE+,
        табата, тай бо, body sculpt, step interval, spinning 2
        <span>РЕЛАКС:</span>
        Косметология тела и лица, гидромассаж, душ Шарко, ароматерапия,
        обертывания и пилинги, салон красоты, массаж (антицеллюлитный,
        кисточковый, скульптурирующий, баночный, медовый, стоун), этнический
        массажный кабинет, японская бочка, русская парная, джакузи, сауна, СПА,
        солярий, хамам, interval cross fitness
        <span>ЭНЕРГИЯ:</span>
        Йога, аэройога, пилатес, сайкл-студия, antiage, здоровая спина, aqua
        all, aqua mix, aqua tabata, йога для лица, йога нидра, aero yoga
        <NuxtImg src="/woman.png" width="400" class="main-about-section__img"/>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.main-about-section {
  // min-height: 600px;
  padding-block: 100px 30px;
  &__img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &__text {
    position: relative;
    text-transform: uppercase;
    line-height: 1.5;
    font-size: 1.9rem;
    text-align-last: justify;
    color: $white;
    & span {
      color: $accent;
      &::after {
        content: " ";
        display: inline-block;
        width: 0.6em; // или любая подходящая ширина
      }
    }
  }
}
</style>
