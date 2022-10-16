<template>
  <h1 :class="countClass">{{ countClass }}</h1>
  <button @click="increment">Count is {{ counter.count }}</button>
</template>

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
