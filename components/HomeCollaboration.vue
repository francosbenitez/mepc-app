<template>
  <section id="collaboration">
    <div class="collaboration__title--primary">
      <h1>¿Cómo colaborar?</h1>
      <hr />
    </div>
    <div
      class="collaboration__content"
      v-for="content in content.collaboration"
      :key="content.title"
    >
      <div class="collaboration__image">
        <img
          :src="require('./assets/images/' + content.img)"
          :alt="content.alt"
        />
      </div>
      <div class="collaboration__text">
        <div>
          <h2 class="collaboration__title">{{ content.title }}</h2>
          <p
            class="collaboration__description"
            v-html="content.description"
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import content from '../lib/content.json'

export default {
  data() {
    return {
      content: content,
    }
  },
}
</script>

<style lang="scss">
#collaboration {
  max-width: 1152px;
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 5rem;

  .collaboration__title--primary {
    @include titles;
  }

  .collaboration__content {
    color: $color__text;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: $breakpoint--md) {
      flex-direction: column;
      align-items: center;
    }

    .collaboration__image {
      img {
        width: 10rem;
        max-width: 344px;
        height: auto;
        border-radius: 50%;
      }
    }

    .collaboration__text {
      flex-basis: 60%;
      color: $color__text;
      display: flex;
      text-align: left;

      @media (max-width: $breakpoint--md) {
        padding: 0 1rem 0 1rem;
        text-align: center;
      }

      .collaboration__title {
        margin: 1rem 0 1rem 0;
      }

      .collaboration__description {
        margin: 1rem 0 1rem 0;
      }
    }
  }
}
</style>
