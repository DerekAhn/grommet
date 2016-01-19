'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _KeyboardAccelerators = require('../utils/KeyboardAccelerators');

var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

var _Drop = require('../utils/Drop');

var _Drop2 = _interopRequireDefault(_Drop);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Search = require('./icons/base/Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = "search-input";

var SearchInput = (function (_Component) {
  _inherits(SearchInput, _Component);

  function SearchInput(props) {
    _classCallCheck(this, SearchInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchInput).call(this, props));

    _this._onInputChange = _this._onInputChange.bind(_this);
    _this._onAddDrop = _this._onAddDrop.bind(_this);
    _this._onRemoveDrop = _this._onRemoveDrop.bind(_this);
    _this._onNextSuggestion = _this._onNextSuggestion.bind(_this);
    _this._onPreviousSuggestion = _this._onPreviousSuggestion.bind(_this);
    _this._onEnter = _this._onEnter.bind(_this);
    _this._onClickSuggestion = _this._onClickSuggestion.bind(_this);
    _this._onFocus = _this._onFocus.bind(_this);

    _this.state = {
      dropActive: false,
      defaultValue: props.defaultValue,
      value: props.value,
      activeSuggestionIndex: -1
    };
    return _this;
  }

  _createClass(SearchInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // Set up keyboard listeners appropriate to the current state.

      var activeKeyboardHandlers = {
        esc: this._onRemoveDrop,
        tab: this._onRemoveDrop,
        up: this._onPreviousSuggestion,
        down: this._onNextSuggestion,
        enter: this._onEnter
      };
      var focusedKeyboardHandlers = {
        down: this._onAddDrop
      };

      // the order here is important, need to turn off keys before turning on

      if (!this.state.focused && prevState.focused) {
        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, focusedKeyboardHandlers);
      }

      if (!this.state.dropActive && prevState.dropActive) {
        document.removeEventListener('click', this._onRemoveDrop);
        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, activeKeyboardHandlers);
        if (this._drop) {
          this._drop.remove();
          this._drop = null;
        }
      }

      if (this.state.focused && !prevState.focused) {
        _KeyboardAccelerators2.default.startListeningToKeyboard(this, focusedKeyboardHandlers);
      }

      if (this.state.dropActive && !prevState.dropActive) {
        document.addEventListener('click', this._onRemoveDrop);
        _KeyboardAccelerators2.default.startListeningToKeyboard(this, activeKeyboardHandlers);

        this._drop = _Drop2.default.add(_reactDom2.default.findDOMNode(this.refs.component), this._renderDrop(), { top: 'bottom', left: 'left' });
      } else if (this.state.dropActive && prevState.dropActive) {
        this._drop.render(this._renderDrop());
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this._onRemoveDrop);
    }
  }, {
    key: '_fireDOMChange',
    value: function _fireDOMChange() {
      var event = new Event('change', {
        'bubbles': true,
        'cancelable': true
      });
      // We use dispatchEvent to have the browser fill out the event fully.
      this.refs.input.dispatchEvent(event);
      // Manually dispatched events aren't delivered by React, so we notify too.
      this.props.onDOMChange(event);
    }
  }, {
    key: '_onInputChange',
    value: function _onInputChange(event) {
      this.setState({ dropActive: true, activeSuggestionIndex: -1 });
      if (this.props.onChange) {
        this.props.onChange(event.target.value, false);
      }
      if (this.props.onDOMChange) {
        this._fireDOMChange();
      }
    }
  }, {
    key: '_onAddDrop',
    value: function _onAddDrop(event) {
      event.preventDefault();
      this.setState({ dropActive: true, activeSuggestionIndex: -1 });
    }
  }, {
    key: '_onRemoveDrop',
    value: function _onRemoveDrop() {
      this.setState({ dropActive: false });
    }
  }, {
    key: '_onNextSuggestion',
    value: function _onNextSuggestion() {
      var index = this.state.activeSuggestionIndex;
      index = Math.min(index + 1, this.props.suggestions.length - 1);
      this.setState({ activeSuggestionIndex: index });
    }
  }, {
    key: '_onPreviousSuggestion',
    value: function _onPreviousSuggestion() {
      var index = this.state.activeSuggestionIndex;
      index = Math.max(index - 1, 0);
      this.setState({ activeSuggestionIndex: index });
    }
  }, {
    key: '_onEnter',
    value: function _onEnter(event) {
      event.preventDefault(); // prevent submitting forms
      this.setState({ dropActive: false });
      if (this.state.activeSuggestionIndex >= 0) {
        var suggestion = this.props.suggestions[this.state.activeSuggestionIndex];
        this.setState({ value: suggestion });
        if (this.props.onChange) {
          this.props.onChange(suggestion, true);
        }
        if (this.props.onSelect) {
          this.props.onSelect({ target: this.refs.input, suggestion: suggestion });
        }
      }
    }
  }, {
    key: '_onClickSuggestion',
    value: function _onClickSuggestion(suggestion) {
      this.setState({ value: suggestion, dropActive: false });
      if (this.props.onChange) {
        this.props.onChange(suggestion, true);
      }
      if (this.props.onSelect) {
        this.props.onSelect({ target: this.refs.input, suggestion: suggestion });
      }
    }
  }, {
    key: '_onFocus',
    value: function _onFocus() {
      _reactDom2.default.findDOMNode(this.refs.input).select();
      this.setState({
        focused: true,
        dropActive: this.props.suggestions && this.props.suggestions.length > 0,
        activeSuggestionIndex: -1
      });
    }
  }, {
    key: '_valueText',
    value: function _valueText(value) {
      var text = '';
      if (value) {
        if ('string' === typeof value) {
          text = value;
        } else {
          text = value.label || value.value;
        }
      }
      return text;
    }
  }, {
    key: '_renderDrop',
    value: function _renderDrop() {
      var suggestions = null;
      if (this.props.suggestions) {
        suggestions = this.props.suggestions.map(function (suggestion, index) {
          var classes = [CLASS_ROOT + "__suggestion"];
          if (index === this.state.activeSuggestionIndex) {
            classes.push(CLASS_ROOT + "__suggestion--active");
          }
          return _react2.default.createElement(
            'li',
            { key: this._valueText(suggestion),
              className: classes.join(' '),
              onClick: this._onClickSuggestion.bind(this, suggestion) },
            this._valueText(suggestion)
          );
        }, this);
      }

      return _react2.default.createElement(
        'ol',
        { className: CLASS_ROOT + "__suggestions", onClick: this._onRemoveDrop },
        suggestions
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = [CLASS_ROOT];
      if (this.state.active) {
        classes.push(CLASS_ROOT + "--active");
      }
      if (this.props.className) {
        classes.push(this.props.className);
      }

      return _react2.default.createElement(
        'div',
        { ref: 'component', className: classes.join(' ') },
        _react2.default.createElement('input', { ref: 'input', className: CLASS_ROOT + "__input",
          id: this.props.id, name: this.props.name,
          value: this._valueText(this.props.value),
          defaultValue: this._valueText(this.props.defaultValue),
          placeholder: this.props.placeHolder,
          onChange: this._onInputChange,
          onFocus: this._onFocus }),
        _react2.default.createElement(
          _Button2.default,
          { className: CLASS_ROOT + "__control", type: 'icon',
            onClick: this._onAddDrop },
          _react2.default.createElement(_Search2.default, null)
        )
      );
    }
  }]);

  return SearchInput;
})(_react.Component);

exports.default = SearchInput;

SearchInput.propTypes = {
  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.string
  }), _react.PropTypes.string]),
  id: _react.PropTypes.string,
  name: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  onDOMChange: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  placeHolder: _react.PropTypes.string,
  suggestions: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.string
  }), _react.PropTypes.string])),
  value: _react.PropTypes.oneOfType([_react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.string
  }), _react.PropTypes.string])
};
module.exports = exports['default'];