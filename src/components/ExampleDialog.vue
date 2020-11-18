<template>
  <div>
    <v-dialog
      eager
      v-model="show"
      persistent
      width="1500px"
      height="900px"
      min-height="900px"
    >
      <v-card>
        <v-card-text>
          <Chart />
        </v-card-text>
        <v-card-actions>
          <div style="width: 100%">
            <v-btn class="float-right" @click="show = false"
              >Close Dialog</v-btn
            >
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col cols="3" />
      <v-col cols="4">
        <v-btn @click="show = !show">Open Dialog</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Chart from "./Chart.vue";

export default {
  name: "ExampleDialog",
  components: {
    Chart,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
