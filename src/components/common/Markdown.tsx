import ReactMarkdown from 'react-markdown';
import React from 'react';

interface PropTypes {
  children: string;
}

const Markdown = ({ children }: PropTypes) => (
  <span className="markdown-body">
    <ReactMarkdown>
      {children}
    </ReactMarkdown>
  </span>
);
export default Markdown;
