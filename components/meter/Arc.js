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

var _utils = require('./utils');

var _Graphic2 = require('./Graphic');

var _Graphic3 = _interopRequireDefault(_Graphic2);

var CLASS_ROOT = _utils.classRoot;

var ARC_WIDTH = _utils.baseDimension;
var ARC_HEIGHT = Math.round(_utils.baseDimension * 0.75);
var ARC_RADIUS = _utils.baseDimension / 2 - _utils.baseUnit / 2;
var INDICATOR_HUB_RADIUS = _utils.baseUnit / 4;
var RING_THICKNESS = _utils.baseUnit;

function singleIndicatorCommands(centerX, centerY, radius, startAngle, endAngle, length) {
  var point = (0, _utils.polarToCartesian)(centerX, centerY, radius - (length - INDICATOR_HUB_RADIUS), endAngle - 1);
  var start = (0, _utils.polarToCartesian)(centerX, centerY, radius, endAngle - 1);
  var d = ["M", centerX, centerY - INDICATOR_HUB_RADIUS, "A", INDICATOR_HUB_RADIUS, INDICATOR_HUB_RADIUS, 0, 1, 1, centerX, centerY + INDICATOR_HUB_RADIUS, "A", INDICATOR_HUB_RADIUS, INDICATOR_HUB_RADIUS, 0, 1, 1, centerX, centerY - INDICATOR_HUB_RADIUS, "M", point.x, point.y, "L", start.x, start.y].join(" ");
  return d;
}

var Arc = (function (_Graphic) {
  _inherits(Arc, _Graphic);

  function Arc(props) {
    _classCallCheck(this, Arc);

    _get(Object.getPrototypeOf(Arc.prototype), 'constructor', this).call(this, props);
    //needed in Graphic.js to fix minification issues
    this.displayName = 'Arc';
  }

  _createClass(Arc, [{
    key: '_viewBoxDimensions',
    value: function _viewBoxDimensions(props) {
      var viewBoxWidth;
      var viewBoxHeight;
      if (props.vertical) {
        viewBoxWidth = ARC_HEIGHT;
        viewBoxHeight = ARC_WIDTH;
      } else {
        viewBoxWidth = ARC_WIDTH;
        viewBoxHeight = ARC_HEIGHT;
      }
      return [viewBoxWidth, viewBoxHeight];
    }
  }, {
    key: '_stateFromProps',
    value: function _stateFromProps(props) {
      var viewBoxDimensions = this._viewBoxDimensions(props);

      var state = {
        startAngle: 60,
        anglePer: !props.max ? 0 : 240.0 / (props.max.value - props.min.value),
        angleOffset: 180,
        viewBoxWidth: viewBoxDimensions[0],
        viewBoxHeight: viewBoxDimensions[1]
      };
      if (props.vertical) {
        state.angleOffset = 90;
      } else {
        state.angleOffset = 180;
      }

      return state;
    }
  }, {
    key: '_sliceCommands',
    value: function _sliceCommands(trackIndex, item, startValue) {
      var startAngle = (0, _utils.translateEndAngle)(this.state.startAngle, this.state.anglePer, startValue);
      var endAngle = Math.max(startAngle + RING_THICKNESS / 2, (0, _utils.translateEndAngle)(startAngle, this.state.anglePer, item.value));
      var radius = Math.max(1, ARC_RADIUS - trackIndex * RING_THICKNESS);
      return (0, _utils.arcCommands)(ARC_WIDTH / 2, ARC_WIDTH / 2, radius, startAngle + this.state.angleOffset, endAngle + this.state.angleOffset);
    }
  }, {
    key: '_renderTopLayer',
    value: function _renderTopLayer() {
      var indicator;
      if (this.props.series.length === 1) {
        var item = this.props.series[0];
        var startAngle = this.state.startAngle;
        var endAngle = (0, _utils.translateEndAngle)(startAngle, this.state.anglePer, item.value);
        var length = ARC_RADIUS;
        var x = ARC_WIDTH / 2;
        var y = ARC_WIDTH / 2;
        var indicatorCommands = singleIndicatorCommands(x, y, ARC_RADIUS, startAngle + this.state.angleOffset, endAngle + this.state.angleOffset, length);
        indicator = _react2['default'].createElement('path', { fill: 'none',
          className: CLASS_ROOT + "__slice-indicator color-index-" + item.colorIndex,
          d: indicatorCommands });
      }

      return indicator;
    }
  }]);

  return Arc;
})(_Graphic3['default']);

exports['default'] = Arc;
module.exports = exports['default'];