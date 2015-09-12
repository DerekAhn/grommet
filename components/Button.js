// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');

var CLASS_ROOT = "button";

var Button = React.createClass({

  propTypes: {
    accent: React.PropTypes.bool,
    label: React.PropTypes.string.isRequired,
    id: React.PropTypes.string,
    onClick: React.PropTypes.func,
    primary: React.PropTypes.bool,
    secondary: React.PropTypes.bool,
    type: React.PropTypes.oneOf(['button', 'reset', 'submit'])
  },

  getDefaultProps: function () {
    return {
      type: "button"
    };
  },

  render: function () {
    var classes = [CLASS_ROOT];
    if (this.props.primary) {
      classes.push(CLASS_ROOT + "--primary");
    }
    if (this.props.secondary) {
      classes.push(CLASS_ROOT + "--secondary");
    }
    if (this.props.accent) {
      classes.push(CLASS_ROOT + "--accent");
    }
    if (! this.props.onClick) {
      classes.push(CLASS_ROOT + "--disabled");
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }

    return (
      <button id={this.props.id} type={this.props.type} className={classes.join(' ')}
        onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }

});

module.exports = Button;
