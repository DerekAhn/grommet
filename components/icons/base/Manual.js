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
      a11yTitleId: 'manual-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-manual';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "manual");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="manual"><rect id="_x2E_svg_181_" y="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M29,31.9792H19v-3h10V31.9792z M32,31.9792H16v3h16&#xA;&#x9;&#x9;V31.9792z M24,12.9792c-2.2091,0-4,1.7909-4,4s1.7909,4,4,4s4-1.7909,4-4S26.2091,12.9792,24,12.9792z M22,20.9792v8 M26,20.9792v8&#xA;&#x9;&#x9;"/></g></svg>
    );
  }

});

module.exports = Icon;
