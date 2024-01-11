(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Users_roychen_Desktop_mobile_h5_0921_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DialogBox_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogBox.vue */ \"./src/components/DialogBox.vue\");\n/* harmony import */ var _utils_commonUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/commonUtil */ \"./src/utils/commonUtil.js\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    DialogBox: _DialogBox_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  name: \"MenuBar\",\n  props: {},\n  data: function data() {\n    // 資料\n    return {\n      isMenuOpen: false,\n      // 預設關閉menu\n      showDialogBox: false,\n      menuList: [{\n        path: '',\n        title: '任 務',\n        icon: 'img/icons/icons_gold_task.png',\n        isUnread: true,\n        isMaintain: false,\n        target: '_self',\n        isAvailable: true\n      }, {\n        path: '/menu/systemAnn',\n        title: '系統公告',\n        icon: 'img/icons/icons_gold_announcement.png',\n        isUnread: true,\n        isMaintain: false,\n        target: '_self',\n        isAvailable: true\n      }, {\n        path: '/menu/myTreasure',\n        title: '我的寶物',\n        icon: 'img/icons/icons_treasure.png',\n        isUnread: false,\n        isMaintain: false,\n        target: '_self',\n        isAvailable: true\n      }, {\n        path: '',\n        title: '遊戲教學',\n        icon: 'img/icons/icons_gameteaching.png',\n        isUnread: false,\n        isMaintain: false,\n        target: '_self',\n        isAvailable: true\n      }, {\n        path: '/menu/leaderboard',\n        title: '排行榜',\n        icon: 'img/icons/icons_trophy.png',\n        isUnread: false,\n        isMaintain: true,\n        target: '_self',\n        isAvailable: true\n      }, {\n        path: '/menu/customerService',\n        title: '客服',\n        icon: 'img/icons/icons_gold_service.png',\n        isUnread: false,\n        isMaintain: false,\n        target: '_blank',\n        isAvailable: true\n      }, {\n        path: '/menu/setup',\n        title: '設定',\n        icon: 'img/icons/icons_settings.png',\n        isUnread: false,\n        isMaintain: false,\n        target: '_self',\n        isAvailable: true\n      }],\n      userInfoData: {}\n    };\n  },\n  watch: {\n    isMenuOpen: function isMenuOpen(val) {\n      var _getLocalStorage;\n\n      this.userInfoData = (_getLocalStorage = Object(_utils_commonUtil__WEBPACK_IMPORTED_MODULE_4__[\"getLocalStorage\"])('displayMember')) !== null && _getLocalStorage !== void 0 ? _getLocalStorage : this.userInfoData;\n      if (!val) return;\n\n      if (this.userInfoData.level === -1) {\n        this.menuList[0].isAvailable = false;\n      } else {\n        this.menuList[0].isAvailable = true;\n      }\n    }\n  },\n  methods: {\n    handleOpenMenu: function handleOpenMenu() {\n      this.isMenuOpen = true;\n    },\n    handleClose: function handleClose() {\n      this.isMenuOpen = false;\n    },\n    handlePathClick: function handlePathClick(item) {\n      var isMaintain = item.isMaintain,\n          path = item.path,\n          target = item.target;\n      if (!path) return;\n\n      if (isMaintain) {\n        this.handleMaintainModalShow();\n        this.updateMenuList(path);\n      } else {\n        var route = this.$router.resolve({\n          path: path\n        });\n        window.open(route.href, target);\n      }\n    },\n    handleMaintainModalShow: function handleMaintainModalShow() {\n      this.showDialogBox = true;\n      this.isMenuOpen = false;\n    },\n    submitModal: function submitModal() {\n      this.showDialogBox = false;\n    },\n    updateMenuList: function updateMenuList(key) {\n      var newList = this.menuList.map(function (item) {\n        if (item.path === key) {\n          return Object(D_Users_roychen_Desktop_mobile_h5_0921_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(D_Users_roychen_Desktop_mobile_h5_0921_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, item), {}, {\n            isMaintain: false\n          });\n        }\n\n        return item;\n      });\n      this.menuList = newList;\n    }\n  },\n  computed: {\n    filterMenuList: function filterMenuList() {\n      return this.menuList.filter(function (item) {\n        return item.isAvailable;\n      });\n    }\n  },\n  mounted: function mounted() {}\n});\n\n//# sourceURL=webpack:///./src/components/MenuBar.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"13ed7294-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13ed7294-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"menu-bar-container\" },\n    [\n      _c(\n        \"div\",\n        {\n          staticClass: \"icon-hambuger-box common---filter-active\",\n          on: {\n            click: function($event) {\n              $event.stopPropagation()\n              return _vm.handleOpenMenu.apply(null, arguments)\n            }\n          }\n        },\n        [\n          _c(\"img\", {\n            staticClass: \"icon\",\n            attrs: { src: \"img/icons/icons_more.png\", alt: \"\" }\n          }),\n          _c(\"div\", { staticClass: \"common---unread\" })\n        ]\n      ),\n      _c(\n        \"div\",\n        {\n          class: [\"menu-bar-mask\", { active: _vm.isMenuOpen }],\n          on: {\n            click: function($event) {\n              if ($event.target !== $event.currentTarget) {\n                return null\n              }\n              $event.stopPropagation()\n              return _vm.handleClose()\n            }\n          }\n        },\n        [\n          _c(\n            \"div\",\n            { staticClass: \"item-wrap\" },\n            [\n              _c(\"img\", {\n                staticClass: \"icon-close\",\n                attrs: { src: \"img/icons/icons_close.png\", alt: \"\" },\n                on: {\n                  click: function($event) {\n                    $event.stopPropagation()\n                    return _vm.handleClose()\n                  }\n                }\n              }),\n              _vm._l(_vm.filterMenuList, function(item, idx) {\n                return _c(\n                  \"div\",\n                  {\n                    key: idx,\n                    staticClass: \"menu-item-box common---filter-active\",\n                    on: {\n                      click: function($event) {\n                        $event.stopPropagation()\n                        return _vm.handlePathClick(item)\n                      }\n                    }\n                  },\n                  [\n                    _c(\"img\", {\n                      class: [\"icon-path\", { disabled: item.isMaintain }],\n                      attrs: { src: item.icon, alt: \"\" }\n                    }),\n                    _c(\"span\", [_vm._v(_vm._s(item.title))]),\n                    item.isUnread\n                      ? _c(\"div\", { staticClass: \"common---unread\" })\n                      : _vm._e()\n                  ]\n                )\n              })\n            ],\n            2\n          )\n        ]\n      ),\n      _c(\n        \"DialogBox\",\n        {\n          attrs: { show: _vm.showDialogBox, title: \"提 示\", checkBtn: \"確 定\" },\n          on: { hideModal: _vm.submitModal, submit: _vm.submitModal }\n        },\n        [\n          _c(\"div\", { staticClass: \"modal-maintain-img\" }),\n          _c(\"div\", { staticClass: \"content-box\" }, [_vm._v(\"系統維護中\")])\n        ]\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/MenuBar.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2213ed7294-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n/* 寬 ---------------------------------------------------------------------------------------------------------------------------------- */\\n/* 高 ---------------------------------------------------------------------------------------------------------------------------------- */\\n.menu-bar-container[data-v-4a501398] {\\n  position: absolute;\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n  right: 0;\\n  height: 100%;\\n  padding: 0 12px;\\n}\\n.menu-bar-container .icon-hambuger-box[data-v-4a501398] {\\n  position: relative;\\n}\\n.menu-bar-container .icon-hambuger-box .icon[data-v-4a501398] {\\n  width: 27px;\\n}\\n.menu-bar-container .icon-hambuger-box .common---unread[data-v-4a501398] {\\n  position: absolute;\\n  top: 2px;\\n  right: -4px;\\n}\\n.menu-bar-container .menu-bar-mask[data-v-4a501398] {\\n  position: fixed;\\n  height: 100%;\\n  width: 0%;\\n  z-index: 999;\\n  right: -100%;\\n  top: 0;\\n  transition: 1s ease all;\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n}\\n.menu-bar-container .menu-bar-mask.active[data-v-4a501398] {\\n  width: 100%;\\n  right: 0;\\n  z-index: 999;\\n}\\n.menu-bar-container .item-wrap[data-v-4a501398] {\\n  width: 60vw;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.8);\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 6% 0 0;\\n}\\n@media (max-width: 768px) {\\n.menu-bar-container .item-wrap[data-v-4a501398] {\\n    width: 30vw;\\n}\\n}\\n@media (max-width: 428px) {\\n.menu-bar-container .item-wrap[data-v-4a501398] {\\n    width: 60vw;\\n}\\n}\\n@media (max-height: 580px) {\\n.menu-bar-container .item-wrap[data-v-4a501398] {\\n    padding: 8% 0 0;\\n}\\n}\\n.menu-bar-container .item-wrap .icon-close[data-v-4a501398] {\\n  position: absolute;\\n  width: 27px;\\n  top: 0;\\n  right: 0;\\n  margin: 20px 10px 10px;\\n  z-index: 1;\\n}\\n@media (max-height: 670px) {\\n.menu-bar-container .item-wrap .icon-close[data-v-4a501398] {\\n    margin: 14px 10px 10px;\\n}\\n}\\n.menu-bar-container .item-wrap .menu-item-box[data-v-4a501398] {\\n  font-size: 17px;\\n  color: #FFFFFF;\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  padding: 10px 0;\\n  position: relative;\\n}\\n@media (max-height: 670px) {\\n.menu-bar-container .item-wrap .menu-item-box[data-v-4a501398] {\\n    font-size: 16px;\\n}\\n}\\n@media (max-height: 630px) {\\n.menu-bar-container .item-wrap .menu-item-box[data-v-4a501398] {\\n    padding: 6px 0;\\n}\\n}\\n@media (max-height: 580px) {\\n.menu-bar-container .item-wrap .menu-item-box[data-v-4a501398] {\\n    font-size: 15px;\\n}\\n}\\n.menu-bar-container .item-wrap .menu-item-box .icon-path[data-v-4a501398] {\\n  width: 64px;\\n}\\n@media (max-height: 760px) {\\n.menu-bar-container .item-wrap .menu-item-box .icon-path[data-v-4a501398] {\\n    width: 23%;\\n}\\n}\\n@media (max-width: 768px) {\\n.menu-bar-container .item-wrap .menu-item-box .icon-path[data-v-4a501398] {\\n    width: 48px;\\n}\\n}\\n@media (max-width: 428px) {\\n.menu-bar-container .item-wrap .menu-item-box .icon-path[data-v-4a501398] {\\n    width: 64px;\\n}\\n}\\n@media (max-height: 670px) {\\n.menu-bar-container .item-wrap .menu-item-box .icon-path[data-v-4a501398] {\\n    width: 22%;\\n}\\n}\\n@media (max-height: 580px) {\\n.menu-bar-container .item-wrap .menu-item-box .icon-path[data-v-4a501398] {\\n    width: 20%;\\n}\\n}\\n.menu-bar-container .item-wrap .menu-item-box .icon-path.disabled[data-v-4a501398] {\\n  filter: grayscale(1) brightness(0.8);\\n}\\n.menu-bar-container .item-wrap .menu-item-box .common---unread[data-v-4a501398] {\\n  position: absolute;\\n  top: 8%;\\n  right: 35%;\\n}\\n.darkMode .menu-bar-container .item-wrap[data-v-4a501398] {\\n  background-color: rgba(0, 0, 0, 0.9);\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/MenuBar.vue?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=style&index=0&id=4a501398&lang=scss&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&lang=scss&scoped=true&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"7289e326\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/MenuBar.vue?./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/MenuBar.vue":
/*!************************************!*\
  !*** ./src/components/MenuBar.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=template&id=4a501398&scoped=true& */ \"./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true&\");\n/* harmony import */ var _MenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=script&lang=js& */ \"./src/components/MenuBar.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _MenuBar_vue_vue_type_style_index_0_id_4a501398_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=style&index=0&id=4a501398&lang=scss&scoped=true& */ \"./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _MenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4a501398\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/MenuBar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/MenuBar.vue?");

/***/ }),

/***/ "./src/components/MenuBar.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/MenuBar.vue?");

/***/ }),

/***/ "./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&lang=scss&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&lang=scss&scoped=true& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=style&index=0&id=4a501398&lang=scss&scoped=true& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/MenuBar.vue?");

/***/ }),

/***/ "./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_13ed7294_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"13ed7294-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=template&id=4a501398&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"13ed7294-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_13ed7294_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_13ed7294_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/MenuBar.vue?");

/***/ })

}]);