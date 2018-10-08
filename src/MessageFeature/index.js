import {Message} from "semantic-ui-react";
import React from "react";

const ErrorContainer = (props) => (
    <Message negative>
        <Message.Header>Something went wrong</Message.Header>
        <p>{props.message}</p>
    </Message>
);

export default ErrorContainer