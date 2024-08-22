import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";
import { PortfolioGet } from "../../Models/Portfolio";
import {
  portfolioAddAPI,
  portfolioDeleteAPI,
  portfolioGetAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";

type Props = {};

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>(
    [],
  );
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  const getPortfolio = async () => {
    try {
      const res = await portfolioGetAPI();
      if (res?.data) {
        setPortfolioValues(res?.data);
      }
    } catch (e) {
      toast.warning("Could not get portfolio value!");
    }
  };

  const onPortfolioCreate = async (e: any) => {
    e.preventDefault();
    try {
      const res = await portfolioAddAPI(e.target[0].value);
      if (res?.status === 204) {
        toast.success("Stock added to portfolio!");
        getPortfolio();
      }
    } catch (error) {
      toast.warning("Could not create portfolio item!");
    }
  };

  const onPortfolioDelete = async (e: any) => {
    e.preventDefault();
    const res = await portfolioDeleteAPI(e.target[0].value);
    if (res?.status === 200) {
      toast.success("Stock deleted from portfolio!");
      getPortfolio();
    }
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
        portfolioValues={portfolioValues!}
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
