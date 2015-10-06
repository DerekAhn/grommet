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
      a11yTitleId: 'worksop-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-worksop';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "worksop");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="worksop"><rect id="_x2E_svg_241_" x="0" y="0" fill="none" width="48" height="48"/><polyline fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" points="32,28 35,28 35,14 15,14 15,17 &#x9;"/><rect x="22" y="12" fill="#231F20" width="6" height="4"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M22,22.5c0,1.933-1.567,3.5-3.5,3.5&#xA;&#x9;&#x9;S15,24.433,15,22.5s1.567-3.5,3.5-3.5S22,20.567,22,22.5z M20,26h-2c-2.7614,0-5,2.2386-5,5v4h11v-3.9515&#xA;&#x9;&#x9;c0-0.6033,0.3584-1.1483,0.9169-1.3766C28.8134,28.0792,31,23,31,23l-2-2C23.7917,26.2083,20,26,20,26 M29,21l2-2"/></g></svg>
    );
  }

});

module.exports = Icon;
