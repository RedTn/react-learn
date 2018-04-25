import React from 'react';
import PropTypes from 'prop-types';

class HelloState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const msg = this.state.checked ? 'checked' : 'not checked';

    return (
      <div>
        <input type="checkbox" onChange={this.handleCheck} />
        <p>This box is {msg}</p>
      </div>
    );
  }
}

const Hello = ({ firstName }) => (
  <div className="Hello">
    <h1>Hello {firstName}</h1>
  </div>
);

Hello.propTypes = {
  firstName: PropTypes.string.isRequired
};

export {
  Hello,
  HelloState
};
