webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./src/components/GithubLink.tsx":
false,

/***/ "./src/components/ProjectHeader.tsx":
/*!******************************************!*\
  !*** ./src/components/ProjectHeader.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Ian\\Documents\\Repo\\iancordle-com\\src\\components\\ProjectHeader.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ProjectHeader = function ProjectHeader(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
    href: props.href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    alignItems: 'center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: 'h3',
    size: 'lg',
    display: 'inline-block',
    mr: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, props.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: 'github',
    fontSize: "".concat(props.fontSize, "px"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: 'h5',
    size: 'xs',
    fontWeight: 400,
    textTransform: 'uppercase',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, props.subtitle));
};

_c = ProjectHeader;
/* harmony default export */ __webpack_exports__["default"] = (ProjectHeader);

var _c;

$RefreshReg$(_c, "ProjectHeader");

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
/* harmony import */ var _components_ProjectHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProjectHeader */ "./src/components/ProjectHeader.tsx");
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
  }, "Personal Projects"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_ProjectHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: 'iancordle.com',
    subtitle: '[Typescript, React, Next.js]',
    fontSize: 40,
    href: 'https://github.com/Synthian/iancordle-com',
    mdxType: "ProjectHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "Here is a description of the project"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_ProjectHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: 'Bastion Auto Splitter',
    subtitle: '[C#]',
    fontSize: 40,
    href: 'https://github.com/Synthian/LiveSplit.Bastion',
    mdxType: "ProjectHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "Here is a description of the project"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_ProjectHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: 'BastionBot',
    subtitle: '[Java, Spring]',
    fontSize: 40,
    href: 'https://github.com/Synthian/BastionBot',
    mdxType: "ProjectHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "Here is a description of the project"));
}
_c2 = MDXContent;
;
MDXContent.isMDXComponent = true;

var _c, _c2;

