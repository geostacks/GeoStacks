(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[2408,4542],{52408:function(t,n,e){(function(t,n){true?n(e(91795)):0})(this,(function(t){"use strict";t.Icon.Default.mergeOptions({iconUrl:null,iconRetinaUrl:null,shadowUrl:null,iconSize:null,iconAnchor:null,popupAnchor:null,tooltipAnchor:null,shadowSize:null,classNamePrefix:"leaflet-default-icon-"});t.Icon.Default.include({_needsInit:true,_getIconUrl:function(n){var e=this.options.imagePath||t.Icon.Default.imagePath||"";if(this._needsInit){this._initializeOptions(e)}return e+t.Icon.prototype._getIconUrl.call(this,n)},_initializeOptions:function(t){this._setOptions("icon",n,t);this._setOptions("shadow",n,t);this._setOptions("popup",e);this._setOptions("tooltip",e);this._needsInit=false},_setOptions:function(t,n,e){var i=this.options,o=i.classNamePrefix,r=n(o+t,e);for(var l in r){i[t+l]=i[t+l]||r[l]}}});function n(n,e){var o=t.DomUtil.create("div",n,document.body),l=u(o),a=i(l,e),c=r(o,"width"),s=r(o,"height"),p=r(o,"margin-left"),h=r(o,"margin-top");o.parentNode.removeChild(o);return{Url:a[0],RetinaUrl:a[1],Size:[c,s],Anchor:[-p,-h]}}function e(n){var e=t.DomUtil.create("div",n,document.body),i=r(e,"margin-left"),o=r(e,"margin-top");e.parentNode.removeChild(e);return{Anchor:[i,o]}}function i(t,n){var e=/url\(['"]?([^"']*?)['"]?\)/gi,i=[],r=e.exec(t);while(r){i.push(n?o(r[1]):r[1]);r=e.exec(t)}return i}function o(t){return t.substr(t.lastIndexOf("/")+1)}function r(t,n){return parseInt(l(t,n),10)}function l(n,e){return t.DomUtil.getStyle(n,e)||t.DomUtil.getStyle(n,a(e))}function u(t){var n=l(t,"background-image");return n&&n!=="none"?n:l(t,"cursor")}function a(t){return t.replace(/-(\w)/g,(function(t,n){return n.toUpperCase()}))}}))}}]);
//# sourceMappingURL=2408.9cef3ccaee9d3276e61b.js.map?v=9cef3ccaee9d3276e61b