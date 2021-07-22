!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).Hal9000={},e.lit)}(this,(function(e,n){"use strict";function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function a(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?c(e):n}function l(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=i(e);if(n){var o=i(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return u(this,t)}}function d(e,n,t){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var a=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=i(e)););return e}(e,n);if(a){var o=Object.getOwnPropertyDescriptor(a,n);return o.get?o.get.call(t):o.value}})(e,n,t||e)}function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var h,y,p=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(g,e);var t,r,u,p=l(g);function g(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,g),(e=p.call(this)).commands={},e.respondsTo="(hal)",e.debug=!1,e.pitch=.9,e.rate=.9,e.language="en-US",window.Hal9000=window.Hal9000||{},window.Hal9000.instance=c(e);var n=e.pathFromUrl(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("hal-9000.umd.js",document.baseURI).href)),t="".concat(n,"lib/annyang/annyang.min.js");if(window.addEventListener("es-bridge-annyang-loaded",e._annyangLoaded.bind(c(e))),window.ESGlobalBridge.requestAvailability().load("annyang",t),void 0!==window.speechSynthesis){e.synth=window.speechSynthesis,e.voices=e.synth.getVoices();for(var a=0;a<e.voices.length;a++)e.voices[a].default&&(e.defaultVoice=e.voices[a].name)}return e}return t=g,u=[{key:"styles",get:function(){return[n.css(y||(y=f(["\n:host {\n  display: block;\n}\n      "])))]}},{key:"properties",get:function(){return a(a({},d(i(g),"properties",this)),{},{commands:{name:"commands",type:Object},respondsTo:{name:"respondsTo",type:String,attribute:"responds-to"},debug:{name:"debug",type:Boolean},auto:{name:"auto",type:Boolean,reflect:!0},enabled:{name:"enabled",type:Boolean,reflect:!0},pitch:{name:"pitch",type:Number,reflect:!0},rate:{name:"rate",type:Number,reflect:!0},language:{name:"language",type:String,reflect:!0}})}},{key:"tag",get:function(){return"hal-9000"}}],(r=[{key:"render",value:function(){return n.html(h||(h=f(["\n\n<slot></slot>"])))}},{key:"pathFromUrl",value:function(e){return e.substring(0,e.lastIndexOf("/")+1)}},{key:"clickObject",value:function(e){this.__text=e,this.commands[e].object.click(),this.commands[e].object.focus()}},{key:"_commandsChanged",value:function(e){this.addCommands(e)}},{key:"addCommands",value:function(e){this.annyang&&this.annyang.addCommands(e)}},{key:"speak",value:function(e){this.__text=e,this.synth?(this.utter=new SpeechSynthesisUtterance(this.__text),this.utter.pitch=this.pitch,this.utter.rate=this.rate,this.utter.lang=this.language,this.utter.voice=this.defaultVoice,this.synth.speak(this.utter)):console.warn("I have no voice...")}},{key:"_annyangLoaded",value:function(){if(this.annyang=window.annyang,this.annyang){this.annyang.addCommands(this.commands),this.annyang.debug(this.debug),this.auto?this.annyang.start({autoRestart:!0,continuous:!0}):this.enabled&&this.annyang.start();var e=new CustomEvent("hal-9000-online",{bubbles:!0,cancelable:!1,detail:!0});this.dispatchEvent(e)}}},{key:"_respondsToChanged",value:function(e,n){this.annyang&&this.annyang.removeCommands();var t={};for(var o in this.commands)o.replace(n,e)!==o?t[o.replace(n,e)]=this.commands[o]:t[o]=this.commands[o];t.length>0&&(this.commands=a({},t))}},{key:"_autoChanged",value:function(e){this.enabled=e}},{key:"_enabledChanged",value:function(e){this.annyang&&(e?this.auto?this.annyang.start({autoRestart:!0,continuous:!0}):this.annyang.start():this.annyang.abort())}},{key:"_debugChanged",value:function(e,n){this.annyang&&this.annyang.debug(e)}},{key:"updated",value:function(e){var n=this;e.forEach((function(e,t){"commands"==t&&n._commandsChanged(n[t],e),"respondsTo"==t&&n._respondsToChanged(n[t],e),"debug"==t&&n._debugChanged(n[t],e),"auto"==t&&n._autoChanged(n[t],e),"enabled"==t&&n._enabledChanged(n[t],e)}))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("es-bridge-annyang-loaded",this._annyangLoaded.bind(this)),d(i(g.prototype),"disconnectedCallback",this).call(this)}}])&&o(t.prototype,r),u&&o(t,u),g}(n.LitElement);window.customElements.define(p.tag,p),window.Hal9000=window.Hal9000||{},window.Hal9000.requestAvailability=function(){window.Hal9000.instance||(window.Hal9000.instance=new p)},e.Hal9000=p,Object.defineProperty(e,"__esModule",{value:!0})}));
