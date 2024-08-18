import React, {
  ChangeEvent,
  useState,
  MouseEvent,
  SyntheticEvent,
  useEffect,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import ListPortfolio from "./Portfolio/ListPortfolio/ListPortfolio";

function App() {
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
      (value) => value !== e.target[0].value
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

  /*  // If you don't find any Event, use SyntheticEvent instead
  const onClick = (e: SyntheticEvent) => {
    console.log(e);
  };
 */

  return (
    <div className="App">
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      {searchResult.length > 0 && (
        <CardList
          searchResults={searchResult}
          onPortfolioCreate={onPortfolioCreate}
        />
      )}
      {serverError && <h1>Unable to connect to API</h1>}
    </div>
  );
}

export default App;
