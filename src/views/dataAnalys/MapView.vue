<template>
    <div class="trave_map">
        <div id="maps"></div>
    </div>
</template>

<script>
import geoJson from "@/utils/geojson.json";
export default {
    data() {
        return {}
    },
    mounted() {
        let myChart = this.$echarts.init(document.getElementById('maps'));
        this.$echarts.registerMap("china", geoJson);  //注册可用地图，必须包括geo组件
        let option = {
            backgroundColor: 'rgb(121,145,209)',
            title: {
                text: '地图模板组件'
            },
            geo: {
                // 地理坐标系组件,支持在地理坐标系上绘制散点图、线图
                map: "china",
                aspectScale: 0.75,
                zoom: 1.1,
                itemStyle: {
                    normal: {
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#09132c',
                                },
                                {
                                    offset: 1,
                                    color: '#274d68'
                                }
                            ],
                            globalCoord: true
                        },
                        shadowColor: 'rgb(58,115,192)',
                        shadowOffsetX: 15,
                        shadowOffsetY: 5,
                    },
                    regions: [{
                        name: '南海诸岛',
                        itemStyle: {
                            opacity: 0.5,
                        }
                    }]
                }
            },
            series: [
                {
                    type: "map",
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: "#1DE9B6",
                            },
                        },
                        emphasis: {
                            textStyle: {
                                color: "#fff",
                            },
                        },
                    },
                    zoom: 1.1,
                    map: "china",
                    itemStyle: {
                        normal: {
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgb(111, 156, 148)',
                                    },
                                    {
                                        offset: 1,
                                        color: '#2578b5'
                                    }
                                ],
                                globalCoord: true

                            }
                        }
                    },
                },
            ],
        };
        myChart.setOption(option);
    }
}
</script>
<style lang="less" scoped>
.trave_map {
    width: 100%;

    #maps {
        width: 100%;
        height: 700px;
    }
}
</style>