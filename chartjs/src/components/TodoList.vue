<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">Remove</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? "Show all" : "Hide completed" }}
  </button>
</template>

<!-- Options -->
<script>
//to give each todo a unique id
let id = 0;

export default {
  data() {
    return {
      newTodo: "",
      hideCompleted: false,
      todos: [
        { id: id++, text: "Learn HTML", done: true },
        { id: id++, text: "Learn Java", done: false },
      ],
    };
  },

  computed: {
    filteredTodos() {
      return this.hideCompleted ? this.todos.filter(t => !t.done) : this.todos;
    },
  },

  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo });
      this.newTodo = "";
    },

    removeTodo(todo) {
      this.todos = this.todos.filter(t => t !== todo);
    },
  },
};
</script>

<!-- Composition -->
<!-- <script setup>
import { ref, computed } from "vue";

// to give each todo a unique id
let id = 0;

const newTodo = ref("");
const hideCompleted = ref(false);

const todos = ref([
  { id: id++, text: "Learn Java", done: false },
  { id: id++, text: "Learn C++", done: true },
]);

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false });
  newTodo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script> -->

<style>
.done {
  text-decoration: line-through;
}
</style>
