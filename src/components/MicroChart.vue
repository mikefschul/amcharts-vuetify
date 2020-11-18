<template>
	<div class="micro-chart-card pa-0 ma-0">
		<v-skeleton-loader v-if="loading" type="text" min-width="100" max-width="100" height="15" class="d-flex align-center ma-0 ml-xs-0 ml-sm-0 ml-4" />
		<div ref="microchartdiv" class="micro-chart-div"></div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as amcore from '@amcharts/amcharts4/core';
import * as amcharts from '@amcharts/amcharts4/charts';

export default Vue.extend({
	props: {
		data: {
			type: Array,
			default: function() {
				return [];
			}
		},
		loading: {
			type: Boolean,
			default: true
		},
		colorIndex: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			initiated: false,
			chart: undefined
		};
	},
	watch: {
		loading() {
			console.log('watch loading');
			if (!this.loading) {
				this.init();
				this.$nextTick(() => {
					this.loadData();
				});
			}
		}
	},
	mounted() {
		console.log('mounted');
		console.log('this.loading', this.loading);
		if (!this.loading) {
			this.init();
			this.$nextTick(() => this.loadData());
		}
	},
	beforeDestroy() {
		this.dispose();
	},
	methods: {
		init() {
			if (!this.loading) {
				this.initiated = true;
				this.chart = amcore.create(this.$refs.microchartdiv, amcharts.XYChart);
				this.chart.cursor = new amcharts.XYCursor();
				this.chart.cursor.lineY.disabled = true;
				this.chart.cursor.behavior = 'none';
				this.chart.padding(4, 0, 8, 4);

				this.createDateAxis();
				this.createValueAxis();
				this.createSeries();
			}
		},
		loadData() {
			const chartData = [];

			(this.data).forEach(b => {
				const date = new Date(b.start + (b.end - b.start) / 2);
				chartData.push({ date: date, count: b.count });
			});
			if (this.chart) this.chart.data = chartData;
		},
		createDateAxis() {
			if (this.chart) {
				const dateAxis = this.chart.xAxes.push(new amcharts.DateAxis());
				dateAxis.hide();
				dateAxis.renderer.grid.template.disabled = true;
				dateAxis.renderer.labels.template.disabled = true;
				if (dateAxis.tooltip) dateAxis.tooltip.disabled = true;
			}
		},
		createValueAxis() {
			if (this.chart) {
				const valueAxis = this.chart.yAxes.push(new amcharts.ValueAxis());
				valueAxis.renderer.grid.template.disabled = true;
				valueAxis.renderer.labels.template.disabled = true;
				if (valueAxis.tooltip) valueAxis.tooltip.disabled = true;
			}
		},
		createSeries() {
			if (this.chart) {
				const series = this.chart.series.push(new amcharts.LineSeries());
				series.dataFields.valueY = 'count';
				series.dataFields.dateX = 'date';
				series.stroke = amcore.color(this.chart.colors.getIndex(this.colorIndex).hex);
				series.fill = amcore.color(this.chart.colors.getIndex(this.colorIndex).hex);
				series.fillOpacity = 0.1;

				series.tooltipText = '{dateX} count: {valueY}';
			}
		},
		dispose() {
			if (this.chart && this.chart.dispose) {
				this.chart.dispose();
			}
		}
	}
});
</script>

<style scoped>
.micro-chart-card {
	width: 100px;
	height: 40px;
	text-align: center;
	display:inline-block;
}
.micro-chart-div {
	width: 100%;
	height: 100%;
}

@media only screen and (max-width: 1200px) {
	.micro-chart-card {
		width: 200px;
	}
}
</style>