$RefreshReg$(_c, "MDXLayout");
$RefreshReg$(_c2, "MDXContent");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0SGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvamVjdHMubWR4Il0sIm5hbWVzIjpbIlByb2plY3RIZWFkZXIiLCJwcm9wcyIsImhyZWYiLCJ0aXRsZSIsImZvbnRTaXplIiwic3VidGl0bGUiLCJtYWtlU2hvcnRjb2RlIiwibmFtZSIsIk1EWERlZmF1bHRTaG9ydGNvZGUiLCJjb25zb2xlIiwid2FybiIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwibGF5b3V0IiwiX19yZXNvdXJjZVBhdGgiLCJfX3NjYW5zIiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFTQSxJQUFNQSxhQUF3QyxHQUFHLFNBQTNDQSxhQUEyQyxDQUFDQyxLQUFELEVBQVc7QUFDMUQsU0FDRSxtRUFDRTtBQUFHLFFBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU0sY0FBVSxFQUFFLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQVMsTUFBRSxFQUFFLElBQWI7QUFBbUIsUUFBSSxFQUFFLElBQXpCO0FBQStCLFdBQU8sRUFBRSxjQUF4QztBQUF3RCxNQUFFLEVBQUUsQ0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxLQUFLLENBQUNFLEtBRFQsQ0FERixFQUlFLE1BQUMsb0RBQUQ7QUFBTSxRQUFJLEVBQUUsUUFBWjtBQUFzQixZQUFRLFlBQUtGLEtBQUssQ0FBQ0csUUFBWCxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixDQURGLEVBU0UsTUFBQyx1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ZjYyOWJjNGE2OTA0NTgzMTc1ZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGbGV4LCBIZWFkaW5nLCBJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuaW50ZXJmYWNlIEdpdGh1YkxpbmtQcm9wcyB7XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn1cblxuY29uc3QgUHJvamVjdEhlYWRlcjogUmVhY3QuRkM8R2l0aHViTGlua1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YSBocmVmPXtwcm9wcy5ocmVmfT5cbiAgICAgICAgPEZsZXggYWxpZ25JdGVtcz17J2NlbnRlcid9PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPXsnaDMnfSBzaXplPXsnbGcnfSBkaXNwbGF5PXsnaW5saW5lLWJsb2NrJ30gbXI9ezJ9PlxuICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8SWNvbiBuYW1lPXsnZ2l0aHViJ30gZm9udFNpemU9e2Ake3Byb3BzLmZvbnRTaXplfXB4YH0gLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9hPlxuICAgICAgPEhlYWRpbmcgYXM9eydoNSd9IHNpemU9eyd4cyd9IGZvbnRXZWlnaHQ9ezQwMH0gdGV4dFRyYW5zZm9ybT17J3VwcGVyY2FzZSd9PlxuICAgICAgICB7cHJvcHMuc3VidGl0bGV9XG4gICAgICA8L0hlYWRpbmc+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0SGVhZGVyO1xuIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGxheW91dCBmcm9tICdDOi9Vc2Vycy9JYW4vRG9jdW1lbnRzL1JlcG8vaWFuY29yZGxlLWNvbS9zcmMvbGF5b3V0cy9pbmRleCdcbmltcG9ydCBQcm9qZWN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdEhlYWRlcic7XG5leHBvcnQgKiBmcm9tICdDOi9Vc2Vycy9JYW4vRG9jdW1lbnRzL1JlcG8vaWFuY29yZGxlLWNvbS9zcmMvbGF5b3V0cy9pbmRleCc7XG5jb25zdCBtYWtlU2hvcnRjb2RlID0gbmFtZSA9PiBmdW5jdGlvbiBNRFhEZWZhdWx0U2hvcnRjb2RlKHByb3BzKSB7XG4gIGNvbnNvbGUud2FybihcIkNvbXBvbmVudCBcIiArIG5hbWUgKyBcIiB3YXMgbm90IGltcG9ydGVkLCBleHBvcnRlZCwgb3IgcHJvdmlkZWQgYnkgTURYUHJvdmlkZXIgYXMgZ2xvYmFsIHNjb3BlXCIpXG4gIHJldHVybiA8ZGl2IHsuLi5wcm9wc30vPlxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIFxufTtcbmNvbnN0IE1EWExheW91dCA9IGxheW91dCh7XG5cdHRpdGxlOiAnUHJvamVjdHMnLFxuXHRfX3Jlc291cmNlUGF0aDogJzovVXNlcnMvSWFuL0RvY3VtZW50cy9SZXBvL2lhbmNvcmRsZS1jb20vc3JjL3BhZ2VzL3Byb2plY3RzLm1keCcsXG5cdF9fc2NhbnM6IHt9LFxuXHRsYXlvdXQ6ICdpbmRleCdcbn0pXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cblxuICAgIDxoMT57YFBlcnNvbmFsIFByb2plY3RzYH08L2gxPlxuICAgIDxQcm9qZWN0SGVhZGVyIHRpdGxlPXsnaWFuY29yZGxlLmNvbSd9IHN1YnRpdGxlPXsnW1R5cGVzY3JpcHQsIFJlYWN0LCBOZXh0LmpzXSd9IGZvbnRTaXplPXs0MH0gaHJlZj17J2h0dHBzOi8vZ2l0aHViLmNvbS9TeW50aGlhbi9pYW5jb3JkbGUtY29tJ30gbWR4VHlwZT1cIlByb2plY3RIZWFkZXJcIiAvPlxuICAgIDxwPntgSGVyZSBpcyBhIGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0YH08L3A+XG4gICAgPGhyPjwvaHI+XG4gICAgPFByb2plY3RIZWFkZXIgdGl0bGU9eydCYXN0aW9uIEF1dG8gU3BsaXR0ZXInfSBzdWJ0aXRsZT17J1tDI10nfSBmb250U2l6ZT17NDB9IGhyZWY9eydodHRwczovL2dpdGh1Yi5jb20vU3ludGhpYW4vTGl2ZVNwbGl0LkJhc3Rpb24nfSBtZHhUeXBlPVwiUHJvamVjdEhlYWRlclwiIC8+XG4gICAgPHA+e2BIZXJlIGlzIGEgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3RgfTwvcD5cbiAgICA8aHI+PC9ocj5cbiAgICA8UHJvamVjdEhlYWRlciB0aXRsZT17J0Jhc3Rpb25Cb3QnfSBzdWJ0aXRsZT17J1tKYXZhLCBTcHJpbmddJ30gZm9udFNpemU9ezQwfSBocmVmPXsnaHR0cHM6Ly9naXRodWIuY29tL1N5bnRoaWFuL0Jhc3Rpb25Cb3QnfSBtZHhUeXBlPVwiUHJvamVjdEhlYWRlclwiIC8+XG4gICAgPHA+e2BIZXJlIGlzIGEgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3RgfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=