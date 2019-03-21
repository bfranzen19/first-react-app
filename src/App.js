// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';

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
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';

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
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
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
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
// class App extends Component {
//     state = {
//         persons: [
//             { name: 'bt', age: 32 },
//             { name: 'alby', age: 2 },
//             { name: 'homer', age: 9 },
//             { name: 'best buddy', age: 23 }
//         ]
//     }
//
//     switchNameHandler = () => {
//         console.log('switched ittttt');
//         // this.state.persons[0].name = 'butthole'; // don't do this!
//         // setState() takes an object as an argument. it will merge whatever we define here with our existing state.
//         this.setState({
//             persons: [
//                 { name: 'bt', age: 32 },
//                 { name: 'albus humblewhore', age: 2 },
//                 { name: 'homer bacon', age: 100 },
//                 { name: 'amy', age: 123 }
//             ]
//         });
//     }
//
//     switchNameBackHandler = () => {
//         console.log('switched bacccck');
//         this.setState({
//             persons: [
//                 { name: 'bt', age: 32 },
//                 { name: 'alby', age: 2 },
//                 { name: 'homer', age: 9 },
//                 { name: 'best buddy', age: 23 }
//             ]
//         });
//     }
//
//     render() {
//       return (   // button onClick={this.functionName}
//           <div className="App">
//             <button onClick={this.switchNameHandler}> switch name </button>
//             <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//             <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
//             <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//             <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
//             <button onClick={this.switchNameBackHandler}> switch back </button>
//           </div>
//       );
//     }
// }
// export default App;



// using the useState() hook for state manipulation (react hooks), react 16.8 >
// import React, { useState } from 'react';    // most important react hook useState allows us to use state in a functional component instead of a class component.
// import './App.css';
// import Person from './Person/Person';
//
// // functional component declaration, not class
// // pass initial state. use destructuring to pull elements out of the array from the right side of the equal sign (useState() function call). personsState accesses all of the persons object data. therefore, must replace this.state with personsState since this.state doesn't exist anymore since it's a functional component. setPersonsState allows us to set a new state. set the switchNameHandler to a constant and it will work fine. remove this before switchNameHandler though since it's no longer within a class.
// const app = props => {
//     const [personsState, setPersonsState] = useState({
//         persons: [
//             { name: 'alby', age: 2 },
//             { name: 'homer', age: 9 },
//             { name: 'best buddy', age: 23 }
//         ]
//     });
//
//     const [otherState, setOtherState] = useState({
//         otherState: 'some other value'
//     });
//
//     // never called setOtherState but it would be the same idea as switchNameHandler()
//
//     const switchNameHandler = () => {   // call without parenthesis and without this
//         console.log('switched ittttt');
//         setPersonsState({   // make this the above function call, not this.setState
//             persons: [
//                 { name: 'albus humblewhore', age: 2 },
//                 { name: 'homer bacon', age: 100 },
//                 { name: 'amy', age: 123 }
//             ],
//             otherState: personsState.otherState  // this will copy in the old, untouched otherState with the new object. this is one way to do it, you can also use useState() multiple times.
//         });
//     }
//
//     return (   // button onClick={this.functionName}
//         <div className="App">
//             <button onClick={switchNameHandler}> switch name </button>
//             <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//             <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//             <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//             </div>
//     );
// }
// export default app;
//
// // when using react hooks, the function (2nd part of the array aka setPersonsState), does NOT merge whatever you pass to it with the old state, instead it REPLACES the old state with it. this means that whenever you're updating using hooks, you have to include ALL OLD STATE DATA. to accomplish this in this example, you have to add otherState: personsState.otherState to the setPersonsState object in the switchNameHandler() function. or, instead, you can call useState() again and pass in {otherState: 'some other value'} or just the otherState value 'some other values'


// passing method references between components
// calling switchNameHandler not only when clicking the button, but also when clicking any paragraph element inside the person component.

// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
// class App extends Component {
//     state = {
//         persons: [
//             { name: 'bt', age: 32 },
//             { name: 'alby', age: 2 },
//             { name: 'homer', age: 9 },
//             { name: 'best buddy', age: 23 }
//         ]
//     }
//
//     switchNameHandler = (newName) => {
//         console.log('switched ittttt');
//         this.setState({
//             persons: [
//                 { name: newName, age: 2 },
//                 { name: 'albus humblewhore', age: 2 },
//                 { name: 'homer bacon', age: 100 },
//                 { name: 'amy', age: 123 }
//             ]
//         });
//     }
//
//
//     render() {
//       return (   // <button onClick={() => this.switchNameHandler('clicked the button')}> switch name </button> or use click={this.switchNameHandler.bind(this, 'clicked the paragraph')}/> (preferred)
//           <div className="App">
//             <button onClick={() => this.switchNameHandler('clicked the button')}> switch name </button>
//             <Person
//                 name={this.state.persons[0].name}
//                 age={this.state.persons[0].age}
//                 click={this.switchNameHandler.bind(this, 'clicked the paragraph')}/>
//             <Person
//                 name={this.state.persons[1].name}
//                 age={this.state.persons[1].age}/>
//             <Person
//                 name={this.state.persons[2].name}
//                 age={this.state.persons[2].age}/>
//             <Person
//                 name={this.state.persons[3].name}
//                 age={this.state.persons[3].age}/>
//           </div>
//       );
//     }
// }
// export default App;



// // two way binding
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
// class App extends Component {
//     state = {
//         persons: [
//             { name: 'bt', age: 32 },
//             { name: 'alby', age: 2 },
//             { name: 'homer', age: 63 },
//             { name: 'best buddy', age: 23 }
//         ]
//     }
//
//     switchNameHandler = (newName) => {
//         console.log('switched ittttt');
//         this.setState({
//             persons: [
//                 { name: newName, age: 2 },
//                 { name: 'albus humblewhore', age: 2 },
//                 { name: 'homer bacon', age: 100 },
//                 { name: 'amy', age: 123 }
//             ]
//         });
//     }
//
//     nameChangedHandler = (event) => {
//         this.setState({
//             persons: [
//                 { name: event.target.value, age: 24 }   // event.target.value pulls the input value from the Person component
//             ]
//         });
//     }
//
//     render() {
//       return (   // <button onClick={() => this.switchNameHandler('clicked the button')}> switch name </button> or use click={this.switchNameHandler.bind(this, 'clicked the paragraph')}/> (preferred)
//           <div className="App">
//             <button onClick={() => this.switchNameHandler('clicked the button')}> switch name </button>
//             <Person
//                 name={this.state.persons[0].name}
//                 age={this.state.persons[0].age}
//                 click={this.switchNameHandler.bind(this, 'clicked the paragraph')}
//                 changed={this.nameChangedHandler}/>
//           </div>
//       );
//     }
// }
// export default App;



// // adding styling with stylesheets

// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
//
// class App extends Component {
//     state = {
//         persons: [
//             { name: 'bt', age: 32 },
//             { name: 'alby', age: 2 },
//             { name: 'homer', age: 63 },
//             { name: 'best buddy', age: 23 }
//         ]
//     }
//
//     switchNameHandler = (newName) => {
//         console.log('switched ittttt');
//         this.setState({
//             persons: [
//                 { name: newName, age: 2 },
//                 { name: 'albus humblewhore', age: 2 },
//                 { name: 'homer bacon', age: 100 },
//                 { name: 'amy', age: 123 }
//             ]
//         });
//     }
//
//     nameChangedHandler = (event) => {
//         this.setState({
//             persons: [
//                 { name: event.target.value, age: 24 },
//                 { name: event.target.value, age: 22 }   // event.target.value pulls the input value from the Person component
//             ]
//         });
//     }
//
//     render() {
//       return (   // <button onClick={() => this.switchNameHandler('clicked the button')}> switch name </button> or use click={this.switchNameHandler.bind(this, 'clicked the paragraph')}/> (preferred)
//           <div className="App">
//             <button onClick={() => this.switchNameHandler('clicked the button')}> switch name </button>
//             <Person
//                 name={this.state.persons[0].name}
//                 age={this.state.persons[0].age}
//                 click={this.switchNameHandler.bind(this, 'clicked the paragraph')}
//                 changed={this.nameChangedHandler}/>
//             <Person
//                 name={this.state.persons[1].name}
//                 age={this.state.persons[1].age}
//                 />
//           </div>
//       );
//     }
// }
// export default App;


