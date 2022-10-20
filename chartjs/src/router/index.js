import { createWebHistory, createRouter } from "vue-router";
import Hello from "@/components/HelloWorld.vue";
import Count from "@/components/CountButton.vue";
import Input from "@/components/InputBox.vue";
import Toggle from "@/components/ToggleButton.vue";
import Todo from "@/components/TodoList.vue";
import OnMount from "@/components/OnMounted.vue";
import Random from "@/components/RandomTodo.vue";
import Congras from "@/components/CongrasThing.vue";
import Handle from "@/components/HandlingInput.vue";

const routes = [
  {
    path: "/",
    name: "Hello",
    component: Hello,
  },
  {
    path: "/count",
    name: "CountButton",
    component: Count,
  },
  {
    path: "/input",
    name: "InputBox",
    component: Input,
  },
  {
    path: "/toggle",
    name: "ToggleButton",
    component: Toggle,
  },
  {
    path: "/todo",
    name: "TodoList",
    component: Todo,
  },
  {
    path: "/onmount",
    name: "OnMounted",
    component: OnMount,
  },
  {
    path: "/random",
    name: "RandomTodo",
    component: Random,
  },
  {
    path: "/congras",
    name: "CongrasThing",
    component: Congras,
  },
  {
    path: "/handlinginput",
    name: "HandlingInput",
    component: Handle,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
