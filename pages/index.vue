<template>
  <main class="home">
    <HomeHero />
    <HomeCollaboration />
  </main>
</template>

<script>
import HomeHero from '../components/HomeHero'
import HomeCollaboration from '../components/HomeCollaboration'

export default {
  name: 'IndexPage',
  components: {
    HomeHero,
    HomeCollaboration,
  },
}
</script>

<style lang="scss">
.home {
}
</style>
