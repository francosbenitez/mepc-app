<template>
  <main>
    <div class="row">
      <section class="titles">
        <h1>¿Qué estudiamos?</h1>
        <hr />
        <div class="alert-note-left">
          Para saber más acerca de los grupos de estudio, pulsá encima de ellos.
          <br />
          Si querés participar, sólo tenés que enviar un mail al grupo deseado.
          En breve te vamos a estar contactando.
        </div>
        <br />
        <h2>Grupos de estudio</h2>
        <br />
      </section>
      <section class="groups-section">
        <div class="column">
          <a href="#"
            ><img
              class="group-avatar"
              src="../components/assets/images/aba.png"
              alt="Avatar Análisis Conductual Aplicado"
          /></a>
          <div class="avatar-title">
            <p><a href="#">Análisis Conductual Aplicado</a></p>
            <ul class="network-icon" aria-hidden="true">
              <li>
                <a href="mailto:abaenpsicouba.mepc@gmail.com"
                  ><i class="fas fa-envelope"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
          <a href="#"
            ><img
              class="group-avatar"
              src="../components/assets/images/ciencias-cognitivas.png"
              alt="Avatar Ciencias Cognitivas"
          /></a>
          <div class="avatar-title">
            <p><a href="#">Ciencias Cognitivas</a></p>
            <ul class="network-icon" aria-hidden="true">
              <li>
                <a href="mailto:cs.cognitivas.mepc@gmail.com"
                  ><i class="fas fa-envelope"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
          <a href="#"
            ><img
              class="group-avatar"
              src="../components/assets/images/clinica.png"
              alt="Avatar Clínica"
          /></a>
          <div class="avatar-title">
            <p><a href="#">Clínica</a></p>
            <ul class="network-icon" aria-hidden="true">
              <li>
                <a href="mailto:cs.cognitivas.mepc@gmail.com"
                  ><i class="fas fa-envelope"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
          <a href="#"
            ><img
              class="group-avatar"
              src="../components/assets/images/evolutiva.png"
              alt="Avatar Evolutiva"
          /></a>
          <div class="avatar-title">
            <p><a href="#">Evolutiva</a></p>
            <ul class="network-icon" aria-hidden="true">
              <li>
                <a href="mailto:cs.cognitivas.mepc@gmail.com"
                  ><i class="fas fa-envelope"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
.row {
  text-align: center;
}

.row .groups-section {
  color: var(--color-text);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.row .groups-section .column {
  width: 100%;
}

.row .groups-section .column .group-avatar {
  border-radius: 50%;
  width: 80%;
  max-width: 150px;
  height: auto;
  background-image: -webkit-linear-gradient(to top, #f4f1ee, #fff);
  background-image: linear-gradient(to top, #f4f1ee, #fff);
  box-shadow: 0px 8px 10px 0px rgb(0 0 0 / 30%), inset 0px 4px 1px 1px white,
    inset 0px -3px 1px 1px rgb(204 198 197 / 50%);
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
}

.row .groups-section .column .group-avatar:after {
  color: #e9e6e4;
  content: '';
  display: block;
  font-size: 30px;
  height: 30px;
  text-decoration: none;
  text-shadow: 0px -1px 1px #bdb5b4, 1px 1px 1px white;
  position: absolute;
  width: 30px;
}

.row .groups-section .column .group-avatar:hover {
  background-image: -webkit-linear-gradient(to top, #efedec, #f7f4f4);
  background-image: linear-gradient(to top, #efedec, #f7f4f4);
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1),
    inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
}

.row .groups-section .column .group-avatar:active {
  background-image: -webkit-linear-gradient(to top, #efedec, #f7f4f4);
  background-image: linear-gradient(to top, #efedec, #f7f4f4);
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.4),
    inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
}

.row .groups-section .column .group-avatar:active:after {
  color: #dbd2d2;
  text-shadow: 0px -1px 1px #bdb5b4, 0px 1px 1px white;
}

.row .groups-section .column .avatar-title p {
  margin-top: 1rem;
  font-weight: 800;
}

.row .groups-section .column .avatar-title .network-icon {
  list-style: none;
}

.row .groups-section .column .avatar-title .network-icon {
  list-style: none;
}

.row .groups-section .column .avatar-title .network-icon i {
  transition: all 0.7s ease-in-out;
}

.row .groups-section .column .avatar-title .network-icon i:hover {
  transform: rotateY(360deg);
}

@media (max-width: 1300px) {
  .row .groups-section {
    flex-direction: column;
  }

  .row .groups-section .column .avatar-title .network-icon {
    margin-bottom: 2rem;
  }
}
</style>
