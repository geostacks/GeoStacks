(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[5732],{95732:function(e,t){(function(e,i){true?i(t):0})(this,(function(e){"use strict";var t=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnMaxZoom:true,showCoverageOnHover:true,zoomToBoundsOnClick:true,singleMarkerMode:false,disableClusteringAtZoom:null,removeOutsideVisibleBounds:true,animate:true,animateAddingMarkers:false,spiderfyShapePositions:null,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:false,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(e){L.Util.setOptions(this,e);if(!this.options.iconCreateFunction){this.options.iconCreateFunction=this._defaultIconCreateFunction}this._featureGroup=L.featureGroup();this._featureGroup.addEventParent(this);this._nonPointGroup=L.featureGroup();this._nonPointGroup.addEventParent(this);this._inZoomAnimation=0;this._needsClustering=[];this._needsRemoving=[];this._currentShownBounds=null;this._queue=[];this._childMarkerEventHandlers={dragstart:this._childMarkerDragStart,move:this._childMarkerMoved,dragend:this._childMarkerDragEnd};var t=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,t?this._withAnimation:this._noAnimation);this._markerCluster=t?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(e){if(e instanceof L.LayerGroup){return this.addLayers([e])}if(!e.getLatLng){this._nonPointGroup.addLayer(e);this.fire("layeradd",{layer:e});return this}if(!this._map){this._needsClustering.push(e);this.fire("layeradd",{layer:e});return this}if(this.hasLayer(e)){return this}if(this._unspiderfy){this._unspiderfy()}this._addLayer(e,this._maxZoom);this.fire("layeradd",{layer:e});this._topClusterLevel._recalculateBounds();this._refreshClustersIcons();var t=e,i=this._zoom;if(e.__parent){while(t.__parent._zoom>=i){t=t.__parent}}if(this._currentShownBounds.contains(t.getLatLng())){if(this.options.animateAddingMarkers){this._animationAddLayer(e,t)}else{this._animationAddLayerNonAnimated(e,t)}}return this},removeLayer:function(e){if(e instanceof L.LayerGroup){return this.removeLayers([e])}if(!e.getLatLng){this._nonPointGroup.removeLayer(e);this.fire("layerremove",{layer:e});return this}if(!this._map){if(!this._arraySplice(this._needsClustering,e)&&this.hasLayer(e)){this._needsRemoving.push({layer:e,latlng:e._latlng})}this.fire("layerremove",{layer:e});return this}if(!e.__parent){return this}if(this._unspiderfy){this._unspiderfy();this._unspiderfyLayer(e)}this._removeLayer(e,true);this.fire("layerremove",{layer:e});this._topClusterLevel._recalculateBounds();this._refreshClustersIcons();e.off(this._childMarkerEventHandlers,this);if(this._featureGroup.hasLayer(e)){this._featureGroup.removeLayer(e);if(e.clusterShow){e.clusterShow()}}return this},addLayers:function(e,t){if(!L.Util.isArray(e)){return this.addLayer(e)}var i=this._featureGroup,n=this._nonPointGroup,r=this.options.chunkedLoading,s=this.options.chunkInterval,o=this.options.chunkProgress,a=e.length,l=0,h=true,u;if(this._map){var _=(new Date).getTime();var d=L.bind((function(){var f=(new Date).getTime();if(this._map&&this._unspiderfy){this._unspiderfy()}for(;l<a;l++){if(r&&l%200===0){var c=(new Date).getTime()-f;if(c>s){break}}u=e[l];if(u instanceof L.LayerGroup){if(h){e=e.slice();h=false}this._extractNonGroupLayers(u,e);a=e.length;continue}if(!u.getLatLng){n.addLayer(u);if(!t){this.fire("layeradd",{layer:u})}continue}if(this.hasLayer(u)){continue}this._addLayer(u,this._maxZoom);if(!t){this.fire("layeradd",{layer:u})}if(u.__parent){if(u.__parent.getChildCount()===2){var p=u.__parent.getAllChildMarkers(),m=p[0]===u?p[1]:p[0];i.removeLayer(m)}}}if(o){o(l,a,(new Date).getTime()-_)}if(l===a){this._topClusterLevel._recalculateBounds();this._refreshClustersIcons();this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)}else{setTimeout(d,this.options.chunkDelay)}}),this);d()}else{var f=this._needsClustering;for(;l<a;l++){u=e[l];if(u instanceof L.LayerGroup){if(h){e=e.slice();h=false}this._extractNonGroupLayers(u,e);a=e.length;continue}if(!u.getLatLng){n.addLayer(u);continue}if(this.hasLayer(u)){continue}f.push(u)}}return this},removeLayers:function(e){var t,i,n=e.length,r=this._featureGroup,s=this._nonPointGroup,o=true;if(!this._map){for(t=0;t<n;t++){i=e[t];if(i instanceof L.LayerGroup){if(o){e=e.slice();o=false}this._extractNonGroupLayers(i,e);n=e.length;continue}this._arraySplice(this._needsClustering,i);s.removeLayer(i);if(this.hasLayer(i)){this._needsRemoving.push({layer:i,latlng:i._latlng})}this.fire("layerremove",{layer:i})}return this}if(this._unspiderfy){this._unspiderfy();var a=e.slice(),l=n;for(t=0;t<l;t++){i=a[t];if(i instanceof L.LayerGroup){this._extractNonGroupLayers(i,a);l=a.length;continue}this._unspiderfyLayer(i)}}for(t=0;t<n;t++){i=e[t];if(i instanceof L.LayerGroup){if(o){e=e.slice();o=false}this._extractNonGroupLayers(i,e);n=e.length;continue}if(!i.__parent){s.removeLayer(i);this.fire("layerremove",{layer:i});continue}this._removeLayer(i,true,true);this.fire("layerremove",{layer:i});if(r.hasLayer(i)){r.removeLayer(i);if(i.clusterShow){i.clusterShow()}}}this._topClusterLevel._recalculateBounds();this._refreshClustersIcons();this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds);return this},clearLayers:function(){if(!this._map){this._needsClustering=[];this._needsRemoving=[];delete this._gridClusters;delete this._gridUnclustered}if(this._noanimationUnspiderfy){this._noanimationUnspiderfy()}this._featureGroup.clearLayers();this._nonPointGroup.clearLayers();this.eachLayer((function(e){e.off(this._childMarkerEventHandlers,this);delete e.__parent}),this);if(this._map){this._generateInitialClusters()}return this},getBounds:function(){var e=new L.LatLngBounds;if(this._topClusterLevel){e.extend(this._topClusterLevel._bounds)}for(var t=this._needsClustering.length-1;t>=0;t--){e.extend(this._needsClustering[t].getLatLng())}e.extend(this._nonPointGroup.getBounds());return e},eachLayer:function(e,t){var i=this._needsClustering.slice(),n=this._needsRemoving,r,s,o;if(this._topClusterLevel){this._topClusterLevel.getAllChildMarkers(i)}for(s=i.length-1;s>=0;s--){r=true;for(o=n.length-1;o>=0;o--){if(n[o].layer===i[s]){r=false;break}}if(r){e.call(t,i[s])}}this._nonPointGroup.eachLayer(e,t)},getLayers:function(){var e=[];this.eachLayer((function(t){e.push(t)}));return e},getLayer:function(e){var t=null;e=parseInt(e,10);this.eachLayer((function(i){if(L.stamp(i)===e){t=i}}));return t},hasLayer:function(e){if(!e){return false}var t,i=this._needsClustering;for(t=i.length-1;t>=0;t--){if(i[t]===e){return true}}i=this._needsRemoving;for(t=i.length-1;t>=0;t--){if(i[t].layer===e){return false}}return!!(e.__parent&&e.__parent._group===this)||this._nonPointGroup.hasLayer(e)},zoomToShowLayer:function(e,t){var i=this._map;if(typeof t!=="function"){t=function(){}}var n=function(){if((i.hasLayer(e)||i.hasLayer(e.__parent))&&!this._inZoomAnimation){this._map.off("moveend",n,this);this.off("animationend",n,this);if(i.hasLayer(e)){t()}else if(e.__parent._icon){this.once("spiderfied",t,this);e.__parent.spiderfy()}}};if(e._icon&&this._map.getBounds().contains(e.getLatLng())){t()}else if(e.__parent._zoom<Math.round(this._map._zoom)){this._map.on("moveend",n,this);this._map.panTo(e.getLatLng())}else{this._map.on("moveend",n,this);this.on("animationend",n,this);e.__parent.zoomToBounds()}},onAdd:function(e){this._map=e;var t,i,n;if(!isFinite(this._map.getMaxZoom())){throw"Map has no maxZoom specified"}this._featureGroup.addTo(e);this._nonPointGroup.addTo(e);if(!this._gridClusters){this._generateInitialClusters()}this._maxLat=e.options.crs.projection.MAX_LATITUDE;for(t=0,i=this._needsRemoving.length;t<i;t++){n=this._needsRemoving[t];n.newlatlng=n.layer._latlng;n.layer._latlng=n.latlng}for(t=0,i=this._needsRemoving.length;t<i;t++){n=this._needsRemoving[t];this._removeLayer(n.layer,true);n.layer._latlng=n.newlatlng}this._needsRemoving=[];this._zoom=Math.round(this._map._zoom);this._currentShownBounds=this._getExpandedVisibleBounds();this._map.on("zoomend",this._zoomEnd,this);this._map.on("moveend",this._moveEnd,this);if(this._spiderfierOnAdd){this._spiderfierOnAdd()}this._bindEvents();i=this._needsClustering;this._needsClustering=[];this.addLayers(i,true)},onRemove:function(e){e.off("zoomend",this._zoomEnd,this);e.off("moveend",this._moveEnd,this);this._unbindEvents();this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","");if(this._spiderfierOnRemove){this._spiderfierOnRemove()}delete this._maxLat;this._hideCoverage();this._featureGroup.remove();this._nonPointGroup.remove();this._featureGroup.clearLayers();this._map=null},getVisibleParent:function(e){var t=e;while(t&&!t._icon){t=t.__parent}return t||null},_arraySplice:function(e,t){for(var i=e.length-1;i>=0;i--){if(e[i]===t){e.splice(i,1);return true}}},_removeFromGridUnclustered:function(e,t){var i=this._map,n=this._gridUnclustered,r=Math.floor(this._map.getMinZoom());for(;t>=r;t--){if(!n[t].removeObject(e,i.project(e.getLatLng(),t))){break}}},_childMarkerDragStart:function(e){e.target.__dragStart=e.target._latlng},_childMarkerMoved:function(e){if(!this._ignoreMove&&!e.target.__dragStart){var t=e.target._popup&&e.target._popup.isOpen();this._moveChild(e.target,e.oldLatLng,e.latlng);if(t){e.target.openPopup()}}},_moveChild:function(e,t,i){e._latlng=t;this.removeLayer(e);e._latlng=i;this.addLayer(e)},_childMarkerDragEnd:function(e){var t=e.target.__dragStart;delete e.target.__dragStart;if(t){this._moveChild(e.target,t,e.target._latlng)}},_removeLayer:function(e,t,i){var n=this._gridClusters,r=this._gridUnclustered,s=this._featureGroup,o=this._map,a=Math.floor(this._map.getMinZoom());if(t){this._removeFromGridUnclustered(e,this._maxZoom)}var l=e.__parent,h=l._markers,u;this._arraySplice(h,e);while(l){l._childCount--;l._boundsNeedUpdate=true;if(l._zoom<a){break}else if(t&&l._childCount<=1){u=l._markers[0]===e?l._markers[1]:l._markers[0];n[l._zoom].removeObject(l,o.project(l._cLatLng,l._zoom));r[l._zoom].addObject(u,o.project(u.getLatLng(),l._zoom));this._arraySplice(l.__parent._childClusters,l);l.__parent._markers.push(u);u.__parent=l.__parent;if(l._icon){s.removeLayer(l);if(!i){s.addLayer(u)}}}else{l._iconNeedsUpdate=true}l=l.__parent}delete e.__parent},_isOrIsParent:function(e,t){while(t){if(e===t){return true}t=t.parentNode}return false},fire:function(e,t,i){if(t&&t.layer instanceof L.MarkerCluster){if(t.originalEvent&&this._isOrIsParent(t.layer._icon,t.originalEvent.relatedTarget)){return}e="cluster"+e}L.FeatureGroup.prototype.fire.call(this,e,t,i)},listens:function(e,t){return L.FeatureGroup.prototype.listens.call(this,e,t)||L.FeatureGroup.prototype.listens.call(this,"cluster"+e,t)},_defaultIconCreateFunction:function(e){var t=e.getChildCount();var i=" marker-cluster-";if(t<10){i+="small"}else if(t<100){i+="medium"}else{i+="large"}return new L.DivIcon({html:"<div><span>"+t+"</span></div>",className:"marker-cluster"+i,iconSize:new L.Point(40,40)})},_bindEvents:function(){var e=this._map,t=this.options.spiderfyOnMaxZoom,i=this.options.showCoverageOnHover,n=this.options.zoomToBoundsOnClick;if(t||n){this.on("clusterclick",this._zoomOrSpiderfy,this)}if(i){this.on("clustermouseover",this._showCoverage,this);this.on("clustermouseout",this._hideCoverage,this);e.on("zoomend",this._hideCoverage,this)}},_zoomOrSpiderfy:function(e){var t=e.layer,i=t;while(i._childClusters.length===1){i=i._childClusters[0]}if(i._zoom===this._maxZoom&&i._childCount===t._childCount&&this.options.spiderfyOnMaxZoom){t.spiderfy()}else if(this.options.zoomToBoundsOnClick){t.zoomToBounds()}if(e.originalEvent&&e.originalEvent.keyCode===13){this._map._container.focus()}},_showCoverage:function(e){var t=this._map;if(this._inZoomAnimation){return}if(this._shownPolygon){t.removeLayer(this._shownPolygon)}if(e.layer.getChildCount()>2&&e.layer!==this._spiderfied){this._shownPolygon=new L.Polygon(e.layer.getConvexHull(),this.options.polygonOptions);t.addLayer(this._shownPolygon)}},_hideCoverage:function(){if(this._shownPolygon){this._map.removeLayer(this._shownPolygon);this._shownPolygon=null}},_unbindEvents:function(){var e=this.options.spiderfyOnMaxZoom,t=this.options.showCoverageOnHover,i=this.options.zoomToBoundsOnClick,n=this._map;if(e||i){this.off("clusterclick",this._zoomOrSpiderfy,this)}if(t){this.off("clustermouseover",this._showCoverage,this);this.off("clustermouseout",this._hideCoverage,this);n.off("zoomend",this._hideCoverage,this)}},_zoomEnd:function(){if(!this._map){return}this._mergeSplitClusters();this._zoom=Math.round(this._map._zoom);this._currentShownBounds=this._getExpandedVisibleBounds()},_moveEnd:function(){if(this._inZoomAnimation){return}var e=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,e);this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),e);this._currentShownBounds=e;return},_generateInitialClusters:function(){var e=Math.ceil(this._map.getMaxZoom()),t=Math.floor(this._map.getMinZoom()),i=this.options.maxClusterRadius,n=i;if(typeof i!=="function"){n=function(){return i}}if(this.options.disableClusteringAtZoom!==null){e=this.options.disableClusteringAtZoom-1}this._maxZoom=e;this._gridClusters={};this._gridUnclustered={};for(var r=e;r>=t;r--){this._gridClusters[r]=new L.DistanceGrid(n(r));this._gridUnclustered[r]=new L.DistanceGrid(n(r))}this._topClusterLevel=new this._markerCluster(this,t-1)},_addLayer:function(e,t){var i=this._gridClusters,n=this._gridUnclustered,r=Math.floor(this._map.getMinZoom()),s,o;if(this.options.singleMarkerMode){this._overrideMarkerIcon(e)}e.on(this._childMarkerEventHandlers,this);for(;t>=r;t--){s=this._map.project(e.getLatLng(),t);var a=i[t].getNearObject(s);if(a){a._addChild(e);e.__parent=a;return}a=n[t].getNearObject(s);if(a){var l=a.__parent;if(l){this._removeLayer(a,false)}var h=new this._markerCluster(this,t,a,e);i[t].addObject(h,this._map.project(h._cLatLng,t));a.__parent=h;e.__parent=h;var u=h;for(o=t-1;o>l._zoom;o--){u=new this._markerCluster(this,o,u);i[o].addObject(u,this._map.project(a.getLatLng(),o))}l._addChild(u);this._removeFromGridUnclustered(a,t);return}n[t].addObject(e,s)}this._topClusterLevel._addChild(e);e.__parent=this._topClusterLevel;return},_refreshClustersIcons:function(){this._featureGroup.eachLayer((function(e){if(e instanceof L.MarkerCluster&&e._iconNeedsUpdate){e._updateIcon()}}))},_enqueue:function(e){this._queue.push(e);if(!this._queueTimeout){this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300)}},_processQueue:function(){for(var e=0;e<this._queue.length;e++){this._queue[e].call(this)}this._queue.length=0;clearTimeout(this._queueTimeout);this._queueTimeout=null},_mergeSplitClusters:function(){var e=Math.round(this._map._zoom);this._processQueue();if(this._zoom<e&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())){this._animationStart();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds());this._animationZoomIn(this._zoom,e)}else if(this._zoom>e){this._animationStart();this._animationZoomOut(this._zoom,e)}else{this._moveEnd()}},_getExpandedVisibleBounds:function(){if(!this.options.removeOutsideVisibleBounds){return this._mapBoundsInfinite}else if(L.Browser.mobile){return this._checkBoundsMaxLat(this._map.getBounds())}return this._checkBoundsMaxLat(this._map.getBounds().pad(1))},_checkBoundsMaxLat:function(e){var t=this._maxLat;if(t!==undefined){if(e.getNorth()>=t){e._northEast.lat=Infinity}if(e.getSouth()<=-t){e._southWest.lat=-Infinity}}return e},_animationAddLayerNonAnimated:function(e,t){if(t===e){this._featureGroup.addLayer(e)}else if(t._childCount===2){t._addToMap();var i=t.getAllChildMarkers();this._featureGroup.removeLayer(i[0]);this._featureGroup.removeLayer(i[1])}else{t._updateIcon()}},_extractNonGroupLayers:function(e,t){var i=e.getLayers(),n=0,r;t=t||[];for(;n<i.length;n++){r=i[n];if(r instanceof L.LayerGroup){this._extractNonGroupLayers(r,t);continue}t.push(r)}return t},_overrideMarkerIcon:function(e){var t=e.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[e]}});return t}});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-Infinity,-Infinity),new L.LatLng(Infinity,Infinity))});L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),e);this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds());this.fire("animationend")},_animationZoomOut:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),e);this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds());this.fire("animationend")},_animationAddLayer:function(e,t){this._animationAddLayerNonAnimated(e,t)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim";this._inZoomAnimation++},_animationZoomIn:function(e,t){var i=this._getExpandedVisibleBounds(),n=this._featureGroup,r=Math.floor(this._map.getMinZoom()),s;this._ignoreMove=true;this._topClusterLevel._recursively(i,e,r,(function(r){var o=r._latlng,a=r._markers,l;if(!i.contains(o)){o=null}if(r._isSingleParent()&&e+1===t){n.removeLayer(r);r._recursivelyAddChildrenToMap(null,t,i)}else{r.clusterHide();r._recursivelyAddChildrenToMap(o,t,i)}for(s=a.length-1;s>=0;s--){l=a[s];if(!i.contains(l._latlng)){n.removeLayer(l)}}}));this._forceLayout();this._topClusterLevel._recursivelyBecomeVisible(i,t);n.eachLayer((function(e){if(!(e instanceof L.MarkerCluster)&&e._icon){e.clusterShow()}}));this._topClusterLevel._recursively(i,e,t,(function(e){e._recursivelyRestoreChildPositions(t)}));this._ignoreMove=false;this._enqueue((function(){this._topClusterLevel._recursively(i,e,r,(function(e){n.removeLayer(e);e.clusterShow()}));this._animationEnd()}))},_animationZoomOut:function(e,t){this._animationZoomOutSingle(this._topClusterLevel,e-1,t);this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds());this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),e,this._getExpandedVisibleBounds())},_animationAddLayer:function(e,t){var i=this,n=this._featureGroup;n.addLayer(e);if(t!==e){if(t._childCount>2){t._updateIcon();this._forceLayout();this._animationStart();e._setPos(this._map.latLngToLayerPoint(t.getLatLng()));e.clusterHide();this._enqueue((function(){n.removeLayer(e);e.clusterShow();i._animationEnd()}))}else{this._forceLayout();i._animationStart();i._animationZoomOutSingle(t,this._map.getMaxZoom(),this._zoom)}}}},_animationZoomOutSingle:function(e,t,i){var n=this._getExpandedVisibleBounds(),r=Math.floor(this._map.getMinZoom());e._recursivelyAnimateChildrenInAndAddSelfToMap(n,r,t+1,i);var s=this;this._forceLayout();e._recursivelyBecomeVisible(n,i);this._enqueue((function(){if(e._childCount===1){var o=e._markers[0];this._ignoreMove=true;o.setLatLng(o.getLatLng());this._ignoreMove=false;if(o.clusterShow){o.clusterShow()}}else{e._recursively(n,i,r,(function(e){e._recursivelyRemoveChildrenFromMap(n,r,t+1)}))}s._animationEnd()}))},_animationEnd:function(){if(this._map){this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")}this._inZoomAnimation--;this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth)}});L.markerClusterGroup=function(e){return new L.MarkerClusterGroup(e)};var i=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:function(e,t,i,n){L.Marker.prototype.initialize.call(this,i?i._cLatLng||i.getLatLng():new L.LatLng(0,0),{icon:this,pane:e.options.clusterPane});this._group=e;this._zoom=t;this._markers=[];this._childClusters=[];this._childCount=0;this._iconNeedsUpdate=true;this._boundsNeedUpdate=true;this._bounds=new L.LatLngBounds;if(i){this._addChild(i)}if(n){this._addChild(n)}},getAllChildMarkers:function(e,t){e=e||[];for(var i=this._childClusters.length-1;i>=0;i--){this._childClusters[i].getAllChildMarkers(e)}for(var n=this._markers.length-1;n>=0;n--){if(t&&this._markers[n].__dragStart){continue}e.push(this._markers[n])}return e},getChildCount:function(){return this._childCount},zoomToBounds:function(e){var t=this._childClusters.slice(),i=this._group._map,n=i.getBoundsZoom(this._bounds),r=this._zoom+1,s=i.getZoom(),o;while(t.length>0&&n>r){r++;var a=[];for(o=0;o<t.length;o++){a=a.concat(t[o]._childClusters)}t=a}if(n>r){this._group._map.setView(this._latlng,r)}else if(n<=s){this._group._map.setView(this._latlng,s+1)}else{this._group._map.fitBounds(this._bounds,e)}},getBounds:function(){var e=new L.LatLngBounds;e.extend(this._bounds);return e},_updateIcon:function(){this._iconNeedsUpdate=true;if(this._icon){this.setIcon(this)}},createIcon:function(){if(this._iconNeedsUpdate){this._iconObj=this._group.options.iconCreateFunction(this);this._iconNeedsUpdate=false}return this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(e,t){this._iconNeedsUpdate=true;this._boundsNeedUpdate=true;this._setClusterCenter(e);if(e instanceof L.MarkerCluster){if(!t){this._childClusters.push(e);e.__parent=this}this._childCount+=e._childCount}else{if(!t){this._markers.push(e)}this._childCount++}if(this.__parent){this.__parent._addChild(e,true)}},_setClusterCenter:function(e){if(!this._cLatLng){this._cLatLng=e._cLatLng||e._latlng}},_resetBounds:function(){var e=this._bounds;if(e._southWest){e._southWest.lat=Infinity;e._southWest.lng=Infinity}if(e._northEast){e._northEast.lat=-Infinity;e._northEast.lng=-Infinity}},_recalculateBounds:function(){var e=this._markers,t=this._childClusters,i=0,n=0,r=this._childCount,s,o,a,l;if(r===0){return}this._resetBounds();for(s=0;s<e.length;s++){a=e[s]._latlng;this._bounds.extend(a);i+=a.lat;n+=a.lng}for(s=0;s<t.length;s++){o=t[s];if(o._boundsNeedUpdate){o._recalculateBounds()}this._bounds.extend(o._bounds);a=o._wLatLng;l=o._childCount;i+=a.lat*l;n+=a.lng*l}this._latlng=this._wLatLng=new L.LatLng(i/r,n/r);this._boundsNeedUpdate=false},_addToMap:function(e){if(e){this._backupLatlng=this._latlng;this.setLatLng(e)}this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(e,t,i){this._recursively(e,this._group._map.getMinZoom(),i-1,(function(e){var i=e._markers,n,r;for(n=i.length-1;n>=0;n--){r=i[n];if(r._icon){r._setPos(t);r.clusterHide()}}}),(function(e){var i=e._childClusters,n,r;for(n=i.length-1;n>=0;n--){r=i[n];if(r._icon){r._setPos(t);r.clusterHide()}}}))},_recursivelyAnimateChildrenInAndAddSelfToMap:function(e,t,i,n){this._recursively(e,n,t,(function(r){r._recursivelyAnimateChildrenIn(e,r._group._map.latLngToLayerPoint(r.getLatLng()).round(),i);if(r._isSingleParent()&&i-1===n){r.clusterShow();r._recursivelyRemoveChildrenFromMap(e,t,i)}else{r.clusterHide()}r._addToMap()}))},_recursivelyBecomeVisible:function(e,t){this._recursively(e,this._group._map.getMinZoom(),t,null,(function(e){e.clusterShow()}))},_recursivelyAddChildrenToMap:function(e,t,i){this._recursively(i,this._group._map.getMinZoom()-1,t,(function(n){if(t===n._zoom){return}for(var r=n._markers.length-1;r>=0;r--){var s=n._markers[r];if(!i.contains(s._latlng)){continue}if(e){s._backupLatlng=s.getLatLng();s.setLatLng(e);if(s.clusterHide){s.clusterHide()}}n._group._featureGroup.addLayer(s)}}),(function(t){t._addToMap(e)}))},_recursivelyRestoreChildPositions:function(e){for(var t=this._markers.length-1;t>=0;t--){var i=this._markers[t];if(i._backupLatlng){i.setLatLng(i._backupLatlng);delete i._backupLatlng}}if(e-1===this._zoom){for(var n=this._childClusters.length-1;n>=0;n--){this._childClusters[n]._restorePosition()}}else{for(var r=this._childClusters.length-1;r>=0;r--){this._childClusters[r]._recursivelyRestoreChildPositions(e)}}},_restorePosition:function(){if(this._backupLatlng){this.setLatLng(this._backupLatlng);delete this._backupLatlng}},_recursivelyRemoveChildrenFromMap:function(e,t,i,n){var r,s;this._recursively(e,t-1,i-1,(function(e){for(s=e._markers.length-1;s>=0;s--){r=e._markers[s];if(!n||!n.contains(r._latlng)){e._group._featureGroup.removeLayer(r);if(r.clusterShow){r.clusterShow()}}}}),(function(e){for(s=e._childClusters.length-1;s>=0;s--){r=e._childClusters[s];if(!n||!n.contains(r._latlng)){e._group._featureGroup.removeLayer(r);if(r.clusterShow){r.clusterShow()}}}}))},_recursively:function(e,t,i,n,r){var s=this._childClusters,o=this._zoom,a,l;if(t<=o){if(n){n(this)}if(r&&o===i){r(this)}}if(o<t||o<i){for(a=s.length-1;a>=0;a--){l=s[a];if(l._boundsNeedUpdate){l._recalculateBounds()}if(e.intersects(l._bounds)){l._recursively(e,t,i,n,r)}}}},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}});L.Marker.include({clusterHide:function(){var e=this.options.opacity;this.setOpacity(0);this.options.opacity=e;return this},clusterShow:function(){return this.setOpacity(this.options.opacity)}});L.DistanceGrid=function(e){this._cellSize=e;this._sqCellSize=e*e;this._grid={};this._objectPoint={}};L.DistanceGrid.prototype={addObject:function(e,t){var i=this._getCoord(t.x),n=this._getCoord(t.y),r=this._grid,s=r[n]=r[n]||{},o=s[i]=s[i]||[],a=L.Util.stamp(e);this._objectPoint[a]=t;o.push(e)},updateObject:function(e,t){this.removeObject(e);this.addObject(e,t)},removeObject:function(e,t){var i=this._getCoord(t.x),n=this._getCoord(t.y),r=this._grid,s=r[n]=r[n]||{},o=s[i]=s[i]||[],a,l;delete this._objectPoint[L.Util.stamp(e)];for(a=0,l=o.length;a<l;a++){if(o[a]===e){o.splice(a,1);if(l===1){delete s[i]}return true}}},eachObject:function(e,t){var i,n,r,s,o,a,l,h=this._grid;for(i in h){o=h[i];for(n in o){a=o[n];for(r=0,s=a.length;r<s;r++){l=e.call(t,a[r]);if(l){r--;s--}}}}},getNearObject:function(e){var t=this._getCoord(e.x),i=this._getCoord(e.y),n,r,s,o,a,l,h,u,_=this._objectPoint,d=this._sqCellSize,f=null;for(n=i-1;n<=i+1;n++){o=this._grid[n];if(o){for(r=t-1;r<=t+1;r++){a=o[r];if(a){for(s=0,l=a.length;s<l;s++){h=a[s];u=this._sqDist(_[L.Util.stamp(h)],e);if(u<d||u<=d&&f===null){d=u;f=h}}}}}}return f},_getCoord:function(e){var t=Math.floor(e/this._cellSize);return isFinite(t)?t:e},_sqDist:function(e,t){var i=t.x-e.x,n=t.y-e.y;return i*i+n*n}};(function(){L.QuickHull={getDistant:function(e,t){var i=t[1].lat-t[0].lat,n=t[0].lng-t[1].lng;return n*(e.lat-t[0].lat)+i*(e.lng-t[0].lng)},findMostDistantPointFromBaseLine:function(e,t){var i=0,n=null,r=[],s,o,a;for(s=t.length-1;s>=0;s--){o=t[s];a=this.getDistant(o,e);if(a>0){r.push(o)}else{continue}if(a>i){i=a;n=o}}return{maxPoint:n,newPoints:r}},buildConvexHull:function(e,t){var i=[],n=this.findMostDistantPointFromBaseLine(e,t);if(n.maxPoint){i=i.concat(this.buildConvexHull([e[0],n.maxPoint],n.newPoints));i=i.concat(this.buildConvexHull([n.maxPoint,e[1]],n.newPoints));return i}else{return[e[0]]}},getConvexHull:function(e){var t=false,i=false,n=false,r=false,s=null,o=null,a=null,l=null,h=null,u=null,_;for(_=e.length-1;_>=0;_--){var d=e[_];if(t===false||d.lat>t){s=d;t=d.lat}if(i===false||d.lat<i){o=d;i=d.lat}if(n===false||d.lng>n){a=d;n=d.lng}if(r===false||d.lng<r){l=d;r=d.lng}}if(i!==t){u=o;h=s}else{u=l;h=a}var f=[].concat(this.buildConvexHull([u,h],e),this.buildConvexHull([h,u],e));return f}}})();L.MarkerCluster.include({getConvexHull:function(){var e=this.getAllChildMarkers(),t=[],i,n;for(n=e.length-1;n>=0;n--){i=e[n].getLatLng();t.push(i)}return L.QuickHull.getConvexHull(t)}});L.MarkerCluster.include({_2PI:Math.PI*2,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(this._group._spiderfied===this||this._group._inZoomAnimation){return}var e=this.getAllChildMarkers(null,true),t=this._group,i=t._map,n=i.latLngToLayerPoint(this._latlng),r;this._group._unspiderfy();this._group._spiderfied=this;if(this._group.options.spiderfyShapePositions){r=this._group.options.spiderfyShapePositions(e.length,n)}else if(e.length>=this._circleSpiralSwitchover){r=this._generatePointsSpiral(e.length,n)}else{n.y+=10;r=this._generatePointsCircle(e.length,n)}this._animationSpiderfy(e,r)},unspiderfy:function(e){if(this._group._inZoomAnimation){return}this._animationUnspiderfy(e);this._group._spiderfied=null},_generatePointsCircle:function(e,t){var i=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+e),n=i/this._2PI,r=this._2PI/e,s=[],o,a;n=Math.max(n,35);s.length=e;for(o=0;o<e;o++){a=this._circleStartAngle+o*r;s[o]=new L.Point(t.x+n*Math.cos(a),t.y+n*Math.sin(a))._round()}return s},_generatePointsSpiral:function(e,t){var i=this._group.options.spiderfyDistanceMultiplier,n=i*this._spiralLengthStart,r=i*this._spiralFootSeparation,s=i*this._spiralLengthFactor*this._2PI,o=0,a=[],l;a.length=e;for(l=e;l>=0;l--){if(l<e){a[l]=new L.Point(t.x+n*Math.cos(o),t.y+n*Math.sin(o))._round()}o+=r/n+l*5e-4;n+=s/o}return a},_noanimationUnspiderfy:function(){var e=this._group,t=e._map,i=e._featureGroup,n=this.getAllChildMarkers(null,true),r,s;e._ignoreMove=true;this.setOpacity(1);for(s=n.length-1;s>=0;s--){r=n[s];i.removeLayer(r);if(r._preSpiderfyLatlng){r.setLatLng(r._preSpiderfyLatlng);delete r._preSpiderfyLatlng}if(r.setZIndexOffset){r.setZIndexOffset(0)}if(r._spiderLeg){t.removeLayer(r._spiderLeg);delete r._spiderLeg}}e.fire("unspiderfied",{cluster:this,markers:n});e._ignoreMove=false;e._spiderfied=null}});L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(e,t){var i=this._group,n=i._map,r=i._featureGroup,s=this._group.options.spiderLegPolylineOptions,o,a,l,h;i._ignoreMove=true;for(o=0;o<e.length;o++){h=n.layerPointToLatLng(t[o]);a=e[o];l=new L.Polyline([this._latlng,h],s);n.addLayer(l);a._spiderLeg=l;a._preSpiderfyLatlng=a._latlng;a.setLatLng(h);if(a.setZIndexOffset){a.setZIndexOffset(1e6)}r.addLayer(a)}this.setOpacity(.3);i._ignoreMove=false;i.fire("spiderfied",{cluster:this,markers:e})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}});L.MarkerCluster.include({_animationSpiderfy:function(e,t){var i=this,n=this._group,r=n._map,s=n._featureGroup,o=this._latlng,a=r.latLngToLayerPoint(o),l=L.Path.SVG,h=L.extend({},this._group.options.spiderLegPolylineOptions),u=h.opacity,_,d,f,c,p,m;if(u===undefined){u=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity}if(l){h.opacity=0;h.className=(h.className||"")+" leaflet-cluster-spider-leg"}else{h.opacity=u}n._ignoreMove=true;for(_=0;_<e.length;_++){d=e[_];m=r.layerPointToLatLng(t[_]);f=new L.Polyline([o,m],h);r.addLayer(f);d._spiderLeg=f;if(l){c=f._path;p=c.getTotalLength()+.1;c.style.strokeDasharray=p;c.style.strokeDashoffset=p}if(d.setZIndexOffset){d.setZIndexOffset(1e6)}if(d.clusterHide){d.clusterHide()}s.addLayer(d);if(d._setPos){d._setPos(a)}}n._forceLayout();n._animationStart();for(_=e.length-1;_>=0;_--){m=r.layerPointToLatLng(t[_]);d=e[_];d._preSpiderfyLatlng=d._latlng;d.setLatLng(m);if(d.clusterShow){d.clusterShow()}if(l){f=d._spiderLeg;c=f._path;c.style.strokeDashoffset=0;f.setStyle({opacity:u})}}this.setOpacity(.3);n._ignoreMove=false;setTimeout((function(){n._animationEnd();n.fire("spiderfied",{cluster:i,markers:e})}),200)},_animationUnspiderfy:function(e){var t=this,i=this._group,n=i._map,r=i._featureGroup,s=e?n._latLngToNewLayerPoint(this._latlng,e.zoom,e.center):n.latLngToLayerPoint(this._latlng),o=this.getAllChildMarkers(null,true),a=L.Path.SVG,l,h,u,_,d,f;i._ignoreMove=true;i._animationStart();this.setOpacity(1);for(h=o.length-1;h>=0;h--){l=o[h];if(!l._preSpiderfyLatlng){continue}l.closePopup();l.setLatLng(l._preSpiderfyLatlng);delete l._preSpiderfyLatlng;f=true;if(l._setPos){l._setPos(s);f=false}if(l.clusterHide){l.clusterHide();f=false}if(f){r.removeLayer(l)}if(a){u=l._spiderLeg;_=u._path;d=_.getTotalLength()+.1;_.style.strokeDashoffset=d;u.setStyle({opacity:0})}}i._ignoreMove=false;setTimeout((function(){var e=0;for(h=o.length-1;h>=0;h--){l=o[h];if(l._spiderLeg){e++}}for(h=o.length-1;h>=0;h--){l=o[h];if(!l._spiderLeg){continue}if(l.clusterShow){l.clusterShow()}if(l.setZIndexOffset){l.setZIndexOffset(0)}if(e>1){r.removeLayer(l)}n.removeLayer(l._spiderLeg);delete l._spiderLeg}i._animationEnd();i.fire("unspiderfied",{cluster:t,markers:o})}),200)}});L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments)},_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this);if(this._map.options.zoomAnimation){this._map.on("zoomstart",this._unspiderfyZoomStart,this)}this._map.on("zoomend",this._noanimationUnspiderfy,this);if(!L.Browser.touch){this._map.getRenderer(this)}},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this);this._map.off("zoomstart",this._unspiderfyZoomStart,this);this._map.off("zoomanim",this._unspiderfyZoomAnim,this);this._map.off("zoomend",this._noanimationUnspiderfy,this);this._noanimationUnspiderfy()},_unspiderfyZoomStart:function(){if(!this._map){return}this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(e){if(L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")){return}this._map.off("zoomanim",this._unspiderfyZoomAnim,this);this._unspiderfy(e)},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(e){if(this._spiderfied){this._spiderfied.unspiderfy(e)}},_noanimationUnspiderfy:function(){if(this._spiderfied){this._spiderfied._noanimationUnspiderfy()}},_unspiderfyLayer:function(e){if(e._spiderLeg){this._featureGroup.removeLayer(e);if(e.clusterShow){e.clusterShow()}if(e.setZIndexOffset){e.setZIndexOffset(0)}this._map.removeLayer(e._spiderLeg);delete e._spiderLeg}}});L.MarkerClusterGroup.include({refreshClusters:function(e){if(!e){e=this._topClusterLevel.getAllChildMarkers()}else if(e instanceof L.MarkerClusterGroup){e=e._topClusterLevel.getAllChildMarkers()}else if(e instanceof L.LayerGroup){e=e._layers}else if(e instanceof L.MarkerCluster){e=e.getAllChildMarkers()}else if(e instanceof L.Marker){e=[e]}this._flagParentsIconsNeedUpdate(e);this._refreshClustersIcons();if(this.options.singleMarkerMode){this._refreshSingleMarkerModeMarkers(e)}return this},_flagParentsIconsNeedUpdate:function(e){var t,i;for(t in e){i=e[t].__parent;while(i){i._iconNeedsUpdate=true;i=i.__parent}}},_refreshSingleMarkerModeMarkers:function(e){var t,i;for(t in e){i=e[t];if(this.hasLayer(i)){i.setIcon(this._overrideMarkerIcon(i))}}}});L.Marker.include({refreshIconOptions:function(e,t){var i=this.options.icon;L.setOptions(i,e);this.setIcon(i);if(t&&this.__parent){this.__parent._group.refreshClusters(this)}return this}});e.MarkerClusterGroup=t;e.MarkerCluster=i;Object.defineProperty(e,"__esModule",{value:true})}))}}]);
//# sourceMappingURL=5732.f157004ec58f15ce9670.js.map?v=f157004ec58f15ce9670