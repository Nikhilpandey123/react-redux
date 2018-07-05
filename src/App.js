import React, { Component } from 'react';
import './App.css';
import Addcounter from './addcounter'
//import Counter from './counter'
import store from './store/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Addcounter store={store}/>
        {/*<Counter store={store}/>*/}
      </div>
    );
  }
}

export default App;
