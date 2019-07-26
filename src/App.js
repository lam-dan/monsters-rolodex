import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

//class componenet allows access to the state
// javaacsript object with properties we can access at anytime inside our class
class App extends Component {
  constructor() {
    // calling super allows us to use 'this' and 'props' if we pass it in the constructor
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  //lifecycle class method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // API call which takes the response and converst to JSON format which javacscript can use
      .then(response => response.json())
      // Uses the javascript format and sets the state's object to the array of objects and call it users
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  //whatver attributes you write on the component is an object with the same attributes
  render() {
    // destructuring - we are pulling values from state and setting them in side const monsters & searchField
    const { monsters, searchField } = this.state;

    // Filter method returns a new array based off a function that we pass into it
    // Where we get the monster that it's currently iterating cover, converts it to a lowercase string since
    // search is not case sensitive, then we call includes method which checks the string value we pass inside
    // is actually in the string for the 'name' field.  Here we put our search field from the input which we also lowercase.
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
