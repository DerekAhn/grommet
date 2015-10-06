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
      a11yTitleId: 'link-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-link';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "link");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="link"><rect id="_x2E_svg_23_" x="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M16.4792,34.6702l-2.9392-2.9392&#xA;&#x9;&#x9;c-0.7199-0.7199-0.7199-1.8871,0-2.6071l4.5839-4.5839c0.7199-0.7199,1.8871-0.7199,2.6071,0l2.9392,2.9392&#xA;&#x9;&#x9;c0.7199,0.7199,0.7199,1.8871,0,2.6071l-4.5839,4.5839C18.3663,35.3901,17.1991,35.3901,16.4792,34.6702z M29.8761,23.8803&#xA;&#x9;&#x9;l4.5839-4.5839c0.7199-0.7199,0.7199-1.8871,0-2.6071L31.5208,13.75c-0.7199-0.7199-1.8871-0.7199-2.6071,0l-4.5839,4.5839&#xA;&#x9;&#x9;c-0.7199,0.7199-0.7199,1.8871,0,2.6071l2.9392,2.9392C27.989,24.6002,29.1562,24.6002,29.8761,23.8803z M29,19.2101l-10,10"/></g></svg>
    );
  }

});

module.exports = Icon;
