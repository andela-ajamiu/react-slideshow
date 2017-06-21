webpackJsonp([0],{

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideShow = function (_React$Component) {
	_inherits(SlideShow, _React$Component);

	function SlideShow() {
		_classCallCheck(this, SlideShow);

		return _possibleConstructorReturn(this, (SlideShow.__proto__ || Object.getPrototypeOf(SlideShow)).apply(this, arguments));
	}

	_createClass(SlideShow, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ "class": "slideshow-container" },
					React.createElement(
						"div",
						{ "class": "mySlides fade" },
						React.createElement(
							"div",
							{ "class": "numbertext" },
							"1 / 3"
						),
						React.createElement("img", { src: "img1.jpg", style: "width:100%" }),
						React.createElement(
							"div",
							{ "class": "text" },
							"Caption Text"
						)
					),
					React.createElement(
						"div",
						{ "class": "mySlides fade" },
						React.createElement(
							"div",
							{ "class": "numbertext" },
							"2 / 3"
						),
						React.createElement("img", { src: "img2.jpg", style: "width:100%" }),
						React.createElement(
							"div",
							{ "class": "text" },
							"Caption Two"
						)
					),
					React.createElement(
						"a",
						{ "class": "prev", onclick: "plusSlides(-1)" },
						"\u276E"
					),
					React.createElement(
						"a",
						{ "class": "next", onclick: "plusSlides(1)" },
						"\u276F"
					)
				),
				React.createElement("br", null),
				React.createElement(
					"div",
					{ style: "text-align:center" },
					React.createElement("span", { "class": "dot", onclick: "currentSlide(1)" }),
					React.createElement("span", { "class": "dot", onclick: "currentSlide(2)" }),
					React.createElement("span", { "class": "dot", onclick: "currentSlide(3)" })
				)
			);
		}
	}]);

	return SlideShow;
}(React.Component);

exports.default = SlideShow;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _slideshow = __webpack_require__(190);

var _slideshow2 = _interopRequireDefault(_slideshow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coming = function (_React$Component) {
	_inherits(Coming, _React$Component);

	function Coming() {
		_classCallCheck(this, Coming);

		return _possibleConstructorReturn(this, (Coming.__proto__ || Object.getPrototypeOf(Coming)).apply(this, arguments));
	}

	_createClass(Coming, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ className: 'main-sctn' },
				_react2.default.createElement(
					'h1',
					{ className: 'headline' },
					' Coming June 22nd '
				),
				_react2.default.createElement(
					'p',
					{ className: 'lead-text' },
					' Sign Up for Email List '
				),
				_react2.default.createElement(
					'p',
					{ className: 'lead-text' },
					' You\'ll get 2 exclusive recipies before the public '
				),
				_react2.default.createElement('input', null),
				_react2.default.createElement(_slideshow2.default, null)
			);
		}
	}]);

	return Coming;
}(_react2.default.Component);

exports.default = Coming;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
		_inherits(Nav, _React$Component);

		function Nav() {
				_classCallCheck(this, Nav);

				return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
		}

		_createClass(Nav, [{
				key: "render",
				value: function render() {
						return _react2.default.createElement(
								"footer",
								{ className: "footer-primary" },
								_react2.default.createElement(
										"div",
										{ className: "footer-items" },
										" PlaceHolder Icon "
								),
								_react2.default.createElement(
										"div",
										{ className: "footer-items" },
										" PlaceHolder Social Media "
								),
								_react2.default.createElement(
										"div",
										{ className: "footer-items" },
										" PlaceHolder  "
								)
						);
				}
		}]);

		return Nav;
}(_react2.default.Component);

exports.default = Nav;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"header",
				null,
				_react2.default.createElement("img", { className: "site-branding", src: "./img/logo.png" })
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
	_inherits(Nav, _React$Component);

	function Nav() {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	}

	_createClass(Nav, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"nav",
				{ className: "nav-primary" },
				_react2.default.createElement(
					"ul",
					null,
					_react2.default.createElement(
						"a",
						{ href: "#" },
						" ",
						_react2.default.createElement(
							"li",
							{ className: "nav-items" },
							" About "
						),
						" "
					),
					_react2.default.createElement(
						"a",
						{ href: "#" },
						" ",
						_react2.default.createElement(
							"li",
							{ className: "nav-items" },
							" Recipies "
						),
						" "
					),
					_react2.default.createElement(
						"a",
						{ href: "#" },
						" ",
						_react2.default.createElement(
							"li",
							{ className: "nav-items" },
							" Food Photography "
						),
						" "
					),
					_react2.default.createElement(
						"a",
						{ href: "#" },
						" ",
						_react2.default.createElement(
							"li",
							{ className: "nav-items" },
							" Culinary Contraptions "
						),
						" "
					)
				)
			);
		}
	}]);

	return Nav;
}(_react2.default.Component);

exports.default = Nav;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = __webpack_require__(85);

var _header2 = _interopRequireDefault(_header);

var _nav = __webpack_require__(86);

var _nav2 = _interopRequireDefault(_nav);

var _coming = __webpack_require__(83);

var _coming2 = _interopRequireDefault(_coming);

var _footer = __webpack_require__(84);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_React$Component) {
	_inherits(Content, _React$Component);

	function Content() {
		_classCallCheck(this, Content);

		return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this));
	}

	_createClass(Content, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_header2.default, null),
				_react2.default.createElement(_nav2.default, null),
				_react2.default.createElement(_coming2.default, null),
				_react2.default.createElement(_footer2.default, null)
			);
		}
	}]);

	return Content;
}(_react2.default.Component);

exports.default = Content;


var contentNode = document.getElementById('contents');

_reactDom2.default.render(_react2.default.createElement(Content, null), contentNode);

/***/ })

},[88]);