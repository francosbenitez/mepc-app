<template>
  <header class="header">
    <div class="header__content">
      <nav class="nav">
        <div class="nav__logo">MEPC</div>
        <ul class="nav__list">
          <li>
            <NuxtLink to="/what-do-we-study"> ¿Qué estudiamos? </NuxtLink>
          </li>
          <li><NuxtLink to="/documents">Documentos</NuxtLink></li>
          <li><NuxtLink to="/resources">Recursos</NuxtLink></li>
        </ul>
        <div class="nav__btn">
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
// import Logo from './assets/icons/logo.svg'

// export default {
//   components: {
//     Logo,
//   },
// }
</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 55px;
  background-color: $color__white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);

  .header__content {
    margin: 0 auto;
    max-width: 1152px;

    .nav {
      display: flex;

      @media (max-width: 1300px) {
        justify-content: left;
        align-items: center;
        height: 55px;
      }

      .nav__logo {
        svg {
          height: 50px;
          position: absolute;
          margin-left: 5rem;
          fill: $color__text;

          @media (max-width: 1300px) {
            height: 45px;
            z-index: 10;
            position: relative;
            margin-left: 0.5rem;
          }

          &:hover {
            height: 50px;
            position: absolute;
            margin-left: 5rem;
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

        @media (max-width: 1300px) {
          position: absolute;
          right: 0;
          top: 55px;
          background-color: $color__white;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          transform: translateX(105%);
          transition: transform 0.5s ease-in;
          overflow-x: hidden;
          height: 10rem;
        }

        li {
          display: inline;
          position: relative;
          overflow: hidden;
          font-size: 14px;
          padding: 15px 20px;
          height: 55px;
          line-height: 55px;

          @media (max-width: 1300px) {
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

              @media (max-width: 1300px) {
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

        @media (max-width: 1300px) {
          display: block;
          cursor: pointer;
          position: absolute;
          right: 0;
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

@media (max-width: 1300px) {
  .nav-active {
    transform: translateX(0%);
  }

  .nav-close {
    transform: translateX(100%);
  }

  .toggle {
    .line {
      &-1 {
        transform: rotate(-45deg) translate(-5px, 6px);
        background-color: $color__primary;
      }

      &-2 {
        opacity: 0;
      }

      &-3 {
        transform: rotate(45deg) translate(-5px, -6px);
        background-color: $color__primary;
      }
    }
  }
}
</style>
