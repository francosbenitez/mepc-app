<template>
  <main class="hero">
    <div class="hero__description">
      <h1>
        ¿Quiénes somos?
      </h1>
      <h2>
        Somos una organización independiente de <br>estudiantes y graduades, que tenemos como<br> 
        fin promover el pensamiento crítico y la<br> psicología científica, formarnos entre los<br> 
        integrantes en temas afines y reclamar por<br> una formación
        actualizada, plural y científica.
      </h2>
    </div>
    <div class="hero__image">
      <img src="~assets/svg/hero.svg" alt="">
    </div>
  </main>
</template>

<style scoped lang="scss">
.hero {
  width: 100%;
  display: flex;
  background-color: $color__primary;
  padding: 4rem 0 4rem 0;

  @media (max-width: $breakpoint--xl) {
    flex-direction: column;
    text-align: center;
  }
}

.hero__description {
  flex-basis: 50%; 
  padding-left: 5vw;
  
  h1 {
    font-size: 55px;
    color: $color__background;
    margin: 2rem 0 1rem 0;
  }
  
  h2 {
    font-size: 23px;
    color: $color__background;
    font-family: 'Montserrat';
    font-weight: 400;
  }

  @media (max-width: $breakpoint--xl) {
    padding: 0 1rem 0 1rem;
  }
}

.hero .hero__image img {
  width: 200%;
  margin: 3rem 0 0 0;

  @media (max-width: $breakpoint--xl) {
    width: 100%;
    margin: 0 0 0 0;
 }
}

.hero 
.hero__description h1, 
.hero__description h2, 
.hero__image img {
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
</style>