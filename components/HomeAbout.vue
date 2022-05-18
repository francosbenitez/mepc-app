<template>
  <section id="about">
    <div class="container-avatar">
      <div class="avatar">
        <div class="avatar-image">
          <img src="./assets/images/avatar.svg" alt="Avatar MEPC" />
        </div>
        <div class="avatar-description">
          <h2>MEPC</h2>
          <h3>Movimiento Estudiantil por la Psicología Científica</h3>
          <ul class="network-icon" aria-hidden="true">
            <li>
              <a href="mailto:mepc.org@gmail.com" target="_blank"
                ><i class="fas fa-envelope fa-2x"></i
              ></a>
            </li>
            <li>
              <a href="https://www.facebook.com/mepc.oficial/" target="_blank"
                ><i class="fab fa-facebook fa-2x"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/groups/2641583789449049"
                target="_blank"
                ><i class="fab fa-facebook fa-2x"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/mepc.oficial/" target="_blank"
                ><i class="fab fa-instagram fa-2x"></i
              ></a>
            </li>
            <li>
              <a href="https://twitter.com/MEPC_oficial" target="_blank"
                ><i class="fab fa-twitter fa-2x"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCJpN1ANkID-67MQ2alMek-g"
                target="_blank"
                rel="noopener"
                ><i class="fab fa-youtube fa-2x"></i
              ></a>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/LXTB9dRdP2z0d8meLKz1eg"
                target="_blank"
                ><i class="fab fa-whatsapp fa-2x"></i
              ></a>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/LWqNQwz5UxhJIJwrArgJ3E"
                target="_blank"
                ><i class="fab fa-whatsapp fa-2x"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-video">
      <div class="video">
        <div class="video-link">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/ieSG5JVLOow"
          ></iframe>
        </div>
        <div class="video-description">
          <br />
          <hr />
          <p>
            Somos el Movimiento Estudiantil por la Psicología Científica (MEPC),
            un grupo de estudiantes y graduades autoconvocades de diferentes
            puntos del país que compartimos un mismo ideal: el desarrollo de una
            formación y una práctica profesional basadas en fundamentos
            científicos. Nacimos en la Facultad de Psicología de la Universidad
            de Buenos Aires (UBA), y ya sumamos casi 3000 personas de diferentes
            casas de estudio que creemos que la ciencia es el camino que debemos
            seguir en psicología para mejorar nuestra formación.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.container-avatar {
  display: flex;
  padding: 60px 0px 0px 0px;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 33%;
  text-align: center;
  float: left;
}

.container-avatar .avatar-image img {
  width: 80%;
  max-width: 344px;
  height: auto;
  border-radius: 50%;
}

.container-avatar .avatar-description h2 {
  color: var(--color-text);
  font-family: 'Montserrat';
  margin: 10px 0 10px 0;
}

.container-avatar .avatar-description h3 {
  color: var(--color-text);
  font-family: 'Montserrat';
  font-weight: 400;
  margin: 10px 0 10px 0;
}

.container-avatar .network-icon {
  list-style: none;
  display: inline-block;
  text-rendering: auto;
  line-height: 1;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}

.container-avatar .network-icon i {
  margin-right: 5px;
  padding: 3px;
  transition: all 0.7s ease-in-out;
}

.container-avatar .network-icon i:hover {
  transform: rotateY(360deg);
}

.container-video {
  color: var(--color-text);
  display: flex;
  padding: 60px 20px;
  text-align: center;
}

.container-video .video-link {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
}

.container-video .video-link iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: $breakpoint--md) {
  .container-avatar {
    width: 100%;
  }
}
</style>
