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

  var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-validation', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, 'color-index-' + colorIndex, colorIndex), _classnames));

  var titleLabel = a11yTitle || 'validation';
  a11yTitle = _react2.default.createElement(_FormattedMessage2.default, { id: titleLabel, defaultMessage: titleLabel });

  return _react2.default.createElement(
    'svg',
    { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', className: classes, 'aria-labelledby': a11yTitleId },
    _react2.default.createElement(
      'title',
      { id: a11yTitleId },
      a11yTitle
    ),
    _react2.default.createElement(
      'g',
      { id: 'validation' },
      _react2.default.createElement('rect', { id: '_x2E_svg_90_', x: '0', fill: 'none', width: '24', height: '24' }),
      _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: 'M23,12c0,1.3559-2.1936,2.2658-2.6825,3.4448\r c-0.5068,1.2222,0.3817,3.4123-0.5394,4.3334c-0.9211,0.921-3.1111,0.0324-4.3333,0.5392C14.2657,20.8064,13.3559,23,12,23\r c-1.3559,0-2.2658-2.1936-3.4448-2.6825c-1.2222-0.5068-3.4123,0.3817-4.3334-0.5394c-0.921-0.9211-0.0324-3.1111-0.5392-4.3333\r C3.1936,14.2657,1,13.3559,1,12c0-1.3559,2.1936-2.2658,2.6825-3.4448c0.5068-1.2222-0.3817-3.4123,0.5394-4.3334\r C5.143,3.3007,7.333,4.1893,8.5552,3.6825C9.7343,3.1936,10.6441,1,12,1c1.3559,0,2.2658,2.1936,3.4448,2.6825\r c1.2222,0.5068,3.4123-0.3817,4.3334,0.5394c0.921,0.9211,0.0324,3.1111,0.5392,4.3333C20.8064,9.7343,23,10.6441,23,12z M8,12l3,3\r l6-6' })
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
  a11yTitleId: 'validation-title'
};

Icon.icon = true;

exports.default = Icon;
module.exports = exports['default'];