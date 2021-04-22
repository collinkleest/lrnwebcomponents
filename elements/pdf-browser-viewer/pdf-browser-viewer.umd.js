!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/elements/dom-if.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/elements/dom-if.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],t):t((e=e||self).PdfBrowserViewer={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var l=o(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return i(this,n)}}var a,p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(s,t.PolymerElement);var o,i,p,c=l(s);function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),c.apply(this,arguments)}return o=s,p=[{key:"template",get:function(){return t.html(a||(e=['\n      <style>\n        :host {\n          display: none;\n        }\n        :host([file]) {\n          display: inherit;\n        }\n        div.card {\n          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);\n        }\n      </style>\n\n      <template is="dom-if" if="[[card]]">\n        <div heading="[[heading]]" elevation="[[elevation]]">\n          <div class="card-content">\n            <object\n              data="[[file]]"\n              type="application/pdf"\n              width="[[width]]"\n              height="[[height]]"\n            >\n              <p>\n                {{notSupportedMessage}}\n                <a href="[[file]]">{{notSupportedLinkMessage}}</a>\n              </p>\n            </object>\n          </div>\n          <div class="card-actions">\n            <button on-click="_download">[[downloadLabel]]</button>\n          </div>\n        </div>\n      </template>\n\n      <template is="dom-if" if="[[!card]]">\n        <object\n          data="[[file]]"\n          type="application/pdf"\n          width="[[width]]"\n          height="[[height]]"\n        >\n          <p>\n            {{notSupportedMessage}}\n            <a href="[[file]]">{{notSupportedLinkMessage}}</a>\n          </p>\n        </object>\n      </template>\n    '],n||(n=e.slice(0)),a=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))));var e,n}},{key:"tag",get:function(){return"pdf-browser-viewer"}},{key:"properties",get:function(){return{file:{type:String,value:void 0,reflectToAttribute:!0},notSupportedMessage:{type:String,value:"It appears your Web browser is not configured to display PDF files. No worries, just"},notSupportedLinkMessage:{type:String,value:"click here to download the PDF file."},height:{type:String,value:"400px"},width:{type:String,value:"100%"},card:{type:Boolean,value:!1},downloadLabel:{type:String,value:"Download"},elevation:{type:String,value:"1"}}}}],(i=[{key:"clear",value:function(){this.file=void 0}},{key:"_download",value:function(){window.location=this.file}}])&&n(o.prototype,i),p&&n(o,p),s}();window.customElements.define(p.tag,p),e.PdfBrowserViewer=p,Object.defineProperty(e,"__esModule",{value:!0})});
