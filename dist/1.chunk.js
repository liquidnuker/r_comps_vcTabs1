webpackJsonp([1],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_componentinjector_js__ = __webpack_require__(14);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [{
        tabName: 'item1',
        isActive: false
      }, {
        tabName: 'item2',
        isActive: false
      }, {
        tabName: 'item3',
        isActive: false
      }],
      tabContent: 'item1',
      activeTab: 0
    };
  },

  mounted: function mounted() {
    this.loadTabContent("item1");
  },
  methods: {
    indexFinder: function indexFinder(value) {
      for (var key = 0; key < this.items.length; key++) {
        if (this.items[key].tabName == value) {
          return key;
        }
      }
    },
    loadTabContent: function loadTabContent(item) {
      this.tabContent = item;

      var activeIndex = this.indexFinder(item);
      this.items[activeIndex].isActive = true;

      // compare activeIndex to activeTab
      if (this.activeTab !== activeIndex) {
        this.items[this.activeTab].isActive = false;

        // set current activeTab
        this.activeTab = activeIndex;
      }

      switch (item) {
        case "item1":
          this.loadTabItem1();
          break;

        case "item2":
          this.loadTabItem2();
          break;

        case "item3":
          this.loadTabItem3();
          break;

        default:
          this.loadTabItem1();
      }
    },
    loadTabItem1: function loadTabItem1() {
      var TabItem1 = function TabItem1(resolve) {
        __webpack_require__.e/* require.ensure */(4).then((function () {
          resolve(__webpack_require__(9));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      };
      __WEBPACK_IMPORTED_MODULE_0__js_componentinjector_js__["a" /* inject */]("#tabs1_item1_mount", TabItem1);
    },
    loadTabItem2: function loadTabItem2() {
      var TabItem2 = function TabItem2(resolve) {
        __webpack_require__.e/* require.ensure */(3).then((function () {
          resolve(__webpack_require__(10));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      };
      __WEBPACK_IMPORTED_MODULE_0__js_componentinjector_js__["a" /* inject */]("#tabs1_item2_mount", TabItem2);
    },
    loadTabItem3: function loadTabItem3() {
      var TabItem3 = function TabItem3(resolve) {
        __webpack_require__.e/* require.ensure */(2).then((function () {
          resolve(__webpack_require__(11));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      };
      __WEBPACK_IMPORTED_MODULE_0__js_componentinjector_js__["a" /* inject */]("#tabs1_item3_mount", TabItem3);
    }
  }
});

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inject; });
// for injecting components in mounts
var inject = function inject(mount, component) {
  new Vue({
    el: mount,
    render: function render(h) {
      return h(component);
    }
  });
};



/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav', {
    staticClass: "tabs1-01"
  }, [_vm._l((_vm.items), function(i) {
    return [_c('div', {
      staticClass: "tabs",
      class: {
        active: i.isActive
      },
      on: {
        "click": function($event) {
          _vm.loadTabContent(i.tabName)
        }
      }
    }, [_vm._v("\n        " + _vm._s(i.tabName) + "\n      ")])]
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "row col-sm-12 tabs1-01_content"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabContent === 'item1'),
      expression: "tabContent === 'item1'"
    }]
  }, [_c('div', {
    attrs: {
      "id": "tabs1_item1_mount"
    }
  }, [_vm._v("      \n        loading...    \n      ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabContent === 'item2'),
      expression: "tabContent === 'item2'"
    }]
  }, [_c('div', {
    attrs: {
      "id": "tabs1_item2_mount"
    }
  }, [_vm._v("   \n        loading...       \n      ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabContent === 'item3'),
      expression: "tabContent === 'item3'"
    }]
  }, [_c('div', {
    attrs: {
      "id": "tabs1_item3_mount"
    }
  }, [_vm._v("   \n        loading...       \n      ")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ef62474c", module.exports)
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\WINDOWS\\GD2\\web\\testfiles\\webpack2\\_node_dev\\git_vueTabs\\src\\vue-components\\Tabs1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
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
})()}

module.exports = Component.exports


/***/ })

});