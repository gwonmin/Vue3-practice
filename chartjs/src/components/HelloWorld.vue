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
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
