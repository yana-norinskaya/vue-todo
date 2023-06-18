<template>
  <form>
    <input v-model="value" placeholder="What you want to do?" />
    <button @click="createTask">Add</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "PostForm",
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
        disabled: true,
      };
      if (this.value) {
        this.addTask(newTask);
      }
      this.value = "";
    },
  },
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
  border: 0.4rem solid #737373;
  background-color: #d4d4d4;
  width: 100%;
  color: #737373;
  font-size: 1rem;
}
button {
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid #737373;
  background-color: #737373;
  font-size: 14px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: gray;
  }
}
</style>
