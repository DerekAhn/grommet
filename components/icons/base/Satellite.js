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
      a11yTitleId: 'satellite-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-satellite';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "satellite");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="satellite"><rect id="_x2E_svg_143_" x="0" y="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M33,29.9467c-4.1421,4.1421-10.8579,4.1421-15,0&#xA;&#x9;&#x9;s-4.1421-10.8579,0-15L33,29.9467z M18.015,30.0467c-3.31,0-6.015,2.9-6.015,5.9h12c0-1.12-0.37-2-1.02-3H23 M26,21.9467l4-4&#xA;&#x9;&#x9; M31.5,13.9467c-1.3807,0-2.5,1.1193-2.5,2.5c0,1.3807,1.1193,2.5,2.5,2.5s2.5-1.1193,2.5-2.5&#xA;&#x9;&#x9;C34,15.066,32.8807,13.9467,31.5,13.9467z"/></g></svg>
    );
  }

});

module.exports = Icon;
