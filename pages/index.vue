<template>
  <main class="home">
    <HomeHero />
    <HomeFeatures2 />
  </main>
</template>

<script>
import HomeHero from '../components/HomeHero'
import HomeFeatures2 from '../components/HomeFeatures2'

export default {
  name: 'IndexPage',
  components: {
    HomeHero,
    HomeFeatures2,
  },
}
</script>

<style lang="scss">
.home {
}
</style>
