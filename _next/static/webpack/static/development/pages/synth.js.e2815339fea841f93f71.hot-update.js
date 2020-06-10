webpackHotUpdate("static\\development\\pages\\synth.js",{

/***/ "./src/components/BasePage.tsx":
/*!*************************************!*\
  !*** ./src/components/BasePage.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Ian\\Documents\\Repo\\iancordle-com\\src\\components\\BasePage.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var BasePage = function BasePage(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, props.title)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    w: '100%',
    h: '100%',
    bg: props.bg,
    color: _styles_theme__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].text,
    overflow: 'auto',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, props.children));
};

_c = BasePage;
/* harmony default export */ __webpack_exports__["default"] = (BasePage);

var _c;

$RefreshReg$(_c, "BasePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SynthPage.tsx":
/*!**************************************!*\
  !*** ./src/components/SynthPage.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BasePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasePage */ "./src/components/BasePage.tsx");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.tsx");
/* harmony import */ var _SynthHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SynthHeader */ "./src/components/SynthHeader.tsx");
/* harmony import */ var _SynthFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SynthFooter */ "./src/components/SynthFooter.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Ian\\Documents\\Repo\\iancordle-com\\src\\components\\SynthPage.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var SynthPage = function SynthPage(props) {
  return __jsx(_BasePage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Synth".concat(props.title ? ' | ' : '').concat(props.title),
    bg: _styles_theme__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].altBg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_SynthHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    maxW: _styles_theme__WEBPACK_IMPORTED_MODULE_3__["SIZES"].pageMaxWidth,
    px: _styles_theme__WEBPACK_IMPORTED_MODULE_3__["SIZES"].pagePadding,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    direction: 'column',
    alignItems: 'center',
    maxW: _styles_theme__WEBPACK_IMPORTED_MODULE_3__["SIZES"].pageMaxWidth,
    m: 'auto',
    px: _styles_theme__WEBPACK_IMPORTED_MODULE_3__["SIZES"].pagePadding,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    w: '100%',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, props.children), __jsx(_SynthFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })));
};

_c = SynthPage;
/* harmony default export */ __webpack_exports__["default"] = (SynthPage);

var _c;

