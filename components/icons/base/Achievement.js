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
      a11yTitleId: 'achievement-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-achievement';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "achievement");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="achievement"><rect id="_x2E_svg_178_" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M33.6196,24.9113L29.031,29.5l-2.7238-2.7238&#xA;&#x9;&#x9; M27.98,20.79C28,20.7,28,20.6,28,20.5c0-0.08,0-3.66,0-6c0-1.15,0-2,0-2H16v8c0,3.31,2.69,6,6,6c0.38,0,0.74-0.04,1.1-0.11&#xA;&#x9;&#x9; M16,14.5h-5v4.3c0,2.2091,1.7909,3.7,4,3.7h1 M32.34,20.91c0.42-0.58,0.66-1.3,0.66-2.11v-4.3h-5 M19.73,26.05&#xA;&#x9;&#x9;C18.11,26.89,17,28.58,17,30.53 M23,30.5h-8v4h14 M30,20.5c-3.866,0-7,3.134-7,7s3.134,7,7,7s7-3.134,7-7S33.866,20.5,30,20.5z"/></g></svg>
    );
  }

});

module.exports = Icon;