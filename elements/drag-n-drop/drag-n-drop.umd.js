!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).DragNDrop={})}(this,function(e){"use strict";function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach(function(t){r(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function l(e,t,r){return(l=u()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&a(o,r.prototype),o}).apply(null,arguments)}function s(e){var t="function"==typeof Map?new Map:void 0;return(s=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return l(e,arguments,i(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,e)})(e)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t,r){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(v,s(HTMLElement));var r,n,l,f,g,h=(r=v,n=u(),function(){var e,t=i(r);if(n){var o=i(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return c(this,e)});function v(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(e=h.call(this)).__dragging={},e.tag=v.tag;var r=v.properties;for(var n in r)r.hasOwnProperty(n)&&(e.hasAttribute(n)?e[n]=e.getAttribute(n):(e.setAttribute(n,r[n].value),e[n]=r[n].value));return e.template=document.createElement("template"),e.attachShadow({mode:"open"}),t||e.render(),e}return l=v,g=[{key:"properties",get:function(){return o(o({},d(i(v),"properties",this)),{},{editing:{name:"editing",type:Boolean}})}},{key:"tag",get:function(){return"drag-n-drop"}},{key:"observedAttributes",get:function(){return["editing"]}}],(f=[{key:"html",get:function(){return'\n<style>\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([editing]) .items ::slotted(.hold) {\n  border: solid 5px #ccc;\n}\n\n:host([editing]) .items ::slotted([data-droppable]) {\n  margin: 10px;\n  border: solid 3px salmon;\n  background: white;\n}\n\n:host([editing]) .items ::slotted(.hovered) {\n  background: #f4f4f4;\n  border-style: dashed;\n}\n        </style>\n<div class="items">\n  <slot></slot>\n</div>'}},{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"_copyAttribute",value:function(e,t){var r,n=this.shadowRoot.querySelectorAll(t),o=this.getAttribute(e),i=null==o?"removeAttribute":"setAttribute",a=p(n);try{for(a.s();!(r=a.n()).done;){r.value[i](e,o)}}catch(e){a.e(e)}finally{a.f()}}},{key:"_setProperty",value:function(e){var t=e.name,r=e.value;this[t]=r}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"editing",get:function(){return this.getAttribute("editing")},set:function(e){e?this.setAttribute("editing",e):this.removeAttribute("editing")}},{key:"attributeChangedCallback",value:function(e,t,r){if("editing"===e){var n=this.querySelectorAll("[data-draggable]"),o=this.querySelectorAll("[data-droppable]");if(r){var i,a=p(o);try{for(a.s();!(i=a.n()).done;){var u=i.value;u.setAttribute("droppable","true"),u.addEventListener("dragover",this.dragOver.bind(this)),u.addEventListener("dragenter",this.dragEnter.bind(this)),u.addEventListener("dragleave",this.dragLeave.bind(this)),u.addEventListener("drop",this.dragDrop.bind(this))}}catch(e){a.e(e)}finally{a.f()}var l,s=p(n);try{for(s.s();!(l=s.n()).done;){var c=l.value;c.setAttribute("draggable","true"),c.addEventListener("dragstart",this.dragStart.bind(this)),c.addEventListener("dragend",this.dragEnd.bind(this))}}catch(e){s.e(e)}finally{s.f()}}else{var d,f=p(o);try{for(f.s();!(d=f.n()).done;){var g=d.value;g.removeAttribute("droppable"),g.removeEventListener("dragover",this.dragOver.bind(this)),g.removeEventListener("dragenter",this.dragEnter.bind(this)),g.removeEventListener("dragleave",this.dragLeave.bind(this)),g.removeEventListener("drop",this.dragDrop.bind(this))}}catch(e){f.e(e)}finally{f.f()}var h,v=p(n);try{for(v.s();!(h=v.n()).done;){var y=h.value;y.removeAttribute("draggable"),y.removeEventListener("dragstart",this.dragStart.bind(this)),y.removeEventListener("dragend",this.dragEnd.bind(this))}}catch(e){v.e(e)}finally{v.f()}}}}},{key:"dragStart",value:function(e){var t=this;this.__dragging=e.target,this.__dragging.className+=" hold",setTimeout(function(){return t.__dragging.className="invisible"},0),e.stopPropagation(),e.stopImmediatePropagation()}},{key:"dragEnd",value:function(e){this.__dragging.className="fill"}},{key:"dragOver",value:function(e){e.preventDefault()}},{key:"dragEnter",value:function(e){e.preventDefault(),e.target.className+=" hovered"}},{key:"dragLeave",value:function(e){e.target.className="empty"}},{key:"dragDrop",value:function(e){e.target.className="empty",e.target.appendChild(this.__dragging)}}])&&t(l.prototype,f),g&&t(l,g),v}();window.customElements.define(g.tag,g),e.DragNDrop=g,Object.defineProperty(e,"__esModule",{value:!0})});
