import React from 'react';

import './style/app.scss';

import Home from './containers/Home/index.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React Application</h1>
                <p>Author: Viktor Zagoruyko</p>
                <ul>
                    <li>
                        <Home />
                    </li>
                </ul>
            </div>
        );
    }
}