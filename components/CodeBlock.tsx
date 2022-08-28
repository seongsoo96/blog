import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
interface Props {
  children?: string | string[];
}

const CopyButton = ({ target }: any) => {
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
      className="absolute top-0.5 rounded-lg px-2 right-0.5 bg-white dark:text-gray-800">
      copy
    </button>
  );
};

export default function CodeBlock({ children }: Props) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter
        className="rounded-lg"
        showLineNumbers
        language="typescript"
        style={rainbow}>
        {children || ''}
      </SyntaxHighlighter>
    </div>
  );
}
