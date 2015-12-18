// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var CLASS_ROOT = "button";

var Button = (function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    _get(Object.getPrototypeOf(Button.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var classes = [CLASS_ROOT];
      if (this.props.primary) {
        classes.push(CLASS_ROOT + "--primary");
      }
      if (this.props.secondary) {
        classes.push(CLASS_ROOT + "--secondary");
      }
      if (this.props.accent) {
        classes.push(CLASS_ROOT + "--accent");
      }
      if (!this.props.onClick) {
        classes.push(CLASS_ROOT + "--disabled");
      }
      if (this.props.fill) {
        classes.push(CLASS_ROOT + "--fill");
      }
      if (this.props.className) {
        classes.push(this.props.className);
      }

      var type = this.props.type;
      if (this.props.type === 'icon') {
        classes.push(CLASS_ROOT + "--icon");
        type = 'button';
      }

      var children = _react2["default"].Children.map(this.props.children, function (child) {
        if (child && child.icon) {
          return _react2["default"].createElement(
            "span",
            { className: CLASS_ROOT + "__icon" },
            child
          );
        } else {
          return child;
        }
      });
      if (!children) {
        children = this.props.label;
      }

      return _react2["default"].createElement(
        "button",
        { id: this.props.id, type: type, className: classes.join(' '),
          onClick: this.props.onClick, disabled: !this.props.onClick },
        children
      );
    }
  }]);

  return Button;
})(_react.Component);

Button.propTypes = {
  accent: _react.PropTypes.bool,
  fill: _react.PropTypes.bool,
  icon: _react.PropTypes.bool,
  id: _react.PropTypes.string,
  label: _react.PropTypes.node,
  onClick: _react.PropTypes.func,
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  type: _react.PropTypes.oneOf(['button', 'reset', 'submit', 'icon'])
};

Button.defaultProps = {
  type: "button"
};

module.exports = Button;