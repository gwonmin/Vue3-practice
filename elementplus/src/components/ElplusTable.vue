<template>
  <el-row class="row-bg" justify="end">
    <el-col :span="3"
      ><div class="grid-content ep-bg-purple" />
      <el-button class="float-right" @click="onAddItem">Add Item</el-button>
    </el-col>
  </el-row>
  <el-table :data="tableData" style="width: 100%" max-height="500">
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
</template>

<script>
import { ref } from "vue";
import dayjs from "dayjs";

export default {
  setup() {
    const now = new Date();

    const tableData = ref([
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      },
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      },
    ]);

    const deleteRow = (index) => {
      tableData.value.splice(index, 1);
    };

    const onAddItem = () => {
      now.setDate(now.getDate() + 1);
      tableData.value.push({
        date: dayjs(now).format("YYYY-MM-DD"),
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      });
    };
    return { deleteRow, onAddItem, tableData, now };
  },
};
</script>
