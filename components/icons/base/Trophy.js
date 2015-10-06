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
      a11yTitleId: 'trophy-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-trophy';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "trophy");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="trophy"><rect id="_x2E_svg_179_" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M30,20.5c0,3.3137-2.6863,6-6,6s-6-2.6863-6-6v-8&#xA;&#x9;&#x9;h12C30,12.5,30,20.375,30,20.5z M18,14.5h-5v4.3c0,2.2091,1.7909,3.7,4,3.7h1 M30,22.5h1c2.2091,0,4-1.4909,4-3.7v-4.3h-5&#xA;&#x9;&#x9; M29.06,30.53c0-1.96-1.12-3.65-2.75-4.49 M21.73,26.05C20.11,26.89,19,28.58,19,30.53 M31,30.5H17v4h14V30.5z"/></g></svg>
    );
  }

});

module.exports = Icon;
