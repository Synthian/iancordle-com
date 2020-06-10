webpackHotUpdate("static\\development\\pages\\synth.js",{

/***/ "./src/components/SynthBlogPosts.tsx":
/*!*******************************************!*\
  !*** ./src/components/SynthBlogPosts.tsx ***!
  \*******************************************/
/*! exports provided: stringFromDate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringFromDate", function() { return stringFromDate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

function stringFromDate(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  });
}

var SynthBlogPosts = function SynthBlogPosts() {
  var blogPosts = frontMatter.sort(function (afm, bfm) {
    var a = new Date(afm.date);
    var b = new Date(bfm.date);
    return a < b ? -1 : 1;
  });
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: 'column',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
        lineNumber: 29,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      as: 'h3',
      size: 'lg',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, post.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: _styles_theme__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].secondaryText,
      as: 'i',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, post.date), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: _styles_theme__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].secondaryText,
      as: 'p',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TeW50aEJsb2dQb3N0cy50c3giXSwibmFtZXMiOlsiZ2V0TGlua0Zyb21SZXNvdXJjZVBhdGgiLCJyZXNvdXJjZVBhdGgiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsInN0cmluZ0Zyb21EYXRlIiwiZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsInRpbWVab25lIiwiU3ludGhCbG9nUG9zdHMiLCJibG9nUG9zdHMiLCJmcm9udE1hdHRlciIsInNvcnQiLCJhZm0iLCJiZm0iLCJhIiwiRGF0ZSIsImIiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJfX3Jlc291cmNlUGF0aCIsIlBBTEVUVEUiLCJzZWNvbmRhcnlUZXh0IiwiYmx1cmIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7Ozs7QUFHQTtBQUNBOztBQUVBLFNBQVNBLHVCQUFULENBQWlDQyxZQUFqQyxFQUF1RDtBQUNyREEsY0FBWSxHQUFHQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEIsR0FBNUIsQ0FBZjtBQUNBLFNBQU9ELFlBQVksQ0FBQ0UsU0FBYixDQUF1QkYsWUFBWSxDQUFDRyxPQUFiLENBQXFCLFFBQXJCLElBQWlDLENBQXhELEVBQTJESCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsTUFBckIsQ0FBM0QsQ0FBUDtBQUNEOztBQUVNLFNBQVNDLGNBQVQsQ0FBd0JDLElBQXhCLEVBQW9DO0FBQ3pDLFNBQU9BLElBQUksQ0FBQ0Msa0JBQUwsQ0FBd0IsT0FBeEIsRUFBaUM7QUFBRUMsUUFBSSxFQUFFLFNBQVI7QUFBbUJDLFNBQUssRUFBRSxNQUExQjtBQUFrQ0MsT0FBRyxFQUFFLFNBQXZDO0FBQWtEQyxZQUFRLEVBQUU7QUFBNUQsR0FBakMsQ0FBUDtBQUNEOztBQUVELElBQU1DLGNBQXdCLEdBQUcsU0FBM0JBLGNBQTJCLEdBQU07QUFDckMsTUFBTUMsU0FBUyxHQUFJQyxXQUFELENBQXdDQyxJQUF4QyxDQUE2QyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUMzRSxRQUFNQyxDQUFDLEdBQUcsSUFBSUMsSUFBSixDQUFTSCxHQUFHLENBQUNWLElBQWIsQ0FBVjtBQUNBLFFBQU1jLENBQUMsR0FBRyxJQUFJRCxJQUFKLENBQVNGLEdBQUcsQ0FBQ1gsSUFBYixDQUFWO0FBQ0EsV0FBT1ksQ0FBQyxHQUFHRSxDQUFKLEdBQVEsQ0FBQyxDQUFULEdBQWEsQ0FBcEI7QUFDRCxHQUppQixDQUFsQjtBQU1BLFNBQ0UsTUFBQyxvREFBRDtBQUFNLGFBQVMsRUFBRSxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dQLFNBQVMsQ0FBQ1EsR0FBVixDQUFjLFVBQUNDLElBQUQ7QUFBQSxXQUNiLE1BQUMsZ0RBQUQ7QUFBTSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsS0FBaEI7QUFBdUIsVUFBSSxFQUFFdkIsdUJBQXVCLENBQUNzQixJQUFJLENBQUNFLGNBQU4sQ0FBcEQ7QUFBMkUsY0FBUSxNQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFBUyxRQUFFLEVBQUUsSUFBYjtBQUFtQixVQUFJLEVBQUUsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRixJQUFJLENBQUNDLEtBRFIsQ0FERixFQUlFLE1BQUMsb0RBQUQ7QUFBTSxXQUFLLEVBQUVFLHFEQUFPLENBQUNDLGFBQXJCO0FBQW9DLFFBQUUsRUFBRSxHQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dKLElBQUksQ0FBQ2hCLElBRFIsQ0FKRixFQU9FLE1BQUMsb0RBQUQ7QUFBTSxXQUFLLEVBQUVtQixxREFBTyxDQUFDQyxhQUFyQjtBQUFvQyxRQUFFLEVBQUUsR0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSixJQUFJLENBQUNLLEtBRFIsQ0FQRixDQURGLENBRGE7QUFBQSxHQUFkLENBREgsQ0FERjtBQW1CRCxDQTFCRDs7S0FBTWYsYztBQTRCU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHN5bnRoLmpzLmI5NjZiZDY5NzZkYmE0NTM1MWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmxleCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbi8vIG5vaW5zcGVjdGlvbiBFUzZQcmVmZXJTaG9ydEltcG9ydFxuaW1wb3J0IHsgZnJvbnRNYXR0ZXIgfSBmcm9tICcuLi9wYWdlcy9zeW50aC9ibG9nLyoqLyoubWR4JztcbmltcG9ydCB7IFN5bnRoQmxvZ0Zyb250TWF0dGVyIH0gZnJvbSAnLi4vdHlwZXMvTWR4VGVtcGxhdGVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBQQUxFVFRFIH0gZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcblxuZnVuY3Rpb24gZ2V0TGlua0Zyb21SZXNvdXJjZVBhdGgocmVzb3VyY2VQYXRoOiBzdHJpbmcpIHtcbiAgcmVzb3VyY2VQYXRoID0gcmVzb3VyY2VQYXRoLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgcmV0dXJuIHJlc291cmNlUGF0aC5zdWJzdHJpbmcocmVzb3VyY2VQYXRoLmluZGV4T2YoJy9wYWdlcycpICsgNiwgcmVzb3VyY2VQYXRoLmluZGV4T2YoJy5tZHgnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tRGF0ZShkYXRlOiBEYXRlKSB7XG4gIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIHRpbWVab25lOiAnVVRDJyB9KTtcbn1cblxuY29uc3QgU3ludGhCbG9nUG9zdHM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBibG9nUG9zdHMgPSAoZnJvbnRNYXR0ZXIgYXMgU3ludGhCbG9nRnJvbnRNYXR0ZXJbXSkuc29ydCgoYWZtLCBiZm0pID0+IHtcbiAgICBjb25zdCBhID0gbmV3IERhdGUoYWZtLmRhdGUpO1xuICAgIGNvbnN0IGIgPSBuZXcgRGF0ZShiZm0uZGF0ZSk7XG4gICAgcmV0dXJuIGEgPCBiID8gLTEgOiAxO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGbGV4IGRpcmVjdGlvbj17J2NvbHVtbid9PlxuICAgICAge2Jsb2dQb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgPExpbmsga2V5PXtwb3N0LnRpdGxlfSBocmVmPXtnZXRMaW5rRnJvbVJlc291cmNlUGF0aChwb3N0Ll9fcmVzb3VyY2VQYXRoKX0gcGFzc0hyZWY+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz17J2gzJ30gc2l6ZT17J2xnJ30+XG4gICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHQgY29sb3I9e1BBTEVUVEUuc2Vjb25kYXJ5VGV4dH0gYXM9eydpJ30+XG4gICAgICAgICAgICAgIHtwb3N0LmRhdGV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj17UEFMRVRURS5zZWNvbmRhcnlUZXh0fSBhcz17J3AnfT5cbiAgICAgICAgICAgICAge3Bvc3QuYmx1cmJ9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeW50aEJsb2dQb3N0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=