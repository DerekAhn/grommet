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

  var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-group', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, 'color-index-' + colorIndex, colorIndex), _classnames));

  var titleLabel = a11yTitle || 'group';
  a11yTitle = _react2.default.createElement(_FormattedMessage2.default, { id: titleLabel, defaultMessage: titleLabel });

  return _react2.default.createElement(
    'svg',
    { version: '1.1', viewBox: '0 0 26 24', width: '24px', height: '24px', className: classes, 'aria-labelledby': a11yTitleId },
    _react2.default.createElement(
      'title',
      { id: a11yTitleId },
      a11yTitle
    ),
    _react2.default.createElement(
      'g',
      { id: 'group' },
      _react2.default.createElement('rect', { id: '_x2E_svg_119_', x: '1', fill: 'none', width: '24', height: '24' }),
      _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: 'M17,8.5c0,2.2091-1.7909,4-4,4s-4-1.7909-4-4\r s1.7909-4,4-4S17,6.2909,17,8.5z M19,18.4091C19,14.995,16.3687,12.5,12.9546,12.5h0.1364C9.6768,12.5,7,14.995,7,18.4091V21.5h12\r V18.4091z M16.96,8.93c0.01,0,0.01,0.01,0.02,0.01c0.58,0.35,1.26,0.55,1.97,0.56c0.02,0,0.03,0,0.05,0c2.21,0,4-1.79,4-4\r s-1.79-4-4-4c-2.06,0-3.76,1.56-3.97,3.56 M19,18.5h6v-3.0909C25,11.995,22.3687,9.5,18.9546,9.5H19 M10.97,5.06\r C10.76,3.06,9.06,1.5,7,1.5c-2.21,0-4,1.79-4,4s1.79,4,4,4c0.02,0,0.03,0,0.05,0c0.71-0.01,1.39-0.21,1.97-0.56\r c0.01,0,0.01-0.01,0.02-0.01 M7,9.5h0.0454C3.6313,9.5,1,11.995,1,15.4091V18.5h6' })
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
  a11yTitleId: 'group-title'
};

Icon.icon = true;

exports.default = Icon;
module.exports = exports['default'];