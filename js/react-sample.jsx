var React = require('react');

var Hello = React.createClass({
  render: function() {
    return (
      <div className="container">Hello {this.props.name}</div>
    );
  }
});

React.render(<Hello name="React" />, document.getElementById("app"));
