<template></template>

<style lang="scss">
/* ----------- Resources ---------- */

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
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 20px;
  overflow: hidden;
  margin: 20px 10px;
  transition: all 0.2s ease-in-out;
}

.resource-card:hover {
  transform: scale(1.2);
}

.resource-card-texts {
  color: var(--color-text);
  padding: 3rem 2rem;
}

.resource-card-name {
  font-size: 1rem;
  font-weight: 800;
  text-align: center;
}

.resource-card hr {
  margin-top: 1rem;
  color: var(--color-text);
}

.resource-card-description {
  font-size: 0.8rem;
  margin-top: 1rem;
  text-align: center;
}

.titles .search-input {
  width: 50%;
  font-size: 16px;
  padding: 12px 2rem 1rem 2rem;
  margin-top: 1rem;
  border: 1px solid var(--border-color);
  background: #fff url('https://francosbenitez.github.io/mepc/img/search.svg')
    1rem no-repeat;
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
