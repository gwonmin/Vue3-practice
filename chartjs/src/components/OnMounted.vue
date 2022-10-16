<template>
  <p ref="p">hello</p>
</template>

<script setup>
import { ref, onMounted } from "vue";

const p = ref(null);

onMounted(() => {
  p.value.textContent = "mounted!";
});
</script>

<style></style>
