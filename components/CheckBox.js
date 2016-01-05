'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = "check-box";

var CheckBox = (function (_Component) {
  _inherits(CheckBox, _Component);

  function CheckBox() {
    _classCallCheck(this, CheckBox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckBox).apply(this, arguments));
  }

  _createClass(CheckBox, [{
    key: 'render',
    value: function render() {
      var classes = [CLASS_ROOT];
      var labelId = 'checkbox-label';
      var hidden;
      if (this.props.toggle) {
        classes.push(CLASS_ROOT + "--toggle");
      }
      if (this.props.disabled) {
        classes.push(CLASS_ROOT + "--disabled");
        if (this.props.checked) {
          hidden = _react2.default.createElement('input', { name: this.props.name, type: 'hidden', value: 'true' });
        }
      }
      if (this.props.className) {
        classes.push(this.props.className);
      }

      return _react2.default.createElement(
        'label',
        { className: classes.join(' '),
          'aria-describedby': this.props.ariaDescribedby,
          'aria-lebelledby': labelId },
        _react2.default.createElement('input', { tabIndex: '0', className: CLASS_ROOT + "__input",
          id: this.props.id, name: this.props.name, type: 'checkbox',
          disabled: this.props.disabled,
          checked: this.props.checked,
          defaultChecked: this.props.defaultChecked,
          onChange: this.props.onChange }),
        _react2.default.createElement(
          'span',
          { className: CLASS_ROOT + "__control" },
          _react2.default.createElement(
            'svg',
            { className: CLASS_ROOT + "__control-check", viewBox: '0 0 24 24',
              preserveAspectRatio: 'xMidYMid meet' },
            _react2.default.createElement('path', { fill: 'none', d: 'M6,11.3 L10.3,16 L18,6.2' })
          )
        ),
        hidden,
        _react2.default.createElement(
          'span',
          { role: 'label', id: labelId, tabIndex: '-1', className: CLASS_ROOT + "__label" },
          this.props.label
        )
      );
    }
  }]);

  return CheckBox;
})(_react.Component);

exports.default = CheckBox;

CheckBox.propTypes = {
  checked: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  id: _react.PropTypes.string.isRequired,
  label: _react.PropTypes.node.isRequired,
  name: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  ariaDescribedby: _react.PropTypes.string,
  toggle: _react.PropTypes.bool
};
module.exports = exports['default'];