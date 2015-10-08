// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

'use strict';

var React = require('react');
var Tiles = require('../Tiles');
var Tile = require('../Tile');
var Header = require('../Header');
var Footer = require('../Footer');
var IndexAttribute = require('./IndexAttribute');

var CLASS_ROOT = 'index-tiles';

var IndexTiles = React.createClass({
  displayName: 'IndexTiles',

  propTypes: {
    options: React.PropTypes.shape({
      attributes: React.PropTypes.arrayOf(React.PropTypes.shape({
        attribute: React.PropTypes.string,
        label: React.PropTypes.string,
        index: React.PropTypes.number,
        timestamp: React.PropTypes.bool
      }))
    }),
    result: React.PropTypes.shape({
      total: React.PropTypes.number,
      unfilteredTotal: React.PropTypes.number,
      start: React.PropTypes.number,
      count: React.PropTypes.number,
      items: React.PropTypes.arrayOf(React.PropTypes.object),
      error: React.PropTypes.string
    }),
    selection: React.PropTypes.oneOfType([React.PropTypes.string, // uri
    React.PropTypes.arrayOf(React.PropTypes.string)]),
    onSelect: React.PropTypes.func
  },

  _onClick: function _onClick(uri) {
    this.props.onSelect(uri);
  },

  render: function render() {
    var classes = [CLASS_ROOT];
    if (this.props.className) {
      classes.push(this.props.className);
    }

    var tiles = null;
    if (this.props.result && this.props.result.items) {
      tiles = this.props.result.items.map(function (item) {

        var headerValues = [];
        var values = [];
        var footerValues = [];

        this.props.options.attributes.forEach(function (attribute) {
          var value = React.createElement(IndexAttribute, { key: attribute.attribute,
            item: item, attribute: attribute });
          if (attribute.header) {
            headerValues.push(value);
          } else if (attribute.footer) {
            footerValues.push(value);
          } else {
            values.push(value);
          }
        }, this);

        var header = null;
        if (headerValues.length > 0) {
          header = React.createElement(
            Header,
            { small: true },
            React.createElement(
              'span',
              null,
              headerValues
            )
          );
        }

        var footer = null;
        if (footerValues.length > 0) {
          footer = React.createElement(
            Footer,
            { small: true },
            React.createElement(
              'span',
              null,
              footerValues
            )
          );
        }

        var selected = false;
        if (this.props.selection && item.uri === this.props.selection) {
          selected = true;
        }

        return React.createElement(
          Tile,
          { key: item.uri,
            onClick: this._onClick.bind(this, item.uri),
            selected: selected },
          header,
          values,
          footer
        );
      }, this);
    }

    var onMore = null;
    if (this.props.result && this.props.result.count < this.props.result.total) {
      onMore = this.props.onMore;
    }

    return React.createElement(
      Tiles,
      { className: classes.join(' '), onMore: onMore, flush: true },
      tiles
    );
  }

});

module.exports = IndexTiles;