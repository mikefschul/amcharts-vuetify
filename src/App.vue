<template>
  <v-app>

    <v-container>
      <ExampleDialog />

      <h2 class="mb-2">Microcharts</h2>

      <div class="d-flex flex-nowrap">
        <div class="chart-container d-flex flex-nowrap align-center pa-3">
          <span class="caption"> <v-icon>mdi-home</v-icon> Counts </span>
          <span class="px-2">876</span>
          <MicroChart :data="chartData" :loading="chartDataLoading"/>
        </div>
        <div class="chart-container d-flex flex-nowrap align-center pa-3">
          <span class="caption"> <v-icon>mdi-home</v-icon> Counts </span>
          <span class="px-2">45</span>
          <MicroChart :data="chartData" :loading="chartDataLoading"/>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import ExampleDialog from "./components/ExampleDialog.vue";
import MicroChart from "./components/MicroChart.vue";

export default {
  name: "App",

  components: {
    ExampleDialog,
    MicroChart
  },
  data() {
    return {
      chartData: [],
      chartDataLoading: true,
    };
  },
  created() {

    this.chartData = [{"start":1603144800000,"end":1603231200000,"count":5},{"start":1603231200000,"end":1603317600000,"count":5},{"start":1603317600000,"end":1603404000000,"count":45},{"start":1603404000000,"end":1603490400000,"count":45},{"start":1603490400000,"end":1603576800000,"count":5},{"start":1603576800000,"end":1603663200000,"count":10},{"start":1603663200000,"end":1603749600000,"count":10},{"start":1603749600000,"end":1603836000000,"count":5},{"start":1603836000000,"end":1603922400000,"count":45},{"start":1603922400000,"end":1604008800000,"count":5},{"start":1604008800000,"end":1604095200000,"count":10},{"start":1604095200000,"end":1604181600000,"count":45},{"start":1604181600000,"end":1604268000000,"count":5},{"start":1604268000000,"end":1604354400000,"count":10},{"start":1604354400000,"end":1604440800000,"count":5},{"start":1604440800000,"end":1604527200000,"count":10},{"start":1604527200000,"end":1604613600000,"count":5},{"start":1604613600000,"end":1604700000000,"count":10},{"start":1604700000000,"end":1604786400000,"count":5},{"start":1604786400000,"end":1604872800000,"count":5},{"start":1604872800000,"end":1604959200000,"count":5},{"start":1604959200000,"end":1605045600000,"count":10},{"start":1605045600000,"end":1605132000000,"count":10},{"start":1605132000000,"end":1605218400000,"count":5},{"start":1605218400000,"end":1605304800000,"count":10},{"start":1605304800000,"end":1605391200000,"count":5},{"start":1605391200000,"end":1605477600000,"count":10},{"start":1605477600000,"end":1605564000000,"count":10},{"start":1605564000000,"end":1605650400000,"count":10},{"start":1605650400000,"end":1605736800000,"count":10}]
    this.chartDataLoading = false;
  }
};
</script>

<style>
.chart-container {
  border:1px solid #ddd;
}
</style>
