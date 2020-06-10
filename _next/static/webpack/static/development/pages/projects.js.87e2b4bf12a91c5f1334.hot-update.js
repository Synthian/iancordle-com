webpackHotUpdate("static\\development\\pages\\projects.js",{

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
    githubLink: 'https://github.com/Synthian/iancordle-com',
    projectLink: 'https://iancordle.com',
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
  }, "This website is a React application built with Next.js. All of my static content is written in Markdown files with MDX.\nI'm also using Chakra as my UI Library of choice.\nEverything is deployed via GitHub Pages."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "I will admit I heavily based this site off of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://leerob.io"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 58
    }
  }), "leerob.io"), ". His project was a great help in putting this together."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_ProjectHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: 'Bastion Auto Splitter',
    subtitle: '[C#]',
    fontSize: 40,
    githubLink: 'https://github.com/Synthian/LiveSplit.Bastion',
    mdxType: "ProjectHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, "Video game speedrunners want to know when they've reached a certain point in the game so they can compare their splits\nagainst previous runs. With the help of DevilSquirrel, we built this LiveSplit plugin for Bastion players to automatically\ntime when they have completed each level."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_ProjectHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: 'BastionBot',
    subtitle: '[Java, Spring]',
    fontSize: 40,
    githubLink: 'https://github.com/Synthian/BastionBot',
    mdxType: "ProjectHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "BastionBot is a Discord bot that automatically tells the Bastion Speedrun Community when players have gone live on Twitch\nand when new speedruns have been verified on Speedrun.com. It is currently being rewritten to use the Spring Framework."));
}
_c2 = MDXContent;
;
MDXContent.isMDXComponent = true;

var _c, _c2;

