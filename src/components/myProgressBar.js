import {Button, Progress} from "semantic-ui-react";
import React from "react";

const ProgressButtons = ({increment, decrement}) => (
    <div>
        <Button positive onClick={() => increment()} icon="plus" />
        <Button negative onClick={() => decrement()} icon="minus" />
    </div>
)

const MyProgressBar = ( {percent, increment, decrement }) => (
    <div>
        <Progress percent={percent} indicating/>
        <ProgressButtons increment={increment} decrement={decrement} />
    </div>
)

export { MyProgressBar }