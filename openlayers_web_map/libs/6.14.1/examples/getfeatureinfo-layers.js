"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9159],{1135:function(e,t,r){var n=r(6581),o=r(2865),a=r(2275),u=r(7985),i=r(8082);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=p(e);if(t){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(y,e);var t,r,o,l=s(y);function y(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y);var r=e||{};return(t=l.call(this)).featureNS_="http://mapserver.gis.umn.edu/mapserver",t.gmlFormat_=new n.Z,t.layers_=r.layers?r.layers:null,t}return t=y,(r=[{key:"getLayers",value:function(){return this.layers_}},{key:"setLayers",value:function(e){this.layers_=e}},{key:"readFeatures_",value:function(e,t){e.setAttribute("namespaceURI",this.featureNS_);var r=e.localName,n=[];if(0===e.childNodes.length)return n;if("msGMLOutput"==r)for(var o=0,a=e.childNodes.length;o<a;o++){var l=e.childNodes[o];if(l.nodeType===Node.ELEMENT_NODE){var c=l,f=t[0],s=c.localName.replace("_layer","");if(!this.layers_||(0,u.q9)(this.layers_,s)){var y=s+"_feature";f.featureType=y,f.featureNS=this.featureNS_;var p={};p[y]=(0,i.Ei)(this.gmlFormat_.readFeatureElement,this.gmlFormat_);var h=(0,i.C5)([f.featureNS,null],p);c.setAttribute("namespaceURI",this.featureNS_);var m=(0,i.O)([],h,c,t,this.gmlFormat_);m&&(0,u.l7)(n,m)}}}if("FeatureCollection"==r){var d=(0,i.O)([],this.gmlFormat_.FEATURE_COLLECTION_PARSERS,e,[{}],this.gmlFormat_);d&&(n=d)}return n}},{key:"readFeaturesFromNode",value:function(e,t){var r={};return t&&(0,a.f0)(r,this.getReadOptions(e,t)),this.readFeatures_(e,[r])}}])&&c(t.prototype,r),o&&c(t,o),Object.defineProperty(t,"prototype",{writable:!1}),y}(o.Z);fetch("data/wmsgetfeatureinfo/osm-restaurant-hotel.xml").then((function(e){return e.text()})).then((function(e){var t=(new h).readFeatures(e);document.getElementById("all").innerText=t.length.toString();var r=new h({layers:["hotel"]}).readFeatures(e);document.getElementById("hotel").innerText=r.length.toString();var n=new h({layers:["restaurant"]}).readFeatures(e);document.getElementById("restaurant").innerText=n.length.toString()}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(1135)}]);
//# sourceMappingURL=getfeatureinfo-layers.js.map