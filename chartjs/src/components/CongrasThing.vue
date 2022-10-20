<template>
  <h1 class="Congras" @click="showConfetti">🎉 Congratulations!</h1>
</template>

// Options
<!-- <script>
import JSConfetti from "js-confetti";

const confetti = new JSConfetti();

export default {
  mounted() {
    this.showConfetti();
  },

  methods: {
    showConfetti() {
      confetti.addConfetti();
    },
  },
};
</script> -->

// Composition
<script setup>
import JSConfetti from "js-confetti";

const confetti = new JSConfetti();

async function showConfetti() {
  confetti.addConfetti();
}
</script>

<style>
.Congras {
  text-align: center;
  cursor: pointer;
  margin-top: 3em;
}
</style>
