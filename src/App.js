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

  render() {
    // const { monsters, searchField } = this.State;
    const monsters2 = this.state.monsters;
    const searchField2 = this.state.searchField;

    const filteredMonsters = monsters2.filter(monster =>
      monster.name.toLowerCase().includes(searchField2.toLowerCase())
    );

    return (
      <div className='App'>
        <SearchBox
          placeholder='search monsters'
          handleChange={e => {
            this.setState({ searchField: e.target.value });
          }}
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
