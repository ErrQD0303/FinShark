import React from "react";
import { Link } from "react-router-dom";

type Props = {
  ticker: string;
};

const CompFinderItem = ({ ticker }: Props) => {
  return (
    <Link
      reloadDocument
      to={`/company/${ticker}/company-profile`}
      type="button"
      className="inline-flex items-center rounded-l-lg p-4"
    >
      {ticker}
    </Link>
  );
};

export default CompFinderItem;
