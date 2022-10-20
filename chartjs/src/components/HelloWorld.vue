<!-- Props 테스트 -->
<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ props.msg || HelloWorld }}</h1>
    <slot>Fallback content</slot>
  </div>
</template>

// Options style
<!-- <script>
export default {
  data() {
    const HelloWorld = "HelloWorld";

    return { HelloWorld };
  },

  props: {
    msg: String,
  },
};
</script> -->

<!-- Composition Style -->
<script setup>
import { ref, defineProps } from "vue";
const HelloWorld = ref("Hellow Vue3");

const props = defineProps({
  msg: String,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
div {
  align-items: center;
}
</style>
