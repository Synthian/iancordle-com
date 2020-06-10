webpackHotUpdate("static\\development\\pages\\synth.js",{

/***/ "./src/components/SynthBlogPosts.tsx":
/*!*******************************************!*\
  !*** ./src/components/SynthBlogPosts.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var C_Users_Ian_Documents_Repo_iancordle_com_mdx_data_aab0f4c89b873d6a0112b68660269ed2_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.mdx-data/aab0f4c89b873d6a0112b68660269ed2.json */ "./.mdx-data/aab0f4c89b873d6a0112b68660269ed2.json");
var C_Users_Ian_Documents_Repo_iancordle_com_mdx_data_aab0f4c89b873d6a0112b68660269ed2_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./.mdx-data/aab0f4c89b873d6a0112b68660269ed2.json */ "./.mdx-data/aab0f4c89b873d6a0112b68660269ed2.json", 1);
/* harmony import */ var C_Users_Ian_Documents_Repo_iancordle_com_mdx_data_970c0247f4cd60f3ad210ef3d7c92d28_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./.mdx-data/970c0247f4cd60f3ad210ef3d7c92d28.json */ "./.mdx-data/970c0247f4cd60f3ad210ef3d7c92d28.json");
var C_Users_Ian_Documents_Repo_iancordle_com_mdx_data_970c0247f4cd60f3ad210ef3d7c92d28_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./.mdx-data/970c0247f4cd60f3ad210ef3d7c92d28.json */ "./.mdx-data/970c0247f4cd60f3ad210ef3d7c92d28.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Ian\\Documents\\Repo\\iancordle-com\\src\\components\\SynthBlogPosts.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // noinspection ES6PreferShortImport



var frontMatter = [C_Users_Ian_Documents_Repo_iancordle_com_mdx_data_aab0f4c89b873d6a0112b68660269ed2_json__WEBPACK_IMPORTED_MODULE_2__, C_Users_Ian_Documents_Repo_iancordle_com_mdx_data_970c0247f4cd60f3ad210ef3d7c92d28_json__WEBPACK_IMPORTED_MODULE_3__];



function getLinkFromResourcePath(resourcePath) {
  resourcePath = resourcePath.replace(/\\/g, '/');
  return resourcePath.substring(resourcePath.indexOf('/pages') + 6, resourcePath.indexOf('.mdx'));
}

var SynthBlogPosts = function SynthBlogPosts() {
  var blogPosts = frontMatter;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: 'column',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, blogPosts.map(function (post) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: post.title,
      href: getLinkFromResourcePath(post.__resourcePath),
      passHref: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      as: 'h3',
      size: 'lg',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, post.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: _styles_theme__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].secondaryText,
      as: 'p',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, post.blurb)));
  }));
};

_c = SynthBlogPosts;
/* harmony default export */ __webpack_exports__["default"] = (SynthBlogPosts);

var _c;

