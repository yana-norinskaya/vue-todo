<template>
  <li @dblclick="$store.commit('editTask', task.id)">
    <p v-if="task.disabled">{{ task.value }}</p>
    <input
      v-if="!task.disabled"
      v-model="task.value"
      type="text"
      :disabled="task.disabled"
      @keyup.enter="$store.commit('editTask', task.id)"
    />
    <img
      @click="$store.commit('editTask', task.id)"
      class="edit"
      src="../assets/edit.png"
      alt="edit"
    />
    <img
      @click="$store.commit('deleteTask', task.id)"
      class="delete"
      src="../assets/delete.png"
      alt="delete"
    />
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li {
  width: 100%;
  padding: 1rem;
  background-color: #a3a3a3;
  margin-top: 0.3rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 85% 20px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  input {
    width: 100%;
    border: none;
    color: rgb(129, 123, 123);
    border: 0.2rem solid #3f3f46;
    background-color: #d4d4d8;
    border-radius: 10px;
    padding: 1px 5px;
    font-weight: bold;
    font-size: 1.2rem;
    font-weight: bold;
    &:disabled {
      background-color: inherit;
    }
  }
  p {
    display: inline-block;
    word-wrap: break-word;
    font-size: 1.2rem;
    font-weight: bold;
    color: #3f3f46;
  }
  .delete,
  .edit {
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
    display: block;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
