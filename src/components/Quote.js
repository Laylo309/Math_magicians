import React from 'react';

class Quote extends React.Component {
  render() {
    return (
      <h2 id={this.props} className="quote">
        “The function of education is to teach one to think intensively and to
        think critically. Intelligence plus character – that is the goal of true
        education” – Martin Luther King
      </h2>
    );
  }
}

export default Quote;