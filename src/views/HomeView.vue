<template>
  <div class="home">
    <Layout />
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/components/Layout.vue";

export default {
  name: "HomeView",
  components: {
    Layout,
  },
};
</script>
<style>
.home {
  width: 100%;
  height: 100vh;
  background-color: #404040;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
