"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4008],{5640:function(e,n,t){var r,o=t(1038),a=t(1376),c=t(5528),u=t(4354),i=t(9847),s=t(5783),h=t(2010),l=t(1372),w=new h.Z({source:new i.Z}),d=new s.Z({wrapX:!1}),f=new l.Z({source:d}),v=new a.Z({layers:[w,f],target:"map",view:new u.ZP({center:[-11e6,46e5],zoom:4})}),m=document.getElementById("type");function p(){var e,n=m.value;"None"!==n&&("Square"===n?(n="Circle",e=(0,o.N_)(4)):"Box"===n?(n="Circle",e=(0,o.dO)()):"Star"===n&&(n="Circle",e=function(e,n){for(var t=e[0],r=e[e.length-1],o=t[0]-r[0],a=t[1]-r[1],u=Math.sqrt(o*o+a*a),i=Math.atan2(a,o),s=[],h=0;h<12;++h){var l=i+2*h*Math.PI/12,w=h%2==0?1:.5,d=u*w*Math.cos(l),f=u*w*Math.sin(l);s.push([t[0]+d,t[1]+f])}return s.push(s[0].slice()),n?n.setCoordinates([s]):n=new c.ZP([s]),n}),r=new o.ZP({source:d,type:n,geometryFunction:e}),v.addInteraction(r))}m.onchange=function(){v.removeInteraction(r),p()},document.getElementById("undo").addEventListener("click",(function(){r.removeLastPoint()})),p()}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(5640)}]);
//# sourceMappingURL=draw-shapes.js.map