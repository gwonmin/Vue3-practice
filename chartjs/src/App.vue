<template>
  <div id="nav">
    <router-link to="/">
      <button>Home</button>
    </router-link>

    <router-link to="/count">
      <button>Count</button>
    </router-link>

    <router-link to="/input">
      <button>Input</button>
    </router-link>

    <router-link to="/toggle">
      <button>Toggle</button>
    </router-link>

    <router-link to="/todo">
      <button>Todo</button>
    </router-link>

    <router-link to="/onmount">
      <button>OnMount</button>
    </router-link>

    <router-link to="/random">
      <button>Random</button>
    </router-link>

    <router-link to="/congras">
      <button>Congras</button>
    </router-link>

    <router-link to="/handlinginput">
      <button>HandlingInput</button>
    </router-link>
  </div>
  <router-view />
  <!-- <Emit @response="msg => (childMsg = msg)"></Emit>
  <p>{{ childMsg }}</p> -->
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
// import { ref } from "vue";

// import Hello from "./components/HelloWorld.vue";
// import Count from "./components/CountButton.vue";
// import Input from "./components/InputBox.vue";
// import Toggle from "./components/ToggleButton.vue";
// import Todo from "./components/TodoList.vue";
// import OnMount from "./components/OnMounted.vue";
// import Random from "./components/RandomTodo.vue";
// import Emit from "./components/EmitText.vue";
// import Congras from "./components/CongrasThing.vue";
// import HandlingInput from "./components/HandlingInput.vue";

// const greeting = ref("Hello from parent");
// const childMsg = ref("No child msg yet");
</script>
<style>
div {
  align-content: flex-end;
}
</style>
