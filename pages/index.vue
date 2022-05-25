<template>
  <main>
    <HomeHero />
    <HomeAbout />
    <HomeCollaboration />
  </main>
</template>

<script>
import HomeHero from '@/components/HomeHero'
import HomeAbout from '@/components/HomeAbout'
import HomeCollaboration from '@/components/HomeCollaboration'

export default {
  name: 'IndexPage',
  components: {
    HomeHero,
    HomeAbout,
    HomeCollaboration,
  },
  head() {
    return {
      title:
        'Home | Movimiento Estudiantil por la Psicología Científica (MEPC)',
    }
  },
}
</script>
