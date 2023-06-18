<template>
  <div class="tasks_page">
    <navigation />
    <container-tasks />
  </div>
</template>

<script>
// @ is an alias to /src
import ContainerTasks from "@/components/ContainerTasks.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "HomeView",
  components: {
    ContainerTasks,
    Navigation,
  },
};
</script>
<style scoped lang="scss">
.tasks_page {
  width: 100%;
  height: 100vh;
  background-color: #404040;
  display: grid;
  grid-template-rows: 80px 85%;
  gap: 1rem;
  align-items: center;
  justify-items: center;
  flex-direction: column;
}
</style>
