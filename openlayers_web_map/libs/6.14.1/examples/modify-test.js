"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8262],{3425:function(e,t,o){var n,r,i=o(1118),l=o(1376),y=o(1372),a=o(5783),u=o(4354),w=o(7138),c=o(720),g=o(9039),s=o(7975),Z=o(2110),P=o(4498),d=o(2174),p=(n={},r=new w.Z({radius:5,fill:null,stroke:new c.Z({color:"orange",width:2})}),n.Point=new g.ZP({image:r}),n.Polygon=new g.ZP({stroke:new c.Z({color:"blue",width:3}),fill:new s.Z({color:"rgba(0, 0, 255, 0.1)"})}),n.MultiLineString=new g.ZP({stroke:new c.Z({color:"green",width:3})}),n.MultiPolygon=new g.ZP({stroke:new c.Z({color:"yellow",width:1}),fill:new s.Z({color:"rgba(255, 255, 0, 0.1)"})}),n.default=new g.ZP({stroke:new c.Z({color:"red",width:3}),fill:new s.Z({color:"rgba(255, 0, 0, 0.1)"}),image:r}),function(e){return n[e.getGeometry().getType()]||n.default}),m=new a.Z({features:(new i.Z).readFeatures({type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]}},{type:"Feature",geometry:{type:"MultiPoint",coordinates:[[-2e6,0],[0,-2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6],[9e6,2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6],[8e6,3e6]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,-1e6],[-4e6,1e6],[-3e6,-1e6],[-5e6,-1e6]],[[-45e5,-5e5],[-35e5,-5e5],[-4e6,5e5],[-45e5,-5e5]]]}},{type:"Feature",geometry:{type:"MultiLineString",coordinates:[[[-1e6,-75e4],[-1e6,75e4]],[[-1e6,-75e4],[-1e6,75e4],[-5e5,0],[-1e6,-75e4]],[[1e6,-75e4],[15e5,0],[15e5,0],[1e6,75e4]],[[-75e4,-1e6],[75e4,-1e6]],[[-75e4,1e6],[75e4,1e6]]]}},{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[-5e6,6e6],[-5e6,8e6],[-3e6,8e6],[-3e6,6e6],[-5e6,6e6]]],[[[-3e6,6e6],[-2e6,8e6],[0,8e6],[0,6e6],[-3e6,6e6]]],[[[1e6,6e6],[1e6,8e6],[3e6,8e6],[3e6,6e6],[1e6,6e6]]]]}},{type:"Feature",geometry:{type:"GeometryCollection",geometries:[{type:"LineString",coordinates:[[-5e6,-5e6],[0,-5e6]]},{type:"Point",coordinates:[4e6,-5e6]},{type:"Polygon",coordinates:[[[1e6,-5e6],[2e6,-35e5],[3e6,-5e6],[1e6,-5e6]]]},{type:"Polygon",coordinates:[[[1e6,-5e6],[2e6,-65e5],[3e6,-5e6],[1e6,-5e6]]]}]}}]})}),f=new y.Z({source:m,style:p}),h=function(){var e={};return e.Polygon=[new g.ZP({fill:new s.Z({color:[255,255,255,.5]})}),new g.ZP({stroke:new c.Z({color:[255,255,255,1],width:5})}),new g.ZP({stroke:new c.Z({color:[0,153,255,1],width:3})})],e.MultiPolygon=e.Polygon,e.LineString=[new g.ZP({stroke:new c.Z({color:[255,255,255,1],width:5})}),new g.ZP({stroke:new c.Z({color:[0,153,255,1],width:3})})],e.MultiLineString=e.LineString,e.Point=[new g.ZP({image:new w.Z({radius:7,fill:new s.Z({color:[0,153,255,1]}),stroke:new c.Z({color:[255,255,255,.75],width:1.5})}),zIndex:1e5})],e.MultiPoint=e.Point,e.GeometryCollection=e.Polygon.concat(e.Point),function(t){return e[t.getGeometry().getType()]}}(),k=new Z.Z({style:h}),F=new P.Z({features:k.getFeatures(),style:h,insertVertexCondition:function(){return!k.getFeatures().getArray().every((function(e){return e.getGeometry().getType().match(/Polygon/)}))}});new l.Z({interactions:(0,d.ce)().extend([k,F]),layers:[f],target:"map",view:new u.ZP({center:[0,1e6],zoom:2,multiWorld:!0})})}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(3425)}]);
//# sourceMappingURL=modify-test.js.map