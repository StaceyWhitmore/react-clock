import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from 'react-dom'
//import App from './App';
import Clock from './Clock'

const target = document.getElementById('root')
//import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<App />, document.getElementById('root'));
render(
  <Clock onClose={() => unmountComponentAtNode(target)}/>,
  target
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
