<template>
  <div>
    <TheNavbar />
    <Nuxt class="wrapper" />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
}
</script>

<style lang="scss">
.wrapper {
  min-height: 100vh;
  position: relative;
  width: 100%;
}
</style>
