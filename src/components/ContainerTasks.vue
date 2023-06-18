<template>
  <div class="container">
    <PostForm />
    <TaskList />
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

<style scoped lang="scss">
.container {
  width: 500px;
  background-color: transparent;
  padding: 1rem;
  height: 100%;
  display: grid;
  grid-template-rows: 50px auto;
  gap: 10px;
}
</style>
