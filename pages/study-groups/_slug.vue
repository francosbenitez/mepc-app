<template>
  <div id="group">
    <div
      v-for="studyGroup in studyGroupData"
      :key="studyGroup.id"
      class="group__item"
    >
      <div class="group__image">
        <img :src="require('@/assets/images/' + studyGroup.img)" />
        <p>{{ studyGroup.name }}</p>
        <a class="group__email" :href="studyGroup.email">
          <Email />
        </a>
      </div>
      <div class="group__description">
        <h1>Description</h1>
        <nuxt-content :document="markdown" />
      </div>
    </div>
  </div>
</template>

<script>
import { getStudyGroupData } from '@/lib/study-groups'
import Email from '@/assets/icons/email.svg?inline'

export default {
  components: {
    Email,
  },
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
    flex-direction: column;

    .group__image {
      flex-direction: column;
      text-align: center;

      .group__email {
        margin: 0.5rem 0;
        display: block;

        &:hover {
          border-bottom: none;
        }
      }

      img {
        border-radius: 50%;
        width: 100%;
        max-width: 250px;
        height: auto;
      }

      p {
        font-weight: bold;
        text-align: center;
      }

      @media (min-width: $breakpoint--md) {
        flex-basis: 20%;
        /* text-align: left; */
        margin-right: 2rem;
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

    @media (min-width: $breakpoint--md) {
      flex-direction: row;
    }
  }
}
</style>
