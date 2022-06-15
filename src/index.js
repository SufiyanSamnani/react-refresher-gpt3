/* 
Create a new folder
Open terminal
Navigate to folder in terminal and run: npx create-react-app ./
Delete src folder to get rid of template files
Recreate src folder with this index.js file in it
Remove all comments and noscript tag from index.html under public folder
Run: npm install react-icons

To compile & run React app, run: npm start
*/

import React from 'react';
import ReactDOM from 'react-dom'; // library that allows rendering React components to the DOM

import App from './App'; //import our App component
import './index.css'; //import CSS file containing variables

ReactDOM.render(<App />, document.getElementById('root')); // render our App component to the DOM
