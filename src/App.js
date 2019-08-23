import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: 'Hello Moe!'
    };
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: 'Hello Neda!!!!' })}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

export default App;

//***************************

// function App() {
//   return (

//   );
// }
//*************************** */

// class  extends Component {
//   state = {  }
//   render() {
//     return (  );
//   }
// }

// export default ;

//******************************** */

// class  extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() {
//     return (  );
//   }
// }

// export default ;

//***************************
