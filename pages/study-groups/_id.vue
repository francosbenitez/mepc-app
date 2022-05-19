<template>
  <div id="group">
    <div
      v-for="studyGroup in studyGroupData"
      :key="studyGroup.id"
      class="group__item"
    >
      <div class="group__image">
        <img
          :src="require('../../components/assets/images/' + studyGroup.img)"
        />
        <p>{{ studyGroup.name }}</p>
      </div>
      <div class="group__description">
        <h1>Description</h1>
        <p>{{ studyGroup.description }}</p>
        <nuxt-content :document="doc" />
      </div>
    </div>
  </div>
</template>

<script>
import { getStudyGroupData } from '../../lib/study-groups'

export default {
  async asyncData({ $content, params }) {
    const studyGroupData = await getStudyGroupData(params.id)

    console.log('params', params)

    const doc = await $content('juridica').fetch()

    console.log('doc', doc)
    return {
      studyGroupData,
      doc,
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

      h1 {
        font-weight: bold;
      }
    }
  }
}
</style>
