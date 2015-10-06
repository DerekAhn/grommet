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
      a11yTitleId: 'contact-card-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-contact-card';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "contact-card");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="contact-card"><rect id="_x2E_svg_114_" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M21,21c0,1.6569-1.3431,3-3,3s-3-1.3431-3-3&#xA;&#x9;&#x9;s1.3431-3,3-3S21,19.3431,21,21z M23,29.4545C23,26.6429,20.7662,24,17.9545,24h0.0682C15.2111,24,13,26.6429,13,29.4545V32h10&#xA;&#x9;&#x9;V29.4545z M26,21h10 M26,25h7 M26,29h10"/></g></svg>
    );
  }

});

module.exports = Icon;
