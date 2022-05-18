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
          <ul class="network-icon">
            <template v-for="item in content.social_networks">
              <a
                :href="item.url"
                :key="item.url"
                style="position: relative; margin: 10px"
              >
                <component :is="item.component" :key="item"></component>
              </a>
            </template>
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

<script>
import content from '../lib/content.json'
import Email from './assets/icons/email.svg?inline'
import Facebook from './assets/icons/facebook.svg?inline'
import Instagram from './assets/icons/instagram.svg?inline'
import Twitter from './assets/icons/twitter.svg?inline'

export default {
  data() {
    return {
      content: content,
    }
  },
  components: {
    Email,
    Facebook,
    Instagram,
    Twitter,
  },
}
</script>

<style lang="scss">
#about {
  max-width: 1152px;
  position: relative;
  width: 90%;
  margin: 0 auto;

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

    @media (max-width: $breakpoint--md) {
      width: 100%;
    }

    .avatar-image {
      img {
        width: 80%;
        max-width: 344px;
        height: auto;
        border-radius: 50%;
      }
    }

    .avatar-description {
      h2 {
        color: $color__text;
        font-family: 'Montserrat';
        margin: 10px 0 10px 0;
      }

      h3 {
        color: $color__text;
        font-family: 'Montserrat';
        font-weight: 400;
        margin: 10px 0 10px 0;
      }
    }

    .network-icon {
      list-style: none;
      display: inline-block;
      text-rendering: auto;
      line-height: 1;
      display: inline-flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;

      i {
        margin-right: 5px;
        padding: 3px;
        transition: all 0.7s ease-in-out;

        &:hover {
          transform: rotateY(360deg);
        }
      }
    }
  }

  .container-video {
    color: $color__text;
    display: flex;
    padding: 60px 20px;
    text-align: center;

    .video-link {
      position: relative;
      padding-bottom: 56.25%;
      padding-top: 25px;
      height: 0;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
