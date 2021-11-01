<template>
    <div>
        <Navbar />
        <Nuxt />
        <!-- <bottom-bar /> -->
        <Footer />
    </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar'
import Footer from '~/components/layout/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">

html {
  font-family: 'Montserrat',
}
</style>