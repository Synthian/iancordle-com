webpackHotUpdate("static\\development\\pages\\projects.js",{

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

/***/ "./src/components/PortfolioPage.tsx":
/*!******************************************!*\
  !*** ./src/components/PortfolioPage.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BasePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasePage */ "./src/components/BasePage.tsx");
/* harmony import */ var _PortfolioHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PortfolioHeader */ "./src/components/PortfolioHeader.tsx");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.tsx");
/* harmony import */ var _PortfolioFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PortfolioFooter */ "./src/components/PortfolioFooter.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Ian\\Documents\\Repo\\iancordle-com\\src\\components\\PortfolioPage.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var PortfolioPage = function PortfolioPage(props) {
  return __jsx(_BasePage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "IC".concat(props.title ? ' | ' : '').concat(props.title),
    bg: _styles_theme__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].bg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_PortfolioHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxW: _styles_theme__WEBPACK_IMPORTED_MODULE_4__["SIZES"].pageMaxWidth,
    px: _styles_theme__WEBPACK_IMPORTED_MODULE_4__["SIZES"].pagePadding,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    direction: 'column',
    alignItems: 'center',
    maxW: _styles_theme__WEBPACK_IMPORTED_MODULE_4__["SIZES"].pageMaxWidth,
    m: 'auto',
    px: _styles_theme__WEBPACK_IMPORTED_MODULE_4__["SIZES"].pagePadding,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    w: '100%',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, props.children), __jsx(_PortfolioFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })));
};

_c = PortfolioPage;
/* harmony default export */ __webpack_exports__["default"] = (PortfolioPage);

var _c;

