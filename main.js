const init = () => {

    const zoomingTool = new ol.control.ZoomSlider;

    const map = new ol.Map({
        view: new ol.View({
            zoom: 3,
            // center: [14910723.981645903, -2876478.2484277543]
            center: [0, 0]
        }),
        layers: [

        ],
        target: "app",
        controls: ol.control.defaults().extend([zoomingTool])
    })

    // OSM: standard
    const OSM = new ol.layer.Tile({
        source: new ol.source.OSM(),
        // extent: [11975542.09549513, -5968203.168506563, 17258869.490566514, -919690.3243272398],
        visible: false,
        Title: "OMSStandard"
    });

    const Humanitarian = new ol.layer.Tile({
        source: new ol.source.OSM({
            // url: "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer"
            url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        }),
        visible: false,
        Title: "Humanitarian"
    });

    const BingMap = new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: "AqUS8TyG6qfFgZ6UIqDbD905rGwhiEP5cVQ1M0Q_Fln5fV8VGUx90oZq7dmx1uC5",
            imagerySet: "AerialWithLabels" // Road, CanvasGray
        }),
        visible: false,
        Title: "BingMap"
    })


    const CartoDBLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: "https://{1-4}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{scale}.png",
            extent: [11975542.09549513, -5968203.168506563, 17258869.490566514, -919690.3243272398]
        }),
        visible: false,
        Title: "Carto"
    })

    // Stamen layer
    const StamenLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
        }),
        visible: false,
        Title: "Stamen"
    })

    // Base vector layers
    // Vector tile layer osm
    const openStreetVectorTile = new ol.layer.VectorTile({
        source: new ol.source.VectorTile({
            url: "https://api.maptiler.com/maps/v3/{z}/{x}/{y}.pbf?key=3oaFIh2RoGzve8UzcBA8",
            format: new ol.format.MVT(),
            attributions: '<a href="https: //cartiqo.nl/" target="_blank">© Cartiqo</a> <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>'
        }),
        visible: true
    })

    map.addLayer(openStreetVectorTile)

    // Base layer group
    const baseLayerGroup = new ol.layer.Group({
        layers: [
            OSM, Humanitarian, BingMap, CartoDBLayer, StamenLayer
        ]
    })

    map.addLayer(baseLayerGroup)

    // ARCGis: http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Louisville/LOJIC_LandRecords_Louisville/MapServer
    const ArcGISLayer = new ol.layer.Tile({
        source: new ol.source.TileArcGISRest({
            url: "https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer"
        }),
        visible: false,
        Title: "ArcGIS"
    })


    /*NOAA */
    const noaaWMSLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer?",
            params: {
                LAYERS: 1,
                FORMAT: "image/png",
                TRANSPARENT: true
            },
            // attributions: "<b>Sarbraj Dulai</b>"
        }),
        visible: false,
        Title: "noaaWMSLayer"
    })


    // TileDebug
    const TileDebug = new ol.layer.Tile({
        source: new ol.source.TileDebug(),
        zIndex: 1,
        visible: false,
        Title: "Debug"
    })

    // Layer switcher logic
    const baseLayerElements = document.querySelectorAll(".baselayer-selector-radio")
    for (let baseLayer of baseLayerElements) {
        baseLayer.addEventListener("change", (e) => {
            let baseLayerSelectedValue = e.target.value;
            baseLayerGroup.getLayers().forEach((element, i, array) => {
                let baseLayerName = element.get('Title')
                element.setVisible(baseLayerName === baseLayerSelectedValue)
            });
        })
    }

    // Raster tile layer group
    const rasterTileLayerGroup = new ol.layer.Group({
        layers: [
            TileDebug, ArcGISLayer, noaaWMSLayer
        ]
    })

    map.addLayer(rasterTileLayerGroup)

    const checkboxToggle = document.querySelectorAll(".raster-toggle-list .raster-toggle")
    for (let checkbox of checkboxToggle) {

        checkbox.addEventListener("change", (e) => {
            let selectedRasterCheckbox = e.target.value;
            let tileRasterLayer;

            rasterTileLayerGroup.getLayers().forEach((element, i, array) => {
                let rasterLayerName = element.get('Title')
                if (selectedRasterCheckbox === rasterLayerName) {
                    tileRasterLayer = element
                }
            })

            e.target.checked ? tileRasterLayer.setVisible(true) : tileRasterLayer.setVisible(false)
        })
    }

    const staticOpenStreetMap = new ol.layer.Image({
        source: new ol.source.ImageStatic({
            url: "./data/static_hum_z-3-x-4-y-3.png",
            imageExtent: [7949.4509416576475, 9783.939620502293, 5036894.415879974, 4999593.146076808],
            attributions: "Open layers",
        }),
        title: "HumanitarianStaticImage",
        visible: false
    })

    const staticImageGroupLayers = new ol.layer.Group({
        layers: [staticOpenStreetMap]
    })

    map.addLayer(staticImageGroupLayers)

    const staticImageToggles = document.querySelectorAll(".static-image-toggles .static-image");
    for (let toggle of staticImageToggles) {

        toggle.addEventListener("change", (e) => {
            const selectedStaticImage = e.target.value;
            let imageStaticLayer;

            staticImageGroupLayers.getLayers().forEach((element, i, array) => {
                let rasterLayerName = element.get('title')
                if (selectedStaticImage === rasterLayerName) {
                    imageStaticLayer = element
                }
            })

            e.target.checked ? imageStaticLayer.setVisible(true) : imageStaticLayer.setVisible(false)
        })
    }

}

window.onload = init