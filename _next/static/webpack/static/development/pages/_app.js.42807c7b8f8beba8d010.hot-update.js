webpackHotUpdate("static\\development\\pages\\_app.js",{

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
  altBg: '#262318',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLnRzeCJdLCJuYW1lcyI6WyJmb250RmFtaWx5IiwiY3VzdG9tSWNvbnMiLCJnaXRodWIiLCJwYXRoIiwibWRpR2l0aHViIiwibGlua2VkaW4iLCJtZGlMaW5rZWRpbiIsInR3aXRjaCIsIm1kaVR3aXRjaCIsInlvdXR1YmUiLCJtZGlZb3V0dWJlIiwidHJvcGh5IiwibWRpVHJvcGh5VmFyaWFudCIsInRoZW1lIiwiZGVmYXVsdFRoZW1lIiwiZm9udHMiLCJib2R5IiwiaGVhZGluZyIsIm1vbm8iLCJpY29ucyIsIlBBTEVUVEUiLCJwcmltYXJ5IiwiY29sb3JzIiwib3JhbmdlIiwiYmciLCJncmF5IiwiYWx0QmciLCJ0ZXh0Iiwic2Vjb25kYXJ5VGV4dCIsImxpbmsiLCJwaW5rIiwiU0laRVMiLCJwYWdlTWF4V2lkdGgiLCJwYWdlUGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLG1FQUFoQjtBQUVBLElBQU1DLFdBQWdCLEdBQUc7QUFDdkJDLFFBQU0sRUFBRTtBQUNOQyxRQUFJLEVBQUU7QUFBTSxVQUFJLEVBQUMsY0FBWDtBQUEwQixPQUFDLEVBQUVDLGlEQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsR0FEZTtBQUl2QkMsVUFBUSxFQUFFO0FBQ1JGLFFBQUksRUFBRTtBQUFNLFVBQUksRUFBQyxjQUFYO0FBQTBCLE9BQUMsRUFBRUcsbURBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERSxHQUphO0FBT3ZCQyxRQUFNLEVBQUU7QUFDTkosUUFBSSxFQUFFO0FBQU0sVUFBSSxFQUFDLGNBQVg7QUFBMEIsT0FBQyxFQUFFSyxpREFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLEdBUGU7QUFVdkJDLFNBQU8sRUFBRTtBQUNQTixRQUFJLEVBQUU7QUFBTSxVQUFJLEVBQUMsY0FBWDtBQUEwQixPQUFDLEVBQUVPLGtEQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREMsR0FWYztBQWF2QkMsUUFBTSxFQUFFO0FBQ05SLFFBQUksRUFBRTtBQUFNLFVBQUksRUFBQyxjQUFYO0FBQTBCLE9BQUMsRUFBRVMsd0RBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQWJlLENBQXpCOztBQWtCQSxJQUFNQyxLQUFtQixtQ0FDcEJDLHFEQURvQjtBQUV2QkMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRWhCLFVBREQ7QUFFTGlCLFdBQU8sRUFBRWpCLFVBRko7QUFHTGtCLFFBQUksRUFBRTtBQUhELEdBRmdCO0FBT3ZCQyxPQUFLLGtDQUNBTCxxREFBWSxDQUFDSyxLQURiLEdBRUFsQixXQUZBO0FBUGtCLEVBQXpCOztBQWFPLElBQU1tQixPQUFPLEdBQUc7QUFDckJDLFNBQU8sRUFBRVIsS0FBSyxDQUFDUyxNQUFOLENBQWFDLE1BQWIsQ0FBb0IsS0FBcEIsQ0FEWTtBQUVyQkMsSUFBRSxFQUFFWCxLQUFLLENBQUNTLE1BQU4sQ0FBYUcsSUFBYixDQUFrQixLQUFsQixDQUZpQjtBQUdyQkMsT0FBSyxFQUFFLFNBSGM7QUFJckJDLE1BQUksRUFBRWQsS0FBSyxDQUFDUyxNQUFOLENBQWFHLElBQWIsQ0FBa0IsSUFBbEIsQ0FKZTtBQUtyQkcsZUFBYSxFQUFFZixLQUFLLENBQUNTLE1BQU4sQ0FBYUcsSUFBYixDQUFrQixLQUFsQixDQUxNO0FBTXJCSSxNQUFJLEVBQUVoQixLQUFLLENBQUNTLE1BQU4sQ0FBYVEsSUFBYixDQUFrQixLQUFsQjtBQU5lLENBQWhCO0FBU0EsSUFBTUMsS0FBSyxHQUFHO0FBQ25CQyxjQUFZLEVBQUUsS0FESztBQUVuQkMsYUFBVyxFQUFFO0FBRk0sQ0FBZDtBQUtRcEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNDI4MDdjN2I4ZjhiZWJhOGQwMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEZWZhdWx0VGhlbWUsIHRoZW1lIGFzIGRlZmF1bHRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgeyBtZGlHaXRodWIsIG1kaUxpbmtlZGluLCBtZGlUcm9waHlWYXJpYW50LCBtZGlUd2l0Y2gsIG1kaVlvdXR1YmUgfSBmcm9tICdAbWRpL2pzJztcblxuY29uc3QgZm9udEZhbWlseSA9IGAnSUJNIFBsZXggU2FucyBDb25kZW5zZWQnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZmA7XG5cbmNvbnN0IGN1c3RvbUljb25zOiBhbnkgPSB7XG4gIGdpdGh1Yjoge1xuICAgIHBhdGg6IDxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD17bWRpR2l0aHVifSAvPlxuICB9LFxuICBsaW5rZWRpbjoge1xuICAgIHBhdGg6IDxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD17bWRpTGlua2VkaW59IC8+XG4gIH0sXG4gIHR3aXRjaDoge1xuICAgIHBhdGg6IDxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD17bWRpVHdpdGNofSAvPlxuICB9LFxuICB5b3V0dWJlOiB7XG4gICAgcGF0aDogPHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPXttZGlZb3V0dWJlfSAvPlxuICB9LFxuICB0cm9waHk6IHtcbiAgICBwYXRoOiA8cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9e21kaVRyb3BoeVZhcmlhbnR9IC8+XG4gIH1cbn07XG5cbmNvbnN0IHRoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XG4gIC4uLmRlZmF1bHRUaGVtZSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiBmb250RmFtaWx5LFxuICAgIGhlYWRpbmc6IGZvbnRGYW1pbHksXG4gICAgbW9ubzogJ01lbmxvLCBtb25vc3BhY2UnXG4gIH0sXG4gIGljb25zOiB7XG4gICAgLi4uZGVmYXVsdFRoZW1lLmljb25zLFxuICAgIC4uLmN1c3RvbUljb25zXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQQUxFVFRFID0ge1xuICBwcmltYXJ5OiB0aGVtZS5jb2xvcnMub3JhbmdlWyczMDAnXSxcbiAgYmc6IHRoZW1lLmNvbG9ycy5ncmF5Wyc5MDAnXSxcbiAgYWx0Qmc6ICcjMjYyMzE4JyxcbiAgdGV4dDogdGhlbWUuY29sb3JzLmdyYXlbJzUwJ10sXG4gIHNlY29uZGFyeVRleHQ6IHRoZW1lLmNvbG9ycy5ncmF5WyczMDAnXSxcbiAgbGluazogdGhlbWUuY29sb3JzLnBpbmtbJzMwMCddXG59O1xuXG5leHBvcnQgY29uc3QgU0laRVMgPSB7XG4gIHBhZ2VNYXhXaWR0aDogJzN4bCcsXG4gIHBhZ2VQYWRkaW5nOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=