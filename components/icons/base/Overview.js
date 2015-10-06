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
      a11yTitleId: 'overview-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-overview';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "overview");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="overview"><rect id="_x2E_svg_120_" x="0" y="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M22,28.5c0,2.4853-2.0147,4.5-4.5,4.5&#xA;&#x9;&#x9;S13,30.9853,13,28.5s2.0147-4.5,4.5-4.5S22,26.0147,22,28.5z M30.5,24c-2.4853,0-4.5,2.0147-4.5,4.5s2.0147,4.5,4.5,4.5&#xA;&#x9;&#x9;c2.4853,0,4.5-2.0147,4.5-4.5S32.9853,24,30.5,24z M22,27.1l-1-11h-4l-4,11.375V28.1 M35,28.1v-0.625L31,16.1h-4l-1,11 M22,19.1h4&#xA;&#x9;&#x9; M22,27.1h5"/></g></svg>
    );
  }

});

module.exports = Icon;
