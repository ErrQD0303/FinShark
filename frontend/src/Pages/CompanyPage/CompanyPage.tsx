import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Title from "../../Components/Title/Title";
import Spinner from "../../Components/Spinner/Spinner";
import CompFinder from "../../Components/CompFinder/CompFinder";
import TenKFinder from "../../Components/TenKFinder/TenKFinder";
import { formatLargeNonMonetaryNumber } from "../../Helpers/NumberFormatting";

type Props = {};

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, [ticker]);
  return (
    <>
      {company ? (
        <div className="ct-docs-disable-sidebar-content relative flex w-full overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Title title="Company Name" subTitle={company.companyName}></Title>
            <Title
              title="Price"
              subTitle={"$" + company.price.toString()}
            ></Title>
            <Title title="DCF" subTitle={"$" + company.dcf.toString()}></Title>
            <Title title="Sector" subTitle={company.sector}></Title>
            <Title
              title="Market Cap"
              subTitle={formatLargeNonMonetaryNumber(company.mktCap.toString())}
            ></Title>
            <CompFinder ticker={company.symbol} />
            <TenKFinder ticker={company.symbol} />
            <p className="text-medium m-4 mt-1 rounded bg-white p-3 text-gray-900 shadow">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;
