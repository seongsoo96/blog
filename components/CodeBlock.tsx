import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CopyButton = ({ target }: { target: string }) => {
  const handleCopy = async () => {
    if (target) {
      try {
        await navigator.clipboard.writeText(target);
      } catch (error) {
        alert(`copy failed ${error}`);
      }
    }
    alert(`copied`);
  };
  return (
    <button
      onClick={handleCopy}
      className="absolute top-0 rounded-lg px-2 right-4 bg-white dark:text-gray-800"
    >
      copy
    </button>
  );
};

export default function CodeBlock({ children }: { children: string }) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter
        className="rounded-lg !p-4 !m-4"
        useInlineStyles
        language="typescript"
        style={rainbow}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
