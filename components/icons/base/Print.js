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
      a11yTitleId: 'print-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-print';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "print");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="print"><rect id="_x2E_svg_74_" x="0" y="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M18.9988,31h-6V19h22v12h-6 M29.9988,13h-12v6h12&#xA;&#x9;&#x9;V13z M29.9988,27h-12v8h12V27z M15.9988,27h16"/><rect x="29.9988" y="22" fill="#231F20" width="2" height="2"/></g></svg>
    );
  }

});

module.exports = Icon;
