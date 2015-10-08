// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

// http://jsfiddle.net/LBAr8/

'use strict';

var React = require('react');

var ReactLayeredComponent = {

  componentWillUnmount: function componentWillUnmount() {
    this._unrenderLayer();
    document.body.removeChild(this._target);
  },
  componentDidUpdate: function componentDidUpdate() {
    this._renderLayer();
  },
  componentDidMount: function componentDidMount() {
    // Appending to the body is easier than managing the z-index of everything on the page.
    // It's also better for accessibility and makes stacking a snap (since components will stack
    // in mount order).
    this._target = document.createElement('div');
    document.body.appendChild(this._target);
    this._renderLayer();
  },
  _renderLayer: function _renderLayer() {
    // By calling this method in componentDidMount() and componentDidUpdate(), you're effectively
    // creating a "wormhole" that funnels React's hierarchical updates through to a DOM node on an
    // entirely different part of the page.
    React.render(this.renderLayer(), this._target);
  },
  _unrenderLayer: function _unrenderLayer() {
    React.unmountComponentAtNode(this._target);
  }
};

module.exports = ReactLayeredComponent;