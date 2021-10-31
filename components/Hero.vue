<template>
  <section id="hero">
    <div class="container-hero">
      <div class="hero-description">
        <h1>¿Quiénes somos?</h1>
        <h2>
        Somos una organización independiente de <br>estudiantes y graduades, que tenemos como<br> 
        fin promover el pensamiento crítico y la<br> psicología científica, formarnos entre los<br> 
        integrantes en temas afines y reclamar por<br> una formación
        actualizada, plural y científica.
        </h2>
      </div>
      <div class="hero-image">
        <img src="~assets/svg/hero.svg" alt="Logo de portada de MEPC">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container-hero {
  width: 100%;
  display: flex;
  background-color: var(--color-base);
  padding: 4rem 0 4rem 0;
}

.container-hero .hero-description {
  flex-basis: 50%; 
  padding-left: 5vw;
}

.container-hero .hero-description h1 {
  font-size: 55px;
  color: var(--color-white);
  margin: 2rem 0 1rem 0;
}

.container-hero .hero-description h2 {
  font-size: 23px;
  color: var(--color-white);
  font-family: 'Montserrat';
  font-weight: 400;
}

.container-hero .hero-image img {
  width: 200%;
  margin: 3rem 0 0 0;
}

.container-hero 
.hero-description h1, 
.hero-description h2, 
.hero-image img {
  opacity: 0;
  position: relative;
  bottom: 1000px;
  -webkit-animation: slide-bottom 2.5s cubic-bezier(0.87, 0, 0.13, 1) forwards;
  animation: slide-bottom 2.5s forwards cubic-bezier(0.87, 0, 0.13, 1) forwards;
}

@keyframes slide-bottom {
  100% { 
      bottom: 0; 
      opacity: 1; 
  }
}

@media (max-width: 1300px) {
  .container-hero {
    flex-direction: column;
    text-align: center;
  }

  .container-hero .hero-description {
    padding: 0 1rem 0 1rem;
  }

  .container-hero .hero-image img {
    width: 100%;
    margin: 0 0 0 0;
  }
}

</style>