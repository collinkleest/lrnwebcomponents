!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).ExifData={})}(this,function(t){"use strict";function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e,n){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return u(t,arguments,o(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,t)})(t)}function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t,e,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=o(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}var f=function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=a(this,o(e).call(this))).tag=e.tag;var r=e.properties;for(var i in r)r.hasOwnProperty(i)&&(t.hasAttribute(i)?t[i]=t.getAttribute(i):(t.setAttribute(i,r[i].value),t[i]=r[i].value));return t._queue=[],t.template=document.createElement("template"),t.attachShadow({mode:"open"}),n||t.render(),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(e,c(HTMLElement)),n(e,[{key:"html",get:function(){return"\n<style>\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n        </style>\n<slot></slot>"}}],[{key:"properties",get:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}({},l(o(e),"properties",this))}},{key:"tag",get:function(){return"exif-data"}}]),n(e,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"_copyAttribute",value:function(t,e){var n=this.shadowRoot.querySelectorAll(e),r=this.getAttribute(t),o=null==r?"removeAttribute":"setAttribute",i=!0,u=!1,c=void 0;try{for(var a,l=n[Symbol.iterator]();!(i=(a=l.next()).done);i=!0){a.value[o](t,r)}}catch(t){u=!0,c=t}finally{try{i||null==l.return||l.return()}finally{if(u)throw c}}}},{key:"_setProperty",value:function(t){var e=t.name,n=t.value;this[e]=n}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}]),e}();window.customElements.define(f.tag,f),t.ExifData=f,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=exif-data.umd.js.map