import React, { SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import { PortfolioGet } from "../../Models/Portfolio";

interface Props {
  portfolioValues: PortfolioGet[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <section id="portfolio">
      <h2 className="my-3 text-center text-3xl font-semibold md:text-4xl">
        My Portfolio
      </h2>
      <div className="relative mx-auto mb-5 flex max-w-5xl flex-col flex-wrap items-center space-y-10 px-10 md:flex-row md:gap-x-7 md:space-y-0 md:px-6">
        {portfolioValues.length > 0 ? (
          portfolioValues.map((portfolioValue) => {
            return (
              <CardPortfolio
                portfolioValue={portfolioValue}
                onPortfolioDelete={onPortfolioDelete}
              />
            );
          })
        ) : (
          <h3 className="my-3 text-center text-xl font-semibold md:text-xl">
            Your portfolio is empty.
          </h3>
        )}
      </div>
    </section>
  );
};

export default ListPortfolio;
