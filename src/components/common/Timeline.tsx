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
      <ol className="relative border-s dark:border-neutral-700 flex flex-col gap-12 dark:border-gray-700">
        {items.map(({ date, title, detailedText, company }, index) => (
          <li className="ms-6" key={title}>
            <div
              className={`transition-colors absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 ${
                index === 0 ? "bg-indigo-400 dark:bg-indigo-600" : "bg-neutral-300 dark:bg-neutral-700"
              }`}
            ></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-600">
              {date}
            </time>
            <h3 className="text-lg font-semibold dark:text-white">
              {title},{" "}
              <span className="text-neutral-500 dark:text-neutral-400 font-normal italic">
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
