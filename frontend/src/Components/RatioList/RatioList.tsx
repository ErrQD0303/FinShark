import React from "react";
import { TestDataCompany } from "../Table/testData";

type Props = {
  config: any;
  data: any;
};

const RatioList = ({ config, data }: Props) => {
  const renderedRow = config.map((row: any) => {
    return (
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900">
              {row.label}
            </p>
            <p className="truncate text-sm text-gray-500">
              {row.subTitle && row.subTitle}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900">
            {row.render(data)}
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="mb-4 ml-4 mt-4 h-full rounded-lg bg-white p-4 shadow sm:p-6">
      <ul className="divide-y divide-gray-200">{renderedRow}</ul>
    </div>
  );
};

export default RatioList;
