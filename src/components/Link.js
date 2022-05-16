import React from 'react';

const Link = (props => (
    <a id={props.id} href={props.url}> {props.text} </a>
));

export default Link;

