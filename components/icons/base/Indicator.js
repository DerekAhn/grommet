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
      a11yTitleId: 'indicator-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-indicator';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "indicator");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="indicator"><rect id="_x2E_svg_239_" x="0" y="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M22,35v-3c0-3.0938-1.5745-5.6785-2.8975-7.0015&#xA;&#x9;&#x9;C17.8184,23.7144,17,21.9536,17,19.9941c0-4.313,3.9007-7.7223,8.3667-6.8762c2.7529,0.5216,4.9634,2.7423,5.4984,5.4927&#xA;&#x9;&#x9;c0.4874,2.5056-0.3875,4.8077-1.9677,6.3878C27.5745,26.3215,26,28.9062,26,32v3h-2H22z M24,17c-1.6569,0-3,1.3431-3,3&#xA;&#x9;&#x9;s1.3431,3,3,3c1.6569,0,3-1.3431,3-3S25.6569,17,24,17z"/></g></svg>
    );
  }

});

module.exports = Icon;