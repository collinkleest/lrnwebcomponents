!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).FullScreenImage={},e.lit)}(this,(function(e,n){"use strict";function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function r(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function a(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=c(e);if(n){var i=c(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return s(this,t)}}function u(e,n,t){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=c(e)););return e}(e,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(t):i.value}})(e,n,t||e)}function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var f,d,b=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(g,e);var t,o,s,b=a(g);function g(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,g),(e=b.call(this)).title="",e.subtitle="",e.source=null,e}return t=g,s=[{key:"styles",get:function(){return[n.css(d||(d=p(['\n:host {\n  display: block;\n  font-variant-ligatures: common-ligatures;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nh2 {\n  font-size: 4em;\n  font-weight: 200;\n  margin: 0px !important;\n  line-height: 1em;\n  text-transform: lowercase;\n  color: white;\n  letter-spacing: -0.04em;\n  font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;\n}\n\np {\n  font-weight: 400;\n  color: white;\n  line-height: 1.0em;\n  font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  letter-spacing: 0.01em;\n  margin-top: 0;\n  margin-bottom: 1em;\n}\n\nimg {\n  position: absolute;\n  margin: 0px;\n  padding: 0px;\n  border: none;\n  width: 1239px;\n  height: 774.375px;\n  max-width: none;\n  z-index: -999999;\n  left: 0px;\n  top: -57.1875px;\n}\n\nsimple-icon-button {\n  --simple-icon-height: 45px;\n  --simple-icon-width: 75px;\n  line-height: 45px;\n  bottom: 1px;\n  right: 0px;\n  display: block;\n  position: absolute;\n  text-align: center;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.fullpage-container {\n  display: block;\n}\n\n.image-wrapper {\n  left: 0px;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  overflow: hidden;\n  margin: 0px;\n  padding: 0px;\n  width: 100%;\n  z-index: -999998;\n  position: absolute;\n}\n\n.overlay-container {\n  display: block;\n  position: absolute;\n  text-align: right;\n  padding: 0.1em 1.5em 0.1em 6.0em;\n  bottom: 60px;\n  right: 0px;\n  background-color: rgba(191, 147, 45, 0.7)\n}\n      '])))]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Full screen-image",description:"full screen banner image with down arrow",icon:"icons:android",color:"green",groups:["Screen"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"ELMS:LN",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"title",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"subtitle",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"source",description:"",inputMethod:"textfield",required:!0,icon:"icons:link",validationType:"url"}],advanced:[]}}}},{key:"properties",get:function(){return r(r({},u(c(g),"properties",this)),{},{title:{type:String},subtitle:{type:String},source:{type:String}})}},{key:"tag",get:function(){return"full-screen-image"}}],(o=[{key:"render",value:function(){return n.html(f||(f=p(['\n\n<div class="fullpage-container">\n  <div class="overlay-container">\n    <h2>',"</h2>\n    <p>",'</p>\n  </div>\n  <simple-icon-button id="down" icon="hardware:keyboard-arrow-down"></simple-icon-button>\n  <div class="image-wrapper">\n    <img loading="lazy" id="img" src="','" />\n  </div>\n</div>'])),this.title,this.subtitle,this.source)}},{key:"firstUpdated",value:function(){var e=this;this.shadowRoot.querySelector("#down").addEventListener("click",(function(n){e.nextElementSibling.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})}))}}])&&i(t.prototype,o),s&&i(t,s),g}(n.LitElement);window.customElements.define(b.tag,b),e.FullScreenImage=b,Object.defineProperty(e,"__esModule",{value:!0})}));
