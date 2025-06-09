"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mdxComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 mt-8 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 mt-6">
      {children}
    </h3>
  ),
  p: ({ children }: any) => (
    <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
      {children}
    </p>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-amber-500 dark:border-amber-400 pl-4 italic my-6 text-slate-600 dark:text-slate-400 bg-amber-50 dark:bg-amber-950/20 py-2 rounded-r-lg">
      {children}
    </blockquote>
  ),
  ul: ({ children }: any) => (
    <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }: any) => <li className="mb-2">{children}</li>,
  code: ({ children }: any) => (
    <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm font-mono text-slate-800 dark:text-slate-200">
      {children}
    </code>
  ),
  pre: ({ children }: any) => (
    <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto my-4 border border-slate-200 dark:border-slate-700">
      {children}
    </pre>
  ),
  strong: ({ children }: any) => (
    <strong className="font-bold text-slate-900 dark:text-white">
      {children}
    </strong>
  ),
  Card,
  CardContent,
  CardHeader,
  CardTitle,
};

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return <Component components={mdxComponents} />;
}
