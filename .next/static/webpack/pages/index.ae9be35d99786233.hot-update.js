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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Home = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Verifica se o nome contém 'iasmym' (tolerante a espaços extras e variações)\n        const lowerName = name.toLowerCase().trim(); // Converte para minúsculas e remove espaços extras\n        const validNames = [\n            \"iasmym\",\n            \"iasmym santos\",\n            \"iasmym santos silveira\"\n        ];\n        if (!name) {\n            setMessage(\"Digite um nome para descobrir a mensagem secreta! \\uD83D\\uDE0A\");\n        } else if (validNames.includes(lowerName)) {\n            setMessage(\"\\uD83E\\uDD70Voc\\xea \\xe9 minha fonte de felicidade!!✨<br />\\uD83D\\uDCABCada momento contigo \\xe9 um presente de Deus que eu agrade\\xe7o todos os dias!!\\uD83C\\uDF38<br />\\uD83D\\uDC95Te amo meu amor!!\\uD83D\\uDC96\");\n        } else {\n            setMessage(\"Sinto muito, n\\xe3o \\xe9 voc\\xea... \\uD83D\\uDE14\");\n        }\n        // Limpa o campo de input\n        setName(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.header,\n                children: \"Digite seu nome:\"\n            }, void 0, false, {\n                fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                style: styles.form,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Seu nome\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value),\n                        style: styles.input\n                    }, void 0, false, {\n                        fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        style: styles.button,\n                        children: \"Enviar\"\n                    }, void 0, false, {\n                        fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: styles.message,\n                dangerouslySetInnerHTML: {\n                    __html: message\n                }\n            }, void 0, false, {\n                fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/stevam/@curso.dev/clone-tabnews/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"VNe8pkz9rFnZnU0u7QtSolvYQ5w=\");\n_c = Home;\nconst styles = {\n    container: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        background: \"linear-gradient(135deg, #D6A5E5, #B3A0D1)\",\n        color: \"#f4f4f4\",\n        margin: 0,\n        padding: 0,\n        boxSizing: \"border-box\"\n    },\n    header: {\n        fontSize: \"2rem\",\n        marginBottom: \"20px\",\n        color: \"#f4f4f4\",\n        textAlign: \"center\"\n    },\n    form: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\"\n    },\n    input: {\n        padding: \"10px\",\n        margin: \"10px\",\n        border: \"1px solid #555\",\n        borderRadius: \"5px\",\n        fontSize: \"1rem\",\n        width: \"250px\",\n        backgroundColor: \"#444\",\n        color: \"#f4f4f4\",\n        textAlign: \"center\"\n    },\n    button: {\n        padding: \"10px 20px\",\n        border: \"none\",\n        borderRadius: \"5px\",\n        backgroundColor: \"#4CAF50\",\n        color: \"white\",\n        fontSize: \"1rem\",\n        cursor: \"pointer\",\n        marginTop: \"10px\"\n    },\n    message: {\n        marginTop: \"20px\",\n        fontSize: \"1.2rem\",\n        color: \"#f4f4f4\",\n        fontWeight: \"bold\",\n        textAlign: \"center\",\n        maxWidth: \"300px\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNTSxlQUFlLENBQUNDLElBQU07UUFDMUJBLEVBQUVDLGNBQWM7UUFFaEIsOEVBQThFO1FBQzlFLE1BQU1DLFlBQVlQLEtBQUtRLFdBQVcsR0FBR0MsSUFBSSxJQUFJLG1EQUFtRDtRQUNoRyxNQUFNQyxhQUFhO1lBQUM7WUFBVTtZQUFpQjtTQUF5QjtRQUV4RSxJQUFJLENBQUNWLE1BQU07WUFDVEcsV0FBVztRQUNiLE9BQU8sSUFBSU8sV0FBV0MsUUFBUSxDQUFDSixZQUFZO1lBQ3pDSixXQUNFO1FBRUosT0FBTztZQUNMQSxXQUFXO1FBQ2IsQ0FBQztRQUVELHlCQUF5QjtRQUN6QkYsUUFBUTtJQUNWO0lBRUEscUJBQ0UsOERBQUNXO1FBQUlDLE9BQU9DLE9BQU9DLFNBQVM7OzBCQUMxQiw4REFBQ0M7Z0JBQUdILE9BQU9DLE9BQU9HLE1BQU07MEJBQUU7Ozs7OzswQkFDMUIsOERBQUNDO2dCQUFLQyxVQUFVZjtnQkFBY1MsT0FBT0MsT0FBT0ksSUFBSTs7a0NBQzlDLDhEQUFDRTt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT3ZCO3dCQUNQd0IsVUFBVSxDQUFDbkIsSUFBTUosUUFBUUksRUFBRW9CLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDdkNWLE9BQU9DLE9BQU9NLEtBQUs7Ozs7OztrQ0FFckIsOERBQUNNO3dCQUFPTCxNQUFLO3dCQUFTUixPQUFPQyxPQUFPWSxNQUFNO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBRTlDLDhEQUFDQztnQkFDQ2QsT0FBT0MsT0FBT1osT0FBTztnQkFDckIwQix5QkFBeUI7b0JBQUVDLFFBQVEzQjtnQkFBUTs7Ozs7Ozs7Ozs7O0FBSW5EO0dBNUNNSDtLQUFBQTtBQThDTixNQUFNZSxTQUFTO0lBQ2JDLFdBQVc7UUFDVGUsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7UUFDWkMsZ0JBQWdCO1FBQ2hCQyxRQUFRO1FBQ1JDLFlBQVk7UUFDWkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsV0FBVztJQUNiO0lBQ0F0QixRQUFRO1FBQ051QixVQUFVO1FBQ1ZDLGNBQWM7UUFDZEwsT0FBTztRQUNQTSxXQUFXO0lBQ2I7SUFDQXhCLE1BQU07UUFDSlksU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7SUFDZDtJQUNBWixPQUFPO1FBQ0xrQixTQUFTO1FBQ1RELFFBQVE7UUFDUk0sUUFBUTtRQUNSQyxjQUFjO1FBQ2RKLFVBQVU7UUFDVkssT0FBTztRQUNQQyxpQkFBaUI7UUFDakJWLE9BQU87UUFDUE0sV0FBVztJQUNiO0lBQ0FoQixRQUFRO1FBQ05ZLFNBQVM7UUFDVEssUUFBUTtRQUNSQyxjQUFjO1FBQ2RFLGlCQUFpQjtRQUNqQlYsT0FBTztRQUNQSSxVQUFVO1FBQ1ZPLFFBQVE7UUFDUkMsV0FBVztJQUNiO0lBQ0E5QyxTQUFTO1FBQ1A4QyxXQUFXO1FBQ1hSLFVBQVU7UUFDVkosT0FBTztRQUNQYSxZQUFZO1FBQ1pQLFdBQVc7UUFDWFEsVUFBVTtJQUNaO0FBQ0Y7QUFFQSwrREFBZW5ELElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gVmVyaWZpY2Egc2UgbyBub21lIGNvbnTDqW0gJ2lhc215bScgKHRvbGVyYW50ZSBhIGVzcGHDp29zIGV4dHJhcyBlIHZhcmlhw6fDtWVzKVxuICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS50cmltKCk7IC8vIENvbnZlcnRlIHBhcmEgbWluw7pzY3VsYXMgZSByZW1vdmUgZXNwYcOnb3MgZXh0cmFzXG4gICAgY29uc3QgdmFsaWROYW1lcyA9IFsnaWFzbXltJywgJ2lhc215bSBzYW50b3MnLCAnaWFzbXltIHNhbnRvcyBzaWx2ZWlyYSddO1xuXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICBzZXRNZXNzYWdlKCdEaWdpdGUgdW0gbm9tZSBwYXJhIGRlc2NvYnJpciBhIG1lbnNhZ2VtIHNlY3JldGEhIPCfmIonKTtcbiAgICB9IGVsc2UgaWYgKHZhbGlkTmFtZXMuaW5jbHVkZXMobG93ZXJOYW1lKSkge1xuICAgICAgc2V0TWVzc2FnZShcbiAgICAgICAgJ/CfpbBWb2PDqiDDqSBtaW5oYSBmb250ZSBkZSBmZWxpY2lkYWRlISHinKg8YnIgLz7wn5KrQ2FkYSBtb21lbnRvIGNvbnRpZ28gw6kgdW0gcHJlc2VudGUgZGUgRGV1cyBxdWUgZXUgYWdyYWRlw6dvIHRvZG9zIG9zIGRpYXMhIfCfjLg8YnIgLz7wn5KVVGUgYW1vIG1ldSBhbW9yISHwn5KWJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TWVzc2FnZSgnU2ludG8gbXVpdG8sIG7Do28gw6kgdm9jw6ouLi4g8J+YlCcpO1xuICAgIH1cblxuICAgIC8vIExpbXBhIG8gY2FtcG8gZGUgaW5wdXRcbiAgICBzZXROYW1lKCcnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5EaWdpdGUgc2V1IG5vbWU6PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHN0eWxlPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNldSBub21lXCJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXtzdHlsZXMuYnV0dG9ufT5FbnZpYXI8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxwXG4gICAgICAgIHN0eWxlPXtzdHlsZXMubWVzc2FnZX1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtZXNzYWdlIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0Q2QTVFNSwgI0IzQTBEMSknLCAvLyBHcmFkaWVudGUgbGlsw6FzXG4gICAgY29sb3I6ICcjZjRmNGY0JyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgZm9udFNpemU6ICcycmVtJyxcbiAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcbiAgICBjb2xvcjogJyNmNGY0ZjQnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsIC8vIENlbnRyYWxpemEgbyB0w610dWxvXG4gIH0sXG4gIGZvcm06IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgcGFkZGluZzogJzEwcHgnLFxuICAgIG1hcmdpbjogJzEwcHgnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgd2lkdGg6ICcyNTBweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzQ0NCcsXG4gICAgY29sb3I6ICcjZjRmNGY0JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLCAvLyBBbGluaGEgbyB0ZXh0byBkbyBpbnB1dCBhbyBjZW50cm9cbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgcGFkZGluZzogJzEwcHggMjBweCcsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNENBRjUwJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG1hcmdpblRvcDogJzEwcHgnLFxuICB9LFxuICBtZXNzYWdlOiB7XG4gICAgbWFyZ2luVG9wOiAnMjBweCcsXG4gICAgZm9udFNpemU6ICcxLjJyZW0nLFxuICAgIGNvbG9yOiAnI2Y0ZjRmNCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsIC8vIENlbnRyYWxpemEgYSBtZW5zYWdlbVxuICAgIG1heFdpZHRoOiAnMzAwcHgnLCAvLyBMaW1pdGEgYSBsYXJndXJhIGRhIG1lbnNhZ2VtXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJuYW1lIiwic2V0TmFtZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibG93ZXJOYW1lIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwidmFsaWROYW1lcyIsImluY2x1ZGVzIiwiZGl2Iiwic3R5bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoMSIsImhlYWRlciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsInAiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImNvbG9yIiwibWFyZ2luIiwicGFkZGluZyIsImJveFNpemluZyIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJmb250V2VpZ2h0IiwibWF4V2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});