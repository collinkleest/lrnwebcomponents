!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-content.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js"),require("lit"),require("@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSRememberRoute.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSThemeParts.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/utils/QRCodeMixin.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSMobileMenu.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSOperationButtons.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js"),require("mobx"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/utils/utils.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-content.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js","lit","@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js","@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSRememberRoute.js","@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSThemeParts.js","@lrnwebcomponents/haxcms-elements/lib/core/utils/QRCodeMixin.js","@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSMobileMenu.js","@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSOperationButtons.js","@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js","mobx","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/utils/utils.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).CleanTwo={},e.$$0,null,null,e.lit,e.HAXCMSLitElementTheme_js,e.HAXCMSRememberRoute_js,e.HAXCMSThemeParts_js,e.QRCodeMixin_js,e.HAXCMSMobileMenu_js,e.HAXCMSOperationButtons_js,e.haxcmsSiteStore_js,null,null,e.mobx,null,null,e.utils_js)}(this,(function(e,n,t,i,o,r,s,a,l,c,p,d,m,u,b,h,f,x){"use strict";function g(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,Object.freeze(n)}var w,y,v,k,j=g(n);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){O(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}function _(e,n){return _=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},_(e,n)}function P(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=z(e);if(n){var o=z(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return P(this,t)}}function E(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=z(e)););return e}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var i=E(e,n);if(i){var o=Object.getOwnPropertyDescriptor(i,n);return o.get?o.get.call(arguments.length<3?e:t):o.value}},T.apply(this,arguments)}function R(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function H(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return F(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return F(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}var X=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&_(e,n)}(s,e);var n,t,i,r=A(s);function s(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,s),(e=r.call(this)).HAXCMSThemeSettings.autoScroll=!0,e.searchTerm="",e.__disposer=e.__disposer?e.__disposer:[],b.autorun((function(n){e.activeManifestIndex=b.toJS(d.store.activeManifestIndex),e.__disposer.push(n)})),b.autorun((function(n){d.store.activeItem&&d.store.activeItem.metadata&&d.store.activeItem.metadata.updated&&(e.pageTimestamp=b.toJS(d.store.activeItem.metadata.updated)),e.__disposer.push(n)})),e}return n=s,i=[{key:"styles",get:function(){return[].concat(H(T(z(s),"styles",this)),[o.css(k||(k=R(['\n        :host {\n          display: block;\n          font-size: 16px;\n          background-color: white;\n          --haxcms-base-styles-body-font-size:16px;\n          --hax-base-styles-a-font-size: 16px;\n          --hax-base-styles-p-font-size: 16px;\n          --hax-base-styles-list-font-size: 16px;\n          --haxcms-base-styles-body-font-family: "Helvetica Neue",Helvetica,Arial,sans-serif\n          --haxcms-base-styles-body-line-height: 1.7;\n          --hax-base-styles-list-line-height: 1.7;\n          --hax-base-styles-p-line-height: 1.7;\n          --hax-base-styles-p-letter-spacing: .2px;\n          --haxcms-base-styles-body-letter-spacing : .2px;\n          --hax-base-styles-p-min-height: auto;\n          --hax-base-styles-list-max-width: auto;\n          --haxcms-base-styles-p-min-height: auto;\n          --hax-base-styles-list-padding-bottom: auto;\n          --hax-base-styles-h1-font-size: inherit;\n          --hax-base-styles-h2-font-size: inherit;\n          --hax-base-styles-h3-font-size: inherit;\n          --hax-base-styles-h4-font-size: inherit;\n          --hax-base-styles-h5-font-size: inherit;\n          --hax-base-styles-h6-font-size: inherit;\n          --simple-tooltip-background: #000000;\n          --simple-tooltip-opacity: 1;\n          --simple-tooltip-text-color: #ffffff;\n          --simple-tooltip-delay-in: 0;\n          --simple-tooltip-border-radius: 0;\n          --hax-base-styles-a-color-visited:  var(--haxcms-color, var(--simple-colors-default-theme-purple-7));\n          --hax-base-styles-a-color: var(--haxcms-color, var(--simple-colors-default-theme-purple-7));\n          --hax-base-styles-a-color-active: #000000;\n          --site-search-result-background-color: transparent;\n          --site-search-result-background-color-hover: #F5F5F5;\n          --site-search-link-color-hover: #252737;\n          --site-search-link-text-color: #252737;\n          --site-search-link-color: #252737;\n          --site-search-result-color: #252737;\n        }\n        .link-actions {\n          margin: 0;\n          display: block;\n          padding: 0;\n          border-top: 2px solid #E6ECF1;\n          margin-top: 24px;\n          align-items: center;\n          padding-top: 24px;\n          flex-direction: row;\n          -webkit-box-align: center;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n        }\n        .link-actions .inner {\n          width: auto;\n          margin: 0;\n          display: grid;\n          padding: 0;\n          -ms-grid-rows: auto;\n          grid-column-gap: 24px;\n          -ms-grid-columns: 1fr 1fr;\n          grid-template-rows: auto;\n          grid-template-areas: "previous next";\n          grid-template-columns: 1fr 1fr;\n        }\n        site-menu-button {\n          --site-menu-button-link-decoration: none;\n          --site-menu-button-button-hover-color: var(--haxcms-color, var(--simple-colors-default-theme-purple-7));\n          color: #242A31;\n          border: 1px solid #E6ECF1;\n          margin: 0;\n          display: block;\n          padding: 0;\n          position: relative;\n          align-self: stretch;\n          box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);\n          transition: border 250ms ease;\n          align-items: center;\n          justify-self: stretch;\n          text-overflow: ellipsis;\n          border-radius: 3px;\n          flex-direction: row;\n          -moz-transition: border 250ms ease;\n          text-decoration: none;\n          background-color: #FFFFFF;\n          -webkit-box-align: center;\n          page-break-inside: avoid;\n          -ms-grid-row-align: stretch;\n          -webkit-box-orient: horizontal;\n          -webkit-transition: border 250ms ease;\n          -ms-grid-column-align: stretch;\n          -webkit-box-direction: normal;\n        }\n        replace-tag[with="site-git-corner"],\n        site-git-corner {\n          height: 40px;\n          width: 40px;\n          margin-left: -66px;\n          padding:0;\n          --github-corner-size: 40px;\n          --site-git-corner-color: black;\n          --site-git-corner-background: transparent;\n          background-color: transparent;\n          color: black;\n          padding: 8px;\n          display: block;\n          float: unset;\n        }\n        site-menu-button[edit-mode][disabled] {\n          display: block;\n        }\n        site-menu-button[type="prev"] {\n          grid-area: previous;\n        }\n        site-menu-button[type="next"] {\n          grid-area: next;\n        }\n        site-menu-button div.wrapper {\n          flex: 1;\n          margin: 0;\n          display: block;\n          padding: 16px;\n          text-overflow: ellipsis;\n          text-decoration: none;\n          font-size: 16px;\n          font-family: Content-font, Roboto, sans-serif;\n          font-weight: 500;\n          line-height: 1.5;\n          text-transform: none;\n        }\n        site-menu-button div .top {\n          font-size: 12px;\n          font-family: Content-font, Roboto, sans-serif;\n          font-weight: 400;\n          line-height: 1.625;\n          color: #444444;\n        }\n        simple-datetime {\n          color: #444444;\n        }\n        site-menu-button div .bottom {\n          font-size: 16px;\n          font-family: Content-font, Roboto, sans-serif;\n          font-weight: 500;\n          line-height: 1.5;\n          max-height: 50px;\n          overflow: hidden;\n        }\n        site-menu-button[type="next"] div {\n         text-align: left; \n        }\n        site-menu-button[type="prev"] div {\n         text-align: right; \n        }\n        site-active-title {\n          display: block;\n          padding: 0;\n          flex-wrap: wrap;\n          align-items: baseline;\n          flex-direction: row;\n          -webkit-box-align: baseline;\n          -webkit-box-lines: multiple;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n          flex: auto;\n          margin: 0;\n          background-color: white;\n        }\n        site-active-title h1 {\n          margin: 0;\n        }\n        \n        .body-wrapper {\n          flex: 1;\n          height: auto;\n          height: 100vh;\n          font-size: 16px;\n          color: #3B454E;\n          background-color: #ffffff;\n          width: 100%;\n          margin: 0 auto;\n          display: flex;\n          padding: 0;\n          transition: margin-bottom 250ms ease;\n          align-items: stretch;\n          -moz-transition: margin-bottom 250ms ease;\n          -webkit-box-align: stretch;\n          -webkit-transition: margin-bottom 250ms ease;\n          overflow-x: hidden;\n        }\n        :host([is-logged-in]) .body-wrapper {\n          height: calc(100vh - 48px);\n        }\n        :host([menu-open]) .body-wrapper .left-col {\n          display: -webkit-box;\n          display: -moz-box;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n        }\n        .body-wrapper .content-wrapper .content {\n          margin: 0;\n          padding: 0 64px 32px;\n        }\n        \n        nav {\n          display: -webkit-box;\n          display: -moz-box;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          flex: 0 0 auto;\n          display: flex;\n          z-index: 15;\n          min-width: 300px;\n          background: #F5F7F9;\n          align-items: stretch;\n          border-right: 1px solid #E6ECF1;\n          flex-direction: column;\n          -webkit-box-align: stretch;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n        }\n        .left-col {\n          flex: 1;\n          margin: 0;\n          padding: 0;\n          display: none;\n          background-color: #F5F7F9;\n        }\n        @media screen and (min-width: 900px){\n          .left-col {\n            flex: 0 0 auto;\n            width: auto;\n            z-index: 15;\n            width: 300px;\n            align-items: stretch;\n            border-right: 1px solid #E6ECF1;\n            flex-direction: column;\n            -webkit-box-align: stretch;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n          }\n        }\n        site-menu {\n          --site-menu-font-size: 15px;\n          --site-menu-color: #000000;\n          --site-menu-active-color: #E6ECF1;\n          --site-menu-item-active-item-color: var(--haxcms-color, var(--simple-colors-default-theme-purple-7));\n          overflow-y: auto;\n          flex: 1 1 auto;\n          height: 100vh;\n          width: 300px;\n          left: 0;\n          margin: 32px 0 32px 0;\n          display: block;\n          padding: 0;\n          position: sticky;\n          font-size: 15px;\n          overflow-x: hidden;\n          -webkit-overflow-scrolling: touch;\n        }\n\n        .qr-code-btn {\n          padding: 8px;\n          display: block;\n          margin-left: -60px;\n          width: 36px;\n        }\n        .content-wrapper {\n          max-width: 100%;\n          margin: 0;\n          display: flex;\n          padding: 0;\n          background-color: #ffffff;\n          flex-direction: column;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n        }\n        :host([menu-open]) .content-wrapper {\n          width: calc(100% - 300px);\n        }\n        .header {\n          position: sticky;\n          top: 0;\n          width: 100%;\n          padding: 0;\n          margin: 0;\n          z-index: 2;\n          height: 40px;\n        }\n        .header #haxcmsmobilemenubutton {\n          margin-left: -52px;\n          padding: 8px;\n        }\n        .header site-menu-content {\n          display: inline-flex;\n          float: right;\n          color: black;\n          font-size: 1.5em;\n          margin-right: -52px;\n        }\n        .content {\n          flex: 1 1 auto;\n          margin: 0px 16px;\n          display: block;\n          padding: 0;\n        }\n        \n        @media screen and (max-width: 1200px) {\n          .content {\n            width: 80vw;\n          }\n          :host([menu-open]) .content {\n            width: calc(80vw - 300px);\n          }\n        }\n        @media screen and (max-width: 400px) {\n          .content {\n            width: 200px;\n          }\n          .body-wrapper {\n            overflow-x: hidden;\n          }\n          .header site-menu-content {\n            margin-right: -40px;\n          }\n          site-menu {\n            width: 250px;\n          }\n          #haxcmsmobilemenunav {\n            min-width: 250px;\n            margin-left: 0px;\n          }\n          :host([menu-open]) #haxcmsmobilemenubutton{\n            margin-left: -52px;\n          }\n          .link-actions .inner {\n            display: block;\n          }\n          site-menu-button {\n            margin: 10px 0;\n          }\n          #slot ::slotted(iframe) {\n            width: auto;\n          } \n        }\n        @media screen and (max-width: 600px) {\n          .header site-menu-content {\n            margin-right: -40px;\n          }\n          .link-actions .inner {\n            display: block;\n          }\n          site-menu-button {\n            margin: 10px 0;\n          }\n          #slot ::slotted(iframe) {\n            width: auto;\n          }\n          .content {\n            width: 300px;\n          }\n          #slot ::slotted(*) {\n            word-break: break-all;\n          }\n          #slot ::slotted(replace-tag) {\n            overflow: hidden;\n          }\n        }\n        .right-col {\n          margin: 0;\n          padding: 0;\n          position: relative;\n          margin-right: auto;\n          max-width: 100%;\n          flex-direction: column;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n          min-height: 100%;\n          color: #3B454E;\n        }\n        .site-menu-content-wrapper {\n          display: -webkit-box;\n          display: -moz-box;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          flex: 0 0 auto;\n          padding-right: 0;\n          min-width: 240px;\n          flex: 1;\n          margin: 0;\n          display: block;\n          max-width: 100%;\n          max-height: 976px;\n          z-index: 1;\n          display: -webkit-box;\n          display: -moz-box;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          height: 100%;\n          margin: 0;\n          display: flex;\n          padding-top: 40px;\n          flex-direction: column;\n          padding-bottom: 40px;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n        }\n        .right-col site-menu-content {\n          flex: 1;\n          max-width: 240px;\n          margin: 0;\n          display: flex;\n          padding: 0;\n          background-color: #ffffff;\n          overflow: hidden;\n          position: fixed;\n          min-width: 224px;\n          counter-reset: toc;\n          flex-direction: column;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n        }\n        .right-col site-menu-content::before {\n          top: 0;\n          left: 0;\n          height: 100%;\n          content: " ";\n          position: absolute;\n          border-left: 1px solid #E6ECF1;\n        }\n        .footer {\n          margin: 0;\n          display: flex;\n          padding: 0;\n          border-top: 2px solid #E6ECF1;\n          margin-top: 24px;\n          align-items: center;\n          padding-top: 24px;\n          flex-direction: row;\n          -webkit-box-align: center;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n        }\n        .footer-left {\n          flex: 1;\n          margin: 0;\n          display: block;\n          padding: 0;\n          font-size: 12px;\n          color: #444444;\n        }\n        simple-icon-button,\n        site-rss-button,\n        replace-tag[with="site-rss-button"],\n        replace-tag[with="site-print-button"],\n        site-print-button {\n          color: black;\n          --haxcms-tooltip-color: #F5F5F5;\n          --haxcms-tooltip-background-color: #252737;\n        }\n        site-rss-button,\n        site-print-button,\n        site-modal {\n          --simple-icon-height: 24px;\n          --simple-icon-width: 24px;\n          padding: 8px;\n          display: block;\n          margin-left: -52px;\n          width: 36px;\n        }\n        site-breadcrumb {\n          --site-breadcrumb-font-size: 12px;\n        }\n      '])))])}},{key:"properties",get:function(){var e={};return T(z(s),"properties",this)&&(e=T(z(s),"properties",this)),M(M({},e),{},{searchTerm:{type:String},prevPage:{type:String},nextPage:{type:String},pageTimestamp:{type:Number}})}},{key:"tag",get:function(){return"clean-two"}}],(t=[{key:"firstUpdated",value:function(e){T(z(s.prototype),"firstUpdated",this)&&T(z(s.prototype),"firstUpdated",this).call(this,e),document.body.style.overflow="hidden",this.HAXCMSThemeSettings.scrollTarget=this.shadowRoot.querySelector(".body-wrapper")}},{key:"searchItemSelected",value:function(e){this.searchTerm=""}},{key:"searchChanged",value:function(e){var n=this,t=x.normalizeEventPath(e)[0];t.value?Promise.resolve(j).then((function(){n.searchTerm=t.value})):this.searchTerm=""}},{key:"render",value:function(){return o.html(w||(w=R(['\n      <div class="body-wrapper">\n        <div class="left-col">','</div>\n        <div class="content-wrapper">\n          <div class="content">\n            <header class="header">\n              ',"\n              ",'\n              <site-modal\n                @site-modal-click="','"\n                ?disabled="','"\n                icon="icons:search"\n                title="Search site"\n                button-label="Search"\n                part="search-btn"\n              >\n                <site-search></site-search>\n              </site-modal>\n              <replace-tag\n                with="site-print-button"\n                class="btn js-toolbar-action"\n                import-method="view"\n                part="print-btn"\n              ></replace-tag>\n              <replace-tag\n                with="site-rss-button"\n                type="rss"\n                import-method="view"\n                part="rss-btn"\n              ></replace-tag>\n              <replace-tag\n                with="site-git-corner"\n                size="small"\n                circle\n                direction="left"\n                import-method="view"\n                part="git-corner-btn"\n              ></replace-tag>\n              ','\n            </header>\n            <site-search\n              hide-input\n              part="search-btn"\n              search="','"\n              @search-item-selected="','"\n              ?hidden="','"\n            ></site-search>\n            <main>\n              <div id="haxcms-theme-top"></div>\n              <site-breadcrumb part="page-breadcrumb"></site-breadcrumb>\n              <site-active-title part="page-title"></site-active-title>\n              <article\n                id="contentcontainer"\n                ?hidden="','"\n              >\n                <section id="slot">\n                  <slot></slot>\n                </section>\n              </article>\n            </main>\n            <footer>\n              <div class="link-actions">\n                <div class="inner">\n                  <replace-tag\n                    with="site-menu-button"\n                    import-only\n                  ></replace-tag>\n                  <site-menu-button\n                    hide-label\n                    type="prev"\n                    position="right"\n                    class="navigation"\n                    @label-changed="','"\n                  >\n                    <div slot="suffix" class="wrapper">\n                      <div class="top">Previous</div>\n                      <div class="bottom">','</div>\n                    </div>\n                  </site-menu-button>\n                  <site-menu-button\n                    hide-label\n                    type="next"\n                    position="left"\n                    class="navigation"\n                    @label-changed="','"\n                  >\n                    <div slot="prefix" class="wrapper">\n                      <div class="top">Next</div>\n                      <div class="bottom">','</div>\n                    </div>\n                  </site-menu-button>\n                </div>\n              </div>\n              <div class="footer" part="footer">\n                <div class="footer-left" part="footer-left">\n                  Last updated\n                  <replace-tag with="simple-datetime" import-only></replace-tag>\n                  <simple-datetime\n                    unix\n                    .timestamp="','"\n                  ></simple-datetime>\n                </div>\n              </div>\n            </footer>\n          </div>\n        </div>\n        ',"\n      </div>\n    "])),this.HAXCMSMobileMenu(),["lg","xl"].includes(this.responsiveSize)?"":o.html(y||(y=R(['\n                    <site-menu-content\n                      .part="','"\n                      mobile\n                    ></site-menu-content>\n                  '])),this.editMode?"edit-mode-active":""),this.HAXCMSMobileMenuButton(),this.siteModalClick,this.editMode,this.QRCodeButton(),this.searchTerm,this.searchItemSelected,""==this.searchTerm,""!=this.searchTerm,this.__prevPageLabelChanged,this.prevPage,this.__nextPageLabelChanged,this.nextPage,this.pageTimestamp,["lg","xl"].includes(this.responsiveSize)?o.html(v||(v=R(['\n              <div class="right-col">\n                <div class="site-menu-content-wrapper">\n                  <site-menu-content\n                    .part="','"\n                  ></site-menu-content>\n                </div>\n              </div>\n            '])),this.editMode?"edit-mode-active":""):"")}},{key:"__prevPageLabelChanged",value:function(e){this.prevPage=e.detail.value}},{key:"__nextPageLabelChanged",value:function(e){this.nextPage=e.detail.value}},{key:"siteModalClick",value:function(e){Promise.resolve(j).then((function(e){window.SimpleModal.requestAvailability().querySelector("site-search").shadowRoot.querySelector("simple-fields-field").focus()}))}},{key:"disconnectedCallback",value:function(){for(var e in this.__disposer)this.__disposer[e].dispose();T(z(s.prototype),"disconnectedCallback",this).call(this)}}])&&S(n.prototype,t),i&&S(n,i),Object.defineProperty(n,"prototype",{writable:!1}),s}(p.HAXCMSOperationButtons(s.HAXCMSRememberRoute(l.QRCodeMixin(a.HAXCMSThemeParts(c.HAXCMSMobileMenuMixin(r.HAXCMSLitElementTheme))))));window.customElements.define(X.tag,X),e.CleanTwo=X,Object.defineProperty(e,"__esModule",{value:!0})}));
