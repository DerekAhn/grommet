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
      a11yTitleId: '3d-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-3d';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "3d");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="_x33_d"><rect id="_x2E_svg_197_" x="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M34.4,24v7l-10,4.1l-10-4.1v-7 M34.4,24v-7l-10-4.1&#xA;&#x9;&#x9;l-10,4.1v7 M14.4,17l10,4.1l10-4.1 M30.4,29v-5h-5 M18.4,26c5.7812,4.9375,11.2-1,11.2-1"/></g></svg>
    );
  }

});

module.exports = Icon;
