'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // (C) Copyright 2014 Hewlett Packard Enterprise Development LP

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _reactDom = require('react-dom');

var _DOM = require('../utils/DOM');

var _DOM2 = _interopRequireDefault(_DOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Drop is a utility for rendering components like drop down menus layered above
 * their initiating controls.
 */

var VERTICAL_ALIGN_OPTIONS = ['top', 'bottom'];
var HORIZONTAL_ALIGN_OPTIONS = ['right', 'left'];

exports.default = {

  // How callers can validate a property for drop alignment which will be passed to add().
  alignPropType: _react.PropTypes.shape({
    top: _react.PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
    bottom: _react.PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
    left: _react.PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS),
    right: _react.PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS)
  }),

  // Add a drop component.
  //
  // control - DOM element to anchor the overlay on
  // content - React node to render
  // options - {
  //   align: {
  //     top: top|bottom
  //     bottom: top|bottom
  //     left: left|right
  //     right: left|right
  //   },
  //   className: <string>
  //   colorIndex: <string>
  // }

  add: function add(control, content, options) {
    // normalize for older interface that just had align content
    if (options.top || options.bottom || options.left || options.right) {
      options = { align: options };
    }
    // validate align
    if (options && options.align && options.align.top && VERTICAL_ALIGN_OPTIONS.indexOf(options.align.top) === -1) {
      console.warn("Warning: Invalid align.top value '" + options.align.top + "' supplied to Drop," + "expected one of [" + VERTICAL_ALIGN_OPTIONS.join(',') + "]");
    }
    if (options.align && options.align.bottom && VERTICAL_ALIGN_OPTIONS.indexOf(options.align.bottom) === -1) {
      console.warn("Warning: Invalid align.bottom value '" + options.align.bottom + "' supplied to Drop," + "expected one of [" + VERTICAL_ALIGN_OPTIONS.join(',') + "]");
    }
    if (options.align && options.align.left && HORIZONTAL_ALIGN_OPTIONS.indexOf(options.align.left) === -1) {
      console.warn("Warning: Invalid align.left value '" + options.align.left + "' supplied to Drop," + "expected one of [" + HORIZONTAL_ALIGN_OPTIONS.join(',') + "]");
    }
    if (options.align && options.align.right && HORIZONTAL_ALIGN_OPTIONS.indexOf(options.align.right) === -1) {
      console.warn("Warning: Invalid align.right value '" + options.align.right + "' supplied to Drop," + "expected one of [" + HORIZONTAL_ALIGN_OPTIONS.join(',') + "]");
    }
    var align = options.align || {};

    // initialize data
    var drop = {
      control: control,
      options: _extends({}, options, {
        align: {
          top: align.top,
          bottom: align.bottom,
          left: align.left,
          right: align.right
        }
      })
    };
    if (!drop.options.align.top && !drop.options.align.bottom) {
      drop.options.align.top = "top";
    }
    if (!drop.options.align.left && !drop.options.align.right) {
      drop.options.align.left = "left";
    }

    // setup DOM
    drop.container = document.createElement('div');
    drop.container.className = 'grommet drop ' + drop.options.className;
    if (drop.options.colorIndex) {
      drop.container.className += ' background-color-index-' + drop.options.colorIndex;
    }
    // prepend in body to avoid browser scroll issues
    document.body.insertBefore(drop.container, document.body.firstChild);
    (0, _reactDom.render)(content, drop.container);

    drop.scrollParents = _DOM2.default.findScrollParents(drop.control);
    drop.place = this._place.bind(this, drop);
    drop.render = this._render.bind(this, drop);
    drop.remove = this._remove.bind(this, drop);

    drop.scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', drop.place);
    });
    window.addEventListener('resize', drop.place);

    // position content
    this._place(drop);

    return drop;
  },
  _render: function _render(drop, content) {
    (0, _reactDom.render)(content, drop.container);
    // in case content changed, re-place
    setTimeout(this._place.bind(this, drop), 1);
  },
  _remove: function _remove(drop) {
    drop.scrollParents.forEach(function (scrollParent) {
      scrollParent.removeEventListener('scroll', drop.place);
    });
    window.removeEventListener('resize', drop.place);

    (0, _reactDom.unmountComponentAtNode)(drop.container);
    document.body.removeChild(drop.container);
  },
  _place: function _place(drop) {
    var control = drop.control;
    var container = drop.container;
    var align = drop.options.align;
    var controlRect = control.getBoundingClientRect();
    var containerRect = container.getBoundingClientRect();
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // clear prior styling
    container.style.left = '';
    container.style.width = '';
    container.style.top = '';

    var width = Math.min(Math.max(controlRect.width, containerRect.width), windowWidth);
    var left;
    var top;

    if (align.left) {
      if ('left' === align.left) {
        left = controlRect.left;
      } else if ('right' === align.left) {
        left = controlRect.left - width;
      }
    } else if (align.right) {
      if ('left' === align.right) {
        left = controlRect.left - width;
      } else if ('right' === align.right) {
        left = controlRect.left + controlRect.width - width;
      }
    }
    if (left + width > windowWidth) {
      left -= left + width - windowWidth;
    } else if (left < 0) {
      left = 0;
    }

    if (align.top) {
      if ('top' === align.top) {
        top = controlRect.top;
      } else if ('bottom' === align.top) {
        top = controlRect.top + controlRect.height;
      }
    } else if (align.bottom) {
      if ('top' === align.bottom) {
        top = controlRect.top - containerRect.height;
      } else if ('bottom' === align.bottom) {
        top = controlRect.top + controlRect.height - containerRect.height;
      }
    }
    if (top + containerRect.height > windowHeight) {
      // For now, just slide up so we can see it.
      // TODO: when we don't want to cover the control, like with SearchInput and Calendar,
      // add bottom margin to the control to allow the user to scroll down if needed.
      if (align.top === 'bottom') {
        top = controlRect.top - containerRect.height;
      } else {
        top = Math.max(controlRect.bottom - containerRect.height, top - (top + containerRect.height - windowHeight));
      }
    } else if (top < 0) {
      top = 0;
    }

    container.style.left = '' + left + 'px';
    container.style.width = '' + width + 'px';
    container.style.top = '' + top + 'px';
  }
};
module.exports = exports['default'];