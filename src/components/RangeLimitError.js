import {Message} from "semantic-ui-react";
import React from "react";

const RangeLimitError = (props) => (
    <Message negative>
        <Message.Header>Something went wrong</Message.Header>
        <p>{props.error}</p>
    </Message>
);

export { RangeLimitError }