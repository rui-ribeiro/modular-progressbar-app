import React, {Component} from 'react';
import {RangeLimitError} from './RangeLimitError'
import {ProgressBarContainer} from './ProgressBarContainer'
import {store} from '../modules/store'


export default class App extends Component {
    state = {
        error: ''
    };

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                error: store.getState().error
            });
        })
    }

    render() {
        return (
            <div>
                {this.state.error && <RangeLimitError error={this.state.error}/>}
                <ProgressBarContainer/>
            </div>
        )
    }
}

