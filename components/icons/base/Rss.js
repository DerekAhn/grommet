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
      a11yTitleId: 'rss-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-rss';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "rss");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="rss"><rect id="_x2E_svg_24_" x="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M17,13.2101c9.9253,0,18,8.0747,18,18 M30,31.2101&#xA;&#x9;&#x9;c0-7.1685-5.8315-13-13-13 M25,31.2101c0-4.4111-3.5889-8-8-8 M17,28.2101c-1.6569,0-3,1.3431-3,3c0,1.6569,1.3431,3,3,3&#xA;&#x9;&#x9;s3-1.3431,3-3C20,29.5533,18.6568,28.2101,17,28.2101z"/></g></svg>
    );
  }

});

module.exports = Icon;
