const init = () => {
  //   Adding controls to the map
  const zoomSlider = new ol.control.ZoomSlider();
  const fullScreen = new ol.control.FullScreen({
    label: "\u2922",
    // className: "fullscreen",
    tipLabel: "Go full screen",
  });
  const overViewMap = new ol.control.OverviewMap({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    collapsed: false,
    collapsible: false,
  });

  const map = new ol.Map({
    view: new ol.View({
      center: [-12080385, 7567433],
      zoom: 2.5,
    }),

    // Raster Data (sattelite image [continuous data] - Tile Layer) or Vector Data (geometric data)
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
        zIndex: 1,
        extent: [
          12053782.838604888, -5922419.886529719, 17463074.528893463,
          -903267.2046907605,
        ],
        visible: true,
        opacity: 0.5,
      }),
    ],
    target: "map_app",
    keyboardEventTarget: document,
    controls: ol.control
      .defaults()
      .extend([fullScreen, zoomSlider, overViewMap]),
  });

  // Layer Group
  const layergroup = new ol.layer.Group({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({
          url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
          zIndex: 0,
          visible: true,
        }),
      }),
    ],
  });

  map.addLayer(layergroup);

  map.on("click", (e) => {
    console.log(e.coordinate);
  });
};

window.onload = init;
