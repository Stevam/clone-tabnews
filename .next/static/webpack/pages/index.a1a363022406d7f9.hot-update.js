"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Home = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Verifica se o nome contém 'iasmym' (tolerante a espaços extras e variações)\n        const lowerName = name.toLowerCase().trim(); // Converte para minúsculas e remove espaços extras\n        const validNames = [\n            \"iasmym\",\n            \"iasmym santos\",\n            \"iasmym santos silveira\"\n        ];\n        if (validNames.includes(lowerName)) {\n            setMessage(\"Voc\\xea \\xe9 minha fonte de felicidade, meu amor! \\uD83D\\uDC96\");\n        } else {\n            setMessage(\"Sinto muito, n\\xe3o \\xe9 voc\\xea... \\uD83D\\uDE14\");\n        }\n        // Limpa o campo de input\n        setName(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.header,\n                children: \"Digite seu nome:\"\n            }, void 0, false, {\n                fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Seu nome\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value),\n                        style: styles.input\n                    }, void 0, false, {\n                        fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        style: styles.button,\n                        children: \"Enviar\"\n                    }, void 0, false, {\n                        fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: styles.message,\n                children: message\n            }, void 0, false, {\n                fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"VNe8pkz9rFnZnU0u7QtSolvYQ5w=\");\n_c = Home;\nconst styles = {\n    container: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        background: \"linear-gradient(135deg, #2196F3, #FF4081)\",\n        color: \"#f4f4f4\",\n        margin: 0,\n        padding: 0\n    },\n    header: {\n        fontSize: \"2rem\",\n        marginBottom: \"20px\",\n        color: \"#f4f4f4\"\n    },\n    input: {\n        padding: \"10px\",\n        margin: \"10px\",\n        border: \"1px solid #555\",\n        borderRadius: \"5px\",\n        fontSize: \"1rem\",\n        width: \"250px\",\n        backgroundColor: \"#444\",\n        color: \"#f4f4f4\"\n    },\n    button: {\n        padding: \"10px 20px\",\n        border: \"none\",\n        borderRadius: \"5px\",\n        backgroundColor: \"#4CAF50\",\n        color: \"white\",\n        fontSize: \"1rem\",\n        cursor: \"pointer\"\n    },\n    message: {\n        marginTop: \"20px\",\n        fontSize: \"1.2rem\",\n        color: \"#f4f4f4\",\n        fontWeight: \"bold\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNTSxlQUFlLENBQUNDLElBQU07UUFDMUJBLEVBQUVDLGNBQWM7UUFFaEIsOEVBQThFO1FBQzlFLE1BQU1DLFlBQVlQLEtBQUtRLFdBQVcsR0FBR0MsSUFBSSxJQUFJLG1EQUFtRDtRQUNoRyxNQUFNQyxhQUFhO1lBQUM7WUFBVTtZQUFpQjtTQUF5QjtRQUV4RSxJQUFJQSxXQUFXQyxRQUFRLENBQUNKLFlBQVk7WUFDbENKLFdBQVc7UUFDYixPQUFPO1lBQ0xBLFdBQVc7UUFDYixDQUFDO1FBRUQseUJBQXlCO1FBQ3pCRixRQUFRO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ1c7UUFBSUMsT0FBT0MsT0FBT0MsU0FBUzs7MEJBQzFCLDhEQUFDQztnQkFBR0gsT0FBT0MsT0FBT0csTUFBTTswQkFBRTs7Ozs7OzBCQUMxQiw4REFBQ0M7Z0JBQUtDLFVBQVVmOztrQ0FDZCw4REFBQ2dCO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPdkI7d0JBQ1B3QixVQUFVLENBQUNuQixJQUFNSixRQUFRSSxFQUFFb0IsTUFBTSxDQUFDRixLQUFLO3dCQUN2Q1YsT0FBT0MsT0FBT00sS0FBSzs7Ozs7O2tDQUVyQiw4REFBQ007d0JBQU9MLE1BQUs7d0JBQVNSLE9BQU9DLE9BQU9ZLE1BQU07a0NBQUU7Ozs7Ozs7Ozs7OzswQkFFOUMsOERBQUNDO2dCQUFFZCxPQUFPQyxPQUFPWixPQUFPOzBCQUFHQTs7Ozs7Ozs7Ozs7O0FBR2pDO0dBckNNSDtLQUFBQTtBQXVDTixNQUFNZSxTQUFTO0lBQ2JDLFdBQVc7UUFDVGEsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7UUFDWkMsZ0JBQWdCO1FBQ2hCQyxRQUFRO1FBQ1JDLFlBQVk7UUFDWkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFNBQVM7SUFDWDtJQUNBbkIsUUFBUTtRQUNOb0IsVUFBVTtRQUNWQyxjQUFjO1FBQ2RKLE9BQU87SUFDVDtJQUNBZCxPQUFPO1FBQ0xnQixTQUFTO1FBQ1RELFFBQVE7UUFDUkksUUFBUTtRQUNSQyxjQUFjO1FBQ2RILFVBQVU7UUFDVkksT0FBTztRQUNQQyxpQkFBaUI7UUFDakJSLE9BQU87SUFDVDtJQUNBUixRQUFRO1FBQ05VLFNBQVM7UUFDVEcsUUFBUTtRQUNSQyxjQUFjO1FBQ2RFLGlCQUFpQjtRQUNqQlIsT0FBTztRQUNQRyxVQUFVO1FBQ1ZNLFFBQVE7SUFDVjtJQUNBekMsU0FBUztRQUNQMEMsV0FBVztRQUNYUCxVQUFVO1FBQ1ZILE9BQU87UUFDUFcsWUFBWTtJQUNkO0FBQ0Y7QUFFQSwrREFBZTlDLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gVmVyaWZpY2Egc2UgbyBub21lIGNvbnTDqW0gJ2lhc215bScgKHRvbGVyYW50ZSBhIGVzcGHDp29zIGV4dHJhcyBlIHZhcmlhw6fDtWVzKVxuICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS50cmltKCk7IC8vIENvbnZlcnRlIHBhcmEgbWluw7pzY3VsYXMgZSByZW1vdmUgZXNwYcOnb3MgZXh0cmFzXG4gICAgY29uc3QgdmFsaWROYW1lcyA9IFsnaWFzbXltJywgJ2lhc215bSBzYW50b3MnLCAnaWFzbXltIHNhbnRvcyBzaWx2ZWlyYSddO1xuXG4gICAgaWYgKHZhbGlkTmFtZXMuaW5jbHVkZXMobG93ZXJOYW1lKSkge1xuICAgICAgc2V0TWVzc2FnZSgnVm9jw6ogw6kgbWluaGEgZm9udGUgZGUgZmVsaWNpZGFkZSwgbWV1IGFtb3IhIPCfkpYnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TWVzc2FnZSgnU2ludG8gbXVpdG8sIG7Do28gw6kgdm9jw6ouLi4g8J+YlCcpO1xuICAgIH1cblxuICAgIC8vIExpbXBhIG8gY2FtcG8gZGUgaW5wdXRcbiAgICBzZXROYW1lKCcnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5EaWdpdGUgc2V1IG5vbWU6PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZXUgbm9tZVwiXG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0+RW52aWFyPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cCBzdHlsZT17c3R5bGVzLm1lc3NhZ2V9PnttZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyMTk2RjMsICNGRjQwODEpJywgLy8gR3JhZGllbnRlIGRlIGF6dWwgcGFyYSByb3NhXG4gICAgY29sb3I6ICcjZjRmNGY0JywgLy8gVGV4dG8gY2xhcm8gcGFyYSBjb250cmFzdGVcbiAgICBtYXJnaW46IDAsIC8vIFJlbW92ZSBhIG1hcmdlbSBwYWRyw6NvIGRvIGJvZHlcbiAgICBwYWRkaW5nOiAwLCAvLyBSZW1vdmUgbyBwYWRkaW5nIGRvIGJvZHlcbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgZm9udFNpemU6ICcycmVtJyxcbiAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcbiAgICBjb2xvcjogJyNmNGY0ZjQnLCAvLyBDb3IgZG8gdGV4dG8gZG8gdMOtdHVsb1xuICB9LFxuICBpbnB1dDoge1xuICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICBtYXJnaW46ICcxMHB4JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzU1NScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0NDQnLCAvLyBGdW5kbyBkbyBpbnB1dCBtYWlzIGVzY3Vyb1xuICAgIGNvbG9yOiAnI2Y0ZjRmNCcsIC8vIENvciBkbyB0ZXh0byBkbyBpbnB1dFxuICB9LFxuICBidXR0b246IHtcbiAgICBwYWRkaW5nOiAnMTBweCAyMHB4JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0Q0FGNTAnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcbiAgICBmb250U2l6ZTogJzEuMnJlbScsXG4gICAgY29sb3I6ICcjZjRmNGY0JywgLy8gQ29yIGRvIHRleHRvIGRhIG1lbnNhZ2VtXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSG9tZSIsIm5hbWUiLCJzZXROYW1lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb3dlck5hbWUiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJ2YWxpZE5hbWVzIiwiaW5jbHVkZXMiLCJkaXYiLCJzdHlsZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImgxIiwiaGVhZGVyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwicCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImNvbG9yIiwibWFyZ2luIiwicGFkZGluZyIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});