import {Button} from "semantic-ui-react";
import React from "react";

export default ({increment, decrement}) => (
    <div>
        <Button positive onClick={() => increment()} icon="plus" />
        <Button negative onClick={() => decrement()} icon="minus" />
    </div>
)

