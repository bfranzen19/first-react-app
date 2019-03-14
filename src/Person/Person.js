// import React from 'react';
//
// // dynamic stuff in a component
// const person = () => {
//     return <p>  i'm a person and i am { Math.floor(Math.random() * 30) } years old </p>
// };
//
// export default person;

// working with properties
// import React from 'react';
//
// const person = (props) => {
//     return <p>  i'm {props.name} and i am {props.age} years old </p>
// };
//
// export default person;



// accessing the info inside the component tags
// import React from 'react';
//
// const person = (props) => {
//     return (
//         <div>
//             <p>  i'm {props.name} and i am {props.age} years old </p>
//             <p>{props.children}</p>
//         </div>
//     )
// };
// export default person;


// understanding and using state
// import React from 'react';
//
// const person = (props) => {
//     return (
//         <div>
//             <p> i'm {props.name} and i am {props.age} years old </p>
//         </div>
//     )
// };
// export default person;


// props and state
// import React from 'react';
//
// const person = (props) => {
//     return (
//         <div>
//             <p onClick={props.click}> i'm {props.name} and i am {props.age} years old </p>
//         </div>
//     )
// };
// export default person;


// 2 way binding
// import React from 'react';
//
// const person = (props) => {
//     return (
//         <div>
//             <p onClick={props.click}> name - {props.name}, age - {props.age} </p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     )
// };
// export default person;



// adding styling with stylesheets. add className to connect to Person.css. don't forget to import './Person.css' with the file extension included (only JS files can omit file ext).  style tags are injected by webpack.
// import React from 'react';
// import './Person.css';
//
// const person = (props) => {
//     return (
//         <div className="Person">
//             <p onClick={props.click}> name - {props.name}, age - {props.age} </p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     )
// };
// export default person;
