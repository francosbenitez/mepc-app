<template>
  <div style="padding-top: 10rem">
    {{ params.id }}
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    console.log('params.id', params.id)
    return {
      params,
    }
  },
}
</script>
