<template>
    <el-card>
        <div id="bar-stack"></div>
    </el-card>
</template>

<script setup>
import echarts from 'echarts';
import { ref, onMounted, watch, defineProps } from 'vue';
const props = defineProps({
    stackData: Array
});
const chart = ref(null)
onMounted(() => {
    chart.value = echarts.init(document.getElementById('bar-stack'));
    updateChart();
});
watch(
    () => props.stackData,
    () => updateChart()
);
function updateChart() {
    if (chart.value && props.stackData) {
        chart.value.setOption({
            title: {
                text: '堆叠柱状图模板'
            },
            tooltip: {
                // trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    data: props.stackData.map(item => item.name)
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Direct',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    // data: [320, 332, 301, 334, 390, 330, 320],
                    data: props.stackData.map(item => item.value)
                },
                {
                    name: 'Email',
                    type: 'bar',
                    stack: 'Ad',
                    emphasis: {
                        focus: 'series'
                    },
                    // data: [120, 132, 101, 134, 90, 230, 210]
                    data: props.stackData.map(item => item.value1)
                },
                {
                    name: 'Union Ads',
                    type: 'bar',
                    stack: 'Ad',
                    emphasis: {
                        focus: 'series'
                    },
                    // data: [220, 182, 191, 234, 290, 330, 310]
                    data: props.stackData.map(item => item.value2)
                },
                {
                    name: 'Video Ads',
                    type: 'bar',
                    stack: 'Ad',
                    emphasis: {
                        focus: 'series'
                    },
                    // data: [150, 232, 201, 154, 190, 330, 410]
                    data: props.stackData.map(item => item.value3)
                },
                {
                    name: 'Search Engine',
                    type: 'bar',
                    // data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                    data: props.stackData.map(item => item.value4),
                    emphasis: {
                        focus: 'series'
                    },
                    markLine: {
                        lineStyle: {
                            type: 'dashed'
                        },
                        data: [[{ type: 'min' }, { type: 'max' }]]
                    }
                },
                {
                    name: 'Baidu',
                    type: 'bar',
                    barWidth: 5,
                    stack: 'Search Engine',
                    emphasis: {
                        focus: 'series'
                    },
                    // data: [620, 732, 701, 734, 1090, 1130, 1120],
                    data: props.stackData.map(item => item.value5)
                },
                {
                    name: 'Google',
                    type: 'bar',
                    stack: 'Search Engine',
                    emphasis: {
                        focus: 'series'
                    },
                    // data: [120, 132, 101, 134, 290, 230, 220]
                    data: props.stackData.map(item => item.value6)
                },
                {
                    name: 'Bing',
                    type: 'bar',
                    stack: 'Search Engine',
                    emphasis: {
                        focus: 'series'
                    },
                    // data: [60, 72, 71, 74, 190, 130, 110]
                    data: props.stackData.map(item => item.value7)
                },
                {
                    name: 'Others',
                    type: 'bar',
                    stack: 'Search Engine',
                    emphasis: {
                        focus: 'series'
                    },
                    // data: [62, 82, 91, 84, 109, 110, 120]
                    data: props.stackData.map(item => item.value8)
                }
            ]
        })
    }
}
</script>
<style lang="less" scoped>
.el-card {
    width: 33.1%;
    margin-bottom: 5px;

    #bar-stack {
        height: 310px;
    }
}
</style>