!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/utils/utils.js"),require("@lrnwebcomponents/json-outline-schema/json-outline-schema.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/utils/utils.js","@lrnwebcomponents/json-outline-schema/json-outline-schema.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],t):t((e=e||self).EditableOutline={},e.litElement_js,e.utils_js)}(this,function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i,o,l=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return i=this,!(o=n)||"object"!=typeof o&&"function"!=typeof o?c(i):o}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var f,m,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(v,t.LitElement);var o,l,g,h=u(v);function v(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(e=h.call(this)).items=[],e.editMode=!1,e.jos=window.JSONOutlineSchema.requestAvailability(),setTimeout(function(){e.addEventListener("dblclick",e._collapseClickHandler.bind(c(e)))},0),e}return o=v,g=[{key:"styles",get:function(){return[t.css(m||(m=p(['\n:host {\n  display: block;\n  font-family: \'Noto Serif\', serif;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.button-wrapper {\n  line-height: 36px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  background-color: white;\n  display: block;\n  justify-content: space-evenly;\n}\n@media (max-width: 1000px) {\n  button span {\n    opacity: 0;\n    visibility: hidden;\n    position: absolute;\n    left: -9999px;\n  }\n}\n\nbutton {\n  height: 32px;\n  font-size: 10px;\n  margin: 0;\n  padding: 0 8px;\n}\n\nbutton span {\n  padding-left: 4px;\n  pointer-events: none;\n}\n\n#outline {\n  margin: 0;\n}\n\nul {\n  font-size: 16px;\n  line-height: 32px;\n  padding-left: 32px;\n  visibility: visible;\n  opacity: 1;\n  overflow: hidden;\n  height: auto;\n  transition: .2s ease-in-out all;\n}\n\nli {\n  font-size: 16px;\n  line-height: 32px;\n  padding: 4px;\n  transition: .2s linear all;\n}\n\nul:hover {\n  outline: 1px solid #EEEEEE;\n}\n\nli.collapsed-title {\n  background-color: #dddddd;\n}\n\nli.collapsed-title:after {\n  content: "    ( Double-click to expand )";\n}\n\nli:after {\n  transition: .4s ease-in-out all;\n  opacity: 0;\n  font-size: 11px;\n  visibility: hidden;\n}\n\nli.collapsed-title:hover:after {\n  font-style: italic;\n  opacity: 1;\n  visibility: visible;\n}\n\nul.collapsed-content {\n  visibility: hidden;\n  opacity: 0;\n  height: 0;\n}\n\nli:focus,\nli:active,\nli:hover {\n  background-color: #EEEEEE;\n  outline: 1px solid #CCCCCC;\n}\n\nsimple-icon {\n  pointer-events: none;\n}\n\nli[data-jos-published="false"] {\n  text-decoration: line-through;\n}\n      '])))]}},{key:"properties",get:function(){return r(r({},d(a(v),"properties",this)),{},{items:{type:Array},editMode:{type:Boolean,attribute:"edit-mode"},__outlineNode:{type:Object}})}},{key:"tag",get:function(){return"editable-outline"}}],(l=[{key:"render",value:function(){return t.html(f||(f=p(['\n\n<div class="button-wrapper">\n<button @click="','" id="add" title="Add a new node">\n  <simple-icon icon="icons:add"></simple-icon><span>Add</span>\n</button>\n<button @click="','" id="collapse" title="Toggle active node collapsed status">\n  <simple-icon icon="icons:swap-vert"></simple-icon><span>Toggle active</span>\n</button>\n<button @click="','" id="collapseall" title="Collapse all nodes">\n  <simple-icon icon="icons:swap-vert"></simple-icon><span>Collapse all</span>\n</button>\n<button @click="','" id="expandall" title="Expand all nodes">\n  <simple-icon icon="icons:swap-vert"></simple-icon><span>Expand all</span>\n</button>\n<button @click="','" id="down" title="Move active node down">\n  <simple-icon icon="icons:arrow-downward"></simple-icon><span>Move down</span>\n</button>\n<button @click="','" id="up" title="Move active node up">\n  <simple-icon icon="icons:arrow-upward"></simple-icon><span>Move up</span>\n</button>\n<button @click="','" id="outdent" title="Outdent active node">\n  <simple-icon icon="editor:format-indent-decrease"></simple-icon><span>Outdent</span>\n</button>\n<button @click="','" id="indent" title="Indent active node">\n  <simple-icon icon="editor:format-indent-increase"></simple-icon><span>Indent</span>\n</button>\n<button @click="','" id="duplicate" title="Duplicate active node tree">\n  <simple-icon icon="icons:content-copy"></simple-icon><span>Duplicate</span>\n</button>\n</div>\n<ul id="outline"></ul>'])),this.buttonEvents,this.buttonEvents,this.buttonEvents,this.buttonEvents,this.buttonEvents,this.buttonEvents,this.buttonEvents,this.buttonEvents,this.buttonEvents)}},{key:"_collapse",value:function(e){var t=this.getSelectionNode();t&&"LI"===t.tagName&&t.nextElementSibling&&"UL"===t.nextElementSibling.tagName&&(t.classList.toggle("collapsed-title"),t.nextElementSibling.classList.toggle("collapsed-content"))}},{key:"_expandall",value:function(e){this.shadowRoot.querySelectorAll("li").forEach(function(e){e.classList.remove("collapsed-title")}),this.shadowRoot.querySelectorAll("ul").forEach(function(e){e.classList.remove("collapsed-content")})}},{key:"_collapseall",value:function(e){this.shadowRoot.querySelectorAll("li").forEach(function(e){e.nextElementSibling&&"UL"===e.nextElementSibling.tagName&&(e.classList.add("collapsed-title"),e.nextElementSibling.classList.add("collapsed-content"))})}},{key:"_onKeyDown",value:function(e){if(this.editMode)switch(e.key){case"Enter":this._enterPressed(e);break;case"ArrowUp":this._upPressed(e);break;case"ArrowDown":this._downPressed(e);break;case"Tab":e.shiftKey?this._tabBackKeyPressed(e):this._tabKeyPressed(e)}}},{key:"_collapseClickHandler",value:function(e){for(var t,i=0,o=!0,l=n.normalizeEventPath(e);o&&l.length>i+1;)"LI"===(t=l[i]).tagName&&t.nextElementSibling&&"UL"===t.nextElementSibling.tagName&&(t.classList.toggle("collapsed-title"),t.nextElementSibling.classList.toggle("collapsed-content"),o=!1),i++}},{key:"firstUpdated",value:function(){this.__outlineNode=this.shadowRoot.querySelector("#outline"),this.__outlineNode.addEventListener("keydown",this._onKeyDown.bind(this)),this._observer=new MutationObserver(this._observeRecord.bind(this)),this._observer.observe(this.__outlineNode,{childList:!0,subtree:!0})}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){if(["editMode","items"].includes(n)){var i="".concat(n.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"-changed");t.dispatchEvent(new CustomEvent(i,{detail:{value:t[n]}}))}})}},{key:"_observeRecord",value:function(e){var t=this;for(var n in e){var i=e[n];if(i.addedNodes.length>0)for(var o in i.addedNodes)i.addedNodes[o].tagName&&("LI"===i.addedNodes[o].tagName?this.__blockScrub?i.addedNodes[o].setAttribute("contenteditable","true"):(this.jos.scrubElementJOSData(i.addedNodes[o]),i.addedNodes[o].setAttribute("contenteditable","true")):"UL"===i.addedNodes[o].tagName&&(this.__blockScrub||this.jos.scrubElementJOSData(i.addedNodes[o])))}setTimeout(function(){t.__blockScrub=!1},100)}},{key:"disconnectedCallback",value:function(){this.__outlineNode.removeEventListener("keydown",this._onKeyDown.bind(this)),this._observer.disconnect(),d(a(v.prototype),"disconnectedCallback",this).call(this)}},{key:"buttonEvents",value:function(e){switch(e.target.id){case"add":this._add(e);break;case"collapse":this._collapse(e);break;case"collapseall":this._collapseall(e);break;case"expandall":this._expandall(e);break;case"indent":this._indent();break;case"outdent":this._outdent();break;case"up":this._move("up");break;case"down":this._move("down");break;case"duplicate":this._duplicate()}}},{key:"_duplicate",value:function(){try{this.__blockScrub=!1;var e=this.getSelectionNode();if(e&&"LI"===e.tagName)if(null!==e.nextElementSibling&&"UL"===e.nextElementSibling.tagName){var t=e.nextElementSibling.cloneNode(!0);e.parentNode.insertBefore(t,e.nextElementSibling.nextElementSibling);var n=e.cloneNode(!0);e.parentNode.insertBefore(n,e.nextElementSibling.nextElementSibling)}else{var i=e.cloneNode(!0);e.parentNode.insertBefore(i,e.nextElementSibling)}}catch(e){console.log(e)}}},{key:"_move",value:function(e){try{var t=this.getSelectionNode(),n=t,i=!1;if(null==t)return!1;for(;!i&&n.parentNode;)"outline"===n.id&&(i=!0),n=n.parentNode;i&&t&&"LI"===t.tagName&&("up"===e?null!==t.previousElementSibling&&(t.nextElementSibling&&"UL"===t.nextElementSibling.tagName?("UL"===t.previousElementSibling.tagName&&(this.__blockScrub=!0,t.parentNode.insertBefore(t.previousElementSibling,t.nextElementSibling.nextElementSibling)),this.__blockScrub=!0,t.parentNode.insertBefore(t.previousElementSibling,t.nextElementSibling.nextElementSibling),t.focus()):("UL"===t.previousElementSibling.tagName&&(this.__blockScrub=!0,t.parentNode.insertBefore(t.previousElementSibling,t.nextElementSibling)),this.__blockScrub=!0,t.parentNode.insertBefore(t.previousElementSibling,t.nextElementSibling),t.focus())):"down"===e&&null!==t.nextElementSibling&&(t.nextElementSibling&&"UL"===t.nextElementSibling.tagName&&null!==t.nextElementSibling.nextElementSibling?("LI"===t.nextElementSibling.nextElementSibling.tagName&&null!==t.nextElementSibling.nextElementSibling.nextElementSibling&&"UL"===t.nextElementSibling.nextElementSibling.nextElementSibling.tagName&&(this.__blockScrub=!0,t.parentNode.insertBefore(t.nextElementSibling.nextElementSibling,t)),this.__blockScrub=!0,t.parentNode.insertBefore(t.nextElementSibling.nextElementSibling,t),t.focus()):"LI"===t.nextElementSibling.tagName&&(null!==t.nextElementSibling.nextElementSibling&&"UL"===t.nextElementSibling.nextElementSibling.tagName&&(this.__blockScrub=!0,t.parentNode.insertBefore(t.nextElementSibling,t)),this.__blockScrub=!0,t.parentNode.insertBefore(t.nextElementSibling,t),t.focus())))}catch(e){console.log(e)}}},{key:"importJsonOutlineSchemaItems",value:function(){var e=this;this.__blockScrub=!0,setTimeout(function(){for(;e.__outlineNode.firstChild;)e.__outlineNode.removeChild(e.__outlineNode.firstChild);0===e.items.length&&(e.items=b(e.jos.items));for(var t=e.jos.itemsToNodes(e.items);t.firstChild;)e.__blockScrub=!0,e.__outlineNode.appendChild(t.firstChild);return e.shadowRoot.querySelectorAll("li").forEach(function(e){e.setAttribute("contenteditable","true")}),t},0)}},{key:"exportJsonOutlineSchemaItems",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.jos.nodesToItems(this.__outlineNode,e)}},{key:"_upPressed",value:function(e){var t=this.getSelectionNode();t&&t.previousSibling&&"LI"===t.previousSibling.tagName?t.previousSibling.focus():t&&t.previousSibling&&"UL"===t.previousSibling.tagName&&t.previousSibling.firstChild&&"LI"===t.previousSibling.firstChild.tagName?t.previousSibling.firstChild.focus():t&&null==t.previousSibling&&"UL"===t.parentNode.tagName&&t.parentNode.previousSibling&&"LI"===t.parentNode.previousSibling.tagName&&t.parentNode.previousSibling.focus()}},{key:"_downPressed",value:function(e){var t=this.getSelectionNode();t&&t.nextSibling&&"LI"===t.nextSibling.tagName?t.nextSibling.focus():t&&t.nextSibling&&"UL"===t.nextSibling.tagName&&t.nextSibling.firstChild&&"LI"===t.nextSibling.firstChild.tagName?t.nextSibling.firstChild.focus():t&&null==t.nextSibling&&"UL"===t.parentNode.tagName&&t.parentNode.nextSibling&&"LI"===t.parentNode.nextSibling.tagName&&t.parentNode.nextSibling.focus()}},{key:"_tabKeyPressed",value:function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),e.detail.keyboardEvent&&(e.detail.keyboardEvent.preventDefault(),e.detail.keyboardEvent.stopPropagation(),e.detail.keyboardEvent.stopImmediatePropagation());try{this._indent()}catch(e){}}},{key:"_tabBackKeyPressed",value:function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),e.detail.keyboardEvent&&(e.detail.keyboardEvent.preventDefault(),e.detail.keyboardEvent.stopPropagation(),e.detail.keyboardEvent.stopImmediatePropagation());try{this._outdent()}catch(e){}}},{key:"_enterPressed",value:function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),e.detail.keyboardEvent&&(e.detail.keyboardEvent.preventDefault(),e.detail.keyboardEvent.stopPropagation(),e.detail.keyboardEvent.stopImmediatePropagation()),this._add()}},{key:"_add",value:function(){var e=document.createElement("li");e.setAttribute("contenteditable","true");var t=this.getSelectionNode();if(null==this.__outlineNode.querySelector("li")||!t||t.tagName&&"UL"!=t.tagName&&"LI"!=t.tagName)this.__outlineNode.appendChild(e);else{null!=t.tagName&&"LI"==t.tagName||!t.parentNode||(t=t.parentNode),null==t.nextSibling?t.parentNode.appendChild(e):t.parentNode.insertBefore(e,t.nextSibling);try{e.focus()}catch(e){}}}},{key:"_outdent",value:function(){this.__blockScrub=!0;try{var e=this.getSelectionNode();if(null==e)return!1;var t=e.parentNode;e.parentNode&&e.parentNode!=this.__outlineNode&&null!=e.parentNode.nextSibling?(e.parentNode.parentNode.insertBefore(e,e.parentNode.nextSibling),0==t.children.length&&t.remove()):e.parentNode&&e.parentNode!=this.__outlineNode&&null==e.parentNode.nextSibling&&(e.parentNode.parentNode.appendChild(e),0==t.children.length&&t.remove()),e.focus()}catch(e){console.warn(e)}}},{key:"_indent",value:function(){this.__blockScrub=!0;try{var e,t=this.getSelectionNode();if(null==t)return!1;if(null!=t.previousSibling&&"LI"===t.previousSibling.tagName)t.nextSibling&&"UL"===t.nextSibling.tagName?e=t.nextSibling:(e=document.createElement("ul"),t.parentNode.insertBefore(e,t)),e.appendChild(t),t.focus();else null!=t.previousSibling&&"UL"===t.previousSibling.tagName&&(t.previousSibling.appendChild(t),t.focus())}catch(e){console.warn(e)}}},{key:"getSelectionNode",value:function(){var e=this.getDeepSelection().anchorNode;return e&&(null==e.tagName||"LI"!=e.tagName)&&e.parentNode&&(e=e.parentNode),e}},{key:"getDeepSelection",value:function(){return this.shadowRoot.getSelection?this.shadowRoot.getSelection():n.getRange(this.__outlineNode.parentNode)?n.getRange(this.__outlineNode.parentNode):window.getSelection()}},{key:"getDeepRange",value:function(){var e=this.getDeepSelection();return e.getRangeAt&&e.rangeCount?e.getRangeAt(0):e||void 0}}])&&i(o.prototype,l),g&&i(o,g),v}();window.customElements.define(h.tag,h),e.EditableOutline=h,Object.defineProperty(e,"__esModule",{value:!0})});
