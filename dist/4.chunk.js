webpackJsonp([4],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var tabItem1 = function tabItem1() {
  return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 11));
};
var tabItem2 = function tabItem2() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 14));
};
var tabItem3 = function tabItem3() {
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 17));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      items: [{
        tabName: "item1",
        isActive: false
      }, {
        tabName: "item2",
        isActive: false
      }, {
        tabName: "item3",
        isActive: false
      }],
      activeTab: 0,
      currentTab: tabItem1
    };
  },

  mounted: function mounted() {
    this.loadTabContent("item1", 0);
  },
  methods: {
    setActiveTab: function setActiveTab(index) {
      var activeIndex = index;

      // "this" removers
      var items = this.items;
      var activeTab = this.activeTab;

      items[activeIndex].isActive = true;

      // remove activeTab
      if (activeTab !== activeIndex) {
        items[activeTab].isActive = false;

        // set current activeTab
        this.activeTab = activeIndex;
      }
    },
    loadTabContent: function loadTabContent(item, index) {
      this.setActiveTab(index);

      switch (item) {
        case "item1":
          this.currentTab = tabItem1;
          break;

        case "item2":
          this.currentTab = tabItem2;
          break;

        case "item3":
          this.currentTab = tabItem3;
          break;

        default:
          this.currentTab = tabItem1;
      }
    }
  }
});

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav', {
    staticClass: "tabs1-01",
    attrs: {
      "role": "tablist"
    }
  }, [_vm._l((_vm.items), function(i, index) {
    return [_c('div', {
      staticClass: "tabs",
      class: {
        active: i.isActive
      },
      attrs: {
        "role": "tab",
        "aria-selected": i.isActive,
        "aria-setsize": _vm.items.length,
        "aria-posinset": index + 1,
        "tabindex": "0"
      },
      on: {
        "click": function($event) {
          _vm.loadTabContent(i.tabName, index)
        }
      }
    }, [_vm._v("\n        " + _vm._s(i.tabName) + "\n      ")])]
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "row col-sm-12 tabs1-01_panels"
  }, [_c('keep-alive', [_c(_vm.currentTab, {
    tag: "component"
  })], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ef62474c", esExports)
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs1_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ef62474c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Tabs1_vue__ = __webpack_require__(20);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ef62474c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Tabs1_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Tabs1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tabs1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef62474c", Component.options)
  } else {
    hotAPI.reload("data-v-ef62474c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});