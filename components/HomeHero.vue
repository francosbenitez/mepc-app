<template>
  <section id="hero">
    <div class="container-hero">
      <div class="hero-description">
        <h1>¿Quiénes somos?</h1>
        <h2>
          Somos una organización independiente de estudiantes y graduades, que
          tenemos como fin promover el pensamiento crítico y la psicología
          científica, formarnos entre los integrantes en temas afines y reclamar
          por una formación actualizada, plural y científica.
        </h2>
      </div>
      <div class="hero-image">
        <img src="./assets/images/hero.svg" alt="MEPC cover" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.container-hero {
  width: 100%;
  display: flex;
  background-color: $color__primary;
  padding: 4rem 0 4rem 0;

  .hero-description {
    flex-basis: 50%;
    padding-left: 5vw;

    h1 {
      font-size: 55px;
      color: $color__white;
      margin: 2rem 0 1rem 0;
      @include hero-animation;
    }

    h2 {
      font-size: 23px;
      color: $color__white;
      font-family: 'Montserrat';
      font-weight: 400;
      @include hero-animation;
    }
  }

  .hero-image {
    img {
      width: 200%;
      margin: 3rem 0 0 0;
      @include hero-animation;
    }
  }
}

@media (max-width: 1300px) {
  .container-hero {
    flex-direction: column;
    text-align: center;

    .hero-description {
      padding: 0 1rem 0 1rem;
    }

    .hero-image img {
      width: 100%;
      margin: 0 0 0 0;
    }
  }
}
</style>
