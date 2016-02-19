'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _FormattedMessage = require('../../../components/FormattedMessage');

var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = 'control-icon';

var Icon = function Icon(props) {
  var _classnames;

  var a11yTitle = props.a11yTitle;
  var a11yTitleId = props.a11yTitleId;
  var className = props.className;
  var colorIndex = props.colorIndex;
  var large = props.large;
  var size = props.size;

  if (!size && large) {
    size = 'large';
  }

  var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-defect', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, 'color-index-' + colorIndex, colorIndex), _classnames));

  var titleLabel = a11yTitle || 'defect';
  a11yTitle = _react2.default.createElement(_FormattedMessage2.default, { id: titleLabel, defaultMessage: titleLabel });

  return _react2.default.createElement(
    'svg',
    { version: '1.1', viewBox: '0 0 24.0004 24', width: '24px', height: '24px', className: classes, 'aria-labelledby': a11yTitleId },
    _react2.default.createElement(
      'title',
      { id: a11yTitleId },
      a11yTitle
    ),
    _react2.default.createElement(
      'g',
      { id: 'defect' },
      _react2.default.createElement('rect', { id: '_x2E_svg_196_', x: '0', fill: 'none', width: '24', height: '24' }),
      _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: 'M19.0004,16.0796c0,3.822-3.178,6.9204-7,6.9204\r s-7-3.0984-7-6.9204V9.3529c1-0.5968,3.3059-2.3646,7.0368-2.3529c3.6859,0.0115,5.9632,1.7527,6.9632,2.3529\r C19.0004,13.7128,19.0004,11.7197,19.0004,16.0796z M12.0004,24V12 M0.8575,6c2.3571,3.25,5.1429,3,5.1429,3 M5.0804,17.08\r c-1.01,0.19-2.7,0.83-4.22,2.92 M0.0004,13h6 M18.0004,9c0,0,2.7857,0.25,5.1429-3 M23.1404,20c-1.52-2.09-3.21-2.73-4.22-2.92\r M18.0004,13h6 M16.5904,7.98c0.27-0.61,0.41-1.28,0.41-1.98c0-2.76-2.24-5-5-5s-5,2.24-5,5c0,0.71,0.15,1.38,0.41,1.99' })
    )
  );
};

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  a11yTitleId: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  large: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large'])
};

Icon.defaultProps = {
  a11yTitleId: 'defect-title'
};

Icon.icon = true;

exports.default = Icon;
module.exports = exports['default'];