<script lang="ts" setup>
// Здесь можно будет добавить логику отправки формы
const submitForm = () => {
  alert("Форма отправлена!");
};
</script>

<template>
  <ModalBase>
    <form class="base-form-order-abonement" @submit.prevent="submitForm">
      <h2 class="base-form-order-abonement__title">Купить абонемент</h2>

      <div class="base-form-order-abonement__group">
        <label for="name">Имя</label>
        <input id="name" type="text" required />
      </div>

      <div class="base-form-order-abonement__group">
        <label for="email">Email</label>
        <input type="email" id="email" required />
      </div>

      <div class="base-form-order-abonement__group">
        <label for="plan">Выберите абонемент</label>
        <select id="plan" required>
          <option value="">Выберите...</option>
          <option value="month">1 месяц</option>
          <option value="quarter">3 месяца</option>
          <option value="year">1 год</option>
        </select>
      </div>

      <!-- <button type="submit" class="base-form-order-abonement__button">
        Оформить
      </button> -->
      <BaseButton
        size="lg"
        type="submit"
        label="Оформить"
        color="#ffc451"
        class="base-form-order-abonement__btn"
      />
    </form>
  </ModalBase>
</template>

<style scoped lang="scss">
.base-form-order-abonement {
  max-width: 400px;
  // margin: 80px auto;
  padding: 40px;
  background: #f5f5f5;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;

  &__btn {
    margin-top: 20px;
    width: 100%;
  }

  &__title {
    text-align: center;
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 600;
  }

  &__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    label {
      margin-bottom: 8px;
      font-size: 14px;
      color: #333;
    }

    input,
    select {
      padding: 10px 14px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 8px;
      outline: none;
      transition: border-color 0.3s;

      &:focus {
        border-color: #7c3aed;
      }
    }
  }

  &__button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: #7c3aed;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #5b21b6;
    }
  }
}

/* Адаптивность */
@media (max-width: 768px) {
  .base-form-order-abonement {
    padding: 20px;
  }
}

@media (max-width: 375px) {
  .base-form-order-abonement {
    padding: 16px;
  }
}
</style>
