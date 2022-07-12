<template>
  <footer class="footer">
    <div class="footer__content">
      <p>MEPC © 2021</p>
      <p>
        Desarrollado con ☕️ y
        <a
          href="https://github.com/francosbenitez/mepc-frontend"
          target="_blank"
          rel="noopener"
        >
          <GitHub
        /></a>
        por
        <a
          href="https://www.francosbenitez.com/"
          target="_blank"
          rel="noopener"
        >
          Franco Sebastián Benítez</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
import GitHub from '@/assets/icons/github.svg?inline'

export default {
  components: {
    GitHub,
  },
}
</script>

<style lang="scss">
.footer {
  color: $color__text;
  text-align: center;
  font-size: 13px;
  position: relative;
  background-color: $color__white;
  padding: 0.75rem 0 1rem;
  box-shadow: 0 0 2rem -1rem rgba(0, 0, 0, 0.2);

  .footer__content {
    margin: 0 auto;
    max-width: 1152px;
    position: relative;
    width: 90%;

    p {
      margin: 10px 0 10px 0;
    }

    svg {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
