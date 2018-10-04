import {decrementRequested, incrementRequested} from "../modules/actions"
import connect from "react-redux/es/connect/connect";
import {MyProgressBar} from "./myProgressBar";

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

export { ProgressBarContainer }