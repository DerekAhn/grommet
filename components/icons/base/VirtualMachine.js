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
      a11yTitleId: 'virtual-machine-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-virtual-machine';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "virtual-machine");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="virtual-machine"><rect id="_x2E_svg_177_" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M29.5,25.5h-13v-13h13V25.5z M33.5,17.5h-13v13h13&#xA;&#x9;&#x9;V17.5z M24.5,21.5h-13v13h13V21.5z"/></g></svg>
    );
  }

});

module.exports = Icon;
