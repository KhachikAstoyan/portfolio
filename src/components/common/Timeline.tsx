import React from "react";

interface TimelineProps {
  items: {
    title: string;
    company: string;
    date: string;
    detailedText: string;
  }[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <>
      <ol className="relative border-s border-neutral-700 flex flex-col gap-12 dark:border-gray-700">
        {items.map(({ date, title, detailedText, company }) => (
          <li className="ms-6 group" key={title}>
            <div className="transition-colors absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-neutral-700 group-hover:bg-indigo-600"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {date}
            </time>
            <h3 className="text-lg font-semibold text-white">
              {title},{" "}
              <span className="text-neutral-400 font-normal italic">
                {company}
              </span>
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {detailedText}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
};
