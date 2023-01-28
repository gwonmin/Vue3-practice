<template>
  <!-- Form -->
  <el-button text @click="dialogFormVisible = true"> Add </el-button>

  <el-dialog v-model="dialogFormVisible" title="Add Row">
    <el-form :model="form">
      <el-form-item label="Date" :label-width="formLabelWidth">
        <el-input v-model="form.date" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="State" :label-width="formLabelWidth">
        <el-input v-model="form.state" autocomplete="off" />
      </el-form-item>
      <el-form-item label="City" :label-width="formLabelWidth">
        <el-input v-model="form.city" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Address" :label-width="formLabelWidth">
        <el-input v-model="form.address" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zip" :label-width="formLabelWidth">
        <el-input v-model="form.zip" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addAction"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const dialogFormVisible = ref(false);
const formLabelWidth = "140px";

const form = computed(() => store.state.modal);

async function addAction() {
  dialogFormVisible.value = false;
  await store.dispatch("addTableData", form.value);
  await store.dispatch("clearModal");
}
</script>
