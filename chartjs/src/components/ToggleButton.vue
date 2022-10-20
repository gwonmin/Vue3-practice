<template>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Wow</h1>
  <button @click="toggle">toggle</button>
</template>

<!-- Options -->
<!-- <script>
export default {
  data() {
    return {
      awesome: true,
    };
  },
  methods: {
    toggle() {
      this.awesome = !this.awesome;
    },
  },
};
</script> -->

<!-- Composition -->
<script setup>
import { ref } from "vue";

const awesome = ref(true);

function toggle() {
  awesome.value = !awesome.value;
}
</script>

<style></style>
