"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/sections/contact-info.jsx":
/*!**************************************************!*\
  !*** ./src/components/sections/contact-info.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Split */ \"./src/components/Split/index.jsx\");\n/* harmony import */ var _data_sections_services4_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/sections/services4.json */ \"./src/data/sections/services4.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar Services4 = function(param) {\n    var withBG = param.withBG, withPadding = param.withPadding, halfBG = param.halfBG, withOutTitle = param.withOutTitle;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"services sub-bg\",\n        __source: {\n            fileName: \"D:\\\\Documents\\\\GitHub\\\\2023-02-portfolio\\\\my-portfolio-react\\\\src\\\\components\\\\sections\\\\contact-info.jsx\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container\",\n                __source: {\n                    fileName: \"D:\\\\Documents\\\\GitHub\\\\2023-02-portfolio\\\\my-portfolio-react\\\\src\\\\components\\\\sections\\\\contact-info.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"row\",\n                    __source: {\n                        fileName: \"D:\\\\Documents\\\\GitHub\\\\2023-02-portfolio\\\\my-portfolio-react\\\\src\\\\components\\\\sections\\\\contact-info.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: _data_sections_services4_json__WEBPACK_IMPORTED_MODULE_3__.map(function(item, index) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"col-lg-4\",\n                            __source: {\n                                fileName: \"D:\\\\Documents\\\\GitHub\\\\2023-02-portfolio\\\\my-portfolio-react\\\\src\\\\components\\\\sections\\\\contact-info.jsx\",\n                                lineNumber: 12,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"item \".concat(index != _data_sections_services4_json__WEBPACK_IMPORTED_MODULE_3__.length - 1 ? \"md-mb50\" : \"\", \" wow fadeInUp\"),\n                                \"data-wow-delay\": item.id == 1 ? \".5s\" : item.id == 2 ? \".3s\" : \".8s\",\n                                __source: {\n                                    fileName: \"D:\\\\Documents\\\\GitHub\\\\2023-02-portfolio\\\\my-portfolio-react\\\\src\\\\components\\\\sections\\\\contact-info.jsx\",\n                                    lineNumber: 13,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        className: \"icon \".concat(item.icon),\n                                        __source: {\n                                            fileName: \"D:\\\\Documents\\\\GitHub\\\\2023-02-portfolio\\\\my-portfolio-react\\\\src\\\\components\\\\sections\\\\contact-info.jsx\",\n                                            lineNumber: 21,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this1\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h6\", {\n                                        __source: {\n                                            fileName: \"D:\\\\Documents\\\\GitHub\\\\2023-02-portfolio\\\\my-portfolio-react\\\\src\\\\components\\\\sections\\\\contact-info.jsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this1,\n                                        children: item.title\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"D:\\\\Documents\\\\GitHub\\\\2023-02-portfolio\\\\my-portfolio-react\\\\src\\\\components\\\\sections\\\\contact-info.jsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this1,\n                                        children: item.content\n                                    })\n                                ]\n                            })\n                        }, item.id);\n                    })\n                })\n            }),\n            halfBG && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"half-bg bottom\",\n                __source: {\n                    fileName: \"D:\\\\Documents\\\\GitHub\\\\2023-02-portfolio\\\\my-portfolio-react\\\\src\\\\components\\\\sections\\\\contact-info.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 18\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c = Services4;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services4);\nvar _c;\n$RefreshReg$(_c, \"Services4\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9jb250YWN0LWluZm8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQUNHO0FBQ2tDOztBQUU5RCxHQUFLLENBQUNHLFNBQVMsR0FBRyxRQUFRLFFBQTJDLENBQUM7UUFBakRDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxXQUFXLFNBQVhBLFdBQVcsRUFBRUMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLFlBQVksU0FBWkEsWUFBWTs7SUFDNUQsTUFBTSx1RUFDSEMsQ0FBRztRQUNGQyxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7O2lGQUMxQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7K0ZBQ3ZCRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBSzs7Ozs7Ozs4QkFDakJQLDhEQUFpQixDQUFDLFFBQVEsQ0FBUFMsSUFBSSxFQUFFQyxLQUFLO3NDQUM3QixNQUFNLHdEQUFMSixDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs0R0FDdEJELENBQUc7Z0NBQ0ZDLFNBQVMsRUFBRyxDQUFLLE9BRWhCLE1BQWEsQ0FEWkcsS0FBSyxJQUFJVixpRUFBb0IsR0FBRyxDQUFDLEdBQUcsQ0FBUyxXQUFHLENBQUUsR0FDbkQsQ0FBYTtnQ0FDZFksQ0FBYyxpQkFDWkgsSUFBSSxDQUFDSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUssT0FBR0osSUFBSSxDQUFDSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUssT0FBRyxDQUFLOzs7Ozs7Ozt5R0FHcERDLENBQUk7d0NBQUNQLFNBQVMsRUFBRyxDQUFLLE9BQVksT0FBVkUsSUFBSSxDQUFDTSxJQUFJOzs7Ozs7Ozt5R0FDakNDLENBQUU7Ozs7Ozs7a0RBQUVQLElBQUksQ0FBQ1EsS0FBSzs7eUdBQ2RDLENBQUM7Ozs7Ozs7a0RBQUVULElBQUksQ0FBQ1UsT0FBTzs7OzsyQkFYV1YsSUFBSSxDQUFDSSxFQUFFOzs7O1lBaUIzQ1QsTUFBTSx5RUFBS0UsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWdCOzs7Ozs7Ozs7O0FBR2hELENBQUM7S0EzQktOLFNBQVM7QUE2QmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9jb250YWN0LWluZm8uanN4PzU5NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3BsaXQgZnJvbSBcIi4uL1NwbGl0XCI7XHJcbmltcG9ydCBzZXJ2aWNlczREYXRhIGZyb20gXCIuLi8uLi9kYXRhL3NlY3Rpb25zL3NlcnZpY2VzNC5qc29uXCI7XHJcblxyXG5jb25zdCBTZXJ2aWNlczQgPSAoeyB3aXRoQkcsIHdpdGhQYWRkaW5nLCBoYWxmQkcsIHdpdGhPdXRUaXRsZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwic2VydmljZXMgc3ViLWJnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtzZXJ2aWNlczREYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXRlbSAke1xyXG4gICAgICAgICAgICAgICAgICBpbmRleCAhPSBzZXJ2aWNlczREYXRhLmxlbmd0aCAtIDEgPyBcIm1kLW1iNTBcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0gd293IGZhZGVJblVwYH1cclxuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PXtcclxuICAgICAgICAgICAgICAgICAgaXRlbS5pZCA9PSAxID8gXCIuNXNcIiA6IGl0ZW0uaWQgPT0gMiA/IFwiLjNzXCIgOiBcIi44c1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaWNvbiAke2l0ZW0uaWNvbn1gfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDY+e2l0ZW0udGl0bGV9PC9oNj5cclxuICAgICAgICAgICAgICAgIDxwPntpdGVtLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2hhbGZCRyAmJiA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtYmcgYm90dG9tXCI+PC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzNDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3BsaXQiLCJzZXJ2aWNlczREYXRhIiwiU2VydmljZXM0Iiwid2l0aEJHIiwid2l0aFBhZGRpbmciLCJoYWxmQkciLCJ3aXRoT3V0VGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsZW5ndGgiLCJkYXRhLXdvdy1kZWxheSIsImlkIiwic3BhbiIsImljb24iLCJoNiIsInRpdGxlIiwicCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sections/contact-info.jsx\n");

/***/ })

});