!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"),require("lit"),require("@github/time-elements"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","lit","@github/time-elements","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ThreadedDiscussion={},null,e.lit)}(this,(function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var s=e[o](i),d=s.value}catch(e){return void n(e)}s.done?t(d):Promise.resolve(d).then(r,a)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var a=d(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l(this,n)}}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(arguments.length<3?e:n):a.value}},h.apply(this,arguments)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y,g,v,x,_,w,F,S,k,j,O=function(e){s(r,e);var t=u(r);function r(){var e;return a(this,r),(e=t.call(this)).disabled=!1,e.hidden=!1,e}return i(r,[{key:"render",value:function(){return n.html(y||(y=f(['\n      <form \n        action="','"\n        ?hidden=','\n        class="','"\n        @submit="','">\n        <label for="','">','</label>\n        <textarea\n          id="','"\n          name="','"\n          aria-describedby="','"\n        ></textarea>\n        <button type="submit">\n          ','\n          <simple-icon-lite  \n            aria-hidden="true" \n            ?hidden="','"\n            icon="','"></simple-icon-lite>\n        </button>\n      </div>\n    '])),this.submit,this.hidden||this.disabled,this.thread?"reply-form":"comment-form",this._handleSubmit,this.field,this.textareaLabel,this.field,this.field,this.thread,this.buttonLabel,!this.icon,this.icon)}},{key:"_handleSubmit",value:function(e){if(e.preventDefault(),this.demo)return this.dispatchEvent(new CustomEvent("comment-demo",{bubbles:!0,cancelable:!0,composed:!0,detail:{textarea:this.shadowRoot.querySelector("textarea"),thread:this.thread}})),!1;this.dispatchEvent(new CustomEvent("comment-submitted",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}}],[{key:"styles",get:function(){return[n.css(g||(g=f(["\n        :host {\n          display: block;\n          width: 100%;\n          transition: all 0.5s ease-in-out;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        label {\n          flex: 0 0 0%;\n          margin: 0;\n          padding: 0;\n          position: absolute;\n          left: -99999px;\n          width: 0;\n          height: 0;\n          overflow: hidden;\n        }\n        textarea {\n          flex: 1 1 100%;\n          height: var(--threaded-discussion-textarea-Height, 16px);\n          opacity: var(--threaded-discussion-textarea-Opacity, 0);\n          width: calc(\n            100% - 2 * var(--threaded-discussion-comment-Padding, 10px)\n          );\n          padding: var(--threaded-discussion-comment-Padding, 10px);\n          margin: 1px;\n          border: none;\n          resize: none;\n          transition: all 0.5s ease-in-out;\n          color: var(\n            --threaded-discussion-textarea-Color,\n            var(--threaded-discussion-Color, #4b4b4b)\n          );\n          line-height: var(\n            --threaded-discussion-textarea-LineHeight,\n            var(--threaded-discussion-LineHeight, 160%)\n          );\n          font-weight: var(--threaded-discussion-textarea-FontWeight);\n          font-size: var(\n            --threaded-discussion-textarea-FontSize,\n            var(--threaded-discussion-FontSize, 14px)\n          );\n          font-family: var(\n            --threaded-discussion-textarea-FontFamily,\n            var(--threaded-discussion-FontFamily)\n          );\n        }\n        textarea:focus,\n        :host:focus-within textarea {\n          height: var(--threaded-discussion-textarea-focus-Height, 100px);\n          opacity: var(--threaded-discussion-textarea-focus-Opacity, 1);\n        }\n        form {\n          display: flex;\n          justify-content: space-between;\n          align-items: flex-end;\n        }\n        .reply-form {\n          margin: 1px;\n        }\n        button {\n          flex: 0 0 auto;\n          text-align: center;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          margin: 1px;\n          min-height: 24px;\n          color: var(--threaded-discussion-comment-button-Color, #fff);\n          font-weight: var(--threaded-discussion-button-FontWeight);\n          font-size: var(\n            --threaded-discussion-button-FontSize,\n            var(--threaded-discussion-FontSize, 14px)\n          );\n          font-family: var(--threaded-discussion-button-FontFamily);\n          border-radius: var(--threaded-discussion-button-BorderRadius, 3px);\n        }\n        .reply-form button {\n          color: var(--threaded-discussion-reply-button-Color, #4b4b4b);\n          background-color: var(\n            --threaded-discussion-reply-button-BackgroundColor,\n            #fff\n          );\n          border: 1px solid\n            var(--threaded-discussion-reply-button-BorderColor, #4b4b4b);\n        }\n        .reply-form button:focus,\n        .reply-form button:hover {\n          color: var(--threaded-discussion-reply-button-focus-Color, #222);\n          background-color: var(\n            --threaded-discussion-reply-button-focus-BackgroundColor,\n            #fff\n          );\n          border: 1px solid\n            var(--threaded-discussion-reply-button-focus-BorderColor, #222);\n        }\n        .comment-form button {\n          font-weight: var(--threaded-discussion-comment-button-FontWeight);\n          font-size: var(--threaded-discussion-comment-button-FontSize);\n          font-family: var(--threaded-discussion-button-FontFamily);\n          color: var(--threaded-discussion-comment-button-Color, #fff);\n          background-color: var(\n            --threaded-discussion-comment-button-BackgroundColor,\n            #4b4b4b\n          );\n          border: 1px solid\n            var(--threaded-discussion-comment-button-BorderColor, #4b4b4b);\n        }\n        .comment-form button:focus,\n        .comment-form button:hover {\n          color: var(--threaded-discussion-comment-button-focus-Color, #fff);\n          background-color: var(\n            --threaded-discussion-comment-button-focus-BackgroundColor,\n            #222\n          );\n          border: 1px solid\n            var(--threaded-discussion-comment-button-focus-BorderColor, #222);\n        }\n        button simple-icon-lite {\n          margin-left: 5px;\n        }\n      "])))]}},{key:"tag",get:function(){return"threaded-discussion-form"}},{key:"properties",get:function(){return{button:{type:String},buttonLabel:{type:String,attribute:"button-label",reflect:!0},demo:{type:Boolean},disabled:{type:Boolean,attribute:"disabled",reflect:!0},field:{type:String},hidden:{type:Boolean,attribute:"hidden",reflect:!0},icon:{type:String,attribute:"icon",reflect:!0},submit:{type:String},textareaLabel:{type:String,attribute:"textarea-label",reflect:!0},thread:{type:String}}}}]),r}(n.LitElement);window.customElements.define(O.tag,O);var C=function(e){s(l,e);var t,o,c=u(l);function l(){var e;return a(this,l),(e=c.call(this)).latest=!1,e.data=[],e.dateLocale="en-US",e.dateFormat={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"},e.demo=!1,e.map={},e.params={},e.submit=window.location.href,e.__data=[],e.__loading=!1,setTimeout((function(){}),0),e}return i(l,[{key:"render",value:function(){return n.html(v||(v=f(['\n      <slot name="before-discussion"></slot>\n      ','\n      <div id="new-thread">\n        <slot name="before-new-thread"></slot>\n        <threaded-discussion-form\n          button-label="','"\n          class="comment-form"\n          @comment-demo="','"\n          @comment-submitted="','"\n          ?demo="','"\n          field="','"\n          .icon="','"\n          ?hidden="','"\n          ?disabled="','"\n          .submit="','"\n          textarea-label="','"\n        >\n        </threaded-discussion-form>\n        <slot name="after-new-thread"></slot>\n      </div>\n      ','\n      <slot name="after-discussion"></slot>\n    '])),this.latest?"":this.threads,this.commentButtonLabel||"Submit",this._handleDemo,this._handleSubmit,this.demo,this.map.body||"body",this.commentIcon,this.hidden,this.disabled,this._getPath(this.submit,this.params),this.commentTextareaLabel||"Enter comment",this.latest?this.threads:"")}},{key:"threads",get:function(){var e=this;return n.html(x||(x=f(['\n      <div id="threads">\n        <div class="thread" ?hidden="','">\n          ',"\n        </div>\n        ","\n      </div>\n    "])),!this.__loading,this.loadingText,this.sortData(this.__data).map((function(t){return n.html(_||(_=f(['\n            <div class="thread">\n              ',"\n              ",'\n              <threaded-discussion-form\n                button-label="','"\n                class="reply-form"\n                @comment-demo="','"\n                @comment-submitted="','"\n                ?demo="','"\n                field="','"\n                ?disabled="','"\n                ?hidden="','"\n                .icon="','"\n                .submit="','"\n                textarea-label="','"\n                .thread="','"\n              >\n              </threaded-discussion-form>\n            </div>\n          '])),e.getComment(t),(t.replies||[]).map((function(n){return e.getComment(n,t.id)})),e.replyButtonLabel||"Reply",e._handleDemo,e._handleSubmit,e.demo,e.map.replyBody||e.map.body||"body",e.disabled,e.hidden,e.replyIcon,e._getPath(e.submit,e._getThreadParams(t.id)),e.replyTextareaLabel||"Enter reply",t.id)})))}},{key:"getComment",value:function(e,t){return n.html(w||(w=f(['\n      <div\n        aria-describedby="','"\n        class="comment ','"\n        id="comment-','"\n      >\n        <div class="comment-header">\n          <lrndesign-avatar\n            .accent-color="','"\n            .label="'," ",'"\n            .src="','"\n            two-chars\n          >\n          </lrndesign-avatar>\n          <div>\n            <p class="comment-name">'," ",'</p>\n            <p class="comment-date">\n              ','\n            </p>\n          </div>\n        </div>\n        <div class="comment-body">\n          ',"\n        </div>\n      </div>\n    "])),t||"",t?"comment-reply":"",e.id,e.color,e.firstName,e.lastName,e.avatar,e.firstName,e.lastName,this.relativeDates?n.html(F||(F=f(['\n                    <relative-time .datetime="','">\n                      ',"\n                    </relative-time>\n                  "])),e.date,this._getDate(e.date)):n.html(S||(S=f(['\n                    <local-time\n                      month="','"\n                      day="','"\n                      year="','"\n                      hour="','"\n                      minute="','"\n                      second="','"\n                      time-zone-name="short"\n                      .datetime="','"\n                    >\n                      ',"\n                    </local-time>\n                  "])),this.dateFormat&&this.dateFormat.month?this.dateFormat.month:"long",this.dateFormat&&this.dateFormat.day?this.dateFormat.day:"numeric",this.dateFormat&&this.dateFormat.year?this.dateFormat.year:"numeric",this.dateFormat&&this.dateFormat.hour?this.dateFormat.hour:"2-digit",this.dateFormat&&this.dateFormat.minute?this.dateFormat.minute:"2-digit",this.dateFormat&&this.dateFormat.second?this.dateFormat.second:"2-digit",e.date,this._getDate(e.date)),(e.body||"").split(/[\r\n]+/).map((function(e){return n.html(k||(k=f([" <p>","</p> "])),e)})))}},{key:"updated",value:function(e){var t=this;h(d(l.prototype),"updated",this)&&h(d(l.prototype),"updated",this).call(this,e),e.forEach((function(e,n){["params","source"].includes(n)&&t.source&&(t.__loading=!0,t.fetchDiscussion())}))}},{key:"sortData",value:function(e){var t=this;return e.sort((function(e,n){var r="string"==typeof e.date?Date.parse(e.date):e.date,a="string"==typeof n.date?Date.parse(n.date):n.date;return t.latest?a-r:r-a}))}},{key:"_handleRawData",value:function(e){var t=this;return this.__loading=!1,console.log(e),this._getArray(e||[]).filter((function(e){return!t._getMap(e,"thread","replyThread")})).map((function(n){var r=t._getMap(n,"id"),a=t._getMap(n,"replies")||(e||[]).filter((function(e){return t._getMap(e,"thread","replyThread")===r}));return{id:r,firstName:t._getMap(n,"firstName"),lastName:t._getMap(n,"lastName"),avatar:t._getMap(n,"avatar"),body:t._getMap(n,"body"),color:t._getMap(n,"color"),date:t._getMap(n,"date"),replies:t._getArray(a||[]).map((function(e){return{id:t._getMap(e,"id","replyId"),thread:t._getMap(e,"thread","replyThread")||r,firstName:t._getMap(e,"firstName","replyFirstName"),lastName:t._getMap(e,"lastName","replyLastName"),avatar:t._getMap(e,"avatar","replyAvatar"),body:t._getMap(e,"body","replyBody"),color:t._getMap(e,"color","replyColor"),date:t._getMap(e,"date","replyDate")}}))}}))}},{key:"_getMap",value:function(e,t,n,r){return e[this._mapProp(t,n,r)]}},{key:"_mapProp",value:function(e,t,n){var r=this.map||{};return t=t||e,r[n=n||t]||r[t]||e}},{key:"_handleSubmit",value:function(e){this.fetchDiscussion()}},{key:"_handleDemo",value:function(e){if(e.detail&&e.detail.textarea){var t={},n=this.__data;if(t.id="comment-".concat(Date.now()),t.firstName="DEMO",t.lastName="USER",t.date=this._getDate(new Date),t.body=e.detail.textarea.value,e.detail.thread){var r=n.filter((function(t){return t.id===e.detail.thread})),a=r?r[0]:void 0;t.thread=e.detail.thread,a?a.replies=[].concat(p(a.replies),[t]):n.push(t)}else t.replies=[],n.push(t);this.__data=[],this.__data=n,e.detail.textarea.value=""}}},{key:"fetchDiscussion",value:(t=regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this._getPath(this.source,this.params)).then((function(e){return e.json()})).then((function(e){return t.__data=t._handleRawData(e)}));case 2:case"end":return e.stop()}}),e,this)})),o=function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function s(e){r(i,a,o,s,d,"next",e)}function d(e){r(i,a,o,s,d,"throw",e)}s(void 0)}))},function(){return o.apply(this,arguments)})},{key:"_getArray",value:function(e){return"array"==typeof e?e:Object.keys(e||{}).map((function(t){var n=e[t];return n.id=t,n}))}},{key:"_getDate",value:function(e){var t="string"==typeof this.dateFormat?JSON.parse(this.dateFormat):this.dateFormat;return e&&new Date(e)?new Date(e).toLocaleString(this.dateLocale,t):""}},{key:"_getThreadParams",value:function(e){var t=this.params;return t[this._mapProp("id")]=e,t}},{key:"_getPath",value:function(e,t){var n=Object.keys(t||{}).map((function(e){return"".concat(encodeURI(e),"=").concat(encodeURI(t[e]))})).join("&");return n?"".concat(e,"?").concat(n):e}}],[{key:"styles",get:function(){return[n.css(j||(j=f(["\n        :host {\n          display: block;\n          font-size: var(--threaded-discussion-FontSize, 14px);\n          line-height: var(--threaded-discussion-LineHeight, 160%);\n          color: var(--threaded-discussion-Color, #95989a);\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        #threads {\n          background-color: var(\n            --threaded-discussion-threads-BackgroundColor,\n            #eaeaea\n          );\n          padding: 1px;\n          width: calc(100% - 2px);\n          margin: var(--threaded-discussion-threads-Margin, 0);\n        }\n        #new-thread {\n          background-color: var(\n            --threaded-discussion-new-thread-BackgroundColor,\n            var(--threaded-discussion-threads-BackgroundColor, #eaeaea)\n          );\n          padding: 2px 1px;\n          width: calc(100% - 2px);\n          margin: var(\n            --threaded-discussion-new-thread-Margin,\n            var(--threaded-discussion-threads-Margin, 0)\n          );\n        }\n        .thread:focus-within,\n        #new-thread:focus-within {\n          border-left: var(\n            --threaded-discussion-thread-focus-BorderLeft,\n            4px solid blue\n          );\n        }\n        #new-thread:focus-within {\n          border-left: var(--threaded-discussion-new-thread-focus-BorderLeft);\n        }\n        .thread > *,\n        #new-thread > * {\n          background-color: var(\n            --threaded-discussion-comment-BackgroundColor,\n            #fff\n          );\n        }\n        .comment {\n          margin: 1px 1px 0;\n          padding: var(--threaded-discussion-comment-Padding, 10px) 0;\n        }\n        .reply-form {\n          margin: 0;\n          width: calc(\n            100% -\n              var(\n                --threaded-discussion-reply-indent,\n                calc(2 * var(--threaded-discussion-comment-Padding, 10px))\n              )\n          );\n        }\n        .reply-form,\n        .comment-reply {\n          margin-left: var(\n            --threaded-discussion-reply-indent,\n            calc(2 * var(--threaded-discussion-comment-Padding, 10px))\n          );\n        }\n        .comment-header {\n          display: flex;\n          align-items: stretch;\n          justify-content: space-between;\n          margin-bottom: var(--threaded-discussion-comment-Padding, 10px);\n        }\n        .comment-header,\n        .comment-body {\n          padding: 0 var(--threaded-discussion-comment-Padding, 10px);\n        }\n        lrndesign-avatar {\n          margin-right: var(--threaded-discussion-comment-Padding, 10px);\n        }\n        .comment-header > div {\n          display: flex;\n          flex-direction: column;\n          justify-content: space-evenly;\n          align-items: flex-start;\n          flex: 1 1 auto;\n        }\n        .comment-name {\n          margin: 0;\n          font-size: var(\n            --threaded-discussion-name-FontSize,\n            calc(1.1 * var(--threaded-discussion-FontSize, 14px))\n          );\n          font-weight: var(--threaded-discussion-name-FontWeight, bold);\n          font-family: var(--threaded-discussion-name-FontFamily);\n          color: var(--threaded-discussion-name-Color, #4b4b4b);\n        }\n        .comment-date {\n          margin: 0;\n          font-size: var(\n            --threaded-discussion-date-FontSize,\n            calc(0.8 * var(--threaded-discussion-FontSize, 14px))\n          );\n          font-weight: var(--threaded-discussion-date-FontWeight, normal);\n          font-family: var(--threaded-discussion-date-FontFamily);\n          color: var(\n            --threaded-discussion-date-Color,\n            var(--threaded-discussion-Color, #95989a)\n          );\n        }\n        .comment-body {\n          font-size: var(--threaded-discussion-FontSize, 14px);\n        }\n      "])))]}},{key:"tag",get:function(){return"threaded-discussion"}},{key:"properties",get:function(){return{latest:{type:Boolean,attribute:"latest",reflect:!0},commentButtonLabel:{type:String,attribute:"comment-button-label"},commentTextareaLabel:{type:String,attribute:"comment-textarea-label"},commentIcon:{type:String,attribute:"comment-icon"},data:{type:Object},dateLocale:{type:String},dateFormat:{type:Object},demo:{type:Boolean},loadingText:{type:String,attribute:"loading-text"},map:{type:Object},params:{type:Object},relativeDates:{attribute:"relative-dates",type:Boolean,reflect:!0},replyButtonLabel:{type:String,attribute:"reply-button-label",reflect:!0},replyTextareaLabel:{type:String,attribute:"reply-textarea-label",reflect:!0},replyIcon:{type:String,attribute:"reply-icon",reflect:!0},source:{type:String},submit:{type:String},__data:{type:Array},__loading:{type:Boolean}}}}]),l}(n.LitElement);window.customElements.define(C.tag,C),e.ThreadedDiscussion=C,Object.defineProperty(e,"__esModule",{value:!0})}));
