<template>
    <footer class="footer">
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
        <img src="~assets/svg/logo.svg" alt="" class="footer__logo">
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
        </div>
        <div class="footer__copyright"> 
            &copy; MEPC {{ new Date().getFullYear() }}
        </div>
        
        <!-- <p>MEPC © 2021</p>
        <p>Desarrollado con ☕️ y <a href="https://github.com/francosbenitez/mepc" target="_blank" rel="noopener">
            <i class="fas fa-code-branch"></i></a> por <a href="https://francosbenitez.github.io" target="_blank" rel="noopener">
                Franco Sebastián Benítez</a>
            <span class="float-right" aria-hidden="true">
                <a href="#" class="back-to-top">
                    <i class="fas fa-chevron-up fa-2x"></i>
                </a>
            </span>
        </p> -->
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
}

.footer__logo {
    height: 3rem;
}

/* .feature-description a:hover,
.site-footer p a:hover,
.avatar-title p a:hover,
.alert-note-right a:hover {
    border-bottom: 1.5px var(--color-white) dotted;
    cursor: pointer;
}

.site-footer p a {
    color: var(--color-white);
}

footer {
    background-color: var(--color-base);
}

.site-footer {
    color: var(--color-white);
    background-color: var(--color-base);
    text-align: center;
    font-size: 13px;
    padding: 1rem;
}

.site-footer p {
    margin: 10px 0 10px 0;
}

.site-footer .float-right {
    float: right;
} */
</style>