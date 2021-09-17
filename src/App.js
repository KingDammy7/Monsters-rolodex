import { Cardlist} from './component/card-list/card-list.component'
import { Searchbox} from './component/search-box/search-box.component.jsx'

import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super ();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json() )
    .then(users => this.setState( { monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monsters => 
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
      ) 
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
           <Searchbox
           placeholder= 'search monsters'
           handleChange= {e => {
            this.setState({ searchField: e.target.value},
            );
          }}
           />
 
           <Cardlist monsters={filteredMonsters}
           />
          
      </div>
    );
  }
}

export default App;
