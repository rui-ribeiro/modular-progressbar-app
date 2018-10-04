import {Progress} from "semantic-ui-react";
import React from "react";
import ProgressButtons from "./buttons";

export default ( {percent, increment, decrement }) => (
    <div>
        <Progress percent={percent} indicating/>
        <ProgressButtons increment={increment} decrement={decrement} />
    </div>
)