$RefreshReg$(_c, "PortfolioPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9ydGZvbGlvUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy90aGVtZS50c3giXSwibmFtZXMiOlsiQmFzZVBhZ2UiLCJwcm9wcyIsInRpdGxlIiwiYmciLCJQQUxFVFRFIiwidGV4dCIsImNoaWxkcmVuIiwiUG9ydGZvbGlvUGFnZSIsIlNJWkVTIiwicGFnZU1heFdpZHRoIiwicGFnZVBhZGRpbmciLCJmb250RmFtaWx5IiwiY3VzdG9tSWNvbnMiLCJnaXRodWIiLCJwYXRoIiwibWRpR2l0aHViIiwibGlua2VkaW4iLCJtZGlMaW5rZWRpbiIsInR3aXRjaCIsIm1kaVR3aXRjaCIsInlvdXR1YmUiLCJtZGlZb3V0dWJlIiwidHJvcGh5IiwibWRpVHJvcGh5VmFyaWFudCIsInRoZW1lIiwiZGVmYXVsdFRoZW1lIiwiZm9udHMiLCJib2R5IiwiaGVhZGluZyIsIm1vbm8iLCJpY29ucyIsInByaW1hcnkiLCJjb2xvcnMiLCJvcmFuZ2UiLCJncmF5IiwiYWx0QmciLCJzZWNvbmRhcnlUZXh0IiwibGluayIsInBpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLENBQUNDLEtBQUQsRUFBVztBQUNuRCxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsS0FBSyxDQUFDQyxLQUFkLENBREYsQ0FERixFQUlFLE1BQUMsbURBQUQ7QUFBSyxLQUFDLEVBQUUsTUFBUjtBQUFnQixLQUFDLEVBQUUsTUFBbkI7QUFBMkIsTUFBRSxFQUFFRCxLQUFLLENBQUNFLEVBQXJDO0FBQXlD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QUFFdkJDLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUVoQixVQUREO0FBRUxpQixXQUFPLEVBQUVqQixVQUZKO0FBR0xrQixRQUFJLEVBQUU7QUFIRCxHQUZnQjtBQU92QkMsT0FBSyxrQ0FDQUwscURBQVksQ0FBQ0ssS0FEYixHQUVBbEIsV0FGQTtBQVBrQixFQUF6Qjs7QUFhTyxJQUFNUixPQUFPLEdBQUc7QUFDckIyQixTQUFPLEVBQUVQLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxNQUFiLENBQW9CLEtBQXBCLENBRFk7QUFFckI5QixJQUFFLEVBQUVxQixLQUFLLENBQUNRLE1BQU4sQ0FBYUUsSUFBYixDQUFrQixLQUFsQixDQUZpQjtBQUdyQkMsT0FBSyxFQUFFLFNBSGM7QUFJckI5QixNQUFJLEVBQUVtQixLQUFLLENBQUNRLE1BQU4sQ0FBYUUsSUFBYixDQUFrQixJQUFsQixDQUplO0FBS3JCRSxlQUFhLEVBQUVaLEtBQUssQ0FBQ1EsTUFBTixDQUFhRSxJQUFiLENBQWtCLEtBQWxCLENBTE07QUFNckJHLE1BQUksRUFBRWIsS0FBSyxDQUFDUSxNQUFOLENBQWFNLElBQWIsQ0FBa0IsS0FBbEI7QUFOZSxDQUFoQjtBQVNBLElBQU05QixLQUFLLEdBQUc7QUFDbkJDLGNBQVksRUFBRSxLQURLO0FBRW5CQyxhQUFXLEVBQUU7QUFGTSxDQUFkO0FBS1FjLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9qZWN0cy5qcy5lMjgxNTMzOWZlYTg0MWY5M2Y3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IHsgUEFMRVRURSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVBhZ2VQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGJnOiBzdHJpbmc7XG59XG5cbmNvbnN0IEJhc2VQYWdlOiBSZWFjdC5GQzxCYXNlUGFnZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJveCB3PXsnMTAwJSd9IGg9eycxMDAlJ30gYmc9e3Byb3BzLmJnfSBjb2xvcj17UEFMRVRURS50ZXh0fSBvdmVyZmxvdz17J2F1dG8nfT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlUGFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZVBhZ2UsIHsgQmFzZVBhZ2VQcm9wcyB9IGZyb20gJy4vQmFzZVBhZ2UnO1xuaW1wb3J0IFBvcnRmb2xpb0hlYWRlciBmcm9tICcuL1BvcnRmb2xpb0hlYWRlcic7XG5pbXBvcnQgeyBGbGV4LCBCb3ggfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IHsgUEFMRVRURSwgU0laRVMgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuaW1wb3J0IFBvcnRmb2xpb0Zvb3RlciBmcm9tICcuL1BvcnRmb2xpb0Zvb3Rlcic7XG5cbmNvbnN0IFBvcnRmb2xpb1BhZ2U6IFJlYWN0LkZDPEJhc2VQYWdlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJhc2VQYWdlIHRpdGxlPXtgSUMke3Byb3BzLnRpdGxlID8gJyB8ICcgOiAnJ30ke3Byb3BzLnRpdGxlfWB9IGJnPXtQQUxFVFRFLmJnfT5cbiAgICAgIDxQb3J0Zm9saW9IZWFkZXIgbWF4Vz17U0laRVMucGFnZU1heFdpZHRofSBweD17U0laRVMucGFnZVBhZGRpbmd9IC8+XG4gICAgICA8RmxleCBkaXJlY3Rpb249eydjb2x1bW4nfSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30gbWF4Vz17U0laRVMucGFnZU1heFdpZHRofSBtPXsnYXV0byd9IHB4PXtTSVpFUy5wYWdlUGFkZGluZ30+XG4gICAgICAgIDxCb3ggdz17JzEwMCUnfT57cHJvcHMuY2hpbGRyZW59PC9Cb3g+XG4gICAgICAgIDxQb3J0Zm9saW9Gb290ZXIgLz5cbiAgICAgIDwvRmxleD5cbiAgICA8L0Jhc2VQYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvUGFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEZWZhdWx0VGhlbWUsIHRoZW1lIGFzIGRlZmF1bHRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgeyBtZGlHaXRodWIsIG1kaUxpbmtlZGluLCBtZGlUcm9waHlWYXJpYW50LCBtZGlUd2l0Y2gsIG1kaVlvdXR1YmUgfSBmcm9tICdAbWRpL2pzJztcblxuY29uc3QgZm9udEZhbWlseSA9IGAnSUJNIFBsZXggU2FucyBDb25kZW5zZWQnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZmA7XG5cbmNvbnN0IGN1c3RvbUljb25zOiBhbnkgPSB7XG4gIGdpdGh1Yjoge1xuICAgIHBhdGg6IDxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD17bWRpR2l0aHVifSAvPlxuICB9LFxuICBsaW5rZWRpbjoge1xuICAgIHBhdGg6IDxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD17bWRpTGlua2VkaW59IC8+XG4gIH0sXG4gIHR3aXRjaDoge1xuICAgIHBhdGg6IDxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD17bWRpVHdpdGNofSAvPlxuICB9LFxuICB5b3V0dWJlOiB7XG4gICAgcGF0aDogPHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPXttZGlZb3V0dWJlfSAvPlxuICB9LFxuICB0cm9waHk6IHtcbiAgICBwYXRoOiA8cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9e21kaVRyb3BoeVZhcmlhbnR9IC8+XG4gIH1cbn07XG5cbmNvbnN0IHRoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XG4gIC4uLmRlZmF1bHRUaGVtZSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiBmb250RmFtaWx5LFxuICAgIGhlYWRpbmc6IGZvbnRGYW1pbHksXG4gICAgbW9ubzogJ01lbmxvLCBtb25vc3BhY2UnXG4gIH0sXG4gIGljb25zOiB7XG4gICAgLi4uZGVmYXVsdFRoZW1lLmljb25zLFxuICAgIC4uLmN1c3RvbUljb25zXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQQUxFVFRFID0ge1xuICBwcmltYXJ5OiB0aGVtZS5jb2xvcnMub3JhbmdlWyczMDAnXSxcbiAgYmc6IHRoZW1lLmNvbG9ycy5ncmF5Wyc5MDAnXSxcbiAgYWx0Qmc6ICcjMjMxNzE3JyxcbiAgdGV4dDogdGhlbWUuY29sb3JzLmdyYXlbJzUwJ10sXG4gIHNlY29uZGFyeVRleHQ6IHRoZW1lLmNvbG9ycy5ncmF5WyczMDAnXSxcbiAgbGluazogdGhlbWUuY29sb3JzLnBpbmtbJzMwMCddXG59O1xuXG5leHBvcnQgY29uc3QgU0laRVMgPSB7XG4gIHBhZ2VNYXhXaWR0aDogJzN4bCcsXG4gIHBhZ2VQYWRkaW5nOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=