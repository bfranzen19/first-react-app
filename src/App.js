import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    // return (   // use this way of nesting elements, not the below way.
    //   <div className="App">
    //     <h1> i'll show you! </h1>
    //   </div>
    // );

    return (   // use this way of nesting elements, not the below way.
      <div className="App">
        <h1> i'll show you! </h1>
        <p> figuring this out </p>
        <Person/>
      </div>
    );

    // React.createElement() takes at least 3 args. elem we want to render to the DOM (could be an imported component), configuration for this (JS object, can be null), any amount of children (can have multiple args separated by commas)
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, `i'm a react app!`)); // must nest React.createElement() calls to nest elements like this. we don't really use this way because it can get really complicated.
  }
}

export default App;
