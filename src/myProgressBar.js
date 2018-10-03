import {Button, Progress} from "semantic-ui-react";
import React from "react";

const MyProgressBar = ( {percent, increment, decrement }) => (
    <div>
        <Progress percent={percent} indicating/>
        <Button positive onClick={() => increment()} icon="plus" />
        <Button negative onClick={() => decrement()} icon="minus" />
    </div>
);

export { MyProgressBar }