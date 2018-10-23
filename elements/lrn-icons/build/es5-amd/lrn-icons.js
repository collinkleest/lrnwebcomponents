define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnIcons = void 0;
  function _templateObject_5c120810d6f411e892e82918ec6a5631() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_5c120810d6f411e892e82918ec6a5631 = function() {
      return data;
    };
    return data;
  }
  var LrnIcons = (function(_PolymerElement) {
    babelHelpers.inherits(LrnIcons, _PolymerElement);
    function LrnIcons() {
      babelHelpers.classCallCheck(this, LrnIcons);
      return babelHelpers.possibleConstructorReturn(
        this,
        (LrnIcons.__proto__ || Object.getPrototypeOf(LrnIcons)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      LrnIcons,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrnIcons.prototype.__proto__ ||
                  Object.getPrototypeOf(LrnIcons.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrnIcons.haxProperties,
              LrnIcons.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_5c120810d6f411e892e82918ec6a5631()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Lrn icons",
                description: "Automated conversion of lrn-icons/",
                icon: "icons:android",
                color: "green",
                groups: ["Icons"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrn-icons";
          }
        }
      ]
    );
    return LrnIcons;
  })(_polymerElement.PolymerElement);
  _exports.LrnIcons = LrnIcons;
  window.customElements.define(LrnIcons.tag, LrnIcons);
});
