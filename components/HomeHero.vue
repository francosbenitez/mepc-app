<template>
  <section id="hero">
    <div class="hero__container">
      <div class="hero__description">
        <h1>¿Quiénes somos?</h1>
        <h2>
          Somos una organización independiente de estudiantes y graduades, que
          tenemos como fin promover el pensamiento crítico y la psicología
          científica, formarnos entre los integrantes en temas afines y reclamar
          por una formación actualizada, plural y científica.
        </h2>
      </div>
      <div class="hero__image">
        <img src="@/assets/images/hero.svg" alt="MEPC cover" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#hero {
  background-color: $color__primary;
  padding-top: 5rem;
  padding-bottom: 5rem;

  .hero__container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 1152px;

    .hero__description {
      flex-basis: 50%;

      h1 {
        font-size: 55px;
        line-height: 4rem;
        color: $color__white;
        margin-bottom: 1rem;
        @include hero-animation;
      }

      h2 {
        font-size: 23px;
        line-height: 2.5rem;
        color: $color__white;
        font-family: 'Montserrat';
        font-weight: 400;
        @include hero-animation;
      }

      @media (min-width: $breakpoint--md) {
        text-align: left;
      }
    }

    .hero__image {
      flex-basis: 50%;
      width: 100%;
      margin: auto;

      img {
        @include hero-animation;
      }
    }

    @media (min-width: $breakpoint--md) {
      flex-direction: row;
    }
  }
}
</style>
