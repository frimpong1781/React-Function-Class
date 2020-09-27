import React from 'react';

function App() {
  return (
    <WelcomeComponent name="Codetrain" />
  );
}

class WelcomeComponent extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return <h1> {this.props.name} is awesome react works!!!</h1>
  }
}

export default App;
