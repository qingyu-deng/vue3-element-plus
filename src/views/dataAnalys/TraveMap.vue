<template>
    <div class="map">
        <div id="maps"></div>
    </div>
</template>

<script>
import geoJson from "@/utils/geojson.json";
import { travel } from '@/api/work.js';
export default {
    data() {
        return {
            points: []
        }
    },
    created() {
        travel().then(res => {
            if (res.data.status === 200) {
                let { points, linesData } = res.data.data
                this.draw(points, linesData)
            }
        })
    },
    methods: {
        draw(points, linesData) {
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
                    //关于地图的散点图的配置
                    {
                        type: 'effectScatter',  //散点图
                        coordinateSystem: 'geo',
                        showEffectOn: 'render',
                        symbolSize: 10, //散点
                        zlevel: 1,
                        data: points,
                        rippleEffect: { //涟漪特效相关设置
                            period: 15,
                            scale: 4,
                            brushType: 'fill',

                        }
                    },
                    // 地图的线路图动画效果相关设置
                    {
                        type: "lines",
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 4,
                            trailLength: 0.6,
                            symbol: "arrow",
                            symbolSize: 7,
                        },
                        lineStyle: {
                            normal: {
                                color: "#1DE9B6",
                                width: 1,
                                opacity: 0.1,
                                curveness: 0.3,
                            },
                        },
                        data: linesData
                    }
                ],
            };
            myChart.setOption(option);
        }
    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
.map {
    width: 100%;

    #maps {
        width: 100%;
        height: 700px;
    }
}
</style>