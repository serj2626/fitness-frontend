<script lang="ts" setup></script>
<template>
  <footer class="footer-component container">
    <div class="footer-component__content">
      <div class="footer-component__content-copyright">
        <span>© 2025 Все права защищены</span>
      </div>
      <div class="footer-component__content-links">
        <NuxtLink class="footer-component__content-links-policy" to="/policy">Политика конфиденциальности</NuxtLink>
        <NuxtLink>Пользовательское соглашение</NuxtLink>
      </div>
    </div>
    <div class="footer-component__social">
      <Icon
        class="footer-component__social-link"
        name="ri:telegram-fill"
        size="30"
      />
      <Icon
        class="footer-component__social-link"
        name="ri:whatsapp-fill"
        size="30"
      />
      <Icon class="footer-component__social-link" name="ri:vk-fill" size="30" />
      <Icon
        class="footer-component__social-link"
        name="ri:linkedin-fill"
        size="30"
      />
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer-component {
  padding-block: 20px;
  border-top: 1px solid #ffc55178;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $white;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &-copyright {
      font-size: 15px;
      font-weight: 500;
      opacity: 0.8;
    }
    &-links {
      display: flex;
      gap: 20px;
      font-size: 15px;
      font-weight: 500;
      opacity: 0.8;
      cursor: pointer;
      &-policy{
        color: $white;
        transition: all 0.3s ease-in;
        &:hover {
          color: $accent;
        }
      }
    }
  }
  &__social {
    display: flex;
    gap: 10px;
    &-link {
      cursor: pointer;
      transition: all 0.3s ease-in;
      &:hover {
        color: $accent;
      }
    }
  }
}
</style>
