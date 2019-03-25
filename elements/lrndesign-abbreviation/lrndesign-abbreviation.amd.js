define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@polymer/paper-tooltip/paper-tooltip.js"],function(_exports,_polymerLegacy,_HAXWiring,_schemaBehaviors,_paperTooltip){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignAbbreviation=void 0;function _templateObject_0e579280459311e99f755d126f31177f(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n      abbr {\n        transition: 0.6s all ease;\n        padding: 2px 4px;\n        font-style: italic;\n        background-color: var(--abbreviation-bg, #f9f9f9);\n        text-underline-position: under;\n        text-decoration: underline double;\n        cursor: help;\n        outline: var(--abbreviation-selection, #ffff33);\n        @apply --abbreviation-main;\n      }\n      abbr:focus,\n      abbr:active,\n      abbr:hover {\n        text-decoration: none;\n        background-color: var(--abbreviation-selection, #ffff33);\n        @apply --abbreviation-hover;\n      }\n      abbr::-moz-selection,\n      abbr::selection {\n        text-decoration: none;\n        background-color: var(--abbreviation-selection, #ffff33);\n        @apply --abbreviation-selection;\n      }\n    </style>\n    <abbr tabindex=\"0\" title$=\"[[phrase]]\" id=\"abbr\">[[abbr]]</abbr>\n    <paper-tooltip for=\"abbr\" position=\"top\" offset=\"2\" animation-delay=\"300\"\n      >[[phrase]]</paper-tooltip\n    >\n  "]);_templateObject_0e579280459311e99f755d126f31177f=function _templateObject_0e579280459311e99f755d126f31177f(){return data};return data}var LrndesignAbbreviation=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_0e579280459311e99f755d126f31177f()),is:"lrndesign-abbreviation",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],properties:{abbr:{type:String,reflectToAttribute:!0,notify:!0},phrase:{type:String,reflectToAttribute:!0,notify:!0}},attached:function attached(){var props={canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Abbreviation",description:"Simple abbreviation with tooltip of full word",icon:"editor:title",color:"grey",groups:["Instructional","Term"],handles:[{type:"inline",text:"text"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"abbr",title:"Abbreviation",description:"Abbreviation word",inputMethod:"textfield",icon:"editor:title"},{property:"phrase",title:"Phrase",description:"The phrase / original words",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"abbr",title:"Abbreviation",description:"Abbreviation word",inputMethod:"textfield",icon:"editor:title"},{property:"phrase",title:"Phrase",description:"The phrase / original words",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}};this.setHaxProperties(props)}});_exports.LrndesignAbbreviation=LrndesignAbbreviation});