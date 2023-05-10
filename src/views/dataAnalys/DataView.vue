<template>
    <div class="box">
        <barEcharts :chartData="barList" />
        <lineEchart :lineData="lineList" />
        <pieEchart />
        <radarEchart />
        <barStackEchart :stackData="stackData" />
        <simpleEchart />
    </div>
</template>
<script setup>
import barEcharts from './components/barEcharts.vue';
import lineEchart from './components/lineEchart.vue';
import pieEchart from './components/pieEchart.vue';
import radarEchart from './components/radarEchart.vue';
import barStackEchart from './components/barStackEchart.vue';
import simpleEchart from './components/simpleEchart.vue';
const barList = [
    { x: 'Mon', y: 120 },
    { x: 'Tue', y: 123 },
    { x: 'Wed', y: 231 },
    { x: 'Thu', y: 451 },
    { x: 'Fri', y: 21 },
    { x: 'Sat', y: 413 },
    { x: 'Sun', y: 312 },
    { x: 'Mon', y: 120 },
    { x: 'Tue', y: 123 },
    { x: 'Wed', y: 231 },
    { x: 'Thu', y: 451 },
    { x: 'Fri', y: 21 },
    { x: 'Sat', y: 413 },
    { x: 'Sun', y: 312 },
]
const lineList = [
    { text: 'Mon', value: 120 },
    { text: 'Tue', value: 123 },
    { text: 'Wed', value: 231 },
    { text: 'Thu', value: 451 },
    { text: 'Fri', value: 21 },
    { text: 'Sat', value: 413 },
    { text: 'Sun', value: 312 },
]
const stackData = [
    { name: 'Mon', value: '320', value1: '120', value2: '220', value3: '150', value4: '153', value5: '125', value6: '132', value7: '129', value8: '124', },
    { name: 'Tue', value: '332', value1: '132', value2: '182', value3: '232', value4: '124', value5: '201', value6: '123', value7: '243', value8: '452', },
    { name: 'Wed', value: '301', value1: '101', value2: '191', value3: '201', value4: '234', value5: '202', value6: '124', value7: '124', value8: '124', },
    { name: 'Thu', value: '334', value1: '134', value2: '234', value3: '154', value4: '452', value5: '203', value6: '125', value7: '258', value8: '122', },
    { name: 'Fri', value: '390', value1: '90', value2: '290', value3: '190', value4: '124', value5: '204', value6: '126', value7: '254', value8: '123', },
    { name: 'Sat', value: '330', value1: '230', value2: '330', value3: '330', value4: '135', value5: '205', value6: '127', value7: '236', value8: '124', },
    { name: 'Sun', value: '320', value1: '210', value2: '310', value3: '410', value4: '146', value5: '206', value6: '128', value7: '454', value8: '125', }

]
</script>
<style lang="less" scoped>
.box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>