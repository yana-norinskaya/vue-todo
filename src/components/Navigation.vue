<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/tasks">Your tasks</router-link>
  </nav>
</template>
<script>
export default {
  name: "Navigation",
};
</script>
<style scoped lang="scss">
nav {
  padding: 30px;
  width: 100%;
  background-color: #737373;
  a {
    font-weight: bold;
    color: #a8a29e;
    text-decoration: none;
    padding: 0 0.4rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #d4d4d4;
    }
    &.router-link-exact-active {
      color: #d4d4d4;
    }
  }
}
</style>
