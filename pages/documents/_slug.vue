<template>
  <Documents>
    <nuxt-content :document="markdown" />
  </Documents>
</template>

<script>
import { getDocumentData } from '@/lib/documents'
import Documents from './index'

export default {
  components: {
    Documents,
  },
  async asyncData({ $content, params }) {
    const documentData = await getDocumentData(params.slug)
    const markdown = await $content('documents', params.slug).fetch()

    return {
      documentData,
      markdown,
    }
  },
}
</script>
