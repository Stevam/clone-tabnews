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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Home = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Verifica se o nome contém 'iasmym' (tolerante a espaços extras e variações)\n        const lowerName = name.toLowerCase().trim(); // Converte para minúsculas e remove espaços extras\n        const validNames = [\n            \"iasmym\",\n            \"iasmym santos\",\n            \"iasmym santos silveira\"\n        ];\n        if (validNames.includes(lowerName)) {\n            setMessage(\"Voc\\xea \\xe9 minha fonte de felicidade \\uD83E\\uDD70<br />Cada momento contigo \\xe9 um presente de Deus que eu agrade\\xe7o todos os dias \\uD83C\\uDF38<br />Te amo meu amor! \\uD83D\\uDC96\");\n        } else {\n            setMessage(\"Sinto muito, n\\xe3o \\xe9 voc\\xea... \\uD83D\\uDE14\");\n        }\n        // Limpa o campo de input\n        setName(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.header,\n                children: \"Digite seu nome:\"\n            }, void 0, false, {\n                fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Seu nome\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value),\n                        style: styles.input\n                    }, void 0, false, {\n                        fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        style: styles.button,\n                        children: \"Enviar\"\n                    }, void 0, false, {\n                        fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: styles.message,\n                dangerouslySetInnerHTML: {\n                    __html: message\n                }\n            }, void 0, false, {\n                fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"VNe8pkz9rFnZnU0u7QtSolvYQ5w=\");\n_c = Home;\nconst styles = {\n    container: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        background: \"linear-gradient(135deg, #D6A5E5, #B3A0D1)\",\n        color: \"#f4f4f4\",\n        margin: 0,\n        padding: 0,\n        boxSizing: \"border-box\"\n    },\n    header: {\n        fontSize: \"2rem\",\n        marginBottom: \"20px\",\n        color: \"#f4f4f4\"\n    },\n    input: {\n        padding: \"10px\",\n        margin: \"10px\",\n        border: \"1px solid #555\",\n        borderRadius: \"5px\",\n        fontSize: \"1rem\",\n        width: \"250px\",\n        backgroundColor: \"#444\",\n        color: \"#f4f4f4\"\n    },\n    button: {\n        padding: \"10px 20px\",\n        border: \"none\",\n        borderRadius: \"5px\",\n        backgroundColor: \"#4CAF50\",\n        color: \"white\",\n        fontSize: \"1rem\",\n        cursor: \"pointer\"\n    },\n    message: {\n        marginTop: \"20px\",\n        fontSize: \"1.2rem\",\n        color: \"#f4f4f4\",\n        fontWeight: \"bold\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNTSxlQUFlLENBQUNDLElBQU07UUFDMUJBLEVBQUVDLGNBQWM7UUFFaEIsOEVBQThFO1FBQzlFLE1BQU1DLFlBQVlQLEtBQUtRLFdBQVcsR0FBR0MsSUFBSSxJQUFJLG1EQUFtRDtRQUNoRyxNQUFNQyxhQUFhO1lBQUM7WUFBVTtZQUFpQjtTQUF5QjtRQUV4RSxJQUFJQSxXQUFXQyxRQUFRLENBQUNKLFlBQVk7WUFDbENKLFdBQ0U7UUFFSixPQUFPO1lBQ0xBLFdBQVc7UUFDYixDQUFDO1FBRUQseUJBQXlCO1FBQ3pCRixRQUFRO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ1c7UUFBSUMsT0FBT0MsT0FBT0MsU0FBUzs7MEJBQzFCLDhEQUFDQztnQkFBR0gsT0FBT0MsT0FBT0csTUFBTTswQkFBRTs7Ozs7OzBCQUMxQiw4REFBQ0M7Z0JBQUtDLFVBQVVmOztrQ0FDZCw4REFBQ2dCO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPdkI7d0JBQ1B3QixVQUFVLENBQUNuQixJQUFNSixRQUFRSSxFQUFFb0IsTUFBTSxDQUFDRixLQUFLO3dCQUN2Q1YsT0FBT0MsT0FBT00sS0FBSzs7Ozs7O2tDQUVyQiw4REFBQ007d0JBQU9MLE1BQUs7d0JBQVNSLE9BQU9DLE9BQU9ZLE1BQU07a0NBQUU7Ozs7Ozs7Ozs7OzswQkFFOUMsOERBQUNDO2dCQUFFZCxPQUFPQyxPQUFPWixPQUFPO2dCQUFFMEIseUJBQXlCO29CQUFFQyxRQUFRM0I7Z0JBQVE7Ozs7Ozs7Ozs7OztBQUczRTtHQXZDTUg7S0FBQUE7QUF5Q04sTUFBTWUsU0FBUztJQUNiQyxXQUFXO1FBQ1RlLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxZQUFZO1FBQ1pDLGdCQUFnQjtRQUNoQkMsUUFBUTtRQUNSQyxZQUFZO1FBQ1pDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtJQUNBdEIsUUFBUTtRQUNOdUIsVUFBVTtRQUNWQyxjQUFjO1FBQ2RMLE9BQU87SUFDVDtJQUNBaEIsT0FBTztRQUNMa0IsU0FBUztRQUNURCxRQUFRO1FBQ1JLLFFBQVE7UUFDUkMsY0FBYztRQUNkSCxVQUFVO1FBQ1ZJLE9BQU87UUFDUEMsaUJBQWlCO1FBQ2pCVCxPQUFPO0lBQ1Q7SUFDQVYsUUFBUTtRQUNOWSxTQUFTO1FBQ1RJLFFBQVE7UUFDUkMsY0FBYztRQUNkRSxpQkFBaUI7UUFDakJULE9BQU87UUFDUEksVUFBVTtRQUNWTSxRQUFRO0lBQ1Y7SUFDQTVDLFNBQVM7UUFDUDZDLFdBQVc7UUFDWFAsVUFBVTtRQUNWSixPQUFPO1FBQ1BZLFlBQVk7SUFDZDtBQUNGO0FBRUEsK0RBQWVqRCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIFZlcmlmaWNhIHNlIG8gbm9tZSBjb250w6ltICdpYXNteW0nICh0b2xlcmFudGUgYSBlc3Bhw6dvcyBleHRyYXMgZSB2YXJpYcOnw7VlcylcbiAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpOyAvLyBDb252ZXJ0ZSBwYXJhIG1pbsO6c2N1bGFzIGUgcmVtb3ZlIGVzcGHDp29zIGV4dHJhc1xuICAgIGNvbnN0IHZhbGlkTmFtZXMgPSBbJ2lhc215bScsICdpYXNteW0gc2FudG9zJywgJ2lhc215bSBzYW50b3Mgc2lsdmVpcmEnXTtcblxuICAgIGlmICh2YWxpZE5hbWVzLmluY2x1ZGVzKGxvd2VyTmFtZSkpIHtcbiAgICAgIHNldE1lc3NhZ2UoXG4gICAgICAgICdWb2PDqiDDqSBtaW5oYSBmb250ZSBkZSBmZWxpY2lkYWRlIPCfpbA8YnIgLz5DYWRhIG1vbWVudG8gY29udGlnbyDDqSB1bSBwcmVzZW50ZSBkZSBEZXVzIHF1ZSBldSBhZ3JhZGXDp28gdG9kb3Mgb3MgZGlhcyDwn4y4PGJyIC8+VGUgYW1vIG1ldSBhbW9yISDwn5KWJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TWVzc2FnZSgnU2ludG8gbXVpdG8sIG7Do28gw6kgdm9jw6ouLi4g8J+YlCcpO1xuICAgIH1cblxuICAgIC8vIExpbXBhIG8gY2FtcG8gZGUgaW5wdXRcbiAgICBzZXROYW1lKCcnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5EaWdpdGUgc2V1IG5vbWU6PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZXUgbm9tZVwiXG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0+RW52aWFyPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cCBzdHlsZT17c3R5bGVzLm1lc3NhZ2V9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZSB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0Q2QTVFNSwgI0IzQTBEMSknLCAvLyBHcmFkaWVudGUgZGUgbGlsw6FzIGZvZm9cbiAgICBjb2xvcjogJyNmNGY0ZjQnLFxuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBmb250U2l6ZTogJzJyZW0nLFxuICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxuICAgIGNvbG9yOiAnI2Y0ZjRmNCcsXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgcGFkZGluZzogJzEwcHgnLFxuICAgIG1hcmdpbjogJzEwcHgnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgd2lkdGg6ICcyNTBweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzQ0NCcsXG4gICAgY29sb3I6ICcjZjRmNGY0JyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgcGFkZGluZzogJzEwcHggMjBweCcsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNENBRjUwJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICB9LFxuICBtZXNzYWdlOiB7XG4gICAgbWFyZ2luVG9wOiAnMjBweCcsXG4gICAgZm9udFNpemU6ICcxLjJyZW0nLFxuICAgIGNvbG9yOiAnI2Y0ZjRmNCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIb21lIiwibmFtZSIsInNldE5hbWUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvd2VyTmFtZSIsInRvTG93ZXJDYXNlIiwidHJpbSIsInZhbGlkTmFtZXMiLCJpbmNsdWRlcyIsImRpdiIsInN0eWxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaDEiLCJoZWFkZXIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJwIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImJhY2tncm91bmQiLCJjb2xvciIsIm1hcmdpbiIsInBhZGRpbmciLCJib3hTaXppbmciLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIiwibWFyZ2luVG9wIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});