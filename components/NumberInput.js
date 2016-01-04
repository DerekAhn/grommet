// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _iconsBaseAdd = require('./icons/base/Add');

var _iconsBaseAdd2 = _interopRequireDefault(_iconsBaseAdd);

var _iconsBaseSubtract = require('./icons/base/Subtract');

var _iconsBaseSubtract2 = _interopRequireDefault(_iconsBaseSubtract);

var CLASS_ROOT = "number-input";

var NumberInput = (function (_Component) {
  _inherits(NumberInput, _Component);

  function NumberInput() {
    _classCallCheck(this, NumberInput);

    _get(Object.getPrototypeOf(NumberInput.prototype), 'constructor', this).call(this);

    this._onAdd = this._onAdd.bind(this);
    this._onSubtract = this._onSubtract.bind(this);
  }

  _createClass(NumberInput, [{
    key: '_fireChange',
    value: function _fireChange() {
      var event = new Event('change', {
        'bubbles': true,
        'cancelable': true
      });
      // We use dispatchEvent to have the browser fill out the event fully.
      this.refs.input.dispatchEvent(event);
      // Manually dispatched events aren't delivered by React, so we notify too.
      this.props.onChange(event);
    }
  }, {
    key: '_onAdd',
    value: function _onAdd() {
      this.refs.input.stepUp();
      this._fireChange();
    }
  }, {
    key: '_onSubtract',
    value: function _onSubtract() {
      this.refs.input.stepDown();
      this._fireChange();
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = [CLASS_ROOT];
      var labelId = 'number-label';
      if (this.props.disabled) {
        classes.push(CLASS_ROOT + "--disabled");
      }
      if (this.props.className) {
        classes.push(this.props.className);
      }

      return _react2['default'].createElement(
        'span',
        { className: classes.join(' '),
          'aria-describedby': this.props.ariaDescribedby,
          'aria-labelledby': labelId },
        _react2['default'].createElement('input', { ref: 'input', tabIndex: '0', className: CLASS_ROOT + "__input",
          id: this.props.id, name: this.props.name, type: 'number',
          disabled: this.props.disabled,
          value: this.props.value,
          defaultValue: this.props.defaultValue,
          min: this.props.min,
          max: this.props.max,
          step: this.props.step,
          onChange: this.props.onChange }),
        _react2['default'].createElement(
          _Button2['default'],
          { type: 'icon', className: CLASS_ROOT + "__subtract",
            onClick: this._onSubtract },
          _react2['default'].createElement(_iconsBaseSubtract2['default'], null)
        ),
        _react2['default'].createElement(
          _Button2['default'],
          { type: 'icon', className: CLASS_ROOT + "__add",
            onClick: this._onAdd },
          _react2['default'].createElement(_iconsBaseAdd2['default'], null)
        )
      );
    }
  }]);

  return NumberInput;
})(_react.Component);

exports['default'] = NumberInput;

NumberInput.propTypes = {
  ariaDescribedby: _react.PropTypes.string,
  defaultValue: _react.PropTypes.number,
  disabled: _react.PropTypes.bool,
  id: _react.PropTypes.string,
  name: _react.PropTypes.string,
  max: _react.PropTypes.number,
  min: _react.PropTypes.number,
  onChange: _react.PropTypes.func,
  step: _react.PropTypes.number,
  value: _react.PropTypes.number
};
module.exports = exports['default'];