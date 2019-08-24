import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // get the response as json
      .then(users => this.setState({ monsters: users })); // now we have the array of the users and assign it to monsters empty array
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    // const { monsters, searchField } = this.State;
    const monsters2 = this.state.monsters;
    const searchField2 = this.state.searchField;

    const filteredMonsters = monsters2.filter(monster =>
      monster.name.toLowerCase().includes(searchField2.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>MONSTER ROLODEX</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
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

// export const name = ()=> (

// some jsx code

//   );

//*************************** */

// class  extends Component {
//   state = {  }
//   render() {
//     return (  );
//   }
// }

// export default ;

//******************************** */
//******************************** */

// class  extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }

// here in between we can write any lifecycle method

// componentDidMount() {
//   ############
// }

//or we can write any function using => function

// handleChange = e => {
//   ############
// };

//   render() {
//     return (  );
//   }
// }

// export default ;

//***************************
