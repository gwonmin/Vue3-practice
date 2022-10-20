<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Use Props =></h1>
  <Hello :msg="greeting" />
  <h1>Use Slots =></h1>
  <Hello>Message: {{ msg }}</Hello>
  <Count></Count>
  <Input></Input>
  <Toggle></Toggle>
  <Todo></Todo>
  <OnMount></OnMount>
  <Random></Random>
  <Emit @response="msg => (childMsg = msg)"></Emit>
  <p>{{ childMsg }}</p>
  <Congras></Congras>
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
import Emit from "./components/EmitText.vue";
import Congras from "./components/CongrasThing.vue";

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
    Emit,
    Congras,
  },
  data() {
    return {
      greeting: "Hello from parent",
      childMsg: "No child msg yet",
      msg: "from parent",
    };
  },
};
</script> -->

// Composition Style
<script setup>
import { ref } from "vue";

import Hello from "./components/HelloWorld.vue";
import Count from "./components/CountButton.vue";
import Input from "./components/InputBox.vue";
import Toggle from "./components/ToggleButton.vue";
import Todo from "./components/TodoList.vue";
import OnMount from "./components/OnMounted.vue";
import Random from "./components/RandomTodo.vue";
import Emit from "./components/EmitText.vue";
import Congras from "./components/CongrasThing.vue";

const greeting = ref("Hello from parent");
const childMsg = ref("No child msg yet");
const msg = ref("from parent");
</script>

<style></style>
