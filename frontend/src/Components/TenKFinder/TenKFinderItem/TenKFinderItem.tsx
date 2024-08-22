import React from "react";
import { CompanyTenK } from "../../../company";
import { Link } from "react-router-dom";

type Props = {
  tenK: CompanyTenK;
};

const TenKFinderItem = ({ tenK }: Props) => {
  const fillingData = new Date(tenK.fillingDate).getFullYear();
  return (
    <Link
      to={tenK.finalLink}
      type="button"
      reloadDocument
      className="text-md inline-flex items-center rounded-md bg-lightGreen p-4 text-white"
    >
      10K - {tenK.symbol} - {tenK.fillingDate}
    </Link>
  );
};

export default TenKFinderItem;
