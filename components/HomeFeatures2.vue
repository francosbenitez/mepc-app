<template>
  <section id="collaboration">
    <div class="titles">
      <h1>¿Cómo colaborar?</h1>
      <hr />
    </div>
    <section
      class="collaboration__content"
      v-for="content in content.collaboration"
      :key="content.title"
    >
      <div class="container-feature">
        <div class="avatar">
          <div class="avatar-image">
            <img
              :src="require('./assets/images/' + content.img)"
              :alt="content.alt"
            />
          </div>
        </div>
      </div>
      <div class="container-description">
        <div class="asd">
          <h2 class="feature-title">{{ content.title }}</h2>
          <p class="feature-description" v-html="content.description"></p>
          .
        </div>
      </div>
    </section>
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
.collaboration__content {
  color: $color__text;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: $breakpoint--md) {
    flex-direction: column;
    align-items: center;
  }

  .container-feature {
    .avatar {
      .avatar-image {
        img {
          width: 10rem;
          max-width: 344px;
          height: auto;
          border-radius: 50%;
        }
      }
    }
  }

  .container-description {
    flex-basis: 60%;
    color: $color__text;
    display: flex;
    text-align: left;

    @media (max-width: $breakpoint--md) {
      padding: 0 1rem 0 1rem;
      text-align: center;
    }
    .asd {
      .feature-title {
        margin: 1rem 0 1rem 0;
      }

      .feature-description {
        margin: 1rem 0 1rem 0;
      }
    }
  }
}
</style>
