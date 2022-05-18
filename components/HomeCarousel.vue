<template></template>

<style lang="scss">
/* ----------- Slider ----------- */

.slider .titles h1 {
  text-align: right;
  padding: 0 5rem 0 0;
}

.blog-slider-container {
  background-color: var(--color-text);
  max-width: 60%;
  position: relative;
  padding-bottom: 26%;
  padding-top: 12px;
  height: 0;
  margin: auto;
}

.blog-slider-container img {
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 0;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.blog-slider-text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.blog-slider-numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
  z-index: 1;
}

.blog-slider-dots {
  text-align: center;
}

.blog-slider-dots-dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.slider-active,
.blog-slider-dots-dot:hover {
  background-color: #717171;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

/* Slider animation */

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
}

@media (max-width: 1300px) {
  .titles h1,
  .slider .titles h1 {
    text-align: center;
    padding: 0 2rem 0 2rem;
  }

  .blog-slider-container {
    background-color: var(--color-text);
    max-width: 80%;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
    margin: auto;
  }
}
</style>
