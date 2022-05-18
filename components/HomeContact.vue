<template>
  <div></div>
</template>

<style lang="scss">
/*---------- Contact ----------*/

.contact .feature-icon {
  transition: all 0.7s ease-in-out;
}

.contact .feature-icon:hover {
  transform: rotateY(360deg);
}

.section-form {
  margin: 2.5rem 0 0 0;
  color: var(--color-text);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.section-form .form {
  text-align: center;
  padding: 1rem 0 1rem 0;
  width: 50%;
}

.section-form .form .form-wrapper {
  font-size: 5rem;
  color: var(--color-base);
  text-align: center;
  width: 100%;
  margin: 1rem 0 1rem 0;
  display: flex;
  flex-direction: column;
}

.section-form .form .form-wrapper .form-image img {
  width: 50%;
}

.section-form .form .form-wrapper .form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.5rem auto;
}

.section-form .form .form-wrapper .form-group .form-control {
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}

input[type='text']:focus,
input[type='email']:focus,
textarea[name='message']:focus {
  outline: 2px solid var(--color-base);
}

.section-form .form .form-wrapper .submit-btn {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  font-size: 1rem;
  transition: color 0.15s;
  width: 100px;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  box-shadow: 3px 3px 0 0 var(--color-base);
  color: var(--color-base);
  border-color: var(--color-base);
  background-color: var(--color-white);
}

.section-form .form .form-wrapper .submit-btn:hover {
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  box-shadow: 3px 3px 0 0 var(--color-base);
  color: var(--color-white);
  border-color: var(--color-white);
  background-color: var(--color-base);
}

@media (max-width: 1300px) {
  .section-form .form .form-wrapper .form-image img {
    width: 100%;
  }
}
</style>
