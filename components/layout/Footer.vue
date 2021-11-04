<template>
    <footer class="footer">
        <div class="footer__icons">
            <div class="footer__icons-text">
                Encuéntranos en 
            </div>
            <div class="footer__icons-icons">
                <a href="https://twitter.com/MEPC_oficial" target="_blank">
                    <TwitterIcon />
                </a>
                <a href="https://www.instagram.com/mepc.oficial/" target="_blank">
                    <InstagramIcon />
                </a>
                <a href="https://www.youtube.com/channel/UCJpN1ANkID-67MQ2alMek-g" target="_blank" rel="noopener">
                    <YoutubeIcon />
                </a>
                <DiscordIcon />
                <LinkedinIcon />
                <!-- <ul class="network-icon" aria-hidden="true">
                    <li><a href="mailto:mepc.org@gmail.com" target="_blank"><i class="fas fa-envelope fa-2x"></i></a></li>
                    <li><a href="https://www.facebook.com/mepc.oficial/" target="_blank"><i class="fab fa-facebook fa-2x"></i></a></li>
                    <li><a href="https://www.facebook.com/groups/2641583789449049" target="_blank"><i class="fab fa-facebook fa-2x"></i></a></li>
                    <li><a href="https://www.instagram.com/mepc.oficial/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a></li>
                    <li><a href="https://twitter.com/MEPC_oficial" target="_blank"><i class="fab fa-twitter fa-2x"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCJpN1ANkID-67MQ2alMek-g" target="_blank" rel="noopener"><i class="fab fa-youtube fa-2x"></i></a></li>
                    <li><a href="https://chat.whatsapp.com/LXTB9dRdP2z0d8meLKz1eg" target="_blank"><i class="fab fa-whatsapp fa-2x"></i></a></li>
                    <li><a href="https://chat.whatsapp.com/LWqNQwz5UxhJIJwrArgJ3E" target="_blank"><i class="fab fa-whatsapp fa-2x"></i></a></li>
                </ul> -->
            </div>
        </div>
        <div class="footer__links">
            <div class="footer__logo-wrapper">
                <img src="~assets/svg/logo.svg" alt="" class="footer__logo">
            </div>
            <div class="footer__links-grid">
                <a href="#" target="_blank" rel="noopener">
                    Grupos de estudio
                </a>
                <a href="#" target="_blank" rel="noopener">
                    Documentos
                </a>
                <a href="#" target="_blank" rel="noopener">
                    Preguntas frecuentes
                </a>
                <a href="#" target="_blank" rel="noopener">
                    Recursos
                </a>
                <a href="#" target="_blank" rel="noopener">
                    Artículos
                </a>
                <a href="#" target="_blank" rel="noopener">
                    Equipo
                </a>
            </div>
            <div class="footer__copyright"> 
                &copy; MEPC {{ new Date().getFullYear() }}
            </div>
        </div>
    </footer>
</template>

<script>
import TwitterIcon from 'icons/Twitter'
import InstagramIcon from 'icons/Instagram'
import DiscordIcon from 'icons/Discord'
import YoutubeIcon from 'icons/Youtube'
import LinkedinIcon from 'icons/Linkedin'

export default {
  components: {
    TwitterIcon,
    InstagramIcon,
    DiscordIcon,
    YoutubeIcon,
    LinkedinIcon
  }
}
</script>

<style lang="scss" scoped>
.footer {
    outline: dashed 1px black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem;

    @media (min-width: $breakpoint--md) {
        flex-direction: row-reverse;
    }
}

.footer__icons {
    text-align: center;
    display: flex;
    flex-direction: column;
    grid-gap: 0.75rem;
}

.footer__icons-icons {
    display: flex;
    grid-gap: 0.75rem;
    color: $color__primary;
}

.footer__links {
    display: flex;
    flex-direction: column;
    grid-gap: 1.25rem;
}

.footer__links-grid {
    display: grid;
    grid-column-gap: 1.25rem;
    grid-row-gap: 0.5rem;
    column-gap: 1.25rem;
    row-gap: 0.5rem;

    @media (min-width: $breakpoint--md) {
        grid-template-columns: repeat(3,minmax(0,1fr));
    }
}

.footer__logo-wrapper {
}

.footer__logo {
    height: 3rem;
}
</style>