$RefreshReg$(_c, "MDXLayout");
$RefreshReg$(_c2, "MDXContent");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvamVjdHMubWR4Il0sIm5hbWVzIjpbIm1ha2VTaG9ydGNvZGUiLCJuYW1lIiwiTURYRGVmYXVsdFNob3J0Y29kZSIsInByb3BzIiwiY29uc29sZSIsIndhcm4iLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsImxheW91dCIsInRpdGxlIiwiX19yZXNvdXJjZVBhdGgiLCJfX3NjYW5zIiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsSUFBSTtBQUFBLFNBQUksU0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQ2hFQyxXQUFPLENBQUNDLElBQVIsQ0FBYSxlQUFlSixJQUFmLEdBQXNCLHlFQUFuQztBQUNBLFdBQU8sd0pBQVNFLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQO0FBQ0QsR0FIeUI7QUFBQSxDQUExQjs7QUFLQSxJQUFNRyxXQUFXLEdBQUcsRUFBcEI7QUFHQSxJQUFNQyxTQUFTLEdBQUdDLDBHQUFNLENBQUM7QUFDeEJDLE9BQUssRUFBRSxVQURpQjtBQUV4QkMsZ0JBQWMsRUFBRSxpRUFGUTtBQUd4QkMsU0FBTyxFQUFFLEVBSGU7QUFJeEJILFFBQU0sRUFBRTtBQUpnQixDQUFELENBQXhCO0tBQU1ELFM7QUFNUyxTQUFTSyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFVixLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUcsV0FBZixFQUFnQ0gsS0FBaEM7QUFBdUMsY0FBVSxFQUFFVSxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEssRUFNTCwwREFBQyxpRUFBRDtBQUFlLFNBQUssRUFBRSxlQUF0QjtBQUF1QyxZQUFRLEVBQUUsOEJBQWpEO0FBQWlGLFlBQVEsRUFBRSxFQUEzRjtBQUErRixjQUFVLEVBQUUsMkNBQTNHO0FBQXdKLGVBQVcsRUFBRSx1QkFBcks7QUFBOEwsV0FBTyxFQUFDLGVBQXRNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSyxFQU9MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNE5BUEssRUFVTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQUFxRDtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3ZFLFlBQVE7QUFEK0QsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBckQsNkRBVkssRUFhTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkssRUFjTCwwREFBQyxpRUFBRDtBQUFlLFNBQUssRUFBRSx1QkFBdEI7QUFBK0MsWUFBUSxFQUFFLE1BQXpEO0FBQWlFLFlBQVEsRUFBRSxFQUEzRTtBQUErRSxjQUFVLEVBQUUsK0NBQTNGO0FBQTRJLFdBQU8sRUFBQyxlQUFwSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEssRUFlTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFTQWZLLEVBa0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkssRUFtQkwsMERBQUMsaUVBQUQ7QUFBZSxTQUFLLEVBQUUsWUFBdEI7QUFBb0MsWUFBUSxFQUFFLGdCQUE5QztBQUFnRSxZQUFRLEVBQUUsRUFBMUU7QUFBOEUsY0FBVSxFQUFFLHdDQUExRjtBQUFvSSxXQUFPLEVBQUMsZUFBNUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CSyxFQW9CTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBQQXBCSyxDQUFQO0FBdUJEO01BM0J1QkQsVTtBQTZCeEI7QUFDQUEsVUFBVSxDQUFDRSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9qZWN0cy5qcy44N2UyYjRiZjEyYTkxYzVmMTMzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGxheW91dCBmcm9tICdDOi9Vc2Vycy9JYW4vRG9jdW1lbnRzL1JlcG8vaWFuY29yZGxlLWNvbS9zcmMvbGF5b3V0cy9pbmRleCdcbmltcG9ydCBQcm9qZWN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdEhlYWRlcic7XG5leHBvcnQgKiBmcm9tICdDOi9Vc2Vycy9JYW4vRG9jdW1lbnRzL1JlcG8vaWFuY29yZGxlLWNvbS9zcmMvbGF5b3V0cy9pbmRleCc7XG5jb25zdCBtYWtlU2hvcnRjb2RlID0gbmFtZSA9PiBmdW5jdGlvbiBNRFhEZWZhdWx0U2hvcnRjb2RlKHByb3BzKSB7XG4gIGNvbnNvbGUud2FybihcIkNvbXBvbmVudCBcIiArIG5hbWUgKyBcIiB3YXMgbm90IGltcG9ydGVkLCBleHBvcnRlZCwgb3IgcHJvdmlkZWQgYnkgTURYUHJvdmlkZXIgYXMgZ2xvYmFsIHNjb3BlXCIpXG4gIHJldHVybiA8ZGl2IHsuLi5wcm9wc30vPlxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIFxufTtcbmNvbnN0IE1EWExheW91dCA9IGxheW91dCh7XG5cdHRpdGxlOiAnUHJvamVjdHMnLFxuXHRfX3Jlc291cmNlUGF0aDogJzovVXNlcnMvSWFuL0RvY3VtZW50cy9SZXBvL2lhbmNvcmRsZS1jb20vc3JjL3BhZ2VzL3Byb2plY3RzLm1keCcsXG5cdF9fc2NhbnM6IHt9LFxuXHRsYXlvdXQ6ICdpbmRleCdcbn0pXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cblxuICAgIDxoMT57YFBlcnNvbmFsIFByb2plY3RzYH08L2gxPlxuICAgIDxQcm9qZWN0SGVhZGVyIHRpdGxlPXsnaWFuY29yZGxlLmNvbSd9IHN1YnRpdGxlPXsnW1R5cGVzY3JpcHQsIFJlYWN0LCBOZXh0LmpzXSd9IGZvbnRTaXplPXs0MH0gZ2l0aHViTGluaz17J2h0dHBzOi8vZ2l0aHViLmNvbS9TeW50aGlhbi9pYW5jb3JkbGUtY29tJ30gcHJvamVjdExpbms9eydodHRwczovL2lhbmNvcmRsZS5jb20nfSBtZHhUeXBlPVwiUHJvamVjdEhlYWRlclwiIC8+XG4gICAgPHA+e2BUaGlzIHdlYnNpdGUgaXMgYSBSZWFjdCBhcHBsaWNhdGlvbiBidWlsdCB3aXRoIE5leHQuanMuIEFsbCBvZiBteSBzdGF0aWMgY29udGVudCBpcyB3cml0dGVuIGluIE1hcmtkb3duIGZpbGVzIHdpdGggTURYLlxuSSdtIGFsc28gdXNpbmcgQ2hha3JhIGFzIG15IFVJIExpYnJhcnkgb2YgY2hvaWNlLlxuRXZlcnl0aGluZyBpcyBkZXBsb3llZCB2aWEgR2l0SHViIFBhZ2VzLmB9PC9wPlxuICAgIDxwPntgSSB3aWxsIGFkbWl0IEkgaGVhdmlseSBiYXNlZCB0aGlzIHNpdGUgb2ZmIG9mIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2xlZXJvYi5pb1wiXG4gICAgICB9fT57YGxlZXJvYi5pb2B9PC9hPntgLiBIaXMgcHJvamVjdCB3YXMgYSBncmVhdCBoZWxwIGluIHB1dHRpbmcgdGhpcyB0b2dldGhlci5gfTwvcD5cbiAgICA8aHI+PC9ocj5cbiAgICA8UHJvamVjdEhlYWRlciB0aXRsZT17J0Jhc3Rpb24gQXV0byBTcGxpdHRlcid9IHN1YnRpdGxlPXsnW0MjXSd9IGZvbnRTaXplPXs0MH0gZ2l0aHViTGluaz17J2h0dHBzOi8vZ2l0aHViLmNvbS9TeW50aGlhbi9MaXZlU3BsaXQuQmFzdGlvbid9IG1keFR5cGU9XCJQcm9qZWN0SGVhZGVyXCIgLz5cbiAgICA8cD57YFZpZGVvIGdhbWUgc3BlZWRydW5uZXJzIHdhbnQgdG8ga25vdyB3aGVuIHRoZXkndmUgcmVhY2hlZCBhIGNlcnRhaW4gcG9pbnQgaW4gdGhlIGdhbWUgc28gdGhleSBjYW4gY29tcGFyZSB0aGVpciBzcGxpdHNcbmFnYWluc3QgcHJldmlvdXMgcnVucy4gV2l0aCB0aGUgaGVscCBvZiBEZXZpbFNxdWlycmVsLCB3ZSBidWlsdCB0aGlzIExpdmVTcGxpdCBwbHVnaW4gZm9yIEJhc3Rpb24gcGxheWVycyB0byBhdXRvbWF0aWNhbGx5XG50aW1lIHdoZW4gdGhleSBoYXZlIGNvbXBsZXRlZCBlYWNoIGxldmVsLmB9PC9wPlxuICAgIDxocj48L2hyPlxuICAgIDxQcm9qZWN0SGVhZGVyIHRpdGxlPXsnQmFzdGlvbkJvdCd9IHN1YnRpdGxlPXsnW0phdmEsIFNwcmluZ10nfSBmb250U2l6ZT17NDB9IGdpdGh1Ykxpbms9eydodHRwczovL2dpdGh1Yi5jb20vU3ludGhpYW4vQmFzdGlvbkJvdCd9IG1keFR5cGU9XCJQcm9qZWN0SGVhZGVyXCIgLz5cbiAgICA8cD57YEJhc3Rpb25Cb3QgaXMgYSBEaXNjb3JkIGJvdCB0aGF0IGF1dG9tYXRpY2FsbHkgdGVsbHMgdGhlIEJhc3Rpb24gU3BlZWRydW4gQ29tbXVuaXR5IHdoZW4gcGxheWVycyBoYXZlIGdvbmUgbGl2ZSBvbiBUd2l0Y2hcbmFuZCB3aGVuIG5ldyBzcGVlZHJ1bnMgaGF2ZSBiZWVuIHZlcmlmaWVkIG9uIFNwZWVkcnVuLmNvbS4gSXQgaXMgY3VycmVudGx5IGJlaW5nIHJld3JpdHRlbiB0byB1c2UgdGhlIFNwcmluZyBGcmFtZXdvcmsuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9