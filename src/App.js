import React, {Component} from 'react';
import {MyProgressBar} from './myProgressBar'
import {connect} from 'react-redux'
import {incrementRequested, decrementRequested} from './modules/actions'
import {Message} from "semantic-ui-react";
import {store} from './store'

const mapStateToProps = (state) => ({
    percent: state.percent,
    error: state.error
});

const mapDispatchToProps = dispatch => {
    return {
        increment: () => {
            dispatch(incrementRequested())
        },
        decrement: () => {
            dispatch(decrementRequested())
        }
    }
};

const ProgressBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProgressBar);

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
            <div className="ui two column centered grid">
                <div className="column">
                    {this.state.error && <RangeLimitError error={this.state.error} />}
                    <ProgressBarContainer/>
                </div>
            </div>
        )
    }
}


const RangeLimitError = (props) => (
    <Message negative>
        <Message.Header>Something went wrong</Message.Header>
        <p>{props.error}</p>
    </Message>
)