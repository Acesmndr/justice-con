import React from 'react';

const LinkElement = ({ title }) => <a key={`key-${title}`} href={`https://twitter.com/${title}`} target="_blank" rel="noopener noreferrer">@{title}</a>;

export default LinkElement;
