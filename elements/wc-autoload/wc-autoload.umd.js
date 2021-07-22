!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/dynamic-import-registry/dynamic-import-registry.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/dynamic-import-registry/dynamic-import-registry.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).WcAutoload={})}(this,(function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function o(e,t,n,o,r,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function u(e){o(a,r,i,u,c,"next",e)}function c(e){o(a,r,i,u,c,"throw",e)}u(void 0)}))}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function w(e,t,n){return(w=f()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&d(r,n.prototype),r}).apply(null,arguments)}function p(e){var t="function"==typeof Map?new Map:void 0;return(p=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return w(e,arguments,l(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),d(o,e)})(e)}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){var t=f();return function(){var n,o=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}window.WCAutoload=window.WCAutoload||{},window.WCAutoloadRegistry=window.WCAutoloadRegistry||{},window.WCAutoload.requestAvailability=function(){return window.WCAutoload.instance||(window.WCAutoload.instance=document.createElement("wc-autoload"),document.body.appendChild(window.WCAutoload.instance)),window.WCAutoload.instance};var m=function(){var e=r(regeneratorRuntime.mark((function e(t,n,o){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<o)){e.next=16;break}return e.prev=2,e.next=5,fetch(t,n);case 5:return e.abrupt("return",e.sent);case 8:if(e.prev=8,e.t0=e.catch(2),!(r+1===o)){e.next=13;break}throw e.t0;case 13:r++,e.next=1;break;case 16:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n,o){return e.apply(this,arguments)}}();window.WCAutoload.process=function(e){return new Promise((function(e,t){var o=window.WCAutoload.requestAvailability();o.loaded=!0;var i={};if(window.WCAutoloadRegistryFileProcessed){var a=document;o.target&&(a=o.target,o.processNewElement(a)),a.querySelectorAll("*").forEach((function(e){e.tagName&&!i[e.tagName]&&(o.processNewElement(e),i[e.tagName]=e.tagName)})),e("autoloader already processed")}else setTimeout(r(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.WCAutoloadBasePath&&(o.registry.basePath=window.WCAutoloadBasePath),!window.WCAutoloadRegistryFile||window.WCAutoloadRegistryFileProcessed){t.next=10;break}"string"==typeof window.WCAutoloadRegistryFile&&(window.WCAutoloadRegistryFile=[window.WCAutoloadRegistryFile]),r=0;case 4:if(!(r<window.WCAutoloadRegistryFile.length)){t.next=10;break}return t.next=7,m(window.WCAutoloadRegistryFile[r],{},3).then((function(e){return e.json()})).then((function(e){window.WCAutoloadRegistryFileProcessed=!0,window.WCAutoloadRegistry=n(n({},window.WCAutoloadRegistry),e)}));case 7:r++,t.next=4;break;case 10:if(window.WCAutoloadRegistry)for(r in window.WCAutoloadRegistry)o.registry.register({tag:r,path:window.WCAutoloadRegistry[r]});a=document,o.target&&(a=o.target,o.processNewElement(a)),a.querySelectorAll("*").forEach((function(e){e.tagName&&!i[e.tagName]&&(o.processNewElement(e),i[e.tagName]=e.tagName)})),e("autoloader processed on the fly");case 15:case"end":return t.stop()}}),t)}))),0)}))},window.addEventListener("load",window.WCAutoload.process),window.WCAutoload.postLoaded=function(e){setTimeout((function(){var t=window.WCAutoload.requestAvailability();t.loaded&&document.querySelectorAll(e.detail.tag).length>0&&t.registry.loadDefinition(e.detail.tag)}),0)},window.addEventListener("dynamic-import-registry--new-registration",window.WCAutoload.postLoaded);var b=function(e){s(n,e);var t=g(n);function n(){var e;return i(this,n),(e=t.call(this)).loader=window.WCAutoload.requestAvailability(),e}return u(n,[{key:"connectedCallback",value:function(){var e=this;setTimeout((function(){if(e.children.length>0&&"TEMPLATE"==e.children[0].tagName)try{var t=JSON.parse(e.children[0].content.textContent);for(var n in t)e.loader.registry.register({tag:n,path:t[n]})}catch(e){console.warn(e)}}),0)}}],[{key:"tag",get:function(){return"wc-registry"}}]),n}(p(HTMLElement));customElements.define(b.tag,b);var v=function(e){s(n,e);var t=g(n);function n(){var e;return i(this,n),(e=t.call(this)).loaded=!1,e.registry=window.DynamicImportRegistry.requestAvailability(),e.options={childList:!0,subtree:!0},e}return u(n,[{key:"connectedCallback",value:function(){var e=this;this._mutationObserver=new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){e.processNewElement(t)}))}))})),window.WCAutoloadOptions&&(this.options=window.WCAutoloadOptions),setTimeout((function(){window.WCAutoloadTarget?e.target=window.WCAutoloadTarget:e.target=document.body,e._mutationObserver.observe(e.target,e.options)}),0)}},{key:"disconnectedCallback",value:function(){this._mutationObserver.disconnect()}},{key:"processNewElement",value:function(e){e.tagName&&e.tagName.includes("-")&&"DYNAMIC-IMPORT-REGISTRY"!=e.tagName&&"WC-REGISTRY"!=e.tagName&&"WC-AUTOLOAD"!=e.tagName&&this.registry.loadDefinition(e.tagName)}}],[{key:"tag",get:function(){return"wc-autoload"}}]),n}(p(HTMLElement));window.customElements.define(v.tag,v),e.WcAutoload=v,Object.defineProperty(e,"__esModule",{value:!0})}));
