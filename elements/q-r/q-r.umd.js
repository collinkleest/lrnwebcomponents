!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/utils/resolve-url.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/utils/resolve-url.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],t):t((e=e||self).QR={},e.polymerLegacy_js,e.resolveUrl_js)}(this,function(e,t,o){"use strict";function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t,o){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,o){var r=[null];r.push.apply(r,t);var n=new(Function.bind.apply(e,r));return o&&i(n,o.prototype),n}).apply(null,arguments)}function l(e){var t="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||(o=e,-1===Function.toString.call(o).indexOf("[native code]")))return e;var o;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return a(e,arguments,n(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(){var e,t,o=(e=['\n    <style>\n      :host {\n        display: block;\n      }\n      #link {\n        visibility: hidden;\n        opacity: 0;\n      }\n    </style>\n    <qr-code\n      id="qr"\n      data$="[[data]]"\n      modulesize$="[[modulesize]]"\n      margin$="[[margin]]"\n      format$="[[format]]"\n    ></qr-code>\n    <a href$="[[data]]" id="link">[[title]]</a>\n  '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return c=function(){return o},o}var u=t.Polymer({_template:t.html(c()),is:"q-r",behaviors:[HAXBehaviors.PropertiesBehaviors],properties:{data:{type:String},title:{type:String},modulesize:{type:Number,value:4},margin:{type:Number,value:2},format:{type:String,value:"png"}},attached:function(){this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"QR Code",description:"A code to scan from a smartphone.",icon:"hardware:developer-board",color:"grey",groups:["QR"],handles:[{type:"video",source:"data",title:"title"},{type:"image",source:"data",title:"title"},{type:"link",source:"data",title:"title"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"data",title:"QR data",description:"Source of the data for the QR code.",inputMethod:"textfield",icon:"hardware:developer-board"},{property:"title",title:"Alternate title",description:"An alternate title to go to the source of the QR code.",inputMethod:"textfield",icon:"editor:title"},{property:"modulesize",title:"Size",description:"Size of the QR code",inputMethod:"textfield",icon:"image:photo-size-select-small"},{property:"margin",title:"Margin",description:"Wrapper to the code.",inputMethod:"textfield",icon:"icons:settings-overscan"},{property:"format",title:"Output format",description:"Format to put it out.",inputMethod:"select",options:{png:"PNG",html:"HTML",svg:"SVG"},icon:"editor:bubble-chart"}],configure:[{property:"data",title:"QR data",description:"Source of the data for the QR code.",inputMethod:"textfield",icon:"hardware:developer-board"},{property:"title",title:"Alternate title",description:"An alternate title to go to the source of the QR code.",inputMethod:"textfield",icon:"editor:title"},{property:"modulesize",title:"Size",description:"Size of the QR code",inputMethod:"number",icon:"image:photo-size-select-small"},{property:"margin",title:"Margin",description:"Wrapper to the code.",inputMethod:"number",icon:"icons:settings-overscan"},{property:"format",title:"Output format",description:"Format to put it out.",inputMethod:"select",options:{png:"PNG",html:"HTML",svg:"SVG"},icon:"editor:bubble-chart"}],advanced:[]}})}}),d=function(e){function t(){var e,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(e=!(i=n(t).call(this))||"object"!=typeof i&&"function"!=typeof i?s(r):i)._defineProperty=e._defineProperty.bind(s(e)),e.attachShadow({mode:"open"}),Object.keys(t.defaultAttributes).map(e._defineProperty);var a=o.pathFromUrl(decodeURIComponent("undefined"!=typeof document?document.currentScript&&document.currentScript.src||document.baseURI:new("undefined"!=typeof URL?URL:require("url").URL)("file:"+__filename).href)),l="".concat(a,"lib/qr.js");return window.addEventListener("es-bridge-".concat("qr","-loaded"),e._qrLoaded.bind(s(e))),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("qr",l),e}var a,c,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,l(HTMLElement)),a=t,u=[{key:"defaultAttributes",get:function(){return{data:null,format:"png",modulesize:5,margin:4}}},{key:"observedAttributes",get:function(){return Object.keys(t.defaultAttributes)}}],(c=[{key:"_qrLoaded",value:function(){this.generate()}},{key:"attributeChangedCallback",value:function(e,t,o){var r=this[e+"Changed"];r&&"function"==typeof r&&r.call(this,t,o),window.ESGlobalBridge.imports.qr&&this.generate()}},{key:"_defineProperty",value:function(e){var o=this;Object.defineProperty(this,e,{get:function(){var r=o.getAttribute(e);return null===r?t.defaultAttributes[e]:r},set:function(t){o.setAttribute(e,t)}})}},{key:"getOptions",value:function(){var e=this.modulesize,t=this.margin;return{modulesize:null!==e?parseInt(e):e,margin:null!==t?parseInt(t):t}}},{key:"generate",value:function(){null!==this.data?"png"===this.format?this.generatePNG():"html"===this.format?this.generateHTML():"svg"===this.format?this.generateSVG():this.shadowRoot.innerHTML="<div>qr-code: "+this.format+" not supported!</div>":this.shadowRoot.innerHTML="<div>qr-code: no data!</div>"}},{key:"generatePNG",value:function(){try{var e=document.createElement("img");e.src=window.QRCode.generatePNG(this.data,this.getOptions()),this.clear(),this.shadowRoot.appendChild(e)}catch(e){this.shadowRoot.innerHTML="<div>qr-code: no canvas support!</div>"}}},{key:"generateHTML",value:function(){var e=window.QRCode.generateHTML(this.data,this.getOptions());this.clear(),this.shadowRoot.appendChild(e)}},{key:"generateSVG",value:function(){var e=window.QRCode.generateSVG(this.data,this.getOptions());this.clear(),this.shadowRoot.appendChild(e)}},{key:"clear",value:function(){for(;this.shadowRoot.lastChild;)this.shadowRoot.removeChild(this.shadowRoot.lastChild)}}])&&r(a.prototype,c),u&&r(a,u),t}();window.customElements.define("qr-code",d),e.QRCodeElement=d,e.QR=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=q-r.umd.js.map
