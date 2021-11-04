<template>
  <main class="about">
    <div class="about__avatar">
      <div class="about__avatar-wrapper">
        <div class="about__avatar-svg-wrapper">
          <img src="~assets/svg/avatar.svg" alt="">
        </div>
        <div class="about__avatar-description">
          <h2>MEPC</h2>
          <h3>Movimiento Estudiantil por la Psicología Científica</h3>
        </div>
      </div>
    </div>
    <div class="about__video">
      <div class="about__video-wrapper">
        <div class="about__video-youtube">
          <iframe width="800" height="500" src="https://www.youtube.com/embed/ieSG5JVLOow"></iframe>
        </div>
        <div class="about__video-description">
          <hr>
          <p>
            Somos el Movimiento Estudiantil por la Psicología Científica (MEPC), un grupo de estudiantes y 
            graduades autoconvocades de diferentes puntos del país que compartimos un mismo ideal: 
            el desarrollo de una formación y una práctica profesional basadas en
            fundamentos científicos. Nacimos en la Facultad de Psicología de la Universidad de Buenos Aires (UBA), 
            y ya sumamos casi 3000 personas de diferentes casas de estudio que creemos que la ciencia es el camino que 
            debemos seguir en psicología para mejorar nuestra formación.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.about__avatar {
  display: flex;
  padding: 60px 0px 0px 0px;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 33%;
  text-align: center;
  float: left;

  @media (max-width: $breakpoint--xl) {
    width: 100%;
  }
}

.about__avatar-svg-wrapper img {
  width: 80%;
  max-width: 344px;
  height: auto;
  border-radius: 50%;
}

.about__avatar-description {
  h2 {
    color: var(--color-text);
    font-family: 'Montserrat';
    margin: 10px 0 10px 0;
  }

  h3 {
    color: var(--color-text);
    font-family: 'Montserrat';
    font-weight: 400;
    margin: 10px 0 10px 0;
  }
}

.about__video {
  color: var(--color-text);
  display: flex;
  padding: 60px 20px;
  text-align: center;
}

.about__video-youtube {
  position: relative;
  padding-bottom: 56.25%; 
  padding-top: 25px;
  height: 0;
}

.about__video-youtube iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
