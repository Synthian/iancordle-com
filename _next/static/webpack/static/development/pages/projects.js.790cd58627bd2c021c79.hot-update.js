webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./src/components/GithubLink.tsx":
/*!***************************************!*\
  !*** ./src/components/GithubLink.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Ian\\Documents\\Repo\\iancordle-com\\src\\components\\GithubLink.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var GithubLink = function GithubLink(props) {
  return __jsx("a", {
    href: props.href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: 'github',
    color: _styles_theme__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].link,
    fontSize: "".concat(props.fontSize, "px"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};

_c = GithubLink;
/* harmony default export */ __webpack_exports__["default"] = (GithubLink);

var _c;

$RefreshReg$(_c, "GithubLink");

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

/***/ "./src/pages/projects.mdx":
/*!********************************!*\
  !*** ./src/pages/projects.mdx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var C_Users_Ian_Documents_Repo_iancordle_com_src_layouts_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/layouts/index */ "./src/layouts/index.tsx");
/* harmony import */ var _components_GithubLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GithubLink */ "./src/components/GithubLink.tsx");
/* empty/unused harmony star reexport */

var _jsxFileName = "C:\\Users\\Ian\\Documents\\Repo\\iancordle-com\\src\\pages\\projects.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */





var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 10
      }
    }));
  };
};

var layoutProps = {};
var MDXLayout = Object(C_Users_Ian_Documents_Repo_iancordle_com_src_layouts_index__WEBPACK_IMPORTED_MODULE_4__["default"])({
  title: 'Projects',
  __resourcePath: ':/Users/Ian/Documents/Repo/iancordle-com/src/pages/projects.mdx',
  __scans: {},
  layout: 'index'
});
_c = MDXLayout;
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, "Personal Projects"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, "iancordle.com"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "[Typescript, React, Next.js]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_GithubLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontSize: 40,
    href: 'https://github.com/Synthian/iancordle-com',
    mdxType: "GithubLink",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), "***", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "Bastion Auto Splitter"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "[C#]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/Synthian/LiveSplit.Bastion"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 8
    }
  }), "Github")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, "BastionBot"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, "[Java, Spring]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/Synthian/BastionBot"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 8
    }
  }), "Github")));
}
_c2 = MDXContent;
;
MDXContent.isMDXComponent = true;

var _c, _c2;

