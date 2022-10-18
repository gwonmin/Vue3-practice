<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Hello msg="Welcome to Your Vue.js App" />
  <Count></Count>
  <Input></Input>
  <Toggle></Toggle>
  <Todo></Todo>
  <OnMount></OnMount>
  <Random></Random>
</template>

// Options Style
<!-- <script>
import Hello from "./components/HelloWorld.vue";
import Count from "./components/CountButton.vue";
import Input from "./components/InputBox.vue";
import Toggle from "./components/ToggleButton.vue";
import Todo from "./components/TodoList.vue";
import OnMount from "./components/OnMounted.vue";
import Random from "./components/RandomTodo.vue";

export default {
  name: "App",
  components: {
    Hello,
    Count,
    Input,
    Toggle,
    Todo,
    OnMount,
    Random,
  },
}; -->

// Composition Style
<script setup>
import { ref } from "vue";

import HelloWorld from "./components/HelloWorld.vue";
import CountButton from "./components/CountButton.vue";
import InputBox from "./components/InputBox.vue";
import ToggleButton from "./components/ToggleButton.vue";
import TodoList from "./components/TodoList.vue";
import OnMounted from "./components/OnMounted.vue";
import RandomTodo from "./components/RandomTodo.vue";

const Hello = ref(HelloWorld);
const Count = ref(CountButton);
const Input = ref(InputBox);
const Toggle = ref(ToggleButton);
const Todo = ref(TodoList);
const OnMount = ref(OnMounted);
const Random = ref(RandomTodo);
</script>

<style>
.Count {
  color: blue;
}
.Hello {
  color: blue;
}
</style>
