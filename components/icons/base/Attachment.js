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
      a11yTitleId: 'attachment-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-attachment';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "attachment");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="attachment"><rect id="_x2E_svg_29_" x="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M33.8566,24.0113l-9.488,9.488&#xA;&#x9;&#x9;c-2.3197,2.3197-6.0807,2.3197-8.4004,0l-0.0849-0.0849c-2.3197-2.3197-2.3197-6.0807,0-8.4004l10.6732-10.6732&#xA;&#x9;&#x9;c1.5465-1.5465,4.0538-1.5465,5.6003,0l0.0566,0.0566c1.5465,1.5465,1.5465,4.0538,0,5.6003L21.5684,30.6427&#xA;&#x9;&#x9;c-0.7732,0.7732-2.0269,0.7732-2.8001,0L18.74,30.6144c-0.7732-0.7732-0.7732-2.0269,0-2.8001l9.4598-9.4598"/></g></svg>
    );
  }

});

module.exports = Icon;
