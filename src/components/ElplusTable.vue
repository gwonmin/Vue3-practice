<template>
  <el-card>
    <el-row class="row-bg" justify="end">
      <el-col :span="2"
        ><div class="grid-content ep-bg-purple" />
        <add-data-modal-vue />
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" max-height="500">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="600" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
          >
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { reactive } from "vue";
import AddDataModalVue from "@/components/AddDataModal.vue";
import { useStore } from "vuex";

const store = useStore();

const tableData = reactive(store.state.tableData);

const deleteRow = (index) => {
  tableData.splice(index, 1);
};
</script>
