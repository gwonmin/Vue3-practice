<template>
  <div>
    <h1>{{ HelloWorld }}</h1>
  </div>
</template>

// Options style
<!-- <script>
export default {
  data() {
    const HelloWorld = "HelloWorld";

    return { HelloWorld };
  },
};
</script> -->

<!-- Composition Style -->
<script setup>
import { ref } from "vue";

const HelloWorld = ref("HelloWorld");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
