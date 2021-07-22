!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("lit"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"),require("mobx"),require("@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js")):"function"==typeof define&&define.amd?define(["lit","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js","mobx","@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).lit,e.IntersectionObserverMixin_js,e.mobx,e.haxcmsSiteStore_js)}(this,(function(e,t,n,r){"use strict";function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?b(e):t}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}var h=function(e){l(n,e);var t=v(n);function n(){var e;return c(this,n),(e=t.call(this)).endpoint="",e.addEventListener("lrs-emitter",e._lrsEmitterHander.bind(b(e))),e}return u(n,[{key:"_lrsEmitterHander",value:function(e){this._enableProperties&&this.recordStatement(e)}},{key:"recordStatement",value:function(e){console.log("options:",e);var t={method:"POST",cors:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n          mutation($data: StatementCreateInput!) {\n            createStatement(data: $data) {\n              id\n            }\n          }\n        ",variables:{data:{data:Object.assign({},{actor:{name:this.getUserName()}},e)}}},"utf8")};try{fetch(this.endpoint,t).then((function(e){return e.json()})).then((function(e){}))}catch(e){}}},{key:"getUserName",value:function(){var e=window.localStorage.getItem("lrs-name");if(!e){var t=this.makeGUID();window.localStorage.setItem("lrs-name",t)}return e}},{key:"makeGUID",value:function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}],[{key:"properties",get:function(){return{endpoint:{type:String}}}},{key:"tag",get:function(){return"lrs-bridge"}}]),n}(e.LitElement);window.customElements.define(h.tag,h);var y=function(e){l(n,e);var t=v(n);function n(){var e;return c(this,n),(e=t.call(this)).verb="",e.event="click",e.object="",e}return u(n,[{key:"updated",value:function(e){var t=this;m(f(n.prototype),"updated",this)&&m(f(n.prototype),"updated",this).call(this,e),e.forEach((function(e,n){"elementVisible"==n&&t.elementVisible&&"view"==t.event&&t._viewEventHandler(),"click"==t.event&&t.addEventListener("click",t._clickEventHandler.bind(t))}))}},{key:"_clickEventHandler",value:function(e){this.dispatchEvent(new CustomEvent("lrs-emitter",{bubbles:!0,cancelable:!0,detail:{verb:this.verb,object:this.object}}))}},{key:"_viewEventHandler",value:function(){this.dispatchEvent(new CustomEvent("lrs-emitter",{bubbles:!0,cancelable:!0,detail:{verb:this.verb,object:this.object}}))}}],[{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Lrs emitter",description:"Emit learning statements occuring in your app.",icon:"icons:android",color:"green",groups:["Emitter"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"elmsln",owner:"Penn State"}},settings:{configure:[{property:"verb",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function(){return i(i({},m(f(n),"properties",this)),{},{verb:{type:String},object:{type:String},event:{type:String}})}},{key:"tag",get:function(){return"lrs-emitter"}}]),n}(t.IntersectionObserver(e.LitElement));window.customElements.define(y.tag,y);var g=function(e){l(o,e);var t=v(o);function o(){var e;return c(this,o),e=t.call(this),n.autorun((function(){e._locationChanged(n.toJS(r.store.location))})),e}return u(o,[{key:"_locationChanged",value:function(e){var t=function(e){return e.replace(/(^\/|\/$)/,"")},n="".concat(t(e.baseUrl),"/").concat(t(e.pathname));this.recordStatement({verb:{id:"viewed"},object:{id:n}})}}],[{key:"tag",get:function(){return"lrs-bridge-haxcms"}}]),o}(h);window.customElements.define(g.tag,g)}));
