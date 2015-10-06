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
      a11yTitleId: 'user-worker-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-user-worker';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "user-worker");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="user-worker"><rect id="_x2E_svg_133_" x="0" y="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M30,19v1.5714C30,24.1218,27.5504,27,24,27&#xA;&#x9;&#x9;s-6-2.8782-6-6.4286V19 M20.45,25.83C17.81,27.14,16,29.86,16,33v2h16v-2c0-2.21-0.9-4.21-2.34-5.66&#xA;&#x9;&#x9;c-0.61-0.61-1.32-1.12-2.11-1.51 M31,20c0-3.866-3.134-7-7-7s-7,3.134-7,7H31z M22,16v-2 M26,16v-2 M15,20h18"/></g></svg>
    );
  }

});

module.exports = Icon;
