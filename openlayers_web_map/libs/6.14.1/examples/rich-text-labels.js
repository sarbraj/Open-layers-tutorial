"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4157],{4350:function(e,t,n){var r=n(1118),o=n(1376),s=n(1372),a=n(5783),i=n(4354),l=n(9039),c=n(729),w=n(7975),f=n(720),u=new o.Z({target:"map",view:new i.ZP({center:[0,0],zoom:2,extent:[-13882269,2890586,-7456136,6340207],showFullExtent:!0})}),Z=new l.ZP({text:new c.Z({font:"13px Calibri,sans-serif",fill:new w.Z({color:"#000"}),stroke:new f.Z({color:"#fff",width:4})})}),p=[new l.ZP({fill:new w.Z({color:"rgba(255, 255, 255, 0.6)"}),stroke:new f.Z({color:"#319FD3",width:1})}),Z],d=new s.Z({background:"white",source:new a.Z({url:"https://openlayers.org/data/vector/us-states.json",format:new r.Z}),style:function(e){return Z.getText().setText([e.getId(),"bold 13px Calibri,sans-serif"," ".concat(e.get("name")),"","\n","","".concat(e.get("density")," people/mi²"),"italic 11px Calibri,sans-serif"]),p}});u.addLayer(d)}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(4350)}]);
//# sourceMappingURL=rich-text-labels.js.map