<template>
  <h1 :class="countClass">{{ countClass }}</h1>
  <!-- Options -->
  <!-- <button @click="increment">Count is {{ count }}</button> -->
  <!-- Composition -->
  <button @click="increment">Count is {{ counter.count }}</button>
</template>

//Options Style
<!-- <script>
export default {
  data() {
    return {
      countClass: "Count",
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script> -->

//Composition Style
<script setup>
import { reactive, ref } from "vue";

const countClass = ref("Count");
const counter = reactive({ count: 0 });

function increment() {
  counter.count++;
}
</script>

<style>
.Count {
  color: red;
}
</style>
