<template>
    <main>
        <nav id="navbar">
            <div class="secondary-nav">
                <header><input type="text" id="search" onkeyup="myFunction()" placeholder="Buscar..."></header>
            </div>
            <div class="ul-container" id="nav">
                <ul>
                    <li class="hvr-sweep-to-top link active">
                        <a class="nav-link" href="#departamentos"><h1><i class="fas fa-book pr-1"></i> Departamentos</h1></a>
                    </li>
                    <li class="hvr-sweep-to-top link">
                        <a class="nav-link" href="#delegados">Delegados</a>
                    </li>
                    <li class="hvr-sweep-to-top link">
                        <a class="nav-link" href="#diseno">Diseño</a>
                    </li>
                    <li class="hvr-sweep-to-top link">
                        <a class="nav-link" href="#divulgacion">Divulgación</a>
                    </li>
                    <li class="hvr-sweep-to-top link">
                        <a class="nav-link" href="#recursos-humanos">Recursos Humanos</a>
                    </li>
                    <li class="hvr-sweep-to-top link">
                        <a class="nav-link" href="#relaciones-publicas">Relaciones Públicas</a>
                    </li>
                    <li class="hvr-sweep-to-top link">
                        <a class="nav-link" href="#revision">Revisión</a>
                    </li>
                    <li class="hvr-sweep-to-top link">
                        <a class="nav-link" href="#departamentos"><h1><i class="fas fa-book-reader pr-1"></i> Áreas</h1></a>
                    </li>
                    <li class="hvr-sweep-to-top link">
                        <a class="nav-link" href="#revision">Facebook</a>
                    </li>
                    <li class="hvr-sweep-to-top link">
                        <a class="nav-link" href="#revision">Twitter</a>
                    </li>
                    <li class="hvr-sweep-to-top link">
                        <a class="nav-link" href="#revision">YouTube</a>
                    </li>
                    <li class="hvr-sweep-to-top link">
                        <a class="nav-link" href="#revision">Instagram</a>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Sections -->
        <main id="main-doc">
            <section class="main-section" id="departamentos">
                <header>Departamentos</header>
                <hr></hr>
                <p>
                    Los Departamentos son los ejes centrales de la organización de MEPC.
                </p>
            </section>
            <section class="main-section" id="delegados">
                <header>Departamento de Delegados</header>
                <div class="img-container">
                    <img src="~assets/images/delegados.png" alt="Logo de Delegados MEPC" />
                </div>
                <hr />
                <h3>¿Qué es?</h3>
                <p>
                    El grupo de Delegades reúne a quienes cumplen dicho rol en cada uno de los grupos de estudio. Estará EXCLUSIVAMENTE compuesto por quienes sean los voceros de cada grupo, siendo éste un criterio excluyente. El grupo va a tener una composición variable, debido a que el puesto será rotativo.
                </p>
                <h3>¿Cuáles son sus funciones?</h3>
                <ul class="properties">
                    <li>
                        Función general: ser un espacio para hablar, debatir y organizar cuestiones exclusivamente 
                        ligadas al funcionamiento de los grupos de estudio.
                    </li>
                </ul>
                <ul class="properties">
                    <li>Funciones específicas:
                        <ul>
                            <li>Resolver cuestiones administrativas de cada grupo.</li>
                            <li>Compartir información relevante sobre cada grupo.</li>
                            <li>Organizar la generación de contenido en cada grupo (se realiza en conjunto con todos los miembros activos pero las delegadas serían las que le den el toque final para organizar toda esa información de manejar formal).</li>
                            <li>Delegar las reuniones quincenales a los miembros activos* para poder hacerse cargo de los links de acceso a las reuniones.</li>
                            <li>Estipular pautas de funcionamiento común para todos los grupos sobre: cantidad de delegades, difusión de links de WhatsApp, grabación de reuniones, moderación de mensajes offtopic, procedimientos para elección de nuevos delegades y tiempo en ejercicio de funciones, etc</li>
                            <li>Programar actividades en conjunto con otros grupos (de estudio u otros departamentos) -para eso habrá delegado de cada departamento-.</li>
                        </ul>
                    </li>
                </ul>
                <h3>¿Cómo formar parte?</h3>
                <p>
                    Enviando un mail a mepc.org@gmail.com.
                </p>
            </section>
        </main>
    </main>
</template>

<style lang="scss" scoped>
#navbar {
    width: 100%;
    padding: 5rem .2rem 0 .2rem;
    margin: 0 0 1rem 0;
    text-align: center;
}

#navbar .secondary-nav #search {
    width: 100%; 
    font-size: 16px; 
    padding: 12px 20px 12px 40px; 
    border: 1px solid var(--border-color);
    margin-bottom: 12px; 
    background: #fff url("~assets/svg/search.svg") 1rem no-repeat;
}

#navbar .ul-container {
    margin: 1rem 0 0 0;
    width: 100%;
    height: 10rem;
    overflow-y: scroll;
    border: 1px solid var(--border-color);
}

#navbar .ul-container li {
    list-style: none;
}

#navbar .ul-container li a {
    display: block;
    text-align: left;
    font-size: 1rem;
    padding: 0.5rem;
    text-decoration: none;
    color: var(--color-text);
}

#navbar .ul-container li a:link,
a:visited,
a:active {
    color: var(--color-base);
}

#navbar .ul-container li a:hover {
    color: var(--color-base);
}

#navbar .ul-container .active a {
    color: var(--color-base);
    font-weight: 800;
    border-left: solid 4px var(--color-base);
    margin-left: 0.2rem;
}

#navbar .ul-container .active a, 
#navbar .ul-container .active a h1 {
    color: var(--color-base);
    font-weight: 800;
}

@media (min-width: 850px) {


    /* Secondary navbar */
    
    
    #navbar {
        width: 20rem;
        height: 100vh;
        position: fixed;
        top: 0;
        bottom: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        padding: 5rem 0 0 0;
        border-right: 1px solid var(--border-color);
    }

    #navbar .secondary-nav {
        width: 100%; 
        font-size: 16px; 
        padding: 12px 20px 12px; 
        border-bottom: 1px solid var(--border-color);
    }

    #navbar .ul-container {
        width: 100%;
        height: auto;
        overflow: auto;
        border: none;
        margin: 0 0 0 0;
    }
    

    /* Sections */


    #main-doc {
        margin: 0 0 0 21rem;
    }

}
</style>