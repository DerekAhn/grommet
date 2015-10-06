// (C) Copyright 2014-2015 Hewlett-Packard Development Company

var React = require('react');
var IntlMixin = require('../../../mixins/GrommetIntlMixin');

var Icon = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string,
    a11yTitleId: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function () {
    return {
      a11yTitleId: 'system-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-system';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "system");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="system"><rect id="_x2E_svg_106_" x="0" y="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M35,31H13V13h22V31z M24,19c-1.6569,0-3,1.3431-3,3&#xA;&#x9;&#x9;c0,1.6569,1.3431,3,3,3c1.6569,0,3-1.3431,3-3C27,20.3431,25.6568,19,24,19z M24,19v-3 M28.2426,17.7574l-2.1213,2.1213 M30,22h-3&#xA;&#x9;&#x9; M26.1213,24.1213l2.1213,2.1213 M24,25v3 M21.8787,24.1213l-2.1213,2.1213 M21,22h-3 M19.7574,17.7574l2.1213,2.1213 M28,22&#xA;&#x9;&#x9; M26.8284,24.8284 M24,28 M24,26 M21.1716,24.8284 M18,22 M20,22 M28,31h-8v4h8V31z M17,35h14"/></g></svg>
    );
  }

});

module.exports = Icon;
