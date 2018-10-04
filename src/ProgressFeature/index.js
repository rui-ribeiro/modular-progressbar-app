import React, {Component} from 'react';
import ErrorContainer from '../MessageFeature/'
import ProgressBarContainer from './components'
import {store} from './modules/store'

export default class ProgressBarFeature extends Component {
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
                {this.state.error && <ErrorContainer message={this.state.error}/>}
                <ProgressBarContainer/>
            </div>
        )
    }
}


