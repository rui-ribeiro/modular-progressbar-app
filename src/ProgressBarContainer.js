
import React from 'react';
import { connect } from 'react-redux';
import { incrementRequested, decrementRequested } from './modules/actions';
import { FeatureConsumer } from './core/environment';

const mapStateToProps = (state) => {
    console.log(state);
    let props = {
        percent: state.progressBar.percent,
    }
    if (state.features && state.features.progress)
        props = { ...props, progressBar: state.features.progressbar }

    return props;
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => {
            dispatch(incrementRequested());
        },
        decrement: () => {
            dispatch(decrementRequested());
        }
    };
};

class MyProgressBar extends React.Component {
    render() {
        return <FeatureConsumer>
            {(features) => {
                if (!this.props.progressBar) {
                    features.request('progressbar');
                    return <div>Loading component...</div>
                };
                const ProgressBar = features.get(this.props.progressBar);
                return <ProgressBar {...this.props} />
            }}
        </FeatureConsumer>
    }
}
export const ProgressBarContainer = connect(mapStateToProps, mapDispatchToProps)(MyProgressBar);