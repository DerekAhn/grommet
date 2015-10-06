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
      a11yTitleId: 'inherit-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-inherit';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "inherit");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="inherit"><rect id="_x2E_svg_170_" x="0" y="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M29,17.8333c0,2.7614-2.2386,5-5,5s-5-2.2386-5-5&#xA;&#x9;&#x9;s2.2386-5,5-5S29,15.0719,29,17.8333z M16,28.8333c-1.6569,0-3,1.3431-3,3s1.3431,3,3,3s3-1.3431,3-3S17.6569,28.8333,16,28.8333z&#xA;&#x9;&#x9; M29,31.8333c0,1.6569,1.3431,3,3,3c1.6569,0,3-1.3431,3-3s-1.3431-3-3-3C30.3431,28.8333,29,30.1765,29,31.8333z M18.4,30.0333&#xA;&#x9;&#x9;l5.6-3.2v-4 M29.6,30.0333l-5.6-3.2"/></g></svg>
    );
  }

});

module.exports = Icon;
