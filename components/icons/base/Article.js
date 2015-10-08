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
      a11yTitleId: 'article-title'
    };
  },

  render: function render() {
    var className = 'control-icon control-icon-article';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(typeof this.props.a11yTitle !== "undefined" ? this.props.a11yTitle : "article");

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
        { id: 'article' },
        React.createElement('rect', { id: '_x2E_svg_242_', x: '0', y: '0', fill: 'none', width: '48', height: '48' }),
        React.createElement('path', { fill: 'none', stroke: '#231F20', strokeWidth: '2', strokeLinecap: 'round', strokeMiterlimit: '10', d: 'M18,29.5 c0,1.3807-1.1193,2.5-2.5,2.5S13,30.8807,13,29.5V18h5C18,18,18,29.4062,18,29.5z M16,32h16.5c1.3807,0,2.5-1.1193,2.5-2.5V14H18v4 ' }),
        React.createElement('rect', { x: '27', y: '17', fill: '#231F20', width: '5', height: '6' }),
        React.createElement('line', { fill: 'none', stroke: '#231F20', strokeWidth: '2', strokeMiterlimit: '10', x1: '21', y1: '18', x2: '25', y2: '18' }),
        React.createElement('line', { fill: 'none', stroke: '#231F20', strokeWidth: '2', strokeMiterlimit: '10', x1: '21', y1: '22', x2: '25', y2: '22' }),
        React.createElement('line', { fill: 'none', stroke: '#231F20', strokeWidth: '2', strokeMiterlimit: '10', x1: '21', y1: '26', x2: '32', y2: '26' })
      )
    );
  }

});

module.exports = Icon;