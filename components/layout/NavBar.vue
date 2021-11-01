<template>
  <header class="main-header">
    <nav class="navbar">
      <div class="nav-logo">
        <!-- <img src="~assets/svg/logo.svg" alt="Logo MEPC"> -->
        <NuxtLink to="/">
          <NavLogo />
        </NuxtLink>
      </div>
      <ul class="nav-ul">
        <li>
          <NuxtLink to="/what-we-study">¿Qué estudiamos?</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/docs">Documentos</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/resources">Recursos</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/articles">Artículos</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/team">Equipo</NuxtLink>
        </li>
      </ul>
      <div class="nav-btn">
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
      </div>
    </nav>
  </header>
</template>

<script>
import NavLogo from '../NavLogo.vue'

export default {
  components: {
    NavLogo
  }
}
</script>


<style scoped lang="scss">
.main-header {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 55px;
  background-color: var(--color-white);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.navbar {
  display: flex;
}

.nav-logo svg {
  height: 50px;
  position: absolute;
  margin-left: 5rem;
  fill: var(--color-text);
}

.nav-logo svg:hover {
  height: 50px;
  position: absolute;
  margin-left: 5rem;
  fill: var(--color-base);
  -webkit-animation: shake-vertical 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
  animation: shake-vertical 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
} 

.nav-ul {
  width: 100%;
  text-align: right;
}

.nav-ul li {
  display: inline;
  position: relative;
  overflow: hidden;
  font-size: 14px;
  padding: 15px 20px;
  height: 55px;
  line-height: 55px;
}

.nav-ul li a {
  color: var(--color-text);
  font-family: 'Montserrat';
  font-weight: 700;
  text-transform: uppercase;
  padding: 15px;
  position: relative;
  transition: all 2s;
}

.nav-ul li a.is-active {
  color: var(--color-white);
  background: var(--color-base);
}

.nav-ul li a:hover {
  color: var(--color-white);
  z-index: 1;
}

.nav-ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  color: transparent;
  background: var(--color-text);
  height: 1px;
  text-align: left;
  content: '.';
  margin: 0;
  opacity: 0;
  transition: all .2s;
}

.nav-ul li a:hover:after {
  width: 100%;
  z-index: -10;
  animation: fill 1s forwards;
  -webkit-animation: fill 1s forwards;
  -moz-animation: fill 1s forwards;
  opacity: 1;
}

.nav-ul li a:before {
  transition: all .2s;
}

.nav-btn {
  display: none;
}

.nav-btn div {
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: var(--color-text);
  transition: all 0.3s ease;
}

@keyframes fill {
  0% {
    width: 0%;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  100% {
    width: 100%;
    height: 100%;
    background: var(--color-base);
  }
}

@-webkit-keyframes shake-vertical {
  0%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
  80% {
    -webkit-transform: translateY(3.4px);
    transform: translateY(6.4px);
  }
  90% {
    -webkit-transform: translateY(-3.4px);
    transform: translateY(-3.4px);
  }
}

@keyframes shake-vertical {
  0%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
  80% {
    -webkit-transform: translateY(3.4px);
    transform: translateY(3.4px);
  }
  90% {
    -webkit-transform: translateY(-3.4px);
    transform: translateY(-3.4px);
  }
}

@media (max-width: 1300px) {
  .navbar {
    justify-content: left;
    align-items: center;
    height: 55px;
  }

  .nav-logo svg, .nav-logo svg:hover  {
    height: 45px;
    z-index: 10;
    position: relative;
    margin-left: 0.5rem;
  }

  .nav-ul {
    position: absolute;
    right: 0;
    top: 55px;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transform: translateX(105%);
    transition: transform 0.5s ease-in;
    overflow-x: hidden;
    height: 10rem;
  }

  .nav-ul li {
    padding: 0 0 0 0;
  }

  .nav-ul li a.is-active {
    color: var(--color-white);
  }

  .nav-btn {
    display: block;
    cursor: pointer;
    position: absolute; 
    right: 0;
  }

  .nav-active {
    transform: translateX(0%);
  }

  .nav-close {
    transform: translateX(100%);
  }

  .toggle .line-1 {
    transform: rotate(-45deg) translate(-5px, 6px);
    background-color: var(--color-base);
  }

  .toggle .line-2 {
    opacity: 0;
  }

  .toggle .line-3 {
    transform: rotate(45deg) translate(-5px, -6px);
    background-color: var(--color-base);
  }
}
</style>