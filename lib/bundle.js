module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(1);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi main\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///multi_main?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Case = exports.Select = undefined;\n\nvar _Select = __webpack_require__(2);\n\nvar _Case = __webpack_require__(4);\n\nexports.Select = _Select.Select;\nexports.Case = _Case.Case;\nexports.default = _Select.Select;\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/mwalker1/workspace/opensource/react-select-case/src/index.js\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:////Users/mwalker1/workspace/opensource/react-select-case/src/index.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Select = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Case = __webpack_require__(4);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Select = exports.Select = function (_React$Component) {\n  _inherits(Select, _React$Component);\n\n  function Select() {\n    _classCallCheck(this, Select);\n\n    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));\n  }\n\n  _createClass(Select, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      if (!this.props.children || !this.props.children.filter) {\n        console.warn('No children of Select component');\n        return _react2.default.createElement('noscript', null);\n      }\n\n      var validChildren = this.props.children.filter(function (x) {\n        return x.type === _Case.Case;\n      });\n\n      if (validChildren.length !== this.props.children.length) {\n        console.warn('Only use Case as a direct child of Select');\n      }\n\n      var activeCase = validChildren.find(function (child) {\n        return child.props.when === _this2.props.on;\n      });\n\n      if (activeCase) {\n        return activeCase;\n      } else {\n        return _react2.default.createElement('noscript', null);\n      }\n    }\n  }]);\n\n  return Select;\n}(_react2.default.Component);\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/mwalker1/workspace/opensource/react-select-case/src/Select.js\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:////Users/mwalker1/workspace/opensource/react-select-case/src/Select.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"react\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react\"\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Case = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Case = exports.Case = function (_React$Component) {\n  _inherits(Case, _React$Component);\n\n  function Case() {\n    _classCallCheck(this, Case);\n\n    return _possibleConstructorReturn(this, (Case.__proto__ || Object.getPrototypeOf(Case)).apply(this, arguments));\n  }\n\n  _createClass(Case, [{\n    key: 'render',\n    value: function render() {\n      if (Array.isArray(this.props.children)) {\n        console.warn('Case should only have one direct child has', this.props.children);\n      }\n\n      if (typeof this.props.children === \"function\") {\n        return this.props.children();\n      } else {\n        return this.props.children;\n      }\n    }\n  }]);\n\n  return Case;\n}(_react2.default.Component);\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/mwalker1/workspace/opensource/react-select-case/src/Case.js\n// module id = 4\n// module chunks = 0\n//# sourceURL=webpack:////Users/mwalker1/workspace/opensource/react-select-case/src/Case.js?");

/***/ })
/******/ ]);