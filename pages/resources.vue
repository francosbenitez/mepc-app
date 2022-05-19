<template>
  <main>
    <section id="resources">
      <section class="titles">
        <h1>Recursos</h1>
        <hr />
        <div class="alert__note--right">
          En esta sección presentamos todos los recursos que consideramos que
          son importantes para una formación científica en psicología.
          <br />
          Si sabés de recursos que deban estar acá, llená
          <a
            href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSeu8qfWfBGWc1XtMdc21my_0OazVdG3iaGdgtAhNynSKYzTBA/viewform?usp=send_form"
          >
            este formulario</a
          >.
        </div>
        <input
          type="text"
          class="search-input"
          onkeyup="myFunction()"
          placeholder=" Ingresá texto de búsqueda"
        />
      </section>
      <section class="resources-section">
        <div class="resources-wrapper">
          <div
            class="resource-card"
            v-for="item in content.resources"
            :key="item.title"
          >
            <a :href="item.url" target="_blank">
              <div class="resource-card-texts">
                <div class="resource-card-name">
                  {{ item.title }}
                </div>
                <hr />
                <div class="resource-card-description">
                  {{ item.description }}
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
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
}
</script>

<style lang="scss">
#resources {
  max-width: 1152px;
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;
}

.resources-section {
  color: $color__text;
  width: 100%;
  align-items: center;

  .resources-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    max-width: 75vw;

    .resource-card {
      width: 250px;
      height: auto;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 20px;
      overflow: hidden;
      margin: 20px 10px;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }

      hr {
        margin-top: 1rem;
        color: $color__text;
      }

      .resource-card-texts {
        color: $color__text;
        padding: 3rem 2rem;

        .resource-card-name {
          font-size: 1rem;
          font-weight: 800;
          text-align: center;
        }

        .resource-card-description {
          font-size: 0.8rem;
          margin-top: 1rem;
          text-align: center;
        }
      }
    }
  }
}

.titles .search-input {
  width: 50%;
  font-size: 16px;
  padding: 12px 2rem 1rem 2rem;
  margin-top: 1rem;
  border: 1px solid var(--border-color);
  background: #fff url('https://francosbenitez.github.io/mepc/img/search.svg')
    1rem no-repeat;
}

@media (max-width: 1300px) {
  .alert-note-left,
  .alert-note-right,
  .alert-note-top,
  .titles .search-input {
    width: 90%;
  }
}
</style>
