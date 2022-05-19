<template>
  <div id="group">
    <div
      v-for="studyGroup in studyGroupData"
      :key="studyGroup.id"
      class="group__item"
    >
      <div class="group__image">
        <img :src="require('../../assets/images/' + studyGroup.img)" />
        <p>{{ studyGroup.name }}</p>
      </div>
      <div class="group__description">
        <h1>Description</h1>
        <!-- <p>{{ studyGroup.description }}</p> -->
        <nuxt-content :document="markdown" />
      </div>
    </div>
  </div>
</template>

<script>
import { getStudyGroupData } from '../../lib/study-groups'

export default {
  async asyncData({ $content, params }) {
    const studyGroupData = await getStudyGroupData(params.slug)
    const markdown = await $content('study-groups', params.slug).fetch()

    return {
      studyGroupData,
      markdown,
    }
  },
}
</script>

<style lang="scss">
#group {
  max-width: 1152px;
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 5rem;

  .group__item {
    display: flex;

    .group__image {
      flex-direction: column;
      flex-basis: 20%;

      img {
        border-radius: 50%;
        width: 100%;
        max-width: 250px;
        height: auto;
      }

      p {
        text-align: center;
      }
    }

    .group__description {
      flex-direction: column;
      flex-basis: 80%;

      h1 {
        font-weight: bold;
      }

      p {
        margin: 16px 0;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
