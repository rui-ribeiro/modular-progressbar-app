import React from 'react'
import { RangeLimitError } from './RangeLimitError';
import { ProgressBarContainer } from "./ProgressBarContainer";
import { connect } from 'react-redux';

const _ProgressBarWithError = (props) => {
    return <div className="ui two column centered grid">
        <div className="column">
            {props.error && <RangeLimitError error={props.error} />}
            <ProgressBarContainer />
        </div>
    </div>;
};

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}

export const ProgressBarWithError = connect(mapStateToProps, undefined)(_ProgressBarWithError)