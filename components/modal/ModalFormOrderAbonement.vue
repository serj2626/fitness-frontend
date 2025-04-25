<script lang="ts" setup>
// Здесь можно будет добавить логику отправки формы
const submitForm = () => {
  alert("Форма отправлена!");
};
</script>

<template>
  <div class="modal-form-buy-abonement">
    <form @submit.prevent="submitForm" class="form">
      <h2 class="form__title">Купить абонемент</h2>

      <div class="form__group">
        <label for="name">Имя</label>
        <input type="text" id="name" required />
      </div>

      <div class="form__group">
        <label for="email">Email</label>
        <input type="email" id="email" required />
      </div>

      <div class="form__group">
        <label for="plan">Выберите абонемент</label>
        <select id="plan" required>
          <option value="">Выберите...</option>
          <option value="month">1 месяц</option>
          <option value="quarter">3 месяца</option>
          <option value="year">1 год</option>
        </select>
      </div>

      <button type="submit" class="form__button">Оформить</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.modal-form-buy-abonement {
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    background: #fff;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;

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
}

/* Адаптивность */
@media (max-width: 768px) {
  .form {
    padding: 20px;
  }
}

@media (max-width: 375px) {
  .form {
    padding: 16px;
  }
}
</style>
