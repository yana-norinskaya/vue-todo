<template>
  <div class="main">
    <navigation />
    <div class="vue">
      <img src="../assets/logo.png" />
      <h1>TODO app on Vue js</h1>
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>
<style scoped lang="scss">
.main {
  background-color: #404040;
  height: 100vh;
  .vue {
    display: flex;
    align-items: center;
    padding-top: 3rem;
    flex-direction: column;
    height: 100%;
    img {
      height: 10rem;
      width: 10rem;
    }
    h1 {
      color: #e5e5e5;
      text-transform: uppercase;
      font-family: "Times New Roman", Times, serif;
      letter-spacing: 3px;
    }
  }
}
</style>
