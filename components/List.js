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

var _reactIntl = require('react-intl');

var _lodashLangIsEqual = require('lodash/lang/isEqual');

var _lodashLangIsEqual2 = _interopRequireDefault(_lodashLangIsEqual);

var _iconsSpinning = require('./icons/Spinning');

var _iconsSpinning2 = _interopRequireDefault(_iconsSpinning);

var _utilsInfiniteScroll = require('../utils/InfiniteScroll');

var _utilsInfiniteScroll2 = _interopRequireDefault(_utilsInfiniteScroll);

var _utilsSelection = require('../utils/Selection');

var _utilsSelection2 = _interopRequireDefault(_utilsSelection);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var CLASS_ROOT = "list";
var SELECTED_CLASS = CLASS_ROOT + "-item--selected";

// SchemaPropType is deprecated
var SchemaPropType = _react.PropTypes.arrayOf(_react.PropTypes.shape({
  attribute: _react.PropTypes.string,
  'default': _react.PropTypes.node,
  image: _react.PropTypes.bool,
  label: _react.PropTypes.string,
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  timestamp: _react.PropTypes.bool,
  uid: _react.PropTypes.bool
}));

// SchemaListItem is deprecated, use ListItem child components inside a List instead

var SchemaListItem = (function (_Component) {
  _inherits(SchemaListItem, _Component);

  function SchemaListItem() {
    _classCallCheck(this, SchemaListItem);

    _get(Object.getPrototypeOf(SchemaListItem.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SchemaListItem, [{
    key: '_renderValue',
    value: function _renderValue(item, scheme) {
      var result;
      var value = item[scheme.attribute] || scheme['default'];
      if (scheme.image) {
        if (typeof value === 'string') {
          result = _react2['default'].createElement('img', { src: value, alt: scheme.label || 'image' });
        } else {
          result = value;
        }
      } else if (scheme.timestamp) {
        result = _react2['default'].createElement(_reactIntl.FormattedTime, { value: value,
          day: 'numeric',
          month: 'narrow',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit' });
      } else {
        result = value;
      }
      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      var item = this.props.item;
      var classes = [];
      if (this.props.direction) {
        classes.push(CLASS_ROOT + "-item--" + this.props.direction);
      }

      var image = undefined;
      var label = undefined;
      var annotation = undefined;

      this.props.schema.forEach(function (scheme) {
        if (scheme.image) {
          image = _react2['default'].createElement(
            'span',
            { key: 'image', className: CLASS_ROOT + "-item__image" },
            this._renderValue(item, scheme)
          );
        } else if (scheme.primary) {
          label = _react2['default'].createElement(
            'span',
            { key: 'label', className: CLASS_ROOT + "-item__label" },
            this._renderValue(item, scheme)
          );
        } else if (scheme.secondary) {
          annotation = _react2['default'].createElement(
            'span',
            { key: 'annotation', className: CLASS_ROOT + "-item__annotation" },
            this._renderValue(item, scheme)
          );
        }
      }, this);

      if (this.props.onClick) {
        classes.push(CLASS_ROOT + "-item--selectable");
      }

      return _react2['default'].createElement(
        _ListItem2['default'],
        { className: classes.join(' '), direction: this.props.direction,
          selected: this.props.selected, onClick: this.props.onClick },
        image,
        label,
        annotation
      );
    }
  }]);

  return SchemaListItem;
})(_react.Component);

SchemaListItem.propTypes = {
  direction: _react.PropTypes.oneOf(['row', 'column']),
  item: _react.PropTypes.object.isRequired,
  onClick: _react.PropTypes.func,
  schema: SchemaPropType,
  selected: _react.PropTypes.bool
};

var List = (function (_Component2) {
  _inherits(List, _Component2);

  function List(props) {
    _classCallCheck(this, List);

    _get(Object.getPrototypeOf(List.prototype), 'constructor', this).call(this, props);

    this._onClick = this._onClick.bind(this);
    this._onClickItem = this._onClickItem.bind(this);

    this.state = {
      selected: _utilsSelection2['default'].normalize(props.selected)
    };
  }

  _createClass(List, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setSelection();
      if (this.props.onMore) {
        this._scroll = _utilsInfiniteScroll2['default'].startListeningForScroll(this.refs.more, this.props.onMore);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this._scroll) {
        _utilsInfiniteScroll2['default'].stopListeningForScroll(this._scroll);
        this._scroll = null;
      }
      if (nextProps.hasOwnProperty('selected')) {
        this.setState({
          selected: _utilsSelection2['default'].normalize(nextProps.selected)
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!(0, _lodashLangIsEqual2['default'])(this.state.selected, prevState.selected)) {
        this._setSelection();
      }
      if (this.props.onMore && !this._scroll) {
        this._scroll = _utilsInfiniteScroll2['default'].startListeningForScroll(this.refs.more, this.props.onMore);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._scroll) {
        _utilsInfiniteScroll2['default'].stopListeningForScroll(this._scroll);
      }
    }
  }, {
    key: '_setSelection',
    value: function _setSelection() {
      _utilsSelection2['default'].set({
        containerElement: this.refs.list,
        childSelector: '.list-item',
        selectedClass: SELECTED_CLASS,
        selectedIndexes: this.state.selected
      });
    }
  }, {
    key: '_onClick',
    value: function _onClick(event) {
      if (!this.props.selectable) {
        return;
      }

      var selected = _utilsSelection2['default'].click(event, {
        containerElement: this.refs.list,
        childSelector: '.list-item',
        selectedClass: SELECTED_CLASS,
        multiSelect: 'multiple' === this.props.selectable,
        priorSelectedIndexes: this.state.selected
      });
      this.setState({ selected: selected });

      if (this.props.onSelect) {
        // notify caller that the selection has changed
        if (selected.length === 1) {
          selected = selected[0];
        }
        this.props.onSelect(selected);
      }
    }
  }, {
    key: '_onClickItem',
    value: function _onClickItem(item) {
      if (this.props.onSelect) {
        this.props.onSelect(item);
      }
    }
  }, {
    key: '_renderItem',
    value: function _renderItem(item) {
      var uid = undefined;
      var selected = undefined;
      var onClick = undefined;

      this.props.schema.forEach(function (scheme) {
        if (scheme.uid) {
          uid = item[scheme.attribute];
          if (uid === this.props.selected) {
            selected = true;
          }
        }
      }, this);

      if (this.props.onSelect) {
        onClick = this._onClickItem.bind(this, item);
      }

      return _react2['default'].createElement(SchemaListItem, { key: uid, item: item, schema: this.props.schema,
        direction: this.props.itemDirection,
        selected: selected, onClick: onClick });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = [CLASS_ROOT];
      if (this.props.size) {
        classes.push(CLASS_ROOT + "--" + this.props.size);
      }
      if (this.props.selectable) {
        classes.push(CLASS_ROOT + "--selectable");
      }
      if (this.props.className) {
        classes.push(this.props.className);
      }

      var children = undefined;
      var empty = undefined;
      if (this.props.data && this.props.schema) {
        // Deprecated, will be removed soon.
        children = this.props.data.map(function (item) {
          return this._renderItem(item);
        }, this);
        if (this.props.data.length === 0) {
          empty = _react2['default'].createElement(
            'li',
            { className: CLASS_ROOT + "__empty" },
            this.props.emptyIndicator
          );
        }
      } else {
        children = this.props.children;
        empty = this.props.emptyIndicator;
      }

      var more;
      if (this.props.onMore) {
        classes.push(CLASS_ROOT + "--moreable");
        more = _react2['default'].createElement(
          'li',
          { ref: 'more', className: CLASS_ROOT + "__more" },
          _react2['default'].createElement(_iconsSpinning2['default'], null)
        );
      }

      return _react2['default'].createElement(
        'ul',
        { ref: 'list', className: classes.join(' '), onClick: this._onClick },
        empty,
        children,
        more
      );
    }
  }]);

  return List;
})(_react.Component);

exports['default'] = List;

List.propTypes = {
  data: _react.PropTypes.arrayOf(_react.PropTypes.object), // deprecated, use child components
  emptyIndicator: _react.PropTypes.node,
  itemDirection: _react.PropTypes.oneOf(['row', 'column']), // deprecated, use child components
  onMore: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  schema: SchemaPropType, // deprecated, use child components
  selectable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['multiple'])]),
  selected: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)]),
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']) // deprecated, use child components
};

List.defaultProps = {
  itemDirection: 'row' // deprecated, use child components
};
module.exports = exports['default'];