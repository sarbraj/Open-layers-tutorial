"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9534],{4247:function(e,n,r){var t=r(934),a=r(1376),o=r(2139),u=r(4354);function l(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return i(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){l=!0,o=e},f:function(){try{u||null==r.return||r.return()}finally{if(l)throw o}}}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}for(var c=["red","green","blue"],s=0,f=c;s<f.length;s++){var d=f[s];document.getElementById(d).addEventListener("change",m),document.getElementById("".concat(d,"Max")).addEventListener("input",m)}function v(){var e,n={},r=l(c);try{for(r.s();!(e=r.n()).done;){var t=e.value,a=document.getElementById(t);n[t]=parseInt(a.value,10);var o="".concat(t,"Max"),u=document.getElementById(o);n[o]=parseInt(u.value,10)}}catch(e){r.e(e)}finally{r.f()}return n}var y=new o.Z({style:{variables:v(),color:["array",["/",["band",["var","red"]],["var","redMax"]],["/",["band",["var","green"]],["var","greenMax"]],["/",["band",["var","blue"]],["var","blueMax"]],1]},source:new t.Z({normalize:!1,sources:[{url:"https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"}]})});function m(){y.updateStyleVariables(v())}new a.Z({target:"map",layers:[y],view:new u.ZP({projection:"EPSG:4326",center:[0,0],zoom:2,maxZoom:6})})}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(4247)}]);
//# sourceMappingURL=cog-stretch.js.map