$RefreshReg$(_c, "SynthBlogPosts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TeW50aEJsb2dQb3N0cy50c3giXSwibmFtZXMiOlsiZ2V0TGlua0Zyb21SZXNvdXJjZVBhdGgiLCJyZXNvdXJjZVBhdGgiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsIlN5bnRoQmxvZ1Bvc3RzIiwiYmxvZ1Bvc3RzIiwiZnJvbnRNYXR0ZXIiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJfX3Jlc291cmNlUGF0aCIsIlBBTEVUVEUiLCJzZWNvbmRhcnlUZXh0IiwiYmx1cmIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOzs7OztBQUdBO0FBQ0E7O0FBRUEsU0FBU0EsdUJBQVQsQ0FBaUNDLFlBQWpDLEVBQXVEO0FBQ3JEQSxjQUFZLEdBQUdBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFyQixFQUE0QixHQUE1QixDQUFmO0FBQ0EsU0FBT0QsWUFBWSxDQUFDRSxTQUFiLENBQXVCRixZQUFZLENBQUNHLE9BQWIsQ0FBcUIsUUFBckIsSUFBaUMsQ0FBeEQsRUFBMkRILFlBQVksQ0FBQ0csT0FBYixDQUFxQixNQUFyQixDQUEzRCxDQUFQO0FBQ0Q7O0FBRUQsSUFBTUMsY0FBd0IsR0FBRyxTQUEzQkEsY0FBMkIsR0FBTTtBQUNyQyxNQUFNQyxTQUFTLEdBQUdDLFdBQWxCO0FBRUEsU0FDRSxNQUFDLG9EQUFEO0FBQU0sYUFBUyxFQUFFLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ0MsSUFBRDtBQUFBLFdBQ2IsTUFBQyxnREFBRDtBQUFNLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxLQUFoQjtBQUF1QixVQUFJLEVBQUVWLHVCQUF1QixDQUFDUyxJQUFJLENBQUNFLGNBQU4sQ0FBcEQ7QUFBMkUsY0FBUSxNQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFBUyxRQUFFLEVBQUUsSUFBYjtBQUFtQixVQUFJLEVBQUUsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRixJQUFJLENBQUNDLEtBRFIsQ0FERixFQUlFLE1BQUMsb0RBQUQ7QUFBTSxXQUFLLEVBQUVFLHFEQUFPLENBQUNDLGFBQXJCO0FBQW9DLFFBQUUsRUFBRSxHQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dKLElBQUksQ0FBQ0ssS0FEUixDQUpGLENBREYsQ0FEYTtBQUFBLEdBQWQsQ0FESCxDQURGO0FBZ0JELENBbkJEOztLQUFNVCxjO0FBcUJTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc3ludGguanMuYTYyZDFiZjdjODhmODJhYzhkNmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGbGV4LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuLy8gbm9pbnNwZWN0aW9uIEVTNlByZWZlclNob3J0SW1wb3J0XG5pbXBvcnQgeyBmcm9udE1hdHRlciB9IGZyb20gJy4uL3BhZ2VzL3N5bnRoL2Jsb2cvKiovKi5tZHgnO1xuaW1wb3J0IHsgU3ludGhCbG9nRnJvbnRNYXR0ZXIgfSBmcm9tICcuLi90eXBlcy9NZHhUZW1wbGF0ZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFBBTEVUVEUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuXG5mdW5jdGlvbiBnZXRMaW5rRnJvbVJlc291cmNlUGF0aChyZXNvdXJjZVBhdGg6IHN0cmluZykge1xuICByZXNvdXJjZVBhdGggPSByZXNvdXJjZVBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICByZXR1cm4gcmVzb3VyY2VQYXRoLnN1YnN0cmluZyhyZXNvdXJjZVBhdGguaW5kZXhPZignL3BhZ2VzJykgKyA2LCByZXNvdXJjZVBhdGguaW5kZXhPZignLm1keCcpKTtcbn1cblxuY29uc3QgU3ludGhCbG9nUG9zdHM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBibG9nUG9zdHMgPSBmcm9udE1hdHRlciBhcyBTeW50aEJsb2dGcm9udE1hdHRlcltdO1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXggZGlyZWN0aW9uPXsnY29sdW1uJ30+XG4gICAgICB7YmxvZ1Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8TGluayBrZXk9e3Bvc3QudGl0bGV9IGhyZWY9e2dldExpbmtGcm9tUmVzb3VyY2VQYXRoKHBvc3QuX19yZXNvdXJjZVBhdGgpfSBwYXNzSHJlZj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPXsnaDMnfSBzaXplPXsnbGcnfT5cbiAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj17UEFMRVRURS5zZWNvbmRhcnlUZXh0fSBhcz17J3AnfT5cbiAgICAgICAgICAgICAge3Bvc3QuYmx1cmJ9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeW50aEJsb2dQb3N0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=