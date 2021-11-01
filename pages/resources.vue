<template>
    <section class="contact">
        <section class="titles">
            <h1>Recursos</h1> 
            <hr>
            <div class="alert-note-right">
                En esta sección presentamos todos los recursos que consideramos que son importantes para una formación científica en psicología.
                <br>
                Si sabés de recursos que deban estar acá, llená 
                <a href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSeu8qfWfBGWc1XtMdc21my_0OazVdG3iaGdgtAhNynSKYzTBA/viewform?usp=send_form">
                    este formulario</a>.
            </div>
            <input type="text" class="search-input" onkeyup="myFunction()" placeholder=" Ingresá texto de búsqueda">
        </section>
        <section class="resources-section">
            <div class="resources-wrapper">
                <div class="resource-card">
                    <a href="https://www.researchgate.net/publication/342061092_Formacion_de_Grado_en_Psicologia_en_Argentina_Periodo_2009-2015_Undergraduate_Psychology_Education_in_Argentina_2009-2015" target="_blank">
                        <div class="resource-card-texts">
                            <div class="resource-card-name">
                                Formación de grado en psicología en argentina.
                                Período 2009-2015
                            </div>
                            <hr>
                            <div class="resource-card-description">
                                A la fecha no se cuenta con datos descriptivos y 
                                comparativos actualizados sobre el estado de las carreras de psicología en …
                            </div>
                        </div>
                    </a>
                </div>
                <div class="resource-card">
                    <a href="https://drive.google.com/file/d/1W_iHIjU1QnXo6vjTUxyPiI3Ty9LAzPuq/view?fbclid=IwAR17wVreWiZylutZZwN4vK64_5cuQoscURQF0jdrGCtJx4OgmpvGtuIAGrc" target="_blank">
                        <div class="resource-card-texts">
                            <div class="resource-card-name">Guía de materias y prácticas recomendadas</div>
                            <hr>
                            <div class="resource-card-description">El estudiante que elige cursar psicología 
                                en la universidad más importante de Argentina debe lidiar con la realidad de que mientras que …
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped lang="scss">


.resources-section {  
    color: var(--color-text);
    width: 100%;
    align-items: center;
}

.resources-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    max-width: 75vw;
}

.resource-card {
    width: 250px;
    height: auto;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: 20px;
    overflow: hidden;
    margin: 20px 10px;
    transition: all 0.2s ease-in-out;
}

.resource-card:hover {
    transform: scale(1.20);
}

.resource-card-texts{
    color: var(--color-text);
    padding: 3rem 2rem;
}

.resource-card-name{
    font-size: 1rem;
    font-weight: 800;
    text-align: center;
}

.resource-card hr {
    margin-top: 1rem;
    color: var(--color-text);    
}

.resource-card-description {
    font-size: .8rem;
    margin-top: 1rem;
    text-align: center;
}

.titles .search-input {
    width: 50%;
    font-size: 16px; 
    padding: 12px 2rem 1rem 2rem; 
    margin-top: 1rem;
    border: 1px solid var(--border-color);
    background: #fff url("~assets/svg/search.svg") 1rem no-repeat;
}

@media (max-width: 1300px) {
    .alert-note-left, 
    .alert-note-right, 
    .alert-note-top,
    .titles .search-input {
        width: 90%;
    }
}

</style>
