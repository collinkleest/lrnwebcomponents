!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).LrnPage={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){var e=c(["\n      <oer-schema><slot></slot></oer-schema>\n    "]);return f=function(){return e},e}function l(){var e=c(["\n        :host {\n          display: block;\n        }\n      "]);return l=function(){return e},e}var s=function(e){function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),e=u(this,o(n).call(this)),import("@lrnwebcomponents/oer-schema/oer-schema.js"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,t.LitElement),r(n,null,[{key:"styles",get:function(){return[t.css(l())]}}]),r(n,[{key:"render",value:function(){return t.html(f())}}],[{key:"tag",get:function(){return"lrn-page"}}]),n}();window.customElements.define(s.tag,s),e.LrnPage=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrn-page.umd.js.map
