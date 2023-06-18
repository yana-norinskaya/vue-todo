<template>
  <form>
    <input v-model="value" placeholder="Введите задачу" />
    <button @click="createTask">Создать</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapMutations(["addTask"]),
    createTask() {
      const newTask = {
        id: Date.now(),
        value: this.value,
        disabled: false,
      };
      if (this.value) {
        this.addTask(newTask);
      }
      this.value = "";
    },
  },
  name: "PostForm",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
form {
  display: flex;
  gap: 0.5rem;
}
input {
  padding: 1rem;
  border-radius: 1rem;
  border: 0.4rem solid #525252;
  background-color: #d4d4d4;
  width: 100%;
  color: #fafafa;
}
button {
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid #525252;
  background-color: #525252;
  font-size: 14px;
  font-weight: 600;
  color: white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: gray;
  }
}
</style>
