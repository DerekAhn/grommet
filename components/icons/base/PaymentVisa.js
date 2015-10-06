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
      a11yTitleId: 'payment-visa-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-payment-visa';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "payment-visa");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="payment-visa"><rect id="_x2E_svg_290_" x="0" fill="none" width="48" height="48"/><path d="M28.475,15.8444l-4.3012,10.9967l-0.4746-2.1981c0-0.0002,0,0.0126,0,0.0126L22.1836,17.24&#xA;&#x9;&#x9;c-0.2648-1.0163-1.0147-1.3956-1.9648-1.3956h-7.0541l-0.0558,0.3811c1.716,0.4154,3.2504,1.0384,4.5952,1.784l3.8893,13.9514&#xA;&#x9;&#x9;l4.6285-0.0514l6.8871-16.065H28.475z"/></g></svg>
    );
  }

});

module.exports = Icon;
