<script lang="ts" setup>
const modalsStore = useModalsStore();

const close = ref(false);

function closeListReviews() {
  close.value = true;
  setTimeout(() => {
    modalsStore.closeModal("reviewCoachForm");
  }, 300);
}
</script>
<template>
  <div
    class="coaches-review-form"
    :class="{ 'coaches-review-form_close': close }"
  >
    <div class="coaches-review-form__wraper">
      <p style="text-align: center; color: aliceblue; font-size: 26px">
        Оставьте свой комментарий
      </p>
      <form class="coaches-review-form__wraper-form">
        <RatingComponent class="coaches-review-form__wraper-form-stars" />
        <BaseInput
          class="coaches-review-form__wraper-form-name"
          placeholder="Ваше имя"
        />
        <BaseInput
          class="coaches-review-form__wraper-form-mail"
          placeholder="Ваша почта"
        />
        <div class="coaches-review-form__wraper-form-textarea">
          <BaseInputTextArea placeholder="Введите ваш отзыв." />
        </div>

        <BaseButton
          class="coaches-review-form__wraper-form-submit"
          label="Отправить"
          size="lg"
        />
      </form>
      <BaseButtonClose
        right="10px"
        top="10px"
        color="white"
        :size="30"
        @click="closeListReviews"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.coaches-review-form {
  position: fixed;
  top: 0;
  right: 0;
  max-width: 700px;
  width: 100%;
  height: 100vh;
  background-color: $bg;
  overflow-y: auto;
  box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.1);

  animation: open_reviews 0.5s ease-in-out;

  &_close {
    animation: close_reviews 0.3s ease-in-out;
  }

  &__wraper {
    position: relative;
    height: 100%;
    padding: 70px 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &-form {
      padding-block: 30px 10px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &-textarea {
        flex-grow: 1;
        width: 100%;

        &:deep(.base-input-text-area__input) {
          height: 350px !important;
        }
      }
      &-name {
        width: 100%;
        margin-bottom: 10px;
      }
      &-mail {
        width: 100%;
        margin-bottom: 20px;
      }
      &-stars {
        margin-bottom: 20px;
      }
      &-submit {
        margin-top: 30px;
        width: 100%;
        margin-left: auto;
        // color: green;
        transition: all color 0.3s;

        &:hover {
          color: $txt;
        }
      }
    }
  }
}

@keyframes open_reviews {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes close_reviews {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
