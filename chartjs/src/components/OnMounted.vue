<template>
  <p ref="p">hello</p>
</template>

<!-- Options -->
<script>
export default {
  mounted() {
    this.$refs.p.textContent = "mounted!";
  },
};
</script>

<!-- Composition -->
<!-- <script setup>
import { ref, onMounted } from "vue";

const p = ref(null);

onMounted(() => {
  p.value.textContent = "mounted!";
});
</script> -->

<style></style>
