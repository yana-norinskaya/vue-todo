<template>
  <ul v-if="tasksStore.length > 0">
    <transition-group name="list">
      <TaskItem :key="task.id" v-for="task in tasksStore" :task="task" />
    </transition-group>
  </ul>
  <p v-else class="empty">There are no tasks</p>
</template>

<script>
import TaskItem from "./TaskItem.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "TaskList",
  components: {
    TaskItem,
  },
  computed: {
    ...mapState({
      tasksStore: (state) => state.tasks,
    }),
    ...mapMutations(["setTasks"]),
  },
  mounted() {
    this.setTasks;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 11px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #3f3f46;
    border-radius: 20px;
    border: 3px solid #d6d3d1;
  }
}
.empty {
  padding-top: 1rem;
  color: rgb(230, 228, 228);
  font-weight: bold;
  font-size: 1.3rem;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;

  transform: translateY(30px);
}
.list-enter {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
