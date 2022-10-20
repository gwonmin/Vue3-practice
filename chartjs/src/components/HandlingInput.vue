<!--
This example demonstrates handling user input with the v-on directive.
-->
<template>
  <h1 class="msg">{{ msg }}</h1>
  <button @click="reverseMsg">Reverse Message</button>
  <button @click="msg += '!'">Append !</button>
  <a href="https://vuejs.org" @click.prevent="notify">
    A link with e.preventDefault()
  </a>
</template>

// Options
<!-- <script>
export default {
  data() {
    return {
      msg: "User Input Text",
    };
  },
  methods: {
    reverseMsg() {
      this.msg = this.msg.split("").reverse().join("");
    },
    notify() {
      alert("navigation was prevented");
    },
  },
};
</script> -->

// Composition
<script setup>
import { ref } from "vue";

let msg = ref("User Input Text");

async function reverseMsg() {
  msg.value = msg.value.split("").reverse().join("");
}

async function notify() {
  alert("navigation was prevented");
}
</script>

<style>
.msg {
  text-align: center;
  cursor: pointer;
  margin-top: 3em;
  display: block;
}

button,
a {
  display: block;
  cursor: pointer;
  margin-bottom: 1em;
}
</style>
