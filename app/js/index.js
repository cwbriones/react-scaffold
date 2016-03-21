import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let greeting = `Hello ${this.props.name}`;
    return (
      <div>
        {greeting}
      </div>
    )
  }
}

let mount = document.getElementById("main-container")
ReactDOM.render(<App name="World" />, mount);
