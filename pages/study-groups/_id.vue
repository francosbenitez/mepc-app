<template>
  <div style="padding-top: 10rem">
    <div v-for="studyGroup in studyGroupData" :key="studyGroup.id">
      <p>{{ studyGroup.name }}</p>
    </div>
  </div>
</template>

<script>
import { getStudyGroupData } from '../../lib/study-groups'

export default {
  async asyncData({ params }) {
    const studyGroupData = await getStudyGroupData(params.id)
    return {
      studyGroupData,
    }
  },
}
</script>
