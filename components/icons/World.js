'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var World = function (_Component) {
  _inherits(World, _Component);

  function World() {
    _classCallCheck(this, World);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(World).apply(this, arguments));
  }

  _createClass(World, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.warn('This icon has been deprecated. Please check http://www.grommet.io/docs/develop/icon for the new set of icons.');
    }
  }, {
    key: 'render',
    value: function render() {
      var className = 'control-icon control-icon-world';
      if (this.props.className) {
        className += ' ' + this.props.className;
      }
      return _react2.default.createElement(
        'svg',
        { className: className, viewBox: '0 0 48 48', version: '1.1' },
        _react2.default.createElement(
          'g',
          { fill: 'none', strokeWidth: '2' },
          _react2.default.createElement('circle', { cx: '24', cy: '24', r: '12' }),
          _react2.default.createElement('ellipse', { cx: '24', cy: '24', rx: '5.5', ry: '12' }),
          _react2.default.createElement('path', { d: 'M13.1,19.6 L34.9,19.6' }),
          _react2.default.createElement('path', { d: 'M13.1,28.4 L34.9,28.4' })
        )
      );
    }
  }]);

  return World;
}(_react.Component);

exports.default = World;
module.exports = exports['default'];