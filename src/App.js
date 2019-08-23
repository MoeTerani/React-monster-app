import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [
        { name: 'Frankstein', key: '123sdf' },
        { name: 'Dracula', key: '123sdkkf' },
        { name: 'Zpmbie', key: '123sdddf' },
        { name: 'Frankstein2', key: '123sdf2' },
        { name: 'Dracula2', key: '123sdkkf2' },
        { name: 'Zpmbie2', key: '123sdddf2' }
      ]
    };
  }
  render() {
    return (
      <div className='App'>
        {this.state.monsters.map(monster => (
          <h1 key={monster.key}>{monster.name}</h1>
        ))}
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
