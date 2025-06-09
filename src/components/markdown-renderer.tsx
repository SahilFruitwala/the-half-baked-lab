"use client";

import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      className="prose prose-slate dark:prose-invert max-w-none"
      components={{
        h1: ({ children }) => (
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 mt-8 first:mt-0">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 mt-6">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            {children}
          </p>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-amber-500 dark:border-amber-400 pl-4 italic my-6 text-slate-600 dark:text-slate-400 bg-amber-50 dark:bg-amber-950/20 py-2 rounded-r-lg">
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="mb-2">{children}</li>,
        code: ({ children, className }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm font-mono text-slate-800 dark:text-slate-200">
                {children}
              </code>
            );
          }
          return (
            <code className="block bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto my-4 border border-slate-200 dark:border-slate-700 text-sm font-mono">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto my-4 border border-slate-200 dark:border-slate-700">
            {children}
          </pre>
        ),
        strong: ({ children }) => (
          <strong className="font-bold text-slate-900 dark:text-white">
            {children}
          </strong>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
