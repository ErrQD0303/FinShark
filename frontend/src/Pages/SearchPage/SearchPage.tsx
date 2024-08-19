import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";

type Props = {};

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();

    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;

    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter(
      (value) => value !== e.target[0].value,
    );
    setPortfolioValues(removed);
  };

  // Real MouseEvent
  const onSearchSubmit = async (e: SyntheticEvent) => {
    // Prevent default reloading page of submit event
    e.preventDefault();
    setServerError("");
    setSearchResult([]);
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  return (
    <>
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
      {serverError && <h1>Unable to connect to API</h1>}
    </>
  );
};

export default SearchPage;
