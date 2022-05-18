<template></template>

<style lang="scss">
/*---------- About ----------*/

.container-avatar {
  display: flex;
  padding: 60px 0px 0px 0px;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 33%;
  text-align: center;
  float: left;
}

.container-avatar .avatar-image img {
  width: 80%;
  max-width: 344px;
  height: auto;
  border-radius: 50%;
}

.container-avatar .avatar-description h2 {
  color: var(--color-text);
  font-family: 'Montserrat';
  margin: 10px 0 10px 0;
}

.container-avatar .avatar-description h3 {
  color: var(--color-text);
  font-family: 'Montserrat';
  font-weight: 400;
  margin: 10px 0 10px 0;
}

.container-avatar .network-icon {
  list-style: none;
  display: inline-block;
  text-rendering: auto;
  line-height: 1;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}

.container-avatar .network-icon i {
  margin-right: 5px;
  padding: 3px;
  transition: all 0.7s ease-in-out;
}

.container-avatar .network-icon i:hover {
  transform: rotateY(360deg);
}

.container-video {
  color: var(--color-text);
  display: flex;
  padding: 60px 20px;
  text-align: center;
}

.container-video .video-link {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
}

.container-video .video-link iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 1300px) {
  .container-avatar {
    width: 100%;
  }
}
</style>
