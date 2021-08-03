//libaries
import React from 'react';  // creation logic
import ReactDOM from 'react-dom'; // render logic to show on ui


//app is a component we have imported
import App from './App';

ReactDOM.render(
    <App />,   //ek component
  document.getElementById('root') // ek jagah jha us component ko dikhana hai
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
