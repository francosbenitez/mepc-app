<template>
    <div>
        <Navbar />
        <Nuxt />
        <!-- <bottom-bar /> -->
    </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

html {
  font-family: 'Montserrat',
}