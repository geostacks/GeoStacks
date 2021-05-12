(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[7717,7113],{57186:(r,e,a)=>{"use strict";a.d(e,{Z:()=>m});var n=a(94015);var c=a.n(n);var o=a(23645);var t=a.n(o);var i=t()(c());i.push([r.id,"/* Based on https://github.com/dempfi/ayu */\n\n.cm-s-ayu-mirage.CodeMirror { background: #1f2430; color: #cbccc6; }\n.cm-s-ayu-mirage div.CodeMirror-selected { background: #34455a; }\n.cm-s-ayu-mirage .CodeMirror-line::selection, .cm-s-ayu-mirage .CodeMirror-line > span::selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::selection { background: #34455a; }\n.cm-s-ayu-mirage .CodeMirror-line::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::-moz-selection { background: rgba(25, 30, 42, 99); }\n.cm-s-ayu-mirage .CodeMirror-gutters { background: #1f2430; border-right: 0px; }\n.cm-s-ayu-mirage .CodeMirror-guttermarker { color: white; }\n.cm-s-ayu-mirage .CodeMirror-guttermarker-subtle { color:  rgba(112, 122, 140, 66); }\n.cm-s-ayu-mirage .CodeMirror-linenumber { color: rgba(61, 66, 77, 99); }\n.cm-s-ayu-mirage .CodeMirror-cursor { border-left: 1px solid #ffcc66; }\n\n.cm-s-ayu-mirage span.cm-comment { color: #5c6773; font-style:italic; }\n.cm-s-ayu-mirage span.cm-atom { color: #ae81ff; }\n.cm-s-ayu-mirage span.cm-number { color: #ffcc66; }\n\n.cm-s-ayu-mirage span.cm-comment.cm-attribute { color: #ffd580; }\n.cm-s-ayu-mirage span.cm-comment.cm-def { color: #d4bfff; }\n.cm-s-ayu-mirage span.cm-comment.cm-tag { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-ayu-mirage span.cm-property { color: #f29e74; }\n.cm-s-ayu-mirage span.cm-attribute { color: #ffd580; }  \n.cm-s-ayu-mirage span.cm-keyword { color: #ffa759; } \n.cm-s-ayu-mirage span.cm-builtin { color: #ffcc66; }\n.cm-s-ayu-mirage span.cm-string { color: #bae67e; }\n\n.cm-s-ayu-mirage span.cm-variable { color: #cbccc6; }\n.cm-s-ayu-mirage span.cm-variable-2 { color: #f28779; }\n.cm-s-ayu-mirage span.cm-variable-3 { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-type { color: #ffa759; }\n.cm-s-ayu-mirage span.cm-def { color: #ffd580; }\n.cm-s-ayu-mirage span.cm-bracket { color: rgba(92, 207, 230, 80); }\n.cm-s-ayu-mirage span.cm-tag { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-header { color: #bae67e; }\n.cm-s-ayu-mirage span.cm-link { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-error { color: #ff3333; } \n\n.cm-s-ayu-mirage .CodeMirror-activeline-background { background: #191e2a; }\n.cm-s-ayu-mirage .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/ayu-mirage.css"],names:[],mappings:"AAAA,2CAA2C;;AAE3C,8BAA8B,mBAAmB,EAAE,cAAc,EAAE;AACnE,2CAA2C,mBAAmB,EAAE;AAChE,gKAAgK,mBAAmB,EAAE;AACrL,+KAA+K,gCAAgC,EAAE;AACjN,uCAAuC,mBAAmB,EAAE,iBAAiB,EAAE;AAC/E,4CAA4C,YAAY,EAAE;AAC1D,mDAAmD,+BAA+B,EAAE;AACpF,0CAA0C,2BAA2B,EAAE;AACvE,sCAAsC,8BAA8B,EAAE;;AAEtE,mCAAmC,cAAc,EAAE,iBAAiB,EAAE;AACtE,gCAAgC,cAAc,EAAE;AAChD,kCAAkC,cAAc,EAAE;;AAElD,gDAAgD,cAAc,EAAE;AAChE,0CAA0C,cAAc,EAAE;AAC1D,0CAA0C,cAAc,EAAE;AAC1D,2CAA2C,cAAc,EAAE;;AAE3D,oCAAoC,cAAc,EAAE;AACpD,qCAAqC,cAAc,EAAE;AACrD,mCAAmC,cAAc,EAAE;AACnD,mCAAmC,cAAc,EAAE;AACnD,kCAAkC,cAAc,EAAE;;AAElD,oCAAoC,cAAc,EAAE;AACpD,sCAAsC,cAAc,EAAE;AACtD,sCAAsC,cAAc,EAAE;AACtD,gCAAgC,cAAc,EAAE;AAChD,+BAA+B,cAAc,EAAE;AAC/C,mCAAmC,6BAA6B,EAAE;AAClE,+BAA+B,cAAc,EAAE;AAC/C,kCAAkC,cAAc,EAAE;AAClD,gCAAgC,cAAc,EAAE;AAChD,iCAAiC,cAAc,EAAE;;AAEjD,qDAAqD,mBAAmB,EAAE;AAC1E;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/* Based on https://github.com/dempfi/ayu */\n\n.cm-s-ayu-mirage.CodeMirror { background: #1f2430; color: #cbccc6; }\n.cm-s-ayu-mirage div.CodeMirror-selected { background: #34455a; }\n.cm-s-ayu-mirage .CodeMirror-line::selection, .cm-s-ayu-mirage .CodeMirror-line > span::selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::selection { background: #34455a; }\n.cm-s-ayu-mirage .CodeMirror-line::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::-moz-selection { background: rgba(25, 30, 42, 99); }\n.cm-s-ayu-mirage .CodeMirror-gutters { background: #1f2430; border-right: 0px; }\n.cm-s-ayu-mirage .CodeMirror-guttermarker { color: white; }\n.cm-s-ayu-mirage .CodeMirror-guttermarker-subtle { color:  rgba(112, 122, 140, 66); }\n.cm-s-ayu-mirage .CodeMirror-linenumber { color: rgba(61, 66, 77, 99); }\n.cm-s-ayu-mirage .CodeMirror-cursor { border-left: 1px solid #ffcc66; }\n\n.cm-s-ayu-mirage span.cm-comment { color: #5c6773; font-style:italic; }\n.cm-s-ayu-mirage span.cm-atom { color: #ae81ff; }\n.cm-s-ayu-mirage span.cm-number { color: #ffcc66; }\n\n.cm-s-ayu-mirage span.cm-comment.cm-attribute { color: #ffd580; }\n.cm-s-ayu-mirage span.cm-comment.cm-def { color: #d4bfff; }\n.cm-s-ayu-mirage span.cm-comment.cm-tag { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-ayu-mirage span.cm-property { color: #f29e74; }\n.cm-s-ayu-mirage span.cm-attribute { color: #ffd580; }  \n.cm-s-ayu-mirage span.cm-keyword { color: #ffa759; } \n.cm-s-ayu-mirage span.cm-builtin { color: #ffcc66; }\n.cm-s-ayu-mirage span.cm-string { color: #bae67e; }\n\n.cm-s-ayu-mirage span.cm-variable { color: #cbccc6; }\n.cm-s-ayu-mirage span.cm-variable-2 { color: #f28779; }\n.cm-s-ayu-mirage span.cm-variable-3 { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-type { color: #ffa759; }\n.cm-s-ayu-mirage span.cm-def { color: #ffd580; }\n.cm-s-ayu-mirage span.cm-bracket { color: rgba(92, 207, 230, 80); }\n.cm-s-ayu-mirage span.cm-tag { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-header { color: #bae67e; }\n.cm-s-ayu-mirage span.cm-link { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-error { color: #ff3333; } \n\n.cm-s-ayu-mirage .CodeMirror-activeline-background { background: #191e2a; }\n.cm-s-ayu-mirage .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n"],sourceRoot:""}]);const m=i},23645:r=>{"use strict";r.exports=function(r){var e=[];e.toString=function e(){return this.map((function(e){var a=r(e);if(e[2]){return"@media ".concat(e[2]," {").concat(a,"}")}return a})).join("")};e.i=function(r,a,n){if(typeof r==="string"){r=[[null,r,""]]}var c={};if(n){for(var o=0;o<this.length;o++){var t=this[o][0];if(t!=null){c[t]=true}}}for(var i=0;i<r.length;i++){var m=[].concat(r[i]);if(n&&c[m[0]]){continue}if(a){if(!m[2]){m[2]=a}else{m[2]="".concat(a," and ").concat(m[2])}}e.push(m)}};return e}},94015:r=>{"use strict";function e(r,e){return t(r)||o(r,e)||n(r,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(r,e){if(!r)return;if(typeof r==="string")return c(r,e);var a=Object.prototype.toString.call(r).slice(8,-1);if(a==="Object"&&r.constructor)a=r.constructor.name;if(a==="Map"||a==="Set")return Array.from(r);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(r,e)}function c(r,e){if(e==null||e>r.length)e=r.length;for(var a=0,n=new Array(e);a<e;a++){n[a]=r[a]}return n}function o(r,e){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(r)))return;var a=[];var n=true;var c=false;var o=undefined;try{for(var t=r[Symbol.iterator](),i;!(n=(i=t.next()).done);n=true){a.push(i.value);if(e&&a.length===e)break}}catch(m){c=true;o=m}finally{try{if(!n&&t["return"]!=null)t["return"]()}finally{if(c)throw o}}return a}function t(r){if(Array.isArray(r))return r}r.exports=function r(a){var n=e(a,4),c=n[1],o=n[3];if(typeof btoa==="function"){var t=btoa(unescape(encodeURIComponent(JSON.stringify(o))));var i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);var m="/*# ".concat(i," */");var s=o.sources.map((function(r){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(r," */")}));return[c].concat(s).concat([m]).join("\n")}return[c].join("\n")}},67717:(r,e,a)=>{"use strict";a.r(e);a.d(e,{default:()=>m});var n=a(93379);var c=a.n(n);var o=a(57186);var t={};t.insert="head";t.singleton=false;var i=c()(o.Z,t);const m=o.Z.locals||{}},93379:(r,e,a)=>{"use strict";var n=function r(){var e;return function r(){if(typeof e==="undefined"){e=Boolean(window&&document&&document.all&&!window.atob)}return e}}();var c=function r(){var e={};return function r(a){if(typeof e[a]==="undefined"){var n=document.querySelector(a);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement){try{n=n.contentDocument.head}catch(c){n=null}}e[a]=n}return e[a]}}();var o=[];function t(r){var e=-1;for(var a=0;a<o.length;a++){if(o[a].identifier===r){e=a;break}}return e}function i(r,e){var a={};var n=[];for(var c=0;c<r.length;c++){var i=r[c];var m=e.base?i[0]+e.base:i[0];var s=a[m]||0;var A="".concat(m," ").concat(s);a[m]=s+1;var u=t(A);var l={css:i[1],media:i[2],sourceMap:i[3]};if(u!==-1){o[u].references++;o[u].updater(l)}else{o.push({identifier:A,updater:g(l,e),references:1})}n.push(A)}return n}function m(r){var e=document.createElement("style");var n=r.attributes||{};if(typeof n.nonce==="undefined"){var o=true?a.nc:0;if(o){n.nonce=o}}Object.keys(n).forEach((function(r){e.setAttribute(r,n[r])}));if(typeof r.insert==="function"){r.insert(e)}else{var t=c(r.insert||"head");if(!t){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}t.appendChild(e)}return e}function s(r){if(r.parentNode===null){return false}r.parentNode.removeChild(r)}var A=function r(){var e=[];return function r(a,n){e[a]=n;return e.filter(Boolean).join("\n")}}();function u(r,e,a,n){var c=a?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(r.styleSheet){r.styleSheet.cssText=A(e,c)}else{var o=document.createTextNode(c);var t=r.childNodes;if(t[e]){r.removeChild(t[e])}if(t.length){r.insertBefore(o,t[e])}else{r.appendChild(o)}}}function l(r,e,a){var n=a.css;var c=a.media;var o=a.sourceMap;if(c){r.setAttribute("media",c)}else{r.removeAttribute("media")}if(o&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")}if(r.styleSheet){r.styleSheet.cssText=n}else{while(r.firstChild){r.removeChild(r.firstChild)}r.appendChild(document.createTextNode(n))}}var f=null;var d=0;function g(r,e){var a;var n;var c;if(e.singleton){var o=d++;a=f||(f=m(e));n=u.bind(null,a,o,false);c=u.bind(null,a,o,true)}else{a=m(e);n=l.bind(null,a,e);c=function r(){s(a)}}n(r);return function e(a){if(a){if(a.css===r.css&&a.media===r.media&&a.sourceMap===r.sourceMap){return}n(r=a)}else{c()}}}r.exports=function(r,e){e=e||{};if(!e.singleton&&typeof e.singleton!=="boolean"){e.singleton=n()}r=r||[];var a=i(r,e);return function r(n){n=n||[];if(Object.prototype.toString.call(n)!=="[object Array]"){return}for(var c=0;c<a.length;c++){var m=a[c];var s=t(m);o[s].references--}var A=i(n,e);for(var u=0;u<a.length;u++){var l=a[u];var f=t(l);if(o[f].references===0){o[f].updater();o.splice(f,1)}}a=A}}}}]);
//# sourceMappingURL=7717.106e4da1f9dec5afe96f.js.map?v=106e4da1f9dec5afe96f