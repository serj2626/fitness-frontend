<script lang="ts" setup></script>
<template>
  <section id="main-feedback-section" class="main-feedback-section">
    <div class="main-feedback-section__wraper container">
      <h4 class="main-feedback-section__wraper-title">Оставьте заявку</h4>
      <p class="main-feedback-section__wraper-text">
        И получите выгодное предложение <BaseDot />
      </p>
      <div class="main-feedback-section__wraper-content">
        <div class="main-feedback-section__wraper-content-info">
          <a class="main-feedback-section__wraper-content-info-tel"
            >8-999-999-99-99
          </a>
          <p class="main-feedback-section__wraper-content-info-adress">
            СПБ, улица Будапештская дом 89
          </p>
        </div>
        <form class="main-feedback-section__wraper-content-form">
          <div class="main-feedback-section__wraper-content-form-input">
            <input
              type="text"
              placeholder="Ваше имя"
              class="main-feedback-section__wraper-content-form-input-name"
            />
            <input
              type="tel"
              placeholder="+7 (___)___-__-__"
              class="main-feedback-section__wraper-content-form-input-phone"
            />
          </div>
          <label class="main-feedback-section__wraper-content-form-check">
            <input
              type="checkbox"
              class="main-feedback-section__wraper-content-form-check-input"
            />
            <p class="main-feedback-section__wraper-content-form-check-text">
              Согласен на
              <NuxtLink
                class="main-feedback-section__wraper-content-form-check-text-link"
                >обработку своих персональных данных</NuxtLink
              >
            </p>
          </label>
          <button class="main-feedback-section__wraper-content-form-btn">
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-feedback-section {
  padding-block: 100px;

  &__wraper {
    &-title {
      font-weight: 600;
      font-size: 36px;
      color: $accent;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 30px;
      letter-spacing: 2px;
      opacity: 0.8;
    }
    &-text {
      text-align: center;
      font-weight: 700;
      font-size: 30px;
      color: $white;
      margin-top: 20px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    &-content {
      margin-top: 120px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 50px;
      @include mediaTablet {
        grid-template-columns: repeat(2, 1fr);
      }

      &-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        @include mediaTablet{
          align-items: start;
        }
        &-tel {
          color: $accent;
          opacity: 0.8;
        }
        &-adress {
          color: $white;
        }
      }
      &-form {
        display: flex;
        flex-direction: column;
        &-input {
          display: flex;
          // gap: 20px;
          margin-bottom: 50px;
          justify-content: space-between;
          &-name {
            border-radius: 10px;
            padding: 20px;
            color: #fff;
            background-color: #323232;
            border: 1px solid #323232;
            transition: all 0.6s ease-in;
            &::placeholder {
              color: $white;
            }
            &:focus {
              border-color: $accent;
            }
          }
          &-phone {
            border-radius: 10px;
            padding: 20px;
            color: #fff;
            background-color: #323232;
            border: 1px solid #323232;
            transition: all 0.6s ease-in;
            &::placeholder {
              color: $white;
            }
            &:focus {
              border-color: $accent;
            }
          }
        }
        &-check {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          // &-input{
          //   padding: 10px;
          // }
          &-text {
            color: $white;
            &-link {
              color: #ffc551c4;
              cursor: pointer;
            }
          }
        }

        &-btn {
          display: inline-block;
          border-radius: 10px;
          padding: 15px 20px;
          background-color: #ffc551;
          color: $txt;
        }
      }
    }
  }
}
</style>
