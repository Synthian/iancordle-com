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
  var blogPosts = frontMatter.sort(function (afm, bfm) {
    var a = new Date(afm.date);
    var b = new Date(bfm.date);
    return;
  });
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: 'column',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
        lineNumber: 25,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      as: 'h3',
      size: 'lg',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, post.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: _styles_theme__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].secondaryText,
      as: 'p',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TeW50aEJsb2dQb3N0cy50c3giXSwibmFtZXMiOlsiZ2V0TGlua0Zyb21SZXNvdXJjZVBhdGgiLCJyZXNvdXJjZVBhdGgiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsIlN5bnRoQmxvZ1Bvc3RzIiwiYmxvZ1Bvc3RzIiwiZnJvbnRNYXR0ZXIiLCJzb3J0IiwiYWZtIiwiYmZtIiwiYSIsIkRhdGUiLCJkYXRlIiwiYiIsIm1hcCIsInBvc3QiLCJ0aXRsZSIsIl9fcmVzb3VyY2VQYXRoIiwiUEFMRVRURSIsInNlY29uZGFyeVRleHQiLCJibHVyYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7Ozs7O0FBR0E7QUFDQTs7QUFFQSxTQUFTQSx1QkFBVCxDQUFpQ0MsWUFBakMsRUFBdUQ7QUFDckRBLGNBQVksR0FBR0EsWUFBWSxDQUFDQyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCLEdBQTVCLENBQWY7QUFDQSxTQUFPRCxZQUFZLENBQUNFLFNBQWIsQ0FBdUJGLFlBQVksQ0FBQ0csT0FBYixDQUFxQixRQUFyQixJQUFpQyxDQUF4RCxFQUEyREgsWUFBWSxDQUFDRyxPQUFiLENBQXFCLE1BQXJCLENBQTNELENBQVA7QUFDRDs7QUFFRCxJQUFNQyxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixHQUFNO0FBQ3JDLE1BQU1DLFNBQVMsR0FBSUMsV0FBRCxDQUF3Q0MsSUFBeEMsQ0FBNkMsVUFBQ0MsR0FBRCxFQUFLQyxHQUFMLEVBQWE7QUFDMUUsUUFBTUMsQ0FBQyxHQUFHLElBQUlDLElBQUosQ0FBU0gsR0FBRyxDQUFDSSxJQUFiLENBQVY7QUFDQSxRQUFNQyxDQUFDLEdBQUcsSUFBSUYsSUFBSixDQUFTRixHQUFHLENBQUNHLElBQWIsQ0FBVjtBQUNBO0FBQ0QsR0FKaUIsQ0FBbEI7QUFNQSxTQUNFLE1BQUMsb0RBQUQ7QUFBTSxhQUFTLEVBQUUsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxTQUFTLENBQUNTLEdBQVYsQ0FBYyxVQUFDQyxJQUFEO0FBQUEsV0FDYixNQUFDLGdEQUFEO0FBQU0sU0FBRyxFQUFFQSxJQUFJLENBQUNDLEtBQWhCO0FBQXVCLFVBQUksRUFBRWpCLHVCQUF1QixDQUFDZ0IsSUFBSSxDQUFDRSxjQUFOLENBQXBEO0FBQTJFLGNBQVEsTUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHVEQUFEO0FBQVMsUUFBRSxFQUFFLElBQWI7QUFBbUIsVUFBSSxFQUFFLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0YsSUFBSSxDQUFDQyxLQURSLENBREYsRUFJRSxNQUFDLG9EQUFEO0FBQU0sV0FBSyxFQUFFRSxxREFBTyxDQUFDQyxhQUFyQjtBQUFvQyxRQUFFLEVBQUUsR0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSixJQUFJLENBQUNLLEtBRFIsQ0FKRixDQURGLENBRGE7QUFBQSxHQUFkLENBREgsQ0FERjtBQWdCRCxDQXZCRDs7S0FBTWhCLGM7QUF5QlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzeW50aC5qcy5hOGIzMzg3YzJkZDU0MmJmNmQwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZsZXgsIEhlYWRpbmcsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG4vLyBub2luc3BlY3Rpb24gRVM2UHJlZmVyU2hvcnRJbXBvcnRcbmltcG9ydCB7IGZyb250TWF0dGVyIH0gZnJvbSAnLi4vcGFnZXMvc3ludGgvYmxvZy8qKi8qLm1keCc7XG5pbXBvcnQgeyBTeW50aEJsb2dGcm9udE1hdHRlciB9IGZyb20gJy4uL3R5cGVzL01keFRlbXBsYXRlcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgUEFMRVRURSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5cbmZ1bmN0aW9uIGdldExpbmtGcm9tUmVzb3VyY2VQYXRoKHJlc291cmNlUGF0aDogc3RyaW5nKSB7XG4gIHJlc291cmNlUGF0aCA9IHJlc291cmNlUGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gIHJldHVybiByZXNvdXJjZVBhdGguc3Vic3RyaW5nKHJlc291cmNlUGF0aC5pbmRleE9mKCcvcGFnZXMnKSArIDYsIHJlc291cmNlUGF0aC5pbmRleE9mKCcubWR4JykpO1xufVxuXG5jb25zdCBTeW50aEJsb2dQb3N0czogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGJsb2dQb3N0cyA9IChmcm9udE1hdHRlciBhcyBTeW50aEJsb2dGcm9udE1hdHRlcltdKS5zb3J0KChhZm0sYmZtKSA9PiB7XG4gICAgY29uc3QgYSA9IG5ldyBEYXRlKGFmbS5kYXRlKTtcbiAgICBjb25zdCBiID0gbmV3IERhdGUoYmZtLmRhdGUpO1xuICAgIHJldHVybiBcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBkaXJlY3Rpb249eydjb2x1bW4nfT5cbiAgICAgIHtibG9nUG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgIDxMaW5rIGtleT17cG9zdC50aXRsZX0gaHJlZj17Z2V0TGlua0Zyb21SZXNvdXJjZVBhdGgocG9zdC5fX3Jlc291cmNlUGF0aCl9IHBhc3NIcmVmPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9eydoMyd9IHNpemU9eydsZyd9PlxuICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPXtQQUxFVFRFLnNlY29uZGFyeVRleHR9IGFzPXsncCd9PlxuICAgICAgICAgICAgICB7cG9zdC5ibHVyYn1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bnRoQmxvZ1Bvc3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==