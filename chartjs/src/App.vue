<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Hello msg="Welcome to Your Vue.js App" />
  <Count></Count>
</template>

<script setup>
// Composition Style
import HelloWorld from "./components/HelloWorld.vue";
import CountButton from "./components/CountButton.vue";
import { ref } from "vue";

const Hello = ref(HelloWorld);
const Count = ref(CountButton);

// Options Style
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
