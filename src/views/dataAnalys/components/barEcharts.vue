<template>
    <el-card>
        <div id="bar"></div>
    </el-card>
</template>

<script setup>
import echarts from 'echarts';
import { ref, onMounted, watch, defineProps } from 'vue';

const props = defineProps({
    chartData: Array
});
const chart = ref(null);
const dataZoomIndex = ref(0);
onMounted(() => {
    chart.value = echarts.init(document.getElementById('bar'));
    updateChart();
    startAutoPlay();
});
watch(
    () => props.chartData,
    () => updateChart()
);
function updateChart() {
    if (chart.value && props.chartData) {
        const option = {
            title: {
                text: '柱状图模板'
            },
            tooltip: {
                // trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            dataZoom: [
                {
                    type: 'slider',
                    startValue: 0,
                    endValue: 4,
                    bottom: 0,
                    height: 20,
                    start: 0,
                    end: 50
                },
                {
                    type: 'inside'
                }
            ],
            xAxis: {
                type: 'category',
                data: props.chartData.map(item => item.x)
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: props.chartData.map(item => item.y),
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                }
            ]
        }
        chart.value.setOption(option);
    }
}


function startAutoPlay() {
    setInterval(() => {
        const dataZoom = chart.value.getModel().getComponent('dataZoom', dataZoomIndex.value);
        const { end } = dataZoom.option;
        const step = 5;
        const maxEnd = 100;

        if (end + step > maxEnd) {
            dataZoom.option.start = 0;
            dataZoom.option.end = 50;
        } else {
            dataZoom.option.start += step;
            dataZoom.option.end += step;
        }

        chart.value.dispatchAction({
            type: 'dataZoom',
            start: dataZoom.option.start,
            end: dataZoom.option.end,
            dataZoomIndex: dataZoomIndex.value
        });
    }, 3000);
}
</script>
<style lang="less" scoped>
.el-card {
    width: 33.1%;
    margin-bottom: 5px;

    #bar {
        height: 310px;
    }
}
</style>