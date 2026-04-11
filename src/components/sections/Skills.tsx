import { SectionWrapper } from "../SectionWrapper";
import { Database, Layout, PenTool } from "lucide-react";
import React from 'react';

export function Skills({ dict }: { dict: any }) {
  const icons = [
    <Layout key="layout" className="text-blue-500" size={24} />,
    <Database key="db" className="text-blue-500" size={24} />,
    <PenTool key="tool" className="text-blue-500" size={24} />
  ];

  return (
    <SectionWrapper id="skills" title={dict.title}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {dict.categories.map((category: any, idx: number) => (
          <div 
            key={idx} 
            className="group flex flex-col p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 text-blue-600 dark:text-blue-400">
              {icons[idx]}
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              {category.title}
            </h3>
            <ul className="flex flex-col gap-3 mt-auto">
              {category.items.map((skill: string, sIdx: number) => (
                <li key={sIdx} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
