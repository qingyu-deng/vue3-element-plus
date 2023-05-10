<template>
    <el-card>
        <div id="line"></div>
    </el-card>
</template>

<script>
export default {
    name: 'lineEchart',
    props: {
        lineData: Array,
    },
    data() {
        return {
            chart: null,
            dataZoomIndex: 0,
        }
    },
    mounted() {
        this.chart = this.$echarts.init(document.getElementById("line"));
        this.updateChart();
        this.startAutoPlay();
    },
    methods: {
        updateChart() {
            this.chart.setOption({
                title: {
                    text: '折线图模板'
                },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    data: this.lineData.map(item => item.text),
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.lineData.map(item => item.value),
                        type: 'line'
                    }
                ],
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
                ]
            });
        },
        startAutoPlay() {
            setInterval(() => {
                const dataZoom = this.chart.getModel().getComponent('dataZoom', this.dataZoomIndex);
                const { start, end } = dataZoom.option;
                const step = 5;
                const maxEnd = 100;

                if (end + step > maxEnd) {
                    dataZoom.option.start = 0;
                    dataZoom.option.end = 50;
                } else {
                    dataZoom.option.start += step;
                    dataZoom.option.end += step;
                }

                this.chart.dispatchAction({
                    type: 'dataZoom',
                    start: dataZoom.option.start,
                    end: dataZoom.option.end,
                    dataZoomIndex: this.dataZoomIndex
                });
            }, 3000);
        }
    }
}
</script>
<style lang="less" scoped>
.el-card {
    width: 33.1%;
    margin-bottom: 5px;

    #line {
        height: 310px;
    }
}
</style>