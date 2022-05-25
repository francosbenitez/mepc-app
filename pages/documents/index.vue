<template>
  <main>
    <section id="documents">
      <nav class="documents__nav">
        <div class="documents__search">
          <input type="text" placeholder="Buscar..." />
        </div>
        <ul class="documents__list">
          <div v-for="key in Object.keys(content.documents)" :key="key">
            <li class="documents__list-item link">
              <NuxtLink
                class="documents__link"
                :to="{
                  name: 'documents-slug',
                  params: { slug: key },
                }"
              >
                <h1 v-if="key === 'departments'">Departamentos</h1>
                <h1 v-else>Areas</h1>
              </NuxtLink>
            </li>
            <li
              v-for="item in content.documents[key]"
              class="documents__list-item link"
              :key="item"
            >
              <NuxtLink
                class="documents__link"
                :to="{
                  name: 'documents-slug',
                  params: { slug: item.slug },
                }"
                >{{ item.name }}</NuxtLink
              >
            </li>
          </div>
        </ul>
      </nav>
      <div class="documents__content">
        <slot>¡Bievenidx a los Documentos de MEPC!</slot>
      </div>
    </section>
  </main>
</template>

<script>
import content from '@/lib/content.json'

export default {
  data() {
    return {
      content: content,
    }
  },
  head() {
    return {
      title:
        'Documentos | Movimiento Estudiantil por la Psicología Científica (MEPC)',
    }
  },
}
</script>

<style lang="scss">
#documents {
  max-width: 1152px;
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 5rem;

  .documents__nav {
    width: 100%;
    margin: 0 0 1rem 0;
    text-align: center;

    .documents__search {
      input {
        width: 100%;
        font-size: 16px;
        padding: 12px 20px 12px 40px;
        border: 1px solid $color__border;
        margin-bottom: 12px;
        background: #fff url('../../assets/icons/search.svg') 1rem no-repeat;
      }

      @media (min-width: $breakpoint--md) {
        width: 100%;
        font-size: 16px;
        padding: 12px 20px 12px 0;
        border-bottom: 1px solid $color__border;
      }
    }

    .documents__list {
      margin: 1rem 0 0 0;
      width: 100%;
      height: 10rem;
      overflow-y: scroll;
      border: 1px solid $color__border;

      li {
        list-style: none;

        .nuxt-link-active {
          color: $color__primary;
          font-weight: 800;
          border-left: solid 4px $color__primary;
          margin-left: 0.2rem;
          color: $color__primary;
          font-weight: 800;
        }

        a {
          display: block;
          text-align: left;
          font-size: 1rem;
          padding: 0.5rem;
          text-decoration: none;
          color: $color__text;

          &:link,
          &:visited,
          &:active,
          &:hover {
            color: $color__primary;
            border-bottom: none;
          }
        }
      }

      /* .active a {
        color: $color__primary;
        font-weight: 800;
        border-left: solid 4px $color__primary;
        margin-left: 0.2rem;
        color: $color__primary;
        font-weight: 800;
      } */

      @media (min-width: $breakpoint--md) {
        width: 100%;
        height: auto;
        overflow: auto;
        border: none;
        margin: 0;
      }
    }

    @media (min-width: $breakpoint--md) {
      width: 20rem;
      height: 100vh;
      position: fixed;
      top: 0;
      bottom: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      border-right: 1px solid $color__border;
    }
  }

  .documents__content {
    padding: 0.5rem;

    header {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0.5rem 0 0.5rem 0;
    }

    /* .main-section { */
    h3 {
      margin: 1rem 0 1rem 0;
    }

    li {
      margin: 0 0 0 3rem;
      font-size: 1.1rem;
    }

    header {
      margin: 5rem 0 1rem 0;
    }

    .img-container {
      width: 100%;
      max-width: 35rem;
      margin: 0 auto;

      img {
        display: block;
        width: 100%;
        height: auto;
        margin: 1rem 0 1rem 0;
      }
      /* } */

      hr {
        margin: 1rem 0 1rem 0;
      }
    }

    @media (min-width: $breakpoint--md) {
      margin: 0 0 0 21rem;
    }
  }
}
</style>
