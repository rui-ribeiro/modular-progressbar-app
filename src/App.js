import React, { Component } from 'react';
import { Environment } from './core/environment';
import { ProgressBarWithError } from './ProgressBarWithError';

export default class App extends Component {
    render() {
        return (
            <Environment>
                <ProgressBarWithError />
            </Environment>
        )
    }
}