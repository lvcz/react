import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from  './Components/Main'
import './styles/stylesheet.css'

// const tasks = ['cont 1', 'cont2', 'taks3'];
//
// const element = React.createElement('ol', null,
//     tasks.map(
//         (task, index)=> React.createElement('li',{ key: index}, task)
//     )
// );






ReactDOM.render(<Main/>, document.getElementById('root'));
