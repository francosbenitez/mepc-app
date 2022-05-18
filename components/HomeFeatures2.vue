<template>
  <div></div>
</template>

<style lang="scss">
/* ---------- Features asd ----------  */

.features-section-asd {
  color: var(--color-text);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.container-feature .avatar .avatar-image img {
  width: 10rem;
  max-width: 344px;
  height: auto;
  border-radius: 50%;
}

.features-section-asd .container-description .asd .feature-title,
.features-section-asd .container-description .asd .feature-description {
  margin: 1rem 0 1rem 0;
}

.container-description {
  flex-basis: 60%;
  color: var(--color-text);
  display: flex;
  text-align: left;
}

@media (max-width: 1300px) {
  .container-description {
    padding: 0 1rem 0 1rem;
    text-align: center;
  }

  .features-section-asd {
    flex-direction: column;
    align-items: center;
  }
}
</style>
