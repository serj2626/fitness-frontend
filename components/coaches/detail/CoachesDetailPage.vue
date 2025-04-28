<script lang="ts" setup>
const modalsStore = useModalsStore();
</script>
<template>
  <div class="coaches-detail-page">
    <div class="container">
      <div class="coaches-detail-page__content">
        <div class="coaches-detail-page__content-info">
          <!-- <Icon name="icon:star" size="30" /> -->
          <NuxtImg
            class="coaches-detail-page__content-info-img"
            src="/coaches/five.webp"
          />
          <RatingComponent :rating="4.5" :count="5" />
          <BaseButton
            size="lg"
            label="Записаться"
            class="coaches-detail-page__content-info-button"
          />
        </div>
        <div class="coaches-detail-page__content-main">
          <div class="coaches-detail-page__content-main-actions">
            <button class="coaches-detail-page__content-main-actions-item">
              Контакты
            </button>
            <button
              class="coaches-detail-page__content-main-actions-item"
              @click="modalsStore.openModal('reviewCoachForm')"
            >
              Отзывы
            </button>
            <button class="coaches-detail-page__content-main-actions-item">
              Фотографии
            </button>
          </div>
          <div class="coaches-detail-page__content-main-concats">
            <div class="coaches-detail-page__content-main-concats-item">
              <span>Телефон:</span>
              <span>8-800-555-35-35</span>
            </div>
            <div class="coaches-detail-page__content-main-concats-item">
              <span>Телефон:</span>
              <span>8-800-555-35-35</span>
            </div>
            <div class="coaches-detail-page__content-main-concats-item">
              <span>Телефон:</span>
              <span>8-800-555-35-35</span>
            </div>
            <div class="coaches-detail-page__content-main-concats-item">
              <span>Телефон:</span>
              <span>8-800-555-35-35</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.coaches-detail-page {
  padding-block: 100px;

  &__content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 50px;
    padding-block: 50px;

    &-info {
      // position: sticky;
      // top: 100px;
      // z-index: 10; /* чтобы блок не перекрывался другими элементами */

      &-img {
        border-radius: 15px;
        margin-bottom: 30px;
      }
      &-button {
        display: block;
        width: 100%;
        margin-top: 20px;
      }
    }
    &-main {
      display: flex;
      flex-direction: column;
      gap: 20px;
      &-actions {
        display: flex;
        justify-content: center;
        gap: 40px;
        &-item {
          position: relative;
          border-radius: 5px;
          background-color: $bg;
          color: $white;
          font-size: 17px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease-in;
          &:hover {
            color: $accent;
          }
          &:before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 100%;
            height: 2px;
            background-color: $accent;
          }
        }
      }
    }
  }
}
</style>
