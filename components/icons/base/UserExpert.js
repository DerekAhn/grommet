// (C) Copyright 2014-2015 Hewlett-Packard Development Company

'use strict';

var React = require('react');
var IntlMixin = require('../../../mixins/GrommetIntlMixin');

var Icon = React.createClass({
  displayName: 'Icon',

  propTypes: {
    a11yTitle: React.PropTypes.string,
    a11yTitleId: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      a11yTitleId: 'user-expert-title'
    };
  },

  render: function render() {
    var className = 'control-icon control-icon-user-expert';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(typeof this.props.a11yTitle !== "undefined" ? this.props.a11yTitle : "user-expert");

    return React.createElement(
      'svg',
      { version: '1.1', viewBox: '0 0 48 48', width: '48px', height: '48px', className: className, 'aria-labelledby': this.props.a11yTitleId },
      React.createElement(
        'title',
        { id: this.props.a11yTitleId },
        a11yTitle
      ),
      React.createElement(
        'g',
        { id: 'user-expert' },
        React.createElement('rect', { id: '_x2E_svg_130_', x: '0', y: '0', fill: 'none', width: '48', height: '48' }),
        React.createElement('path', { fill: 'none', stroke: '#231F20', strokeWidth: '2', strokeMiterlimit: '10', d: 'M26,18c0,2.7614-2.2386,5-5,5s-5-2.2386-5-5 s2.2386-5,5-5S26,15.2386,26,18z M21,23L21,23c-4.4183,0-8,3.5817-8,8v4h12 M27.928,26.997C26.5443,24.6075,23.9599,23,21,23h0 M25,30l4,4l6.875-6.875' })
      )
    );
  }

});

module.exports = Icon;