$RefreshReg$(_c, "SynthPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/styles/theme.tsx":
/*!******************************!*\
  !*** ./src/styles/theme.tsx ***!
  \******************************/
/*! exports provided: PALETTE, SIZES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PALETTE", function() { return PALETTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZES", function() { return SIZES; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");

var _jsxFileName = "C:\\Users\\Ian\\Documents\\Repo\\iancordle-com\\src\\styles\\theme.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var fontFamily = "'IBM Plex Sans Condensed', 'Helvetica Neue', Arial, sans-serif";
var customIcons = {
  github: {
    path: __jsx("path", {
      fill: "currentColor",
      d: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiGithub"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }
    })
  },
  linkedin: {
    path: __jsx("path", {
      fill: "currentColor",
      d: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiLinkedin"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    })
  },
  twitch: {
    path: __jsx("path", {
      fill: "currentColor",
      d: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiTwitch"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    })
  },
  youtube: {
    path: __jsx("path", {
      fill: "currentColor",
      d: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiYoutube"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    })
  },
  trophy: {
    path: __jsx("path", {
      fill: "currentColor",
      d: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiTrophyVariant"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    })
  }
};

var theme = _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["theme"]), {}, {
  fonts: {
    body: fontFamily,
    heading: fontFamily,
    mono: 'Menlo, monospace'
  },
  icons: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["theme"].icons), customIcons)
});

var PALETTE = {
  primary: theme.colors.orange['300'],
  bg: theme.colors.gray['900'],
  altBg: '#231717',
  text: theme.colors.gray['50'],
  secondaryText: theme.colors.gray['300'],
  link: theme.colors.pink['300']
};
var SIZES = {
  pageMaxWidth: '3xl',
  pagePadding: 4
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3ludGhQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLnRzeCJdLCJuYW1lcyI6WyJCYXNlUGFnZSIsInByb3BzIiwidGl0bGUiLCJiZyIsIlBBTEVUVEUiLCJ0ZXh0IiwiY2hpbGRyZW4iLCJTeW50aFBhZ2UiLCJhbHRCZyIsIlNJWkVTIiwicGFnZU1heFdpZHRoIiwicGFnZVBhZGRpbmciLCJmb250RmFtaWx5IiwiY3VzdG9tSWNvbnMiLCJnaXRodWIiLCJwYXRoIiwibWRpR2l0aHViIiwibGlua2VkaW4iLCJtZGlMaW5rZWRpbiIsInR3aXRjaCIsIm1kaVR3aXRjaCIsInlvdXR1YmUiLCJtZGlZb3V0dWJlIiwidHJvcGh5IiwibWRpVHJvcGh5VmFyaWFudCIsInRoZW1lIiwiZGVmYXVsdFRoZW1lIiwiZm9udHMiLCJib2R5IiwiaGVhZGluZyIsIm1vbm8iLCJpY29ucyIsInByaW1hcnkiLCJjb2xvcnMiLCJvcmFuZ2UiLCJncmF5Iiwic2Vjb25kYXJ5VGV4dCIsImxpbmsiLCJwaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxDQUFDQyxLQUFELEVBQVc7QUFDbkQsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLEtBQUssQ0FBQ0MsS0FBZCxDQURGLENBREYsRUFJRSxNQUFDLG1EQUFEO0FBQUssS0FBQyxFQUFFLE1BQVI7QUFBZ0IsS0FBQyxFQUFFLE1BQW5CO0FBQTJCLE1BQUUsRUFBRUQsS0FBSyxDQUFDRSxFQUFyQztBQUF5QyxTQUFLLEVB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QUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFaEIsVUFERDtBQUVMaUIsV0FBTyxFQUFFakIsVUFGSjtBQUdMa0IsUUFBSSxFQUFFO0FBSEQsR0FGZ0I7QUFPdkJDLE9BQUssa0NBQ0FMLHFEQUFZLENBQUNLLEtBRGIsR0FFQWxCLFdBRkE7QUFQa0IsRUFBekI7O0FBYU8sSUFBTVQsT0FBTyxHQUFHO0FBQ3JCNEIsU0FBTyxFQUFFUCxLQUFLLENBQUNRLE1BQU4sQ0FBYUMsTUFBYixDQUFvQixLQUFwQixDQURZO0FBRXJCL0IsSUFBRSxFQUFFc0IsS0FBSyxDQUFDUSxNQUFOLENBQWFFLElBQWIsQ0FBa0IsS0FBbEIsQ0FGaUI7QUFHckIzQixPQUFLLEVBQUUsU0FIYztBQUlyQkgsTUFBSSxFQUFFb0IsS0FBSyxDQUFDUSxNQUFOLENBQWFFLElBQWIsQ0FBa0IsSUFBbEIsQ0FKZTtBQUtyQkMsZUFBYSxFQUFFWCxLQUFLLENBQUNRLE1BQU4sQ0FBYUUsSUFBYixDQUFrQixLQUFsQixDQUxNO0FBTXJCRSxNQUFJLEVBQUVaLEtBQUssQ0FBQ1EsTUFBTixDQUFhSyxJQUFiLENBQWtCLEtBQWxCO0FBTmUsQ0FBaEI7QUFTQSxJQUFNN0IsS0FBSyxHQUFHO0FBQ25CQyxjQUFZLEVBQUUsS0FESztBQUVuQkMsYUFBVyxFQUFFO0FBRk0sQ0FBZDtBQUtRYyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc3ludGguanMuZTI4MTUzMzlmZWE4NDFmOTNmNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCB7IFBBTEVUVEUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VQYWdlUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBiZzogc3RyaW5nO1xufVxuXG5jb25zdCBCYXNlUGFnZTogUmVhY3QuRkM8QmFzZVBhZ2VQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cHJvcHMudGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCb3ggdz17JzEwMCUnfSBoPXsnMTAwJSd9IGJnPXtwcm9wcy5iZ30gY29sb3I9e1BBTEVUVEUudGV4dH0gb3ZlcmZsb3c9eydhdXRvJ30+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBhZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VQYWdlLCB7IEJhc2VQYWdlUHJvcHMgfSBmcm9tICcuL0Jhc2VQYWdlJztcbmltcG9ydCB7IEZsZXgsIEJveCwgRGl2aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgeyBQQUxFVFRFLCBTSVpFUyB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5pbXBvcnQgU3ludGhIZWFkZXIgZnJvbSAnLi9TeW50aEhlYWRlcic7XG5pbXBvcnQgU3ludGhGb290ZXIgZnJvbSAnLi9TeW50aEZvb3Rlcic7XG5cbmNvbnN0IFN5bnRoUGFnZTogUmVhY3QuRkM8QmFzZVBhZ2VQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QmFzZVBhZ2UgdGl0bGU9e2BTeW50aCR7cHJvcHMudGl0bGUgPyAnIHwgJyA6ICcnfSR7cHJvcHMudGl0bGV9YH0gYmc9e1BBTEVUVEUuYWx0Qmd9PlxuICAgICAgPFN5bnRoSGVhZGVyIG1heFc9e1NJWkVTLnBhZ2VNYXhXaWR0aH0gcHg9e1NJWkVTLnBhZ2VQYWRkaW5nfSAvPlxuICAgICAgPEZsZXggZGlyZWN0aW9uPXsnY29sdW1uJ30gYWxpZ25JdGVtcz17J2NlbnRlcid9IG1heFc9e1NJWkVTLnBhZ2VNYXhXaWR0aH0gbT17J2F1dG8nfSBweD17U0laRVMucGFnZVBhZGRpbmd9PlxuICAgICAgICA8Qm94IHc9eycxMDAlJ30+e3Byb3BzLmNoaWxkcmVufTwvQm94PlxuICAgICAgICA8U3ludGhGb290ZXIgLz5cbiAgICAgIDwvRmxleD5cbiAgICA8L0Jhc2VQYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ludGhQYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERlZmF1bHRUaGVtZSwgdGhlbWUgYXMgZGVmYXVsdFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCB7IG1kaUdpdGh1YiwgbWRpTGlua2VkaW4sIG1kaVRyb3BoeVZhcmlhbnQsIG1kaVR3aXRjaCwgbWRpWW91dHViZSB9IGZyb20gJ0BtZGkvanMnO1xuXG5jb25zdCBmb250RmFtaWx5ID0gYCdJQk0gUGxleCBTYW5zIENvbmRlbnNlZCcsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmYDtcblxuY29uc3QgY3VzdG9tSWNvbnM6IGFueSA9IHtcbiAgZ2l0aHViOiB7XG4gICAgcGF0aDogPHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPXttZGlHaXRodWJ9IC8+XG4gIH0sXG4gIGxpbmtlZGluOiB7XG4gICAgcGF0aDogPHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPXttZGlMaW5rZWRpbn0gLz5cbiAgfSxcbiAgdHdpdGNoOiB7XG4gICAgcGF0aDogPHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPXttZGlUd2l0Y2h9IC8+XG4gIH0sXG4gIHlvdXR1YmU6IHtcbiAgICBwYXRoOiA8cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9e21kaVlvdXR1YmV9IC8+XG4gIH0sXG4gIHRyb3BoeToge1xuICAgIHBhdGg6IDxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD17bWRpVHJvcGh5VmFyaWFudH0gLz5cbiAgfVxufTtcblxuY29uc3QgdGhlbWU6IERlZmF1bHRUaGVtZSA9IHtcbiAgLi4uZGVmYXVsdFRoZW1lLFxuICBmb250czoge1xuICAgIGJvZHk6IGZvbnRGYW1pbHksXG4gICAgaGVhZGluZzogZm9udEZhbWlseSxcbiAgICBtb25vOiAnTWVubG8sIG1vbm9zcGFjZSdcbiAgfSxcbiAgaWNvbnM6IHtcbiAgICAuLi5kZWZhdWx0VGhlbWUuaWNvbnMsXG4gICAgLi4uY3VzdG9tSWNvbnNcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBBTEVUVEUgPSB7XG4gIHByaW1hcnk6IHRoZW1lLmNvbG9ycy5vcmFuZ2VbJzMwMCddLFxuICBiZzogdGhlbWUuY29sb3JzLmdyYXlbJzkwMCddLFxuICBhbHRCZzogJyMyMzE3MTcnLFxuICB0ZXh0OiB0aGVtZS5jb2xvcnMuZ3JheVsnNTAnXSxcbiAgc2Vjb25kYXJ5VGV4dDogdGhlbWUuY29sb3JzLmdyYXlbJzMwMCddLFxuICBsaW5rOiB0aGVtZS5jb2xvcnMucGlua1snMzAwJ11cbn07XG5cbmV4cG9ydCBjb25zdCBTSVpFUyA9IHtcbiAgcGFnZU1heFdpZHRoOiAnM3hsJyxcbiAgcGFnZVBhZGRpbmc6IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==