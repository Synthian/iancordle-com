webpackHotUpdate("static\\development\\pages\\index.js",{

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
  altBg: '#241616',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLnRzeCJdLCJuYW1lcyI6WyJmb250RmFtaWx5IiwiY3VzdG9tSWNvbnMiLCJnaXRodWIiLCJwYXRoIiwibWRpR2l0aHViIiwibGlua2VkaW4iLCJtZGlMaW5rZWRpbiIsInR3aXRjaCIsIm1kaVR3aXRjaCIsInlvdXR1YmUiLCJtZGlZb3V0dWJlIiwidHJvcGh5IiwibWRpVHJvcGh5VmFyaWFudCIsInRoZW1lIiwiZGVmYXVsdFRoZW1lIiwiZm9udHMiLCJib2R5IiwiaGVhZGluZyIsIm1vbm8iLCJpY29ucyIsIlBBTEVUVEUiLCJwcmltYXJ5IiwiY29sb3JzIiwib3JhbmdlIiwiYmciLCJncmF5IiwiYWx0QmciLCJ0ZXh0Iiwic2Vjb25kYXJ5VGV4dCIsImxpbmsiLCJwaW5rIiwiU0laRVMiLCJwYWdlTWF4V2lkdGgiLCJwYWdlUGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLG1FQUFoQjtBQUVBLElBQU1DLFdBQWdCLEdBQUc7QUFDdkJDLFFBQU0sRUFBRTtBQUNOQyxRQUFJLEVBQUU7QUFBTSxVQUFJLEVBQUMsY0FBWDtBQUEwQixPQUFDLEVBQUVDLGlEQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsR0FEZTtBQUl2QkMsVUFBUSxFQUFFO0FBQ1JGLFFBQUksRUFBRTtBQUFNLFVBQUksRUFBQyxjQUFYO0FBQTBCLE9BQUMsRUFBRUcsbURBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERSxHQUphO0FBT3ZCQyxRQUFNLEVBQUU7QUFDTkosUUFBSSxFQUFFO0FBQU0sVUFBSSxFQUFDLGNBQVg7QUFBMEIsT0FBQyxFQUFFSyxpREFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLEdBUGU7QUFVdkJDLFNBQU8sRUFBRTtBQUNQTixRQUFJLEVBQUU7QUFBTSxVQUFJLEVBQUMsY0FBWDtBQUEwQixPQUFDLEVBQUVPLGtEQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREMsR0FWYztBQWF2QkMsUUFBTSxFQUFFO0FBQ05SLFFBQUksRUFBRTtBQUFNLFVBQUksRUFBQyxjQUFYO0FBQTBCLE9BQUMsRUFBRVMsd0RBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQWJlLENBQXpCOztBQWtCQSxJQUFNQyxLQUFtQixtQ0FDcEJDLHFEQURvQjtBQUV2QkMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRWhCLFVBREQ7QUFFTGlCLFdBQU8sRUFBRWpCLFVBRko7QUFHTGtCLFFBQUksRUFBRTtBQUhELEdBRmdCO0FBT3ZCQyxPQUFLLGtDQUNBTCxxREFBWSxDQUFDSyxLQURiLEdBRUFsQixXQUZBO0FBUGtCLEVBQXpCOztBQWFPLElBQU1tQixPQUFPLEdBQUc7QUFDckJDLFNBQU8sRUFBRVIsS0FBSyxDQUFDUyxNQUFOLENBQWFDLE1BQWIsQ0FBb0IsS0FBcEIsQ0FEWTtBQUVyQkMsSUFBRSxFQUFFWCxLQUFLLENBQUNTLE1BQU4sQ0FBYUcsSUFBYixDQUFrQixLQUFsQixDQUZpQjtBQUdyQkMsT0FBSyxFQUFFLFNBSGM7QUFJckJDLE1BQUksRUFBRWQsS0FBSyxDQUFDUyxNQUFOLENBQWFHLElBQWIsQ0FBa0IsSUFBbEIsQ0FKZTtBQUtyQkcsZUFBYSxFQUFFZixLQUFLLENBQUNTLE1BQU4sQ0FBYUcsSUFBYixDQUFrQixLQUFsQixDQUxNO0FBTXJCSSxNQUFJLEVBQUVoQixLQUFLLENBQUNTLE1BQU4sQ0FBYVEsSUFBYixDQUFrQixLQUFsQjtBQU5lLENBQWhCO0FBU0EsSUFBTUMsS0FBSyxHQUFHO0FBQ25CQyxjQUFZLEVBQUUsS0FESztBQUVuQkMsYUFBVyxFQUFFO0FBRk0sQ0FBZDtBQUtRcEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmRhYWE1NjI4MGE5OGEyZTU2MzBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGVmYXVsdFRoZW1lLCB0aGVtZSBhcyBkZWZhdWx0VGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IHsgbWRpR2l0aHViLCBtZGlMaW5rZWRpbiwgbWRpVHJvcGh5VmFyaWFudCwgbWRpVHdpdGNoLCBtZGlZb3V0dWJlIH0gZnJvbSAnQG1kaS9qcyc7XG5cbmNvbnN0IGZvbnRGYW1pbHkgPSBgJ0lCTSBQbGV4IFNhbnMgQ29uZGVuc2VkJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWZgO1xuXG5jb25zdCBjdXN0b21JY29uczogYW55ID0ge1xuICBnaXRodWI6IHtcbiAgICBwYXRoOiA8cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9e21kaUdpdGh1Yn0gLz5cbiAgfSxcbiAgbGlua2VkaW46IHtcbiAgICBwYXRoOiA8cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9e21kaUxpbmtlZGlufSAvPlxuICB9LFxuICB0d2l0Y2g6IHtcbiAgICBwYXRoOiA8cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9e21kaVR3aXRjaH0gLz5cbiAgfSxcbiAgeW91dHViZToge1xuICAgIHBhdGg6IDxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD17bWRpWW91dHViZX0gLz5cbiAgfSxcbiAgdHJvcGh5OiB7XG4gICAgcGF0aDogPHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPXttZGlUcm9waHlWYXJpYW50fSAvPlxuICB9XG59O1xuXG5jb25zdCB0aGVtZTogRGVmYXVsdFRoZW1lID0ge1xuICAuLi5kZWZhdWx0VGhlbWUsXG4gIGZvbnRzOiB7XG4gICAgYm9keTogZm9udEZhbWlseSxcbiAgICBoZWFkaW5nOiBmb250RmFtaWx5LFxuICAgIG1vbm86ICdNZW5sbywgbW9ub3NwYWNlJ1xuICB9LFxuICBpY29uczoge1xuICAgIC4uLmRlZmF1bHRUaGVtZS5pY29ucyxcbiAgICAuLi5jdXN0b21JY29uc1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgUEFMRVRURSA9IHtcbiAgcHJpbWFyeTogdGhlbWUuY29sb3JzLm9yYW5nZVsnMzAwJ10sXG4gIGJnOiB0aGVtZS5jb2xvcnMuZ3JheVsnOTAwJ10sXG4gIGFsdEJnOiAnIzI0MTYxNicsXG4gIHRleHQ6IHRoZW1lLmNvbG9ycy5ncmF5Wyc1MCddLFxuICBzZWNvbmRhcnlUZXh0OiB0aGVtZS5jb2xvcnMuZ3JheVsnMzAwJ10sXG4gIGxpbms6IHRoZW1lLmNvbG9ycy5waW5rWyczMDAnXVxufTtcblxuZXhwb3J0IGNvbnN0IFNJWkVTID0ge1xuICBwYWdlTWF4V2lkdGg6ICczeGwnLFxuICBwYWdlUGFkZGluZzogNFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9