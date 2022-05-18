"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6253],{3890:function(e,t,n){var s=n(1376),r=n(5492),o=n(2010),a=n(4354),i=n(5975),c=n(9912),l=n(3384),p=n(9847),u=n(5673),m=n(2954),g=n(6923),E=n(2810),_=n(5421);l.Z.defs("EPSG:27700","+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs"),l.Z.defs("EPSG:23032","+proj=utm +zone=32 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs"),l.Z.defs("EPSG:5479","+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-78 +lon_0=163 +x_0=7000000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"),l.Z.defs("EPSG:21781","+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +units=m +no_defs"),l.Z.defs("EPSG:3413","+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"),l.Z.defs("EPSG:2163","+proj=laea +lat_0=45 +lon_0=-100 +x_0=0 +y_0=0 +a=6370997 +b=6370997 +units=m +no_defs"),l.Z.defs("ESRI:54009","+proj=moll +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"),(0,_.z)(l.Z);var d=(0,E.U2)("EPSG:27700");d.setExtent([-65e4,-15e4,135e4,145e4]),(0,E.U2)("EPSG:23032").setExtent([-1206118.71,4021309.92,1295389,8051813.28]),(0,E.U2)("EPSG:5479").setExtent([6825737.53,4189159.8,9633741.96,5782472.71]),(0,E.U2)("EPSG:21781").setExtent([485071.54,75346.36,828515.78,299941.84]),(0,E.U2)("EPSG:3413").setExtent([-4194304,-4194304,4194304,4194304]),(0,E.U2)("EPSG:2163").setExtent([-8040784.5135,-2577524.921,3668901.4484,4785105.1096]),(0,E.U2)("ESRI:54009").setExtent([-18e6,-9e6,18e6,9e6]);var w={};w.osm=new o.Z({source:new p.Z}),w.wms4326=new o.Z({source:new u.Z({url:"https://ahocevar.com/geoserver/wms",crossOrigin:"",params:{LAYERS:"ne:NE1_HR_LC_SR_W_DR",TILED:!0},projection:"EPSG:4326"})}),w.wms21781=new o.Z({source:new u.Z({attributions:'© <a href="https://shop.swisstopo.admin.ch/en/products/maps/national/lk1000"target="_blank">Pixelmap 1:1000000 / geo.admin.ch</a>',crossOrigin:"anonymous",params:{LAYERS:"ch.swisstopo.pixelkarte-farbe-pk1000.noscale",FORMAT:"image/jpeg"},url:"https://wms.geo.admin.ch/",projection:"EPSG:21781"})});var S=new c.Z;w.wmts3413=new o.Z;fetch("https://map1.vis.earthdata.nasa.gov/wmts-arctic/wmts.cgi?SERVICE=WMTS&request=GetCapabilities").then((function(e){return e.text()})).then((function(e){var t=S.read(e),n=(0,i.B)(t,{layer:"OSM_Land_Mask",matrixSet:"EPSG3413_250m"});n.crossOrigin="",n.projection="EPSG:3413",n.wrapX=!1,w.wmts3413.setSource(new i.Z(n))})),w.bng=new o.Z;fetch("https://tiles.arcgis.com/tiles/qHLhLQrcvEnxjtPr/arcgis/rest/services/OS_Open_Raster/MapServer/WMTS").then((function(e){return e.text()})).then((function(e){var t=S.read(e),n=(0,i.B)(t,{layer:"OS_Open_Raster"});n.attributions="Contains OS data © Crown Copyright and database right "+(new Date).getFullYear(),n.crossOrigin="",n.projection="EPSG:27700",n.wrapX=!1,w.bng.setSource(new i.Z(n))}));for(var f=(0,g.dz)((0,E.U2)("EPSG:3857").getExtent())/256,h=new Array(22),v=0,Z=h.length;v<Z;++v)h[v]=f/Math.pow(2,v);w.states=new o.Z({source:new u.Z({url:"https://ahocevar.com/geoserver/wms",crossOrigin:"",params:{LAYERS:"topp:states"},serverType:"geoserver",tileGrid:new r.Z({extent:[-13884991,2870341,-7455066,6338219],resolutions:h,tileSize:[512,256]}),projection:"EPSG:3857"})});var x=new s.Z({layers:[w.osm,w.bng],target:"map",view:new a.ZP({projection:"EPSG:3857",center:[0,0],zoom:2})}),y=document.getElementById("base-layer"),G=document.getElementById("overlay-layer"),P=document.getElementById("view-projection"),j=document.getElementById("render-edges"),b=!1;function R(){var e=(0,E.U2)(P.value),t=e.getExtent(),n=new a.ZP({projection:e,center:(0,g.qg)(t||[0,0,0,0]),zoom:0,extent:t||void 0});x.setView(n),e.isGlobal()?w.bng.setExtent((0,E.$A)(d.getExtent(),d,e,2)):w.bng.setExtent(void 0)}P.onchange=function(){R()},R();var O=function(e){if(e instanceof o.Z){var t=e.getSource();t instanceof m.Z&&t.setRenderReprojectionEdges(b)}};y.onchange=function(){var e=w[y.value];e&&(e.setOpacity(1),O(e),x.getLayers().setAt(0,e))},G.onchange=function(){var e=w[G.value];e&&(e.setOpacity(.7),O(e),x.getLayers().setAt(1,e))},j.onchange=function(){b=j.checked,x.getLayers().forEach((function(e){O(e)}))}}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(3890)}]);
//# sourceMappingURL=reprojection.js.map