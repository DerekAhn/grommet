'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _KeyboardAccelerators = require('../utils/KeyboardAccelerators');

var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

var _Drop = require('../utils/Drop');

var _Drop2 = _interopRequireDefault(_Drop);

var _Responsive = require('../utils/Responsive');

var _Responsive2 = _interopRequireDefault(_Responsive);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Search = require('./icons/base/Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = "search";

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));

    _this._onAddDrop = _this._onAddDrop.bind(_this);
    _this._onRemoveDrop = _this._onRemoveDrop.bind(_this);
    _this._onFocusControl = _this._onFocusControl.bind(_this);
    _this._onBlurControl = _this._onBlurControl.bind(_this);
    _this._onFocusInput = _this._onFocusInput.bind(_this);
    _this._onBlurInput = _this._onBlurInput.bind(_this);
    _this._onChangeInput = _this._onChangeInput.bind(_this);
    _this._onNextSuggestion = _this._onNextSuggestion.bind(_this);
    _this._onPreviousSuggestion = _this._onPreviousSuggestion.bind(_this);
    _this._onEnter = _this._onEnter.bind(_this);
    _this._onClickSuggestion = _this._onClickSuggestion.bind(_this);
    _this._onSink = _this._onSink.bind(_this);
    _this._onResponsive = _this._onResponsive.bind(_this);

    _this.state = {
      align: 'left',
      controlFocused: false,
      inline: props.inline,
      dropActive: false,
      activeSuggestionIndex: -1
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.inline && this.props.responsive) {
        this._responsive = _Responsive2.default.start(this._onResponsive);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.suggestions && nextProps.suggestions.length > 0 && !this.state.dropActive && this.refs.input === document.activeElement) {
        this.setState({ dropActive: true });
      } else if ((!nextProps.suggestions || nextProps.suggestions.length === 0) && this.state.inline) {
        this.setState({ dropActive: false });
      }
    }
  }, {
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
        space: this._onAddDrop
      };

      // the order here is important, need to turn off keys before turning on

      if (!this.state.controlFocused && prevState.controlFocused) {
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

      if (this.state.controlFocused && !prevState.controlFocused) {
        _KeyboardAccelerators2.default.startListeningToKeyboard(this, focusedKeyboardHandlers);
      }

      if (this.state.dropActive && !prevState.dropActive) {
        // Slow down adding the click handler,
        // otherwise the drop will close when the mouse is released.
        // Not observable in Safari, 1ms is sufficient for Chrome, Firefox needs 100ms though. :(
        // TODO: re-evaluate how to solve this without a timeout.
        document.addEventListener('click', this._onRemoveDrop);
        _KeyboardAccelerators2.default.startListeningToKeyboard(this, activeKeyboardHandlers);

        var baseElement;
        if (this.refs.control) {
          baseElement = this.refs.control.firstChild;
        } else {
          baseElement = this.refs.input;
        }
        var dropAlign = this.props.dropAlign || {
          top: this.state.inline ? 'bottom' : 'top',
          left: 'left'
        };
        this._drop = _Drop2.default.add(baseElement, this._renderDrop(), dropAlign);

        if (!this.state.inline) {
          document.getElementById('search-drop-input').focus();
        }
      } else if (this._drop) {
        this._drop.render(this._renderDrop());
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this._onRemoveDrop);
      _KeyboardAccelerators2.default.stopListeningToKeyboard(this);
      if (this._responsive) {
        this._responsive.stop();
      }
      if (this._drop) {
        this._drop.remove();
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
    key: '_onFocusControl',
    value: function _onFocusControl() {
      this.setState({
        controlFocused: true,
        dropActive: true,
        activeSuggestionIndex: -1
      });
    }
  }, {
    key: '_onBlurControl',
    value: function _onBlurControl() {
      this.setState({ controlFocused: false });
    }
  }, {
    key: '_onFocusInput',
    value: function _onFocusInput() {
      this.refs.input.select();
      this.setState({
        dropActive: !this.state.inline || this.props.suggestions && this.props.suggestions.length > 0,
        activeSuggestionIndex: -1
      });
    }
  }, {
    key: '_onBlurInput',
    value: function _onBlurInput() {
      //this.setState({drop: false});
    }
  }, {
    key: '_fireDOMChange',
    value: function _fireDOMChange() {
      var event = new Event('change', {
        'bubbles': true,
        'cancelable': true
      });
      this.refs.input.dispatchEvent(event);
      this.props.onDOMChange(event.target.value, event);
    }
  }, {
    key: '_onChangeInput',
    value: function _onChangeInput(event) {
      this.setState({ activeSuggestionIndex: -1 });
      if (this.props.onChange) {
        this.props.onChange(event.target.value, false);
      }
      if (this.props.onDOMChange) {
        this._fireDOMChange();
      }
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
      this._onRemoveDrop();
      var suggestion;
      if (this.state.activeSuggestionIndex >= 0) {
        suggestion = this.props.suggestions[this.state.activeSuggestionIndex];
        this.setState({ value: suggestion });
        if (this.props.onChange) {
          this.props.onChange(suggestion, true);
        }
        if (this.props.onSelect) {
          this.props.onSelect({
            target: this.refs.input || this.refs.control,
            suggestion: suggestion
          }, true);
        }
      } else {
        if (this.props.onSelect) {
          this.props.onSelect({
            target: this.refs.input || this.refs.control,
            suggestion: suggestion
          }, false);
        }
      }
    }
  }, {
    key: '_onClickSuggestion',
    value: function _onClickSuggestion(suggestion) {
      this._onRemoveDrop();

      if (this.props.onChange) {
        this.props.onChange(suggestion, true);
      }
      if (this.props.onSelect) {
        this.props.onSelect({
          target: this.refs.input || this.refs.control,
          suggestion: suggestion
        }, true);
      }
    }
  }, {
    key: '_onSink',
    value: function _onSink(event) {
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
    }
  }, {
    key: '_onResponsive',
    value: function _onResponsive(small) {
      if (small) {
        this.setState({ inline: false });
      } else {
        this.setState({ inline: this.props.inline });
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      var ref = this.refs.input || this.refs.control;
      if (ref) {
        ref.focus();
      }
    }
  }, {
    key: '_classes',
    value: function _classes(prefix) {
      var classes = [prefix];

      if (this.state.inline) {
        classes.push(prefix + "--inline");
      } else {
        classes.push(prefix + "--controlled");
      }

      return classes;
    }
  }, {
    key: '_renderLabel',
    value: function _renderLabel(suggestion) {
      if ((typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
        return suggestion.label || suggestion.value;
      } else {
        return suggestion;
      }
    }
  }, {
    key: '_renderDrop',
    value: function _renderDrop() {
      var classes = this._classes(CLASS_ROOT + "__drop");
      if (this.props.dropColorIndex) {
        classes.push("background-color-index-" + this.props.dropColorIndex);
      }
      if (this.props.large) {
        classes.push(CLASS_ROOT + "__drop--large");
      }

      var input;
      if (!this.state.inline) {
        input = _react2.default.createElement('input', { key: 'input', id: 'search-drop-input', type: 'search',
          defaultValue: this.props.defaultValue,
          value: this.props.value,
          className: CLASS_ROOT + "__input",
          onChange: this._onChangeInput });
      }

      var suggestions;
      if (this.props.suggestions) {
        suggestions = this.props.suggestions.map(function (suggestion, index) {
          var classes = [CLASS_ROOT + "__suggestion"];
          if (index === this.state.activeSuggestionIndex) {
            classes.push(CLASS_ROOT + "__suggestion--active");
          }
          return _react2.default.createElement(
            'div',
            { key: index,
              className: classes.join(' '),
              onClick: this._onClickSuggestion.bind(this, suggestion) },
            this._renderLabel(suggestion)
          );
        }, this);
        suggestions = _react2.default.createElement(
          'div',
          { key: 'suggestions', className: CLASS_ROOT + "__suggestions" },
          suggestions
        );
      }

      var contents = [input, suggestions];

      if (!this.state.inline) {
        contents = [_react2.default.createElement(
          _Button2.default,
          { key: 'icon', type: 'icon',
            className: CLASS_ROOT + "__drop-control",
            onClick: this._onRemoveDrop },
          _react2.default.createElement(_Search2.default, null)
        ), _react2.default.createElement(
          'div',
          { key: 'contents', className: CLASS_ROOT + "__drop-contents",
            onClick: this._onSink },
          contents
        )];
        if (this.props.dropAlign && !this.props.dropAlign.left) {
          contents.reverse();
        }
      }

      return _react2.default.createElement(
        'div',
        { id: 'search-drop', className: classes.join(' ') },
        contents
      );
    }
  }, {
    key: 'render',
    value: function render() {

      var classes = this._classes(CLASS_ROOT);
      if (this.props.size) {
        classes.push(CLASS_ROOT + "--" + this.props.size);
      } else if (this.props.large && !this.props.size) {
        classes.push(CLASS_ROOT + "--large");
      }
      if (this.props.className) {
        classes.push(this.props.className);
      }

      if (this.state.inline) {

        return _react2.default.createElement(
          'div',
          { className: classes.join(' ') },
          _react2.default.createElement('input', { ref: 'input', type: 'search',
            id: this.props.id,
            placeholder: this.props.placeHolder,
            defaultValue: this._renderLabel(this.props.defaultValue),
            value: this._renderLabel(this.props.value),
            className: CLASS_ROOT + "__input",
            onFocus: this._onFocusInput,
            onBlur: this._onBlurInput,
            onChange: this._onChangeInput }),
          _react2.default.createElement(_Search2.default, null)
        );
      } else {

        return _react2.default.createElement(
          'div',
          { ref: 'control' },
          _react2.default.createElement(
            _Button2.default,
            { id: this.props.id,
              className: classes.join(' '),
              type: 'icon',
              tabIndex: '0',
              onClick: this._onAddDrop,
              onFocus: this._onFocusControl,
              onBlur: this._onBlurControl },
            _react2.default.createElement(_Search2.default, null)
          )
        );
      }
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;

Search.propTypes = {
  defaultValue: _react.PropTypes.string,
  dropAlign: _Drop2.default.alignPropType,
  dropColorIndex: _react.PropTypes.string,
  id: _react2.default.PropTypes.string,
  inline: _react.PropTypes.bool,
  large: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  onDOMChange: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  placeHolder: _react.PropTypes.string,
  responsive: _react.PropTypes.bool,
  size: _react2.default.PropTypes.oneOf(['small', 'medium', 'large']),
  suggestions: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.shape({
    label: _react.PropTypes.string.isRequired
  })])),
  value: _react.PropTypes.string
};

Search.defaultProps = {
  align: 'left',
  inline: false,
  responsive: true
};
module.exports = exports['default'];