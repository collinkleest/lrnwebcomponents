!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).BR={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(t){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return u(this,n)}}function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f,l,a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(p,t.LitElement);var r,u,a,s=i(p);function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=s.call(this)).amount=1,e}return r=p,a=[{key:"properties",get:function(){return{amount:{type:Number}}}},{key:"tag",get:function(){return"b-r"}}],(u=[{key:"render",value:function(){return t.html(f||(f=c(["<div>","</div>"])),this.renderBR(this.amount))}},{key:"renderBR",value:function(e){for(var n=0,r=[];n<e;)r.push(t.html(l||(l=c(["<br />"])))),n++;return r}}])&&n(r.prototype,u),a&&n(r,a),p}();customElements.define(a.tag,a),e.BR=a,Object.defineProperty(e,"__esModule",{value:!0})});