$RefreshReg$(_c, "MDXLayout");
$RefreshReg$(_c2, "MDXContent");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HaXRodWJMaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvamVjdHMubWR4Il0sIm5hbWVzIjpbIkdpdGh1YkxpbmsiLCJwcm9wcyIsImhyZWYiLCJQQUxFVFRFIiwibGluayIsImZvbnRTaXplIiwibWFrZVNob3J0Y29kZSIsIm5hbWUiLCJNRFhEZWZhdWx0U2hvcnRjb2RlIiwiY29uc29sZSIsIndhcm4iLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsImxheW91dCIsInRpdGxlIiwiX19yZXNvdXJjZVBhdGgiLCJfX3NjYW5zIiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxVQUFxQyxHQUFHLFNBQXhDQSxVQUF3QyxDQUFDQyxLQUFELEVBQVc7QUFDdkQsU0FDRTtBQUFHLFFBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU0sUUFBSSxFQUFFLFFBQVo7QUFBc0IsU0FBSyxFQUFFQyxxREFBTyxDQUFDQyxJQUFyQztBQUEyQyxZQUFRLFlBQUtILEtBQUssQ0FBQ0ksUUFBWCxPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtELENBTkQ7O0tBQU1MLFU7QUFRU0EseUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxJQUFJO0FBQUEsU0FBSSxTQUFTQyxtQkFBVCxDQUE2QlAsS0FBN0IsRUFBb0M7QUFDaEVRLFdBQU8sQ0FBQ0MsSUFBUixDQUFhLGVBQWVILElBQWYsR0FBc0IseUVBQW5DO0FBQ0EsV0FBTyx3SkFBU04sS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVA7QUFDRCxHQUh5QjtBQUFBLENBQTFCOztBQUtBLElBQU1VLFdBQVcsR0FBRyxFQUFwQjtBQUdBLElBQU1DLFNBQVMsR0FBR0MsMEdBQU0sQ0FBQztBQUN4QkMsT0FBSyxFQUFFLFVBRGlCO0FBRXhCQyxnQkFBYyxFQUFFLGlFQUZRO0FBR3hCQyxTQUFPLEVBQUUsRUFIZTtBQUl4QkgsUUFBTSxFQUFFO0FBSmdCLENBQUQsQ0FBeEI7S0FBTUQsUztBQU1TLFNBQVNLLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVqQixLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZVUsV0FBZixFQUFnQ1YsS0FBaEM7QUFBdUMsY0FBVSxFQUFFaUIsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxLLEVBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSyxFQU9MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBUEssRUFRTCwwREFBQyw4REFBRDtBQUFZLFlBQVEsRUFBRSxFQUF0QjtBQUEwQixRQUFJLEVBQUUsMkNBQWhDO0FBQTZFLFdBQU8sRUFBQyxZQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkssU0FVTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVZLLEVBV0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhLLEVBWUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDckIsWUFBUTtBQURhLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxDQVpLLEVBZUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZLLEVBZ0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEJLLEVBaUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBakJLLEVBa0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3JCLFlBQVE7QUFEYSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsQ0FsQkssQ0FBUDtBQXNCRDtNQTFCdUJELFU7QUE0QnhCO0FBQ0FBLFVBQVUsQ0FBQ0UsY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvamVjdHMuanMuNzkwY2Q1ODYyN2JkMmMwMjFjNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCB7IFBBTEVUVEUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuXG5pbnRlcmZhY2UgR2l0aHViTGlua1Byb3BzIHtcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgaHJlZjogc3RyaW5nO1xufVxuXG5jb25zdCBHaXRodWJMaW5rOiBSZWFjdC5GQzxHaXRodWJMaW5rUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17cHJvcHMuaHJlZn0+XG4gICAgICA8SWNvbiBuYW1lPXsnZ2l0aHViJ30gY29sb3I9e1BBTEVUVEUubGlua30gZm9udFNpemU9e2Ake3Byb3BzLmZvbnRTaXplfXB4YH0gLz5cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHaXRodWJMaW5rO1xuIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGxheW91dCBmcm9tICdDOi9Vc2Vycy9JYW4vRG9jdW1lbnRzL1JlcG8vaWFuY29yZGxlLWNvbS9zcmMvbGF5b3V0cy9pbmRleCdcbmltcG9ydCBHaXRodWJMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvR2l0aHViTGluayc7XG5leHBvcnQgKiBmcm9tICdDOi9Vc2Vycy9JYW4vRG9jdW1lbnRzL1JlcG8vaWFuY29yZGxlLWNvbS9zcmMvbGF5b3V0cy9pbmRleCc7XG5jb25zdCBtYWtlU2hvcnRjb2RlID0gbmFtZSA9PiBmdW5jdGlvbiBNRFhEZWZhdWx0U2hvcnRjb2RlKHByb3BzKSB7XG4gIGNvbnNvbGUud2FybihcIkNvbXBvbmVudCBcIiArIG5hbWUgKyBcIiB3YXMgbm90IGltcG9ydGVkLCBleHBvcnRlZCwgb3IgcHJvdmlkZWQgYnkgTURYUHJvdmlkZXIgYXMgZ2xvYmFsIHNjb3BlXCIpXG4gIHJldHVybiA8ZGl2IHsuLi5wcm9wc30vPlxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIFxufTtcbmNvbnN0IE1EWExheW91dCA9IGxheW91dCh7XG5cdHRpdGxlOiAnUHJvamVjdHMnLFxuXHRfX3Jlc291cmNlUGF0aDogJzovVXNlcnMvSWFuL0RvY3VtZW50cy9SZXBvL2lhbmNvcmRsZS1jb20vc3JjL3BhZ2VzL3Byb2plY3RzLm1keCcsXG5cdF9fc2NhbnM6IHt9LFxuXHRsYXlvdXQ6ICdpbmRleCdcbn0pXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cblxuICAgIDxoMT57YFBlcnNvbmFsIFByb2plY3RzYH08L2gxPlxuICAgIDxoMz57YGlhbmNvcmRsZS5jb21gfTwvaDM+XG4gICAgPGg1PntgW1R5cGVzY3JpcHQsIFJlYWN0LCBOZXh0LmpzXWB9PC9oNT5cbiAgICA8R2l0aHViTGluayBmb250U2l6ZT17NDB9IGhyZWY9eydodHRwczovL2dpdGh1Yi5jb20vU3ludGhpYW4vaWFuY29yZGxlLWNvbSd9IG1keFR5cGU9XCJHaXRodWJMaW5rXCIgLz5cbioqKlxuICAgIDxoMz57YEJhc3Rpb24gQXV0byBTcGxpdHRlcmB9PC9oMz5cbiAgICA8aDU+e2BbQyNdYH08L2g1PlxuICAgIDxwPjxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL1N5bnRoaWFuL0xpdmVTcGxpdC5CYXN0aW9uXCJcbiAgICAgIH19PntgR2l0aHViYH08L2E+PC9wPlxuICAgIDxocj48L2hyPlxuICAgIDxoMz57YEJhc3Rpb25Cb3RgfTwvaDM+XG4gICAgPGg1PntgW0phdmEsIFNwcmluZ11gfTwvaDU+XG4gICAgPHA+PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vU3ludGhpYW4vQmFzdGlvbkJvdFwiXG4gICAgICB9fT57YEdpdGh1YmB9PC9hPjwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=