import React from "react";
import { Outlet } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  ticker: string;
};

const CompanyDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="bg-blueGray-100 relative w-full overflow-scroll md:ml-64">
      <div className="bg-lightBlue-500 relative pb-32 pt-20">
        <div className="mx-auto w-full px-4 md:px-6">
          <div className="">
            <div className="flex flex-wrap">{children}</div>
            <div className="flex flex-wrap">{<Outlet context={ticker} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
