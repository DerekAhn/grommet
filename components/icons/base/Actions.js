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
      a11yTitleId: 'actions-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-actions';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "actions");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="actions"><rect id="_x2E_svg_2_" x="0" y="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M32,24c0,4.4183-3.5817,8-8,8s-8-3.5817-8-8&#xA;&#x9;&#x9;s3.5817-8,8-8S32,19.5817,32,24z M27,24c0-1.6542-1.3455-3-3-3s-3,1.3458-3,3s1.3455,3,3,3S27,25.6542,27,24z M24,12v4 M32,24h4&#xA;&#x9;&#x9; M24,36v-4 M12,24h4 M32.4853,15.5147l-2.8284,2.8284 M29.6569,29.6569l2.8284,2.8284 M18.3431,29.6569l-2.8284,2.8284&#xA;&#x9;&#x9; M15.5147,15.5147l2.8284,2.8284"/></g></svg>
    );
  }

});

module.exports = Icon;
