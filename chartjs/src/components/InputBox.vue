<template>
  <!-- Options -->
  <!-- <input :value="text" @input="onInput" placeholder="Type here" /> -->

  <!-- Composition -->
  <input v-model="text" placeholder="Type here" />
  <p>{{ text }}</p>
</template>

<!-- <script>
// Options
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onInput(e) {
      this.text = e.target.value;
    },
  },
};
</script> -->

<!-- Composition -->
<script setup>
import { ref } from "vue";

const text = ref("");
</script>

<style></style>
