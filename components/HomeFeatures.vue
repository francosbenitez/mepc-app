<template></template>

<style lang="scss">
/* ---------- Features ---------- */

.features-section {
  color: var(--color-text);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.features-section .feature {
  width: 250px;
  text-align: center;
}

.features-section .feature .feature-icon {
  color: var(--color-base);
  text-align: center;
  margin: 0 auto;
}

.features-section .feature .fab,
.features-section .feature .fas {
  font-size: 5rem;
  color: var(--color-base);
  text-align: center;
  margin: 1rem;
}

.features-section .feature .feature-icon img {
  width: 100px;
}

.features-section .feature .feature-description {
  margin: 1rem 0 1rem 0;
}

@media (max-width: 1300px) {
  .features-section {
    flex-direction: column;
    align-items: center;
  }
}
</style>
