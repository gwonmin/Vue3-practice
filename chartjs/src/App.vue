<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Hello msg="Welcome to Your Vue.js App" />
  <Count></Count>
  <Input></Input>
  <Toggle></Toggle>
  <Todo></Todo>
  <OnMount></OnMount>
</template>

<script setup>
// Options Style
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }

// Composition Style
import { ref } from "vue";

import HelloWorld from "./components/HelloWorld.vue";
import CountButton from "./components/CountButton.vue";
import InputBox from "./components/InputBox.vue";
import ToggleButton from "./components/ToggleButton.vue";
import TodoList from "./components/TodoList.vue";
import OnMounted from "./components/OnMounted.vue";

const Hello = ref(HelloWorld);
const Count = ref(CountButton);
const Input = ref(InputBox);
const Toggle = ref(ToggleButton);
const Todo = ref(TodoList);
const OnMount = ref(OnMounted);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
