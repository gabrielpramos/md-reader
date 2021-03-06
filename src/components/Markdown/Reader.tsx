import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import gfm from 'remark-gfm';

import theme from './theme';

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={theme} language={language}>
        {value}
      </SyntaxHighlighter>
    );
  },
};

export default function Reader({ children }) {
  return (
    <ReactMarkdown renderers={renderers} plugins={[gfm]}>
      {children}
    </ReactMarkdown>
  );
}
