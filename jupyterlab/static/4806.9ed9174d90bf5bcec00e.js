(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[4806,1751],{41751:(t,i,e)=>{var o,n,s;(function(r){var a,l;if(true){!(n=[e(91795),e(60445)],o=r,s=typeof o==="function"?o.apply(i,n):o,s!==undefined&&(t.exports=s))}else{}})((function(t,i){if(i.__esModule&&i.default){i=i.default}t.Proj={};t.Proj._isProj4Obj=function(t){return typeof t.inverse!=="undefined"&&typeof t.forward!=="undefined"};t.Proj.Projection=t.Class.extend({initialize:function(i,e,o){var n=t.Proj._isProj4Obj(i);this._proj=n?i:this._projFromCodeDef(i,e);this.bounds=n?e:o},project:function(i){var e=this._proj.forward([i.lng,i.lat]);return new t.Point(e[0],e[1])},unproject:function(i,e){var o=this._proj.inverse([i.x,i.y]);return new t.LatLng(o[1],o[0],e)},_projFromCodeDef:function(t,e){if(e){i.defs(t,e)}else if(i.defs[t]===undefined){var o=t.split(":");if(o.length>3){t=o[o.length-3]+":"+o[o.length-1]}if(i.defs[t]===undefined){throw"No projection definition for code "+t}}return i(t)}});t.Proj.CRS=t.Class.extend({includes:t.CRS,options:{transformation:new t.Transformation(1,0,-1,0)},initialize:function(i,e,o){var n,s,r,a;if(t.Proj._isProj4Obj(i)){s=i;n=s.srsCode;a=e||{};this.projection=new t.Proj.Projection(s,a.bounds)}else{n=i;r=e;a=o||{};this.projection=new t.Proj.Projection(n,r,a.bounds)}t.Util.setOptions(this,a);this.code=n;this.transformation=this.options.transformation;if(this.options.origin){this.transformation=new t.Transformation(1,-this.options.origin[0],-1,this.options.origin[1])}if(this.options.scales){this._scales=this.options.scales}else if(this.options.resolutions){this._scales=[];for(var l=this.options.resolutions.length-1;l>=0;l--){if(this.options.resolutions[l]){this._scales[l]=1/this.options.resolutions[l]}}}this.infinite=!this.options.bounds},scale:function(t){var i=Math.floor(t),e,o,n,s;if(t===i){return this._scales[t]}else{e=this._scales[i];o=this._scales[i+1];n=o-e;s=t-i;return e+n*s}},zoom:function(t){var i=this._closestElement(this._scales,t),e=this._scales.indexOf(i),o,n,s;if(t===i){return e}if(i===undefined){return-Infinity}n=e+1;o=this._scales[n];if(o===undefined){return Infinity}s=o-i;return(t-i)/s+e},distance:t.CRS.Earth.distance,R:t.CRS.Earth.R,_closestElement:function(t,i){var e;for(var o=t.length;o--;){if(t[o]<=i&&(e===undefined||e<t[o])){e=t[o]}}return e}});t.Proj.GeoJSON=t.GeoJSON.extend({initialize:function(i,e){this._callLevel=0;t.GeoJSON.prototype.initialize.call(this,i,e)},addData:function(i){var e;if(i){if(i.crs&&i.crs.type==="name"){e=new t.Proj.CRS(i.crs.properties.name)}else if(i.crs&&i.crs.type){e=new t.Proj.CRS(i.crs.type+":"+i.crs.properties.code)}if(e!==undefined){this.options.coordsToLatLng=function(i){var o=t.point(i[0],i[1]);return e.projection.unproject(o)}}}this._callLevel++;try{t.GeoJSON.prototype.addData.call(this,i)}finally{this._callLevel--;if(this._callLevel===0){delete this.options.coordsToLatLng}}}});t.Proj.geoJson=function(i,e){return new t.Proj.GeoJSON(i,e)};t.Proj.ImageOverlay=t.ImageOverlay.extend({initialize:function(i,e,o){t.ImageOverlay.prototype.initialize.call(this,i,null,o);this._projectedBounds=e},_animateZoom:function(i){var e=this._map.getZoomScale(i.zoom);var o=t.point(this._projectedBounds.min.x,this._projectedBounds.max.y);var n=this._projectedToNewLayerPoint(o,i.zoom,i.center);t.DomUtil.setTransform(this._image,n,e)},_reset:function(){var i=this._map.getZoom();var e=this._map.getPixelOrigin();var o=t.bounds(this._transform(this._projectedBounds.min,i)._subtract(e),this._transform(this._projectedBounds.max,i)._subtract(e));var n=o.getSize();t.DomUtil.setPosition(this._image,o.min);this._image.style.width=n.x+"px";this._image.style.height=n.y+"px"},_projectedToNewLayerPoint:function(t,i,e){var o=this._map.getSize()._divideBy(2);var n=this._map.project(e,i)._subtract(o)._round();var s=n.add(this._map._getMapPanePos());return this._transform(t,i)._subtract(s)},_transform:function(t,i){var e=this._map.options.crs;var o=e.transformation;var n=e.scale(i);return o.transform(t,n)}});t.Proj.imageOverlay=function(i,e,o){return new t.Proj.ImageOverlay(i,e,o)};return t.Proj}))}}]);
//# sourceMappingURL=4806.9ed9174d90bf5bcec00e.js.map?v=9ed9174d90bf5bcec00e