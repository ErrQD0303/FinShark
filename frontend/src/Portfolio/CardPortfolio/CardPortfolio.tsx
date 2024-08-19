import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { Link } from "react-router-dom";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <div className="flex w-full flex-col space-y-4 rounded-lg p-8 text-center shadow-lg md:w-1/4">
      <Link
        to={`/company/${portfolioValue}`}
        className="pt-6 text-xl font-bold"
      >
        {portfolioValue}
      </Link>
      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

export default CardPortfolio;
