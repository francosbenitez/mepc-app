<template>
  <header class="header">
    <div class="header__content">
      <nav class="nav">
        <NuxtLink to="/" class="nav__logo"><Logo /></NuxtLink>
        <ul class="nav__list" :class="{ 'nav-active': clicked }">
          <li>
            <NuxtLink to="/study-groups"> Grupos de estudio </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/documents"> Documentos </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/resources"> Recursos </NuxtLink>
          </li>
        </ul>
        <div
          class="nav__btn"
          @click="clicked = !clicked"
          :class="{ toggle: clicked }"
        >
          <div class="line__1"></div>
          <div class="line__2"></div>
          <div class="line__3"></div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '@/assets/icons/logo.svg?inline'

export default {
  components: {
    Logo,
  },
  data() {
    return {
      clicked: false,
    }
  },
}
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 70px;
  background-color: $color__white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);

  .header__content {
    width: 90%;
    margin: 0 auto;
    max-width: 1152px;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);

    .nav {
      display: flex;

      @media (max-width: $breakpoint--md) {
        justify-content: left;
        align-items: center;
        height: 55px;
      }

      .nav__logo {
        svg {
          height: 50px;
          position: absolute;
          fill: $color__text;

          @media (max-width: $breakpoint--md) {
            height: 45px;
            z-index: 10;
            position: relative;
          }

          &:hover {
            fill: $color__primary;
            -webkit-animation: shake-vertical 1s
              cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
            animation: shake-vertical 1s cubic-bezier(0.455, 0.03, 0.515, 0.955)
              both;
          }
        }
      }

      .nav__list {
        width: 100%;
        text-align: right;

        @media (max-width: $breakpoint--md) {
          position: absolute;
          right: 0;
          top: 0;
          background-color: $color__white;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          transform: translateX(105%);
          transition: transform 0.5s ease-in;
          overflow-x: hidden;
          height: 100vh;

          // https://stackoverflow.com/questions/28455100/how-to-center-div-vertically-inside-of-absolutely-positioned-parent-div
          display: -webkit-box;
          display: -webkit-flex;
          display: -moz-box;
          display: -moz-flex;
          display: -ms-flexbox;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          -moz-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          -moz-align-items: center;
          align-items: center;
        }

        li {
          display: inline;
          position: relative;
          overflow: hidden;
          font-size: 14px;
          padding: 15px 20px;
          height: 55px;
          line-height: 55px;

          @media (max-width: $breakpoint--md) {
            padding: 0;
          }

          a {
            color: $color__text;
            font-family: 'Montserrat';
            font-weight: 700;
            text-transform: uppercase;
            padding: 15px;
            position: relative;
            transition: all 2s;

            .is-active {
              color: $color__white;
              background: $color__primary;

              @media (max-width: $breakpoint--md) {
                color: $color__white;
              }
            }

            &:hover {
              color: $color__white;
              z-index: 1;
            }

            &:after {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto;
              width: 0%;
              color: transparent;
              background: $color__text;
              height: 1px;
              text-align: left;
              content: '.';
              margin: 0;
              opacity: 0;
              transition: all 0.2s;
            }

            &:hover:after {
              width: 100%;
              z-index: -10;
              animation: fill 1s forwards;
              -webkit-animation: fill 1s forwards;
              -moz-animation: fill 1s forwards;
              opacity: 1;
            }

            &:before {
              transition: all 0.2s;
            }
          }
        }
      }

      .nav__btn {
        display: none;
        z-index: 10;

        @media (max-width: $breakpoint--md) {
          display: block;
          cursor: pointer;
          margin-left: auto;
        }

        div {
          width: 25px;
          height: 3px;
          margin: 5px;
          background-color: $color__text;
          transition: all 0.3s ease;
        }
      }
    }
  }
}

@media (max-width: $breakpoint--md) {
  .nav-active {
    transform: translateX(0%) !important;
  }

  .nav-close {
    transform: translateX(100%);
  }

  .toggle {
    .line {
      &__1 {
        transform: rotate(-45deg) translate(-5px, 6px);
        background-color: $color__primary;
      }

      &__2 {
        opacity: 0;
      }

      &__3 {
        transform: rotate(45deg) translate(-5px, -6px);
        background-color: $color__primary;
      }
    }
  }
}
</style>
