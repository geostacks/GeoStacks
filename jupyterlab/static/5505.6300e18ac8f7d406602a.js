(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[5505,7113],{32924:(r,e,o)=>{"use strict";o.d(e,{Z:()=>s});var n=o(94015);var t=o.n(n);var c=o(23645);var a=o.n(c);var i=a()(t());i.push([r.id,".cm-s-cobalt.CodeMirror { background: #002240; color: white; }\n.cm-s-cobalt div.CodeMirror-selected { background: #b36539; }\n.cm-s-cobalt .CodeMirror-line::selection, .cm-s-cobalt .CodeMirror-line > span::selection, .cm-s-cobalt .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-line::-moz-selection, .cm-s-cobalt .CodeMirror-line > span::-moz-selection, .cm-s-cobalt .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-cobalt .CodeMirror-guttermarker { color: #ffee80; }\n.cm-s-cobalt .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-cobalt span.cm-comment { color: #08f; }\n.cm-s-cobalt span.cm-atom { color: #845dc4; }\n.cm-s-cobalt span.cm-number, .cm-s-cobalt span.cm-attribute { color: #ff80e1; }\n.cm-s-cobalt span.cm-keyword { color: #ffee80; }\n.cm-s-cobalt span.cm-string { color: #3ad900; }\n.cm-s-cobalt span.cm-meta { color: #ff9d00; }\n.cm-s-cobalt span.cm-variable-2, .cm-s-cobalt span.cm-tag { color: #9effff; }\n.cm-s-cobalt span.cm-variable-3, .cm-s-cobalt span.cm-def, .cm-s-cobalt .cm-type { color: white; }\n.cm-s-cobalt span.cm-bracket { color: #d8d8d8; }\n.cm-s-cobalt span.cm-builtin, .cm-s-cobalt span.cm-special { color: #ff9e59; }\n.cm-s-cobalt span.cm-link { color: #845dc4; }\n.cm-s-cobalt span.cm-error { color: #9d1e15; }\n\n.cm-s-cobalt .CodeMirror-activeline-background { background: #002D57; }\n.cm-s-cobalt .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/cobalt.css"],names:[],mappings:"AAAA,0BAA0B,mBAAmB,EAAE,YAAY,EAAE;AAC7D,uCAAuC,mBAAmB,EAAE;AAC5D,oJAAoJ,mCAAmC,EAAE;AACzL,mKAAmK,mCAAmC,EAAE;AACxM,mCAAmC,mBAAmB,EAAE,4BAA4B,EAAE;AACtF,wCAAwC,cAAc,EAAE;AACxD,+CAA+C,cAAc,EAAE;AAC/D,sCAAsC,cAAc,EAAE;AACtD,kCAAkC,4BAA4B,EAAE;;AAEhE,+BAA+B,WAAW,EAAE;AAC5C,4BAA4B,cAAc,EAAE;AAC5C,8DAA8D,cAAc,EAAE;AAC9E,+BAA+B,cAAc,EAAE;AAC/C,8BAA8B,cAAc,EAAE;AAC9C,4BAA4B,cAAc,EAAE;AAC5C,4DAA4D,cAAc,EAAE;AAC5E,mFAAmF,YAAY,EAAE;AACjG,+BAA+B,cAAc,EAAE;AAC/C,6DAA6D,cAAc,EAAE;AAC7E,4BAA4B,cAAc,EAAE;AAC5C,6BAA6B,cAAc,EAAE;;AAE7C,iDAAiD,mBAAmB,EAAE;AACtE,2CAA2C,sBAAsB,CAAC,sBAAsB,EAAE",sourcesContent:[".cm-s-cobalt.CodeMirror { background: #002240; color: white; }\n.cm-s-cobalt div.CodeMirror-selected { background: #b36539; }\n.cm-s-cobalt .CodeMirror-line::selection, .cm-s-cobalt .CodeMirror-line > span::selection, .cm-s-cobalt .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-line::-moz-selection, .cm-s-cobalt .CodeMirror-line > span::-moz-selection, .cm-s-cobalt .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-cobalt .CodeMirror-guttermarker { color: #ffee80; }\n.cm-s-cobalt .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-cobalt span.cm-comment { color: #08f; }\n.cm-s-cobalt span.cm-atom { color: #845dc4; }\n.cm-s-cobalt span.cm-number, .cm-s-cobalt span.cm-attribute { color: #ff80e1; }\n.cm-s-cobalt span.cm-keyword { color: #ffee80; }\n.cm-s-cobalt span.cm-string { color: #3ad900; }\n.cm-s-cobalt span.cm-meta { color: #ff9d00; }\n.cm-s-cobalt span.cm-variable-2, .cm-s-cobalt span.cm-tag { color: #9effff; }\n.cm-s-cobalt span.cm-variable-3, .cm-s-cobalt span.cm-def, .cm-s-cobalt .cm-type { color: white; }\n.cm-s-cobalt span.cm-bracket { color: #d8d8d8; }\n.cm-s-cobalt span.cm-builtin, .cm-s-cobalt span.cm-special { color: #ff9e59; }\n.cm-s-cobalt span.cm-link { color: #845dc4; }\n.cm-s-cobalt span.cm-error { color: #9d1e15; }\n\n.cm-s-cobalt .CodeMirror-activeline-background { background: #002D57; }\n.cm-s-cobalt .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n"],sourceRoot:""}]);const s=i},23645:r=>{"use strict";r.exports=function(r){var e=[];e.toString=function e(){return this.map((function(e){var o=r(e);if(e[2]){return"@media ".concat(e[2]," {").concat(o,"}")}return o})).join("")};e.i=function(r,o,n){if(typeof r==="string"){r=[[null,r,""]]}var t={};if(n){for(var c=0;c<this.length;c++){var a=this[c][0];if(a!=null){t[a]=true}}}for(var i=0;i<r.length;i++){var s=[].concat(r[i]);if(n&&t[s[0]]){continue}if(o){if(!s[2]){s[2]=o}else{s[2]="".concat(o," and ").concat(s[2])}}e.push(s)}};return e}},94015:r=>{"use strict";function e(r,e){return a(r)||c(r,e)||n(r,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(r,e){if(!r)return;if(typeof r==="string")return t(r,e);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor)o=r.constructor.name;if(o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(r,e)}function t(r,e){if(e==null||e>r.length)e=r.length;for(var o=0,n=new Array(e);o<e;o++){n[o]=r[o]}return n}function c(r,e){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(r)))return;var o=[];var n=true;var t=false;var c=undefined;try{for(var a=r[Symbol.iterator](),i;!(n=(i=a.next()).done);n=true){o.push(i.value);if(e&&o.length===e)break}}catch(s){t=true;c=s}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(t)throw c}}return o}function a(r){if(Array.isArray(r))return r}r.exports=function r(o){var n=e(o,4),t=n[1],c=n[3];if(typeof btoa==="function"){var a=btoa(unescape(encodeURIComponent(JSON.stringify(c))));var i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a);var s="/*# ".concat(i," */");var l=c.sources.map((function(r){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(r," */")}));return[t].concat(l).concat([s]).join("\n")}return[t].join("\n")}},95505:(r,e,o)=>{"use strict";o.r(e);o.d(e,{default:()=>s});var n=o(93379);var t=o.n(n);var c=o(32924);var a={};a.insert="head";a.singleton=false;var i=t()(c.Z,a);const s=c.Z.locals||{}},93379:(r,e,o)=>{"use strict";var n=function r(){var e;return function r(){if(typeof e==="undefined"){e=Boolean(window&&document&&document.all&&!window.atob)}return e}}();var t=function r(){var e={};return function r(o){if(typeof e[o]==="undefined"){var n=document.querySelector(o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement){try{n=n.contentDocument.head}catch(t){n=null}}e[o]=n}return e[o]}}();var c=[];function a(r){var e=-1;for(var o=0;o<c.length;o++){if(c[o].identifier===r){e=o;break}}return e}function i(r,e){var o={};var n=[];for(var t=0;t<r.length;t++){var i=r[t];var s=e.base?i[0]+e.base:i[0];var l=o[s]||0;var A="".concat(s," ").concat(l);o[s]=l+1;var m=a(A);var u={css:i[1],media:i[2],sourceMap:i[3]};if(m!==-1){c[m].references++;c[m].updater(u)}else{c.push({identifier:A,updater:b(u,e),references:1})}n.push(A)}return n}function s(r){var e=document.createElement("style");var n=r.attributes||{};if(typeof n.nonce==="undefined"){var c=true?o.nc:0;if(c){n.nonce=c}}Object.keys(n).forEach((function(r){e.setAttribute(r,n[r])}));if(typeof r.insert==="function"){r.insert(e)}else{var a=t(r.insert||"head");if(!a){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}a.appendChild(e)}return e}function l(r){if(r.parentNode===null){return false}r.parentNode.removeChild(r)}var A=function r(){var e=[];return function r(o,n){e[o]=n;return e.filter(Boolean).join("\n")}}();function m(r,e,o,n){var t=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(r.styleSheet){r.styleSheet.cssText=A(e,t)}else{var c=document.createTextNode(t);var a=r.childNodes;if(a[e]){r.removeChild(a[e])}if(a.length){r.insertBefore(c,a[e])}else{r.appendChild(c)}}}function u(r,e,o){var n=o.css;var t=o.media;var c=o.sourceMap;if(t){r.setAttribute("media",t)}else{r.removeAttribute("media")}if(c&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")}if(r.styleSheet){r.styleSheet.cssText=n}else{while(r.firstChild){r.removeChild(r.firstChild)}r.appendChild(document.createTextNode(n))}}var d=null;var f=0;function b(r,e){var o;var n;var t;if(e.singleton){var c=f++;o=d||(d=s(e));n=m.bind(null,o,c,false);t=m.bind(null,o,c,true)}else{o=s(e);n=u.bind(null,o,e);t=function r(){l(o)}}n(r);return function e(o){if(o){if(o.css===r.css&&o.media===r.media&&o.sourceMap===r.sourceMap){return}n(r=o)}else{t()}}}r.exports=function(r,e){e=e||{};if(!e.singleton&&typeof e.singleton!=="boolean"){e.singleton=n()}r=r||[];var o=i(r,e);return function r(n){n=n||[];if(Object.prototype.toString.call(n)!=="[object Array]"){return}for(var t=0;t<o.length;t++){var s=o[t];var l=a(s);c[l].references--}var A=i(n,e);for(var m=0;m<o.length;m++){var u=o[m];var d=a(u);if(c[d].references===0){c[d].updater();c.splice(d,1)}}o=A}}}}]);
//# sourceMappingURL=5505.6300e18ac8f7d406602a.js.map?v=6300e18ac8f7d406602a