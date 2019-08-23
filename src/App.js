import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // get the response as json
      .then(users => this.setState({ monsters: users })); // now we have the array of the users
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
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
