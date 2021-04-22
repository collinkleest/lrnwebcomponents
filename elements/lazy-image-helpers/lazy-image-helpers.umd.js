!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-icon/lib/simple-iconset.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"),require("@lrnwebcomponents/replace-tag/lib/LoadingHelper.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-icon/lib/simple-iconset.js","lit-element/lit-element.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js","@lrnwebcomponents/replace-tag/lib/LoadingHelper.js"],t):t((e=e||self).LazyImageHelpers={},e.simpleIconset_js,e.litElement_js,null,e.IntersectionObserverMixin_js,e.LoadingHelper_js)}(this,function(e,t,n,r,i,o){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var i=d(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return y(this,n)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function v(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O,j,x,I,L,S=function(e){return function(r){f(l,i.IntersectionObserverMixin(e));var o=g(l);function l(){var e;return a(this,l),(e=o.call(this)).IOVisibleLimit=.1,e.IOThresholds=[0,.1,.25,.5,.75,1],e.replacementDelay=1e3,e.imageLoaded=!1,e.loadingImg="loading:bars",e}return s(l,[{key:"updated",value:function(e){var n=this;b(d(l.prototype),"updated",this)&&b(d(l.prototype),"updated",this).call(this,e),e.forEach(function(e,r){if("imageLoaded"==r&&!n.imageLoaded&&n.shadowRoot&&n.shadowRoot.querySelector("image")){var i=t.SimpleIconsetStore.getIcon(n.loadingImg,n);n.shadowRoot.querySelector("image").setAttribute("xlink:href",i)}"elementVisible"==r&&n.elementVisible&&!n.imageLoaded&&(clearTimeout(n.__debouce),n.__debouce=setTimeout(function(){n.imageLoaded=!0},n.replacementDelay))})}},{key:"_lazyImageLoadComplete",value:function(){this.imageLoaded=!0}},{key:"firstUpdated",value:function(e){var n=this;if(b(d(l.prototype),"firstUpdated",this)&&b(d(l.prototype),"firstUpdated",this).call(this,e),this.shadowRoot.querySelector("image")){var r=t.SimpleIconsetStore.getIcon(this.loadingImg,this);this.shadowRoot.querySelector("image").setAttribute("xlink:href",r)}var i=this.shadowRoot.querySelector('img[loading="lazy"]');i.complete?this._lazyImageLoadComplete():(i.addEventListener("load",this._lazyImageLoadComplete.bind(this)),i.addEventListener("error",function(){n._lazyImageLoadComplete.bind(n)}))}},{key:"renderSVGLoader",value:function(){return n.html(O||(O=h(["",""])),this.imageLoaded?"":n.svg(j||(j=h(['\n      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="max-height:400px;width:100%;margin:auto;background:#f1f2f3;display:block;z-index:1;position:relative" preserveAspectRatio="xMidYMid" viewBox="0 0 300 200">\n      <image\n        xlink:href=""\n        focusable="false"\n        preserveAspectRatio="xMidYMid meet"\n      ></image>\n      </svg>']))))}}],[{key:"styles",get:function(){var e=[];return b(d(l),"styles",this)&&(e=v(b(d(l),"styles",this))),[e,n.css(x||(x=h(['\n          img[loading="lazy"] {\n            width: 100%;\n            margin-top: -200px;\n            min-height: 200px;\n            float: left;\n            opacity: 0;\n            transition: opacity 0.3s ease-in-out;\n          }\n          :host([image-loaded]) img[loading="lazy"] {\n            margin-top: unset;\n            float: unset;\n            opacity: 1;\n          }\n        '])))]}},{key:"properties",get:function(){return p(p({},b(d(l),"properties",this)),{},{imageLoaded:{type:Boolean,reflect:!0,attribute:"image-loaded"}})}}]),l}()},_=function(e){f(r,o.LoadingHelper(S(n.LitElement)));var t=g(r);function r(){return a(this,r),t.apply(this,arguments)}return s(r,[{key:"render",value:function(){return n.html(I||(I=h(['<div class="image-wrap">\n      ','\n      <img\n        src="','"\n        alt="','"\n        aria-describedby="','"\n        loading="lazy"\n      />\n    </div>'])),this.renderSVGLoader(),this.src,this.alt,this.describedBy||"")}}],[{key:"tag",get:function(){return"lazy-image"}},{key:"properties",get:function(){return p(p({},b(d(r),"properties",this)),{},{src:{type:String,reflect:!0},alt:{type:String,reflect:!0},describedBy:{type:String,attribute:"described-by"}})}},{key:"styles",get:function(){return[].concat(v(b(d(r),"styles",this)),[n.css(L||(L=h(["\n        :host {\n          display: block;\n        }\n        .image-wrap {\n          min-height: 250px;\n          max-height: 400px;\n          overflow: hidden;\n        }\n      "])))])}}]),r}();customElements.define(_.tag,_),e.lazyImage=_,e.lazyImageLoader=S,Object.defineProperty(e,"__esModule",{value:!0})});
