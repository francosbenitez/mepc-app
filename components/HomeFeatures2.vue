<template>
  <section id="collaboration">
    <div class="titles">
      <h1>¿Cómo colaborar?</h1>
      <hr />
    </div>
    <section class="collaboration__content">
      <div class="container-feature">
        <div class="avatar">
          <div class="avatar-image">
            <img src="./assets/images/speaker.svg" alt="Avatar MEPC" />
          </div>
        </div>
      </div>
      <div class="container-description">
        <div class="asd">
          <h2 class="feature-title">Corré la voz</h2>
          <p class="feature-description">
            Una mejor educación es para todes. Ayudanos a correr la voz
            siguiéndonos y compartiendo nuestros contenidos en
            <a href="https://twitter.com/MEPC_oficial">Twitter</a>,
            <a href="https://www.youtube.com/channel/UCJpN1ANkID-67MQ2alMek-g"
              >YouTube</a
            >, <a href="https://www.facebook.com/mepc.oficial/">Facebook</a>,
            <a href="https://www.instagram.com/mepc.oficial/">Instagram</a> y
            otras redes sociales
          </p>
          .
        </div>
      </div>
    </section>
    <section class="collaboration__content">
      <div class="container-feature">
        <div class="avatar">
          <div class="avatar-image">
            <img src="./assets/images/remote-team.svg" alt="Avatar MEPC" />
          </div>
        </div>
      </div>
      <div class="container-description">
        <div class="asd">
          <h2 class="feature-title">Unite a nuestro equipo</h2>
          <p class="feature-description">
            Podés unirte a nuestros departamentos
            <a href="./contacto.html">enviándonos un mail</a>. También podés
            colaborar con el sitio web a través de
            <a href="https://github.com/francosbenitez/mepc">Github</a>.
          </p>
        </div>
      </div>
    </section>
    <section class="collaboration__content">
      <div class="container-feature">
        <div class="avatar">
          <div class="avatar-image">
            <img src="./assets/images/studying.svg" alt="Avatar MEPC" />
          </div>
        </div>
      </div>
      <div class="container-description">
        <div class="asd">
          <h2 class="feature-title">Unite a nuestros grupos de estudio</h2>
          <p class="feature-description">
            Contamos con
            <a href="./que-estudiamos.html">nueve grupos de estudio</a> sobre
            diferentes temas relacionados a la psicología científica. ¡Sumándote
            a ellos podremos compartir y aprender en conjunto!
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<style lang="scss">
.collaboration__content {
  color: $color__text;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.container-feature .avatar .avatar-image img {
  width: 10rem;
  max-width: 344px;
  height: auto;
  border-radius: 50%;
}

.collaboration__content .container-description .asd .feature-title,
.collaboration__content .container-description .asd .feature-description {
  margin: 1rem 0 1rem 0;
}

.container-description {
  flex-basis: 60%;
  color: $color__text;
  display: flex;
  text-align: left;
}

@media (max-width: 1300px) {
  .container-description {
    padding: 0 1rem 0 1rem;
    text-align: center;
  }

  .collaboration__content {
    flex-direction: column;
    align-items: center;
  }
}
</style>
