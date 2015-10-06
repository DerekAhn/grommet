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
      a11yTitleId: 'blog-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-blog';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "blog");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="blog"><rect id="_x2E_svg_89_" x="0" y="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M18,13c9.9253,0,18,8.0747,18,18 M31,31&#xA;&#x9;&#x9;c0-7.1685-5.8315-13-13-13 M26,31c0-4.4111-3.5889-8-8-8 M18,28c-1.6569,0-3,1.3431-3,3c0,1.6569,1.3431,3,3,3s3-1.3431,3-3&#xA;&#x9;&#x9;C21,29.3431,19.6569,28,18,28z M15,31v-8"/></g></svg>
    );
  }

});

module.exports = Icon;
