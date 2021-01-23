import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';

//Removed the <React.StrictMode> <App /></React.StrictMode>
//tags to prevent the Warning: findDOMNode is deprecated in StrictMode
// "Some 3rd party libraries will fail the strict mode as they still need to be updated for React 17, which does not currently have a  release date."

ReactDOM.render(

    <App />
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
