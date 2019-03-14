import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
//   render() {
//     // return (   // use this way of nesting elements, not the below way.
//     //   <div className="App">
//     //     <h1> i'll show you! </h1>
//     //   </div>
//     // );
//
//     // // using a component
//     // return (   // use this way of nesting elements, not the below way.
//     //   <div className="App">
//     //     <h1> i'll show you! </h1>
//     //     <p> figuring this out </p>
//     //     <Person/>
//     //     <Person/>
//     //   </div>
//     );
//
//     // React.createElement() takes at least 3 args. elem we want to render to the DOM (could be an imported component), configuration for this (JS object, can be null), any amount of children (can have multiple args separated by commas)
//     // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, `i'm a react app!`)); // must nest React.createElement() calls to nest elements like this. we don't really use this way because it can get really complicated.
//   }
// }
// export default App;


// // using props with a component
// class App extends Component {
//   render() {
//     return (   // use this way of nesting elements, not the below way.
//         <div className="App">
//             <Person name="bt" age="32"/>
//         </div>
//     );
//   }
// }
// export default App;


// accessing the info inside the component tags
// class App extends Component {
//     state = {
//         persons: [
//             { name: 'bt', age: 32 },
//             { name: 'alby', age: 2 },
//             { name: 'homer', age: 9 }
//         ]
//     }
//
//     render() {
//       return (   // use this way of nesting elements, not the below way.
//           <div className="App">
//             <button> switch name </button>
//             <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//             <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
//             <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//           </div>
//       );
//     }
// }
// export default App;


// props and state & event handling
class App extends Component {
    state = {
        persons: [
            { name: 'bt', age: 32 },
            { name: 'alby', age: 2 },
            { name: 'homer', age: 9 },
            { name: 'best buddy', age: 23 }
        ]
    }

    switchNameHandler = () => {
        console.log('switched ittttt');
        // this.state.persons[0].name = 'butthole'; // don't do this!
        // setState() takes an object as an argument. it will merge whatever we define here with our existing state.
        this.setState({
            persons: [
                { name: 'bt', age: 32 },
                { name: 'albus humblewhore', age: 2 },
                { name: 'homer bacon', age: 100 },
                { name: 'amy', age: 123 }
            ]
        });
    }

    switchNameBackHandler = () => {
        console.log('switched bacccck');
        this.setState({
            persons: [
                { name: 'bt', age: 32 },
                { name: 'alby', age: 2 },
                { name: 'homer', age: 9 },
                { name: 'best buddy', age: 23 }
            ]
        });
    }

    render() {
      return (   // button onClick={this.functionName}
          <div className="App">
            <button onClick={this.switchNameHandler}> switch name </button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
            <button onClick={this.switchNameBackHandler}> switch back </button>
          </div>
      );
    }
}
export default App;
