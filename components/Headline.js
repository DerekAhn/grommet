"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = "headline";

var Headline = (function (_Component) {
  _inherits(Headline, _Component);

  function Headline() {
    _classCallCheck(this, Headline);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Headline).apply(this, arguments));
  }

  _createClass(Headline, [{
    key: "render",
    value: function render() {
      var classes = [CLASS_ROOT];
      if (this.props.large) {
        classes.push(CLASS_ROOT + "--large");
      }
      if (this.props.small) {
        classes.push(CLASS_ROOT + "--small");
      }
      if (this.props.strong) {
        classes.push(CLASS_ROOT + "--strong");
      }
      if (this.props.className) {
        classes.push(this.props.className);
      }

      return _react2.default.createElement(
        "div",
        { className: classes.join(' ') },
        this.props.children
      );
    }
  }]);

  return Headline;
})(_react.Component);

exports.default = Headline;

Headline.propTypes = {
  colorIndex: _react.PropTypes.string,
  large: _react.PropTypes.bool,
  small: _react.PropTypes.bool,
  strong: _react.PropTypes.bool
};
module.exports = exports['default'];