// // inline styling
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
//
// class App extends Component {
//     state = {
//         persons: [
//             { name: 'bt', age: 32 },
//             { name: 'alby', age: 2 },
//             { name: 'homer', age: 63 },
//             { name: 'best buddy', age: 23 }
//         ]
//     }
//
//     switchNameHandler = (newName) => {
//         console.log('switched ittttt');
//         this.setState({
//             persons: [
//                 { name: newName, age: 2 },
//                 { name: 'albus humblewhore', age: 2 },
//                 { name: 'homer bacon', age: 100 },
//                 { name: 'amy', age: 123 }
//             ]
//         });
//     }
//
//     nameChangedHandler = (event) => {
//         this.setState({
//             persons: [
//                 { name: event.target.value, age: 24 },
//                 { name: event.target.value, age: 22 }
//             ]
//         });
//     }
//
//     render() {  // set inline styles within render(). pass style variable to button style
//         const style = {
//             backgroundColor: 'white',
//             font: 'inherit',
//             border: '1px solid dodgerBlue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//       return (
//           <div className="App">
//             <button
//                 style={style}
//                 onClick={() => this.switchNameHandler('clicked the button')}> switch name
//             </button>
//             <Person
//                 name={this.state.persons[0].name}
//                 age={this.state.persons[0].age}
//                 click={this.switchNameHandler.bind(this, 'clicked the paragraph')}
//                 changed={this.nameChangedHandler}/>
//             <Person
//                 name={this.state.persons[1].name}
//                 age={this.state.persons[1].age}
//                 />
//           </div>
//       );
//     }
// }
// export default App;


