import {decrementRequested, incrementRequested} from "../modules/actions"
import {connect} from "react-redux/es/";
import Bar from "./bar";

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
)(Bar);

export default ProgressBarContainer