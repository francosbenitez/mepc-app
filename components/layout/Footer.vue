<template>
    <footer class="footer">
        <img src="~assets/svg/logo.svg" alt="" class="footer__logo">
        <div class="footer__icons">
            <div class="footer__icons-text">
                Encuéntranos en 
            </div>
            <div class="footer__icons-icons">
                <TwitterIcon />
                <InstagramIcon />
                <YoutubeIcon />
                <DiscordIcon />
                <LinkedinIcon />
            </div>
        </div>
        <div class="footer__links">
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
    padding: 5rem;
}

.footer__icons-icons {
    color: $color__primary;
}

.footer__links {
    display: grid;
    grid-column-gap: 1.25rem;
    grid-row-gap: 0.5rem;
    column-gap: 1.25rem;
    row-gap: 0.5rem;

    @media (min-width: $breakpoint--md) {
        grid-template-columns: repeat(3,minmax(0,1fr));
    }
}

.footer__logo {
    height: 3rem;
}
</style>