// // rendering content conditionally
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
//
// class App extends Component {
//     state = {
//         persons: [
//             { name: 'bt', age: 32 },
//             { name: 'alby', age: 2 },
//             { name: 'homer', age: 63 },
//             { name: 'amy', age: 23 }
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     switchNameHandler = (newName) => {
//         console.log('switched ittttt');
//         this.setState({
//             persons: [
//                 { name: newName, age: 2 },
//                 { name: 'albus humblewhore', age: 2 },
//                 { name: 'homer bacon', age: 100 },
//                 { name: 'amy', age: 123 }
//             ]
//         });
//     }
//
//     nameChangedHandler = (event) => {
//         this.setState({
//             persons: [
//                 { name: event.target.value, age: 24 },
//                 { name: event.target.value, age: 22 }
//             ]
//         });
//     }
//
//     togglePersonsHandler = () => {
//         const doesShow = this.state.showPersons;
//         this.setState({
//             showPersons: !doesShow
//         });
//     }
//
//     render() {
//         const style = {
//             backgroundColor: 'white',
//             font: 'inherit',
//             border: '1px solid dodgerBlue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//       return (
//             <div className="App">
//             <button
//                 style={style}
//                 onClick={() => this.togglePersonsHandler()}> show/hide
//             </button>
//             {
//             this.state.showPersons  === true ?
//             <div>
//                 <Person
//                     name={this.state.persons[0].name}
//                     age={this.state.persons[0].age} />
//                 <Person
//                     name={this.state.persons[1].name}
//                     age={this.state.persons[1].age} />
//                 <Person
//                     name={this.state.persons[2].name}
//                     age={this.state.persons[2].age} />
//                 <Person
//                     name={this.state.persons[3].name}
//                     age={this.state.persons[3].age} />
//             </div> : null
//             }
//           </div>
//       );
//     }
// }
// export default App;




// // handling dynamic content
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
//
// class App extends Component {
//     state = {
//         persons: [
//             { name: 'bt', age: 32 },
//             { name: 'alby', age: 2 },
//             { name: 'homer', age: 63 },
//             { name: 'amy', age: 23 }
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     switchNameHandler = (newName) => {
//         console.log('switched ittttt');
//         this.setState({
//             persons: [
//                 { name: newName, age: 2 },
//                 { name: 'albus humblewhore', age: 2 },
//                 { name: 'homer bacon', age: 100 },
//                 { name: 'amy', age: 123 }
//             ]
//         });
//     }
//
//     nameChangedHandler = (event) => {
//         this.setState({
//             persons: [
//                 { name: event.target.value, age: 24 },
//                 { name: event.target.value, age: 22 }
//             ]
//         });
//     }
//
//     togglePersonsHandler = () => {
//         const doesShow = this.state.showPersons;
//         this.setState({
//             showPersons: !doesShow
//         });
//     }
//
//     render() {
//         const style = {
//             backgroundColor: 'white',
//             font: 'inherit',
//             border: '1px solid dodgerBlue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//     // this is normal javascript, not JSX. can  write normal javascript here
//     let persons = null;
//
//     // showPersons is a boolean so we don't have to set === true or anything. if true, we set persons to the  same JSX code and can be returned.
//     if(this.state.showPersons) {
//         persons = (
//             <div>
//                 <Person
//                     name={this.state.persons[0].name}
//                     age={this.state.persons[0].age} />
//                 <Person
//                     name={this.state.persons[1].name}
//                     age={this.state.persons[1].age} />
//                 <Person
//                     name={this.state.persons[2].name}
//                     age={this.state.persons[2].age} />
//                 <Person
//                     name={this.state.persons[3].name}
//                     age={this.state.persons[3].age} />
//             </div>
//         );
//     }
//
//         return (
//             <div className="App">
//                 <button
//                     style={style}
//                     onClick={this.togglePersonsHandler}> show/hide
//                 </button>
//                 {persons}
//             </div>
//         );
//     }
// }
// export default App;




// // outputting lists
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
//
// class App extends Component {
//     state = {
//         persons: [
//             { name: 'bt', age: 32 },
//             { name: 'alby', age: 2 },
//             { name: 'homer', age: 63 },
//             { name: 'amy', age: 23 }
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     switchNameHandler = (newName) => {
//         console.log('switched ittttt');
//         this.setState({
//             persons: [
//                 { name: newName, age: 2 },
//                 { name: 'albus humblewhore', age: 2 },
//                 { name: 'homer bacon', age: 100 },
//                 { name: 'amy', age: 123 }
//             ]
//         });
//     }
//
//     nameChangedHandler = (event) => {
//         this.setState({
//             persons: [
//                 { name: event.target.value, age: 24 },
//                 { name: event.target.value, age: 22 }
//             ]
//         });
//     }
//
//     togglePersonsHandler = () => {
//         const doesShow = this.state.showPersons;
//         this.setState({
//             showPersons: !doesShow
//         });
//     }
//
//     render() {
//         const style = {
//             backgroundColor: 'white',
//             font: 'inherit',
//             border: '1px solid dodgerBlue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//     // this is normal javascript, not JSX. can  write normal javascript here
//     let persons = null;
//
//     // showPersons is a boolean so we don't have to set === true or anything. if true, we set persons to the  same JSX code and can be returned.
//     if(this.state.showPersons) {
//         persons = (
//             <div>
//                 {this.state.persons.map(person =>  {
//                     return <Person name={person.name}
//                     age={person.age}/>
//                 })}
//             </div>
//         );
//     }
//
//         return (
//             <div className="App">
//                 <button
//                     style={style}
//                     onClick={this.togglePersonsHandler}> show/hide
//                 </button>
//                 {persons}
//             </div>
//         );
//     }
// }
// export default App;



// // lists and state
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
//
// class App extends Component {
//     state = {
//         persons: [
//             { name: 'bt', age: 32 },
//             { name: 'alby', age: 2 },
//             { name: 'homer', age: 63 },
//             { name: 'amy', age: 23 }
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     deletePersonHandler = (personIndex) => {
//         const persons = this.state.persons;     // fetch all persons
//         persons.splice(personIndex, 1);     // remove 1 element at personIndex
//         this.setState( {persons: persons});
//     }
//
//     nameChangedHandler = (event) => {
//         this.setState({
//             persons: [
//                 { name: event.target.value, age: 24 },
//                 { name: event.target.value, age: 22 }
//             ]
//         });
//     }
//
//     togglePersonsHandler = () => {
//         const doesShow = this.state.showPersons;
//         this.setState({
//             showPersons: !doesShow
//         });
//     }
//
//     render() {
//         const style = {
//             backgroundColor: 'white',
//             font: 'inherit',
//             border: '1px solid dodgerBlue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//     let persons = null;
//
//     if(this.state.showPersons) {
//         persons = (
//             <div>
//                 {this.state.persons.map((person, index) =>  {
//                     return <Person
//                         click={() => this.deletePersonHandler(index)}
//                         name={person.name}
//                         age={person.age}/>
//                 })}
//             </div>
//         );
//     }
//
//         return (
//             <div className="App">
//                 <button
//                     style={style}
//                     onClick={this.togglePersonsHandler}> show/hide
//                 </button>
//                 {persons}
//             </div>
//         );
//     }
// }
// export default App;



// // a better approach to lists
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
//
// class App extends Component {
//     state = {
//         persons: [
//             { name: 'bt', age: 32 },
//             { name: 'alby', age: 2 },
//             { name: 'homer', age: 63 },
//             { name: 'amy', age: 23 }
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     deletePersonHandler = (personIndex) => {
//         // const persons = this.state.persons.slice(); // copy the persons array
//         const persons = [...this.state.persons]     // copy the  array usng spread
//         persons.splice(personIndex, 1);     // remove 1 element at personIndex
//         this.setState( {persons: persons});
//     }
//
//     nameChangedHandler = (event) => {
//         this.setState({
//             persons: [
//                 { name: event.target.value, age: 24 },
//                 { name: event.target.value, age: 22 }
//             ]
//         });
//     }
//
//     togglePersonsHandler = () => {
//         const doesShow = this.state.showPersons;
//         this.setState({
//             showPersons: !doesShow
//         });
//     }
//
//     render() {
//         const style = {
//             backgroundColor: 'white',
//             font: 'inherit',
//             border: '1px solid dodgerBlue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//     let persons = null;
//
//     if(this.state.showPersons) {
//         persons = (
//             <div>
//                 {this.state.persons.map((person, index) =>  {
//                     return <Person
//                         click={() => this.deletePersonHandler(index)}
//                         name={person.name}
//                         age={person.age}/>
//                 })}
//             </div>
//         );
//     }
//
//         return (
//             <div className="App">
//                 <button
//                     style={style}
//                     onClick={this.togglePersonsHandler}> show/hide
//                 </button>
//                 {persons}
//             </div>
//         );
//     }
// }
// export default App;


// // lists and keys
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
//
// class App extends Component {
//     state = {
//         persons: [
//             { id: 'asdfasd112', name: 'bt', age: 32 },
//             { id: 'fdsadfa445',name: 'alby', age: 2 },
//             { id: 'yuiopio988',name: 'homer', age: 63 },
//             { id: 'qwerewq746',name: 'amy', age: 23 }
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     deletePersonHandler = (personIndex) => {
//         const persons = [...this.state.persons]
//         persons.splice(personIndex, 1);
//         this.setState( {persons: persons});
//     }
//
//     nameChangedHandler = (event) => {
//         this.setState({
//             persons: [
//                 { name: event.target.value, age: 24 },
//                 { name: event.target.value, age: 22 }
//             ]
//         });
//     }
//
//     togglePersonsHandler = () => {
//         const doesShow = this.state.showPersons;
//         this.setState({
//             showPersons: !doesShow
//         });
//     }
//
//     render() {
//         const style = {
//             backgroundColor: 'white',
//             font: 'inherit',
//             border: '1px solid dodgerBlue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//     let persons = null;
//
//     if(this.state.showPersons) {
//         persons = (
//             <div>
//                 {this.state.persons.map((person, index) =>  {
//                     return <Person
//                         click={() => this.deletePersonHandler(index)}
//                         name={person.name}
//                         age={person.age}
//                         key={person.id}/>
//                 })}
//             </div>
//         );
//     }
//
//         return (
//             <div className="App">
//                 <button
//                     style={style}
//                     onClick={this.togglePersonsHandler}> show/hide
//                 </button>
//                 {persons}
//             </div>
//         );
//     }
// }
// export default App;


// // flexible lists
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
//
// class App extends Component {
//     state = {
//         persons: [
//             { id: 'asdfasd112', name: 'bt', age: 32 },
//             { id: 'fdsadfa445',name: 'alby', age: 2 },
//             { id: 'yuiopio988',name: 'homer', age: 63 },
//             { id: 'qwerewq746',name: 'amy', age: 23 }
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     deletePersonHandler = (personIndex) => {
//         const persons = [...this.state.persons]
//         persons.splice(personIndex, 1);
//         this.setState( {persons: persons});
//     }
//
//     nameChangedHandler = (event, id) => {
//         const personIndex = this.state.persons.findIndex(p => {
//             return p.id === id;
//         });
//
//         const person = {    // avoid changing original data. this is a more modern approach.
//             ...this.state.persons[personIndex]
//         }
//
//         /*
//         could also use this approach:
//         const person = Object.assign({}, this.state.persons[personIndex]);
//         */
//
//         person.name = event.target.value;
//
//         const persons = [...this.state.persons];
//         persons[personIndex] = person;
//
//         this.setState({
//             persons: persons
//         });
//     }
//
//     togglePersonsHandler = () => {
//         const doesShow = this.state.showPersons;
//         this.setState({
//             showPersons: !doesShow
//         });
//     }
//
//     render() {
//         const style = {
//             backgroundColor: 'white',
//             font: 'inherit',
//             border: '1px solid dodgerBlue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//     let persons = null;
//
//     if(this.state.showPersons) {
//         persons = (
//             <div>
//                 {this.state.persons.map((person, index) =>  {
//                     return <Person
//                         click={() => this.deletePersonHandler(index)}
//                         name={person.name}
//                         age={person.age}
//                         key={person.id}
//                         changed={(event) => this.nameChangedHandler(event, person.id)}/>
//                 })}
//             </div>
//         );
//     }
//
//         return (
//             <div className="App">
//                 <button
//                     style={style}
//                     onClick={this.togglePersonsHandler}> show/hide
//                 </button>
//                 {persons}
//             </div>
//         );
//     }
// }
// export default App;





// // styling components and elements dynamically
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
//
// class App extends Component {
//     state = {
//         persons: [
//             { id: 'asdfasd112', name: 'bt', age: 32 },
//             { id: 'fdsadfa445',name: 'alby', age: 2 },
//             { id: 'yuiopio988',name: 'homer', age: 63 },
//             { id: 'qwerewq746',name: 'amy', age: 23 }
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     deletePersonHandler = (personIndex) => {
//         const persons = [...this.state.persons]
//         persons.splice(personIndex, 1);
//         this.setState( {persons: persons});
//     }
//
//     nameChangedHandler = (event, id) => {
//         const personIndex = this.state.persons.findIndex(p => {
//             return p.id === id;
//         });
//
//         const person = {
//             ...this.state.persons[personIndex]
//         }
//
//         person.name = event.target.value;
//
//         const persons = [...this.state.persons];
//         persons[personIndex] = person;
//
//         this.setState({
//             persons: persons
//         });
//     }
//
//     togglePersonsHandler = () => {
//         const doesShow = this.state.showPersons;
//         this.setState({
//             showPersons: !doesShow
//         });
//     }
//
//     render() {
//         const style = {
//             backgroundColor: 'green',
//             color: 'white',
//             font: 'inherit',
//             border: '1px solid dodgerBlue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//     let persons = null;
//
//     if(this.state.showPersons) {
//         persons = (
//             <div>
//                 {this.state.persons.map((person, index) =>  {
//                     return <Person
//                         click={() => this.deletePersonHandler(index)}
//                         name={person.name}
//                         age={person.age}
//                         key={person.id}
//                         changed={(event) => this.nameChangedHandler(event, person.id)}/>
//                 })}
//             </div>
//         );
//
//         style.backgroundColor = 'red';
//     }
//
//         return (
//             <div className="App">
//                 <button
//                     style={style}
//                     onClick={this.togglePersonsHandler}> show/hide
//                 </button>
//                 {persons}
//             </div>
//         );
//     }
// }
// export default App;




// // radium
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
// import Radium, {StyleRoot} from 'radium';
//
// class App extends Component {
//     state = {
//         persons: [
//             { id: 'asdfasd112', name: 'bt', age: 32 },
//             { id: 'fdsadfa445',name: 'alby', age: 2 },
//             { id: 'yuiopio988',name: 'homer', age: 63 },
//             { id: 'qwerewq746',name: 'amy', age: 23 }
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     deletePersonHandler = (personIndex) => {
//         const persons = [...this.state.persons]
//         persons.splice(personIndex, 1);
//         this.setState( {persons: persons});
//     }
//
//     nameChangedHandler = (event, id) => {
//         const personIndex = this.state.persons.findIndex(p => {
//             return p.id === id;
//         });
//
//         const person = {
//             ...this.state.persons[personIndex]
//         }
//
//         person.name = event.target.value;
//
//         const persons = [...this.state.persons];
//         persons[personIndex] = person;
//
//         this.setState({
//             persons: persons
//         });
//     }
//
//     togglePersonsHandler = () => {
//         const doesShow = this.state.showPersons;
//         this.setState({
//             showPersons: !doesShow
//         });
//     }
//
//     render() {
//         const style = {
//             backgroundColor: 'green',
//             color: 'white',
//             font: 'inherit',
//             border: '1px solid dodgerBlue',
//             padding: '8px',
//             cursor: 'pointer',
//             ':hover': { // setting the hover properites for the green button
//                 backgroundColor: 'lightgreen',
//                 color: 'black'
//             }
//         };
//
//     let persons = null;
//
//     const classes = [];
//     if(this.state.persons.length <= 2) classes.push('red');
//     if(this.state.persons.length <= 1) classes.push('bold');
//
//
//     if(this.state.showPersons) {
//         persons = (
//             <div>
//                 {this.state.persons.map((person, index) =>  {
//                     return <Person
//                         click={() => this.deletePersonHandler(index)}
//                         name={person.name}
//                         age={person.age}
//                         key={person.id}
//                         changed={(event) => this.nameChangedHandler(event, person.id)}/>
//                 })}
//             </div>
//         );
//
//         style.backgroundColor = 'red';
//         style[':hover'] = { // assigning hover properties for the red button
//             backgroundColor: 'salmon',
//             color: 'black'
//         }
//
//     }
//
//         return (
//             <StyleRoot>
//                 <div className="App">
//                     <p className={classes.join(' ')}>this will change</p>
//                     <button
//                         style={style}
//                         onClick={this.togglePersonsHandler}> show/hide
//                     </button>
//                     {persons}
//                 </div>
//             </StyleRoot>
//         );
//     }
// }
// export default Radium(App);





// //
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 'asdfasd112', name: 'bt', age: 32 },
            { id: 'fdsadfa445',name: 'alby', age: 2 },
            { id: 'yuiopio988',name: 'homer', age: 63 },
            { id: 'qwerewq746',name: 'amy', age: 23 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1);
        this.setState( {persons: persons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        }

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid dodgerBlue',
            padding: '8px',
            cursor: 'pointer',
        };

    let persons = null;

    const classes = [];
    if(this.state.persons.length <= 2) classes.push('red');
    if(this.state.persons.length <= 1) classes.push('bold');


    if(this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) =>  {
                    return <Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.nameChangedHandler(event, person.id)}/>
                })}
            </div>
        );

        style.backgroundColor = 'red';

    }

        return (
            <div className="App">
                <p className={classes.join(' ')}>this will change</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}> show/hide
                </button>
                {persons}
            </div>
        );
    }
}
export default App;
