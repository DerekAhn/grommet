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
      a11yTitleId: 'cloud-upload-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-cloud-upload';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "cloud-upload");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="cloud-upload"><rect id="_x2E_svg_64_" x="0" y="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M24,34v-8 M28,29l-4-4l-4,4 M28,31h2.0792&#xA;&#x9;&#x9;c2.7729,0,4.9708-2.2323,4.9708-5.0052S33,21,30,21v-1c0-2.2091-1.6909-4-3.9-4h-3c-2.2091,0-4.1,1.7909-4.1,4v1 M24,21h-5.8792&#xA;&#x9;&#x9;C15.3479,21,13.1,23.2375,13.1,26.0104S15.3271,31,18.1,31H18"/></g></svg>
    );
  }

});

module.exports = Icon;