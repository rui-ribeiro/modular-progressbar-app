import React from "react";
import { Message } from "semantic-ui-react";

export const RangeLimitError = (props) => (<Message negative>
    <Message.Header>Something went wrong</Message.Header>
    <p>{props.error}</p>
</Message>);