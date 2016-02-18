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

  var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-reddit', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, 'color-index-' + colorIndex, colorIndex), _classnames));

  var titleLabel = a11yTitle || 'social-reddit';
  a11yTitle = _react2.default.createElement(_FormattedMessage2.default, { id: titleLabel, defaultMessage: titleLabel });

  return _react2.default.createElement(
    'svg',
    { version: '1.1', viewBox: '0 0 24.0027 24', width: '24px', height: '24px', className: classes, 'aria-labelledby': a11yTitleId },
    _react2.default.createElement(
      'title',
      { id: a11yTitleId },
      a11yTitle
    ),
    _react2.default.createElement(
      'g',
      { id: 'social-reddit' },
      _react2.default.createElement('rect', { id: '_x2E_svg_289_', x: '0', y: '0', fill: 'none', width: '24', height: '24' }),
      _react2.default.createElement('path', { d: 'M24.0027,11.6172c0-1.4806-1.1866-2.6833-2.6459-2.6833c-0.6949,0-1.3203,0.2673-1.796,0.7109\r c-1.7318-1.2187-4.0677-2.0205-6.6762-2.1702l1.1706-3.9127l3.5866,0.7216c0.1229,1.2134,1.1332,2.1595,2.3679,2.1595\r c0.0053,0,0.0053,0,0.0107,0c0.0053,0,0.0053,0,0.0107,0c1.3149,0,2.3786-1.0797,2.3786-2.4107s-1.069-2.4107-2.384-2.4107\r c-0.0053,0-0.0053,0-0.0107,0h-0.0053c-0.9194,0-1.7105,0.5238-2.1114,1.2989l-4.7947-0.9621L11.4575,7.464l-0.1336,0.0053\r C8.6352,7.5869,6.2191,8.3994,4.4445,9.6448c-0.4704-0.4437-1.1011-0.7109-1.796-0.7109c-1.4592,0-2.6459,1.2027-2.6459,2.6833\r c0,1.0477,0.588,1.951,1.4486,2.3947c-0.0428,0.2619-0.0641,0.5238-0.0641,0.7911c0.0053,4.0517,4.7572,7.3443,10.6156,7.3443\r s10.6102-3.2927,10.6102-7.3497c0-0.2673-0.0214-0.5292-0.0588-0.7911C23.4147,13.5628,24.0027,12.6595,24.0027,11.6172z\r M1.8361,12.6916c-0.3528-0.2405-0.5826-0.6468-0.5826-1.1118c0-0.7376,0.5933-1.3416,1.3203-1.3416\r c0.2993,0,0.5773,0.1016,0.8018,0.2726C2.6539,11.1468,2.1194,11.8844,1.8361,12.6916z M19.1278,4.0323\r c0-0.4918,0.3955-0.898,0.882-0.898c0.4864,0,0.882,0.4009,0.882,0.898c0,0.4918-0.3955,0.898-0.882,0.898\r C19.5234,4.9303,19.1278,4.5294,19.1278,4.0323z M6.7911,13.6163c0-0.9408,0.759-1.6998,1.6998-1.6998s1.6998,0.759,1.6998,1.6998\r c0,0.9408-0.759,1.6998-1.6998,1.6998S6.7911,14.557,6.7911,13.6163z M12.003,19.7064c-2.8266-0.0119-4.5131-1.6924-4.5843-1.7637\r l0.7482-0.7363c0.0119,0.0119,1.4074,1.4371,3.8361,1.4489c2.3931-0.0119,3.8124-1.4371,3.8302-1.4489l0.7482,0.7363\r C16.5101,18.014,14.8296,19.6945,12.003,19.7064z M15.5465,15.3161c-0.9408,0-1.6998-0.759-1.6998-1.6998\r c0-0.9408,0.759-1.6998,1.6998-1.6998s1.6998,0.759,1.6998,1.6998S16.482,15.3161,15.5465,15.3161z M22.18,12.713\r c-0.2886-0.8178-0.8339-1.5715-1.5661-2.2129c0.2245-0.1764,0.5078-0.278,0.8125-0.278c0.743,0,1.3416,0.6094,1.3416,1.363\r C22.7733,12.0555,22.5381,12.4671,22.18,12.713z' })
    )
  );
};

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  a11yTitleId: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  large: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'huge'])
};

Icon.defaultProps = {
  a11yTitleId: 'social-reddit-title'
};

Icon.icon = true;

Icon.displayName = 'SocialReddit';

exports.default = Icon;
module.exports = exports['default'];