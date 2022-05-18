<template>
  <main class="home">
    <HomeHero />
    <HomeAbout />
    <HomeCollaboration />
  </main>
</template>

<script>
import HomeHero from '../components/HomeHero'
import HomeAbout from '../components/HomeAbout'
import HomeCollaboration from '../components/HomeCollaboration'

export default {
  name: 'IndexPage',
  components: {
    HomeHero,
    HomeAbout,
    HomeCollaboration,
  },
}
</script>

<style lang="scss">
.home {
}
</style>
