<template>
  <div class="container">
    <PostForm />
    <TaskList @remove="removeTask" />
  </div>
</template>

<script>
import PostForm from "./PostForm.vue";
import TaskList from "./TaskList.vue";
export default {
  name: "Layout",
  components: {
    PostForm,
    TaskList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 500px;
  background-color: #737373;
  padding: 1rem;
  border-radius: 1rem;
  height: 90vh;
  display: grid;
  grid-template-rows: 50px auto;
  gap: 10px;
}
</style>
