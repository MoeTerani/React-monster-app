import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
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
      .then(users => this.setState({ monsters: users })); // now we have the array of the users and assign it to monsters empty array
  }

  render() {
    return (
      <div className='App'>
        <CardList>
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
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
