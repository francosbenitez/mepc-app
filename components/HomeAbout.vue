<template>
  <section id="about">
    <div class="about__avatar">
      <div>
        <div class="about__image">
          <img src="@/assets/images/avatar.svg" alt="Avatar MEPC" />
        </div>
        <div class="about__social">
          <h2>MEPC</h2>
          <h3>Movimiento Estudiantil por la Psicología Científica</h3>
          <ul class="about__items">
            <template v-for="item in content.social_networks">
              <a :href="item.url" :key="item.url" class="about__items-networks">
                <component
                  :is="item.component"
                  :key="item.component"
                ></component>
              </a>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <div class="about__video">
      <div>
        <div class="about__iframe-wrapper">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/ieSG5JVLOow"
          ></iframe>
        </div>
        <div class="about__description">
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
import content from '@/lib/content.json'
import Email from '@/assets/icons/email.svg?inline'
import Facebook from '@/assets/icons/facebook.svg?inline'
import Instagram from '@/assets/icons/instagram.svg?inline'
import Twitter from '@/assets/icons/twitter.svg?inline'

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
  display: flex;
  flex-direction: column;
  max-width: 1152px;
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 5rem;

  .about__avatar {
    display: flex;
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

    .about__image {
      img {
        width: 80%;
        max-width: 344px;
        height: auto;
        border-radius: 50%;
      }
    }

    .about__social {
      margin-bottom: 2rem;

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

      @media (min-width: $breakpoint--md) {
        margin-bottom: 0;
      }
    }

    .about__items {
      list-style: none;
      display: inline-block;
      text-rendering: auto;
      line-height: 1;
      display: inline-flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;

      .about__items-networks {
        position: relative;
        margin: 10px;

        &:hover {
          border-bottom: none;
          transform: scale(1.2);
        }

        svg {
          fill: $color__primary;
        }
      }

      i {
        margin-right: 5px;
        padding: 3px;
        transition: all 0.7s ease-in-out;

        &:hover {
          transform: rotateY(360deg);
        }
      }
    }

    @media (min-width: $breakpoint--md) {
      flex-basis: 40%;
      align-content: flex-start;
    }
  }

  .about__video {
    color: $color__text;
    display: flex;
    text-align: center;

    .about__iframe-wrapper {
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

    @media (min-width: $breakpoint--md) {
      padding-left: 2rem;
      flex-basis: 60%;
    }
  }

  @media (min-width: $breakpoint--md) {
    flex-direction: row;
  }
}
</style>
