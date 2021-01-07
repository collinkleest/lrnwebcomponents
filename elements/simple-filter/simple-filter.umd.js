!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).SimpleFilter={},e.litElement_js)}(this,function(e,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function b(e,t,r){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function d(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=function(e){return function(t){l(u,e);var o=y(u);function u(){var e;return n(this,u),(e=o.call(this)).caseSensitive=!1,e.filtered=[],e.resetList(),e}return i(u,[{key:"resetList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.items=d(e),this.where="title",this.value="",this.like=""}},{key:"update",value:function(e){var t=this;b(a(u.prototype),"update",this).call(this,e),e.forEach(function(e,r){["items","where","like","caseSensitive"].includes(r)&&t.shadowRoot&&(clearTimeout(t.__debounce),t.__debounce=setTimeout(function(){t.filtered=t._computeFiltered(t.items,t.where,t.like,t.caseSensitive)},0)),"filtered"==r&&t.shadowRoot&&(t.dispatchEvent(new CustomEvent("filter",{bubbles:!0,cancelable:!0,composed:!0,detail:!0})),t.dispatchEvent(new CustomEvent("filtered-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:{value:t.filtered}})))})}},{key:"filter",value:function(){this.where=""}},{key:"_computeFiltered",value:function(e,t,n,o){"\\"!==n[0]&&"\\"!==n||(n="\\"+n);var i=null;i=o?new RegExp(n):new RegExp(n,"i");var u=this._decomposeWhere.bind(this);return e.filter(function(e){if("object"==r(e)){var n=u(t,e);return void 0===n&&""!=t&&console.warn("grafitto-filter was unable to find a property in '"+t+"'"),i.test(n)}return"string"==typeof e?i.test(e):"number"==typeof e?i.test(e.toString()):void 0})}},{key:"_decomposeWhere",value:function(e,t){return e.split(".").reduce(function(e,t){return e&&e[t]},t)}}],[{key:"properties",get:function(){return f(f({},b(a(u),"properties",this)),{},{items:{type:Array},like:{type:String},where:{type:String},caseSensitive:{type:Boolean,attribute:"case-sensitive",reflect:!0},filtered:{type:Array}})}}]),u}()},v=function(e){l(o,m(t.LitElement));var r=y(o);function o(){return n(this,o),r.call(this)}return i(o,null,[{key:"tag",get:function(){return"simple-filter"}}]),o}();e.SimpleFilter=v,e.SimpleFilterMixin=m,Object.defineProperty(e,"__esModule",{value:!0})});