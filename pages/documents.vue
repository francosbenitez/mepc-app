<template>
  <div></div>
</template>

<style lang="scss">
#navbar {
  width: 100%;
  padding: 5rem 0.2rem 0 0.2rem;
  margin: 0 0 1rem 0;
  text-align: center;
}

#navbar .secondary-nav #search {
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid var(--border-color);
  margin-bottom: 12px;
  background: #fff url('https://francosbenitez.github.io/mepc/img/search.svg')
    1rem no-repeat;
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

#navbar {
  @media (min-width: 850px) {
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

    .secondary-nav {
      width: 100%;
      font-size: 16px;
      padding: 12px 20px 12px;
      border-bottom: 1px solid var(--border-color);
    }

    .ul-container {
      width: 100%;
      height: auto;
      overflow: auto;
      border: none;
      margin: 0 0 0 0;
    }

    #main-doc {
      margin: 0 0 0 21rem;
    }
  }
}

/*---------- Sections ----------*/

#main-doc {
  padding: 0.5rem;
}

#main-doc header {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.5rem 0 0.5rem 0;
}

#main-doc .main-section header {
  margin: 5rem 0 1rem 0;
}

#main-doc .main-section .img-container {
  width: 100%;
  max-width: 35rem;
  margin: 0 auto;
}

#main-doc .main-section .img-container img {
  display: block;
  width: 100%;
  height: auto;
  margin: 1rem 0 1rem 0;
}

#main-doc .main-section hr {
  margin: 1rem 0 1rem 0;
}

#main-doc .main-section h3 {
  margin: 1rem 0 1rem 0;
}

#main-doc .main-section .properties li {
  margin: 0 0 0 3rem;
  font-size: 1.1rem;
}
</style>
