'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Props = require('../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ROOT = 'section';

var Section = function Section(props) {
  var classes = (0, _classnames2.default)(CLASS_ROOT, props.className);

  var boxProps = _Props2.default.pick(props, _Box2.default);

  return _react2.default.createElement(
    _Box2.default,
    _extends({}, boxProps, { tag: 'section', className: classes,
      primary: props.primary }),
    props.children
  );
};

Section.propTypes = _extends({
  primary: _react.PropTypes.bool
}, _Box2.default.propTypes);

Section.defaultProps = {
  pad: { vertical: 'medium' }
};

Section.displayName = 'Section';

exports.default = Section;
module.exports = exports['default'];