<template>
  <main>
    <section id="documents">
      <nav id="navbar">
        <div class="secondary-nav">
          <header>
            <input type="text" id="search" placeholder="Buscar..." />
          </header>
        </div>
        <div class="ul-container" id="nav">
          <ul>
            <li class="hvr-sweep-to-top link active">
              <a class="nav-link" href="#departamentos"
                ><h1>Departamentos</h1></a
              >
            </li>
            <li
              class="hvr-sweep-to-top link"
              v-for="item in content.documents.departments"
              :key="item.name"
            >
              <a class="nav-link" :href="item.url">{{ item.name }}</a>
            </li>
            <li class="hvr-sweep-to-top link">
              <a class="nav-link" href="#departamentos"><h1>Áreas</h1></a>
            </li>
            <li
              class="hvr-sweep-to-top link"
              v-for="item in content.documents.areas"
              :key="item.name"
            >
              <a class="nav-link" :href="item.url">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </nav>
      <main id="main-doc">
        <section class="main-section" id="departamentos">
          <nuxt-content :document="markdown" />
        </section>
      </main>
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
  async asyncData({ $content }) {
    const markdown = await $content('documents', 'delegados').fetch()
    return {
      markdown,
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

  #navbar {
    width: 100%;
    padding: 5rem 0.2rem 0 0.2rem;
    margin: 0 0 1rem 0;
    text-align: center;

    .secondary-nav {
      #search {
        width: 100%;
        font-size: 16px;
        padding: 12px 20px 12px 40px;
        border: 1px solid $color__border;
        margin-bottom: 12px;
        background: #fff
          url('https://francosbenitez.github.io/mepc/img/search.svg') 1rem
          no-repeat;
      }

      @media (min-width: $breakpoint--md) {
        width: 100%;
        font-size: 16px;
        padding: 12px 20px 12px 0;
        border-bottom: 1px solid $color__border;
      }
    }

    .ul-container {
      margin: 1rem 0 0 0;
      width: 100%;
      height: 10rem;
      overflow-y: scroll;
      border: 1px solid $color__border;

      li {
        list-style: none;

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
          }
        }
      }

      .active a {
        color: $color__primary;
        font-weight: 800;
        border-left: solid 4px $color__primary;
        margin-left: 0.2rem;
        color: $color__primary;
        font-weight: 800;
      }

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
      padding: 5rem 0 0 0;
      border-right: 1px solid $color__border;
    }
  }

  #main-doc {
    padding: 0.5rem;

    header {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0.5rem 0 0.5rem 0;
    }

    .main-section {
      h3 {
        margin: 1rem 0 1rem 0;
      }

      .properties {
        li {
          margin: 0 0 0 3rem;
          font-size: 1.1rem;
        }
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
      }

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
