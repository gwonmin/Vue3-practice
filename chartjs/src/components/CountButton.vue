<template>
  <h1 :class="countClass">{{ countClass }}</h1>
  <button @click="increment">Count is {{ counter.count }}</button>
  <input v-model="text" placeholder="Type here" />
  <p>{{ text }}</p>
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Wow</h1>
</template>

<script setup>
import { reactive, ref } from "vue";

const countClass = ref("Count");
const counter = reactive({ count: 0 });

function increment() {
  counter.count++;
}

const text = ref("");

const awesome = ref(true);

function toggle() {
  awesome.value = !awesome.value;
}
</script>

<style>
.Count {
  color: red;
}
</style>
