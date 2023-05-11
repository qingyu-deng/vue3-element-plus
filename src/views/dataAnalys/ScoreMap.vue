<template>
    <div id="cesiumContainer"></div>
</template>
<script>
export default {
    mounted() {
        // 创建Viewer实例
        Cesium.Ion.defaultAccwssToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMDdkYzVlOC03M2JlLTRkYWEtYTcxZS1iOWNkZTlmOGRjODAiLCJpZCI6MTM3MTY4LCJpYXQiOjE2ODM1MzA1MDd9.yBSRXnog1CfXtp22iga5QfCWKVIWMlVPE-M6naiC9Zw'
        const viewer = new Cesium.Viewer('cesiumContainer', {
            animation: false, // 是否显示动画控件
            baseLayerPicker: false, // 是否显示图层选择控件
            vrButton: false, // 是否显示VR控件
            geocoder: false, // 是否显示地名查找控件
            timeline: false, // 是否显示时间线控件
            sceneModePicker: false, // 是否显示投影方式控件
            navigationHelpButton: false, // 是否显示帮助信息控件
            navigationInstructionsInitiallyVisible: false, // 帮助按钮，初始化的时候是否展开
            infoBox: false, // 是否显示点击要素之后显示的信息
            fullscreenButton: false, // 是否显示全屏按钮
            selectionIndicator: false, // 是否显示选中指示框
            homeButton: false, // 是否显示返回主视角控件
            scene3DOnly: false, // 如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
            terrainProvider: Cesium.createWorldTerrain(),
        });
        // 调用天地图瓦片
        viewer.imageryProvider = new Cesium.WebMapTileServiceImageryProvider({
            url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=你申请的token",
            layer: "tdtBasicLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible",
            show: false,
            mininumLevel: 0,
            maximumLevel: 16
        })

        // 调用影响中文注记服务
        viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
            url: 'http://{s}.tianditu.gov.cn/cia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=9378d15741c526a104927f17e9438ab6',
            layer: "tdtImg_c",
            style: "default",
            format: "tiles",
            tileMatrixSetID: "c",
            subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
            tilingScheme: new Cesium.GeographicTilingScheme(),
            tileMatrixLabels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            maximumLevel: 50,
            show: false
        }))
        const tileset = viewer.scene.primitives.add(
            new Cesium.Cesium3DTileset({
                // url: '../assets/tileset.json',  //数据路径  
                maximumScreenSpaceError: 2,        //最大的屏幕空间误差
                maximumNumberOfLoadedTiles: 1000,  //最大加载瓦片个数
            })
        );
        // viewer.scene.primitives.add(tileset);
        // 设置相机位置和方向
        // viewer.camera.setView({
        //     destination: Cesium.Cartesian3.fromDegrees(-74.006, 40.7128, 10000000),
        //     orientation: {
        //         heading: Cesium.Math.toRadians(10),
        //         pitch: Cesium.Math.toRadians(-20),
        //         roll: 0
        //     }
        // });
    },
};
</script>

<style scoped>
html,
body,
#cesiumContainer {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>