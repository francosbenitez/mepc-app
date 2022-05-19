<template>
  <main>
    <section id="study">
      <div class="study__title--primary">
        <h1>¿Qué estudiamos?</h1>
        <hr />
      </div>
      <div class="alert__note--left">
        Para saber más acerca de los grupos de estudio, pulsá encima de ellos.
        Si querés participar, sólo tenés que enviar un mail al grupo deseado. En
        breve te vamos a estar contactando.
      </div>
      <h2 class="study__subtitle">Grupos de estudio</h2>
      <div class="study__content">
        <div
          class="study__item"
          v-for="item in content.study_groups"
          :key="item.id"
        >
          <NuxtLink
            :to="{
              name: 'study-groups-slug',
              params: { slug: item.slug },
            }"
            class="study__link"
          >
            <img
              class="study__image"
              :src="require('@/assets/images/' + item.img)"
              alt=""
            />
          </NuxtLink>
          <div class="study__title">
            <p>
              {{ item.name }}
            </p>
            <ul class="study__social-icon">
              <li>
                <a :href="item.email">
                  <Email />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import content from '@/lib/content.json'
import Email from '@/assets/icons/email.svg?inline'

export default {
  data() {
    return {
      content: content,
    }
  },
  components: {
    Email,
  },
}
</script>

<style lang="scss">
#study {
  max-width: 1152px;
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;

  .study__title--primary {
    @include titles;

    .study__subtitle {
      margin: 1rem 0;
    }
  }

  .study__content {
    color: $color__text;
    width: 100%;
    display: grid;
    grid-row-gap: 30px;
    justify-content: space-around;
    grid-template-columns: 1fr;

    .study__item {
      width: 100%;

      .study__link {
        &:hover {
          border-bottom: none;
        }
      }

      .study__image {
        border-radius: 50%;
        width: 80%;
        max-width: 150px;
        height: auto;
        background-image: -webkit-linear-gradient(to top, #f4f1ee, #fff);
        background-image: linear-gradient(to top, #f4f1ee, #fff);
        box-shadow: 0px 8px 10px 0px rgb(0 0 0 / 30%),
          inset 0px 4px 1px 1px white,
          inset 0px -3px 1px 1px rgb(204 198 197 / 50%);
        -webkit-transition: all 0.1s linear;
        transition: all 0.1s linear;

        &:after {
          color: #e9e6e4;
          content: '';
          display: block;
          font-size: 30px;
          height: 30px;
          text-decoration: none;
          text-shadow: 0px -1px 1px #bdb5b4, 1px 1px 1px white;
          position: absolute;
          width: 30px;
        }

        &:hover {
          background-image: -webkit-linear-gradient(to top, #efedec, #f7f4f4);
          background-image: linear-gradient(to top, #efedec, #f7f4f4);
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1),
            inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
        }

        &:active {
          background-image: -webkit-linear-gradient(to top, #efedec, #f7f4f4);
          background-image: linear-gradient(to top, #efedec, #f7f4f4);
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.4),
            inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
        }

        &:active:after {
          color: #dbd2d2;
          text-shadow: 0px -1px 1px #bdb5b4, 0px 1px 1px white;
        }
      }

      .study__title {
        p {
          margin: 1.5rem 0 0.5rem 0;
          font-weight: 800;
        }

        .study__social-icon {
          list-style: none;

          a:hover {
            border-bottom: none;
          }

          @media (max-width: $breakpoint--md) {
            margin-bottom: 2rem;
          }

          svg {
            fill: $color__primary;
            transition: all 0.7s ease-in-out;

            &:hover {
              transform: rotateY(360deg);
            }
          }
        }
      }
    }

    @media (min-width: $breakpoint--sm) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: $breakpoint--md) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: $breakpoint--lg) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
