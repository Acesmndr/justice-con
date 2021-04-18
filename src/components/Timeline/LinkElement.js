import React from 'react';

const LinkElement = ({ title, text }) => <a key={`key-${title}`} href={`https://twitter.com/${title}`} target="_blank" rel="noopener noreferrer">{text || `@${title}`}</a>;

export default LinkElement;
