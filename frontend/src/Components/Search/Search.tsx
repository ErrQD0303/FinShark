import React, { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
    <section className="relative bg-gray-100">
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        <form
          className="form relative flex w-full flex-col space-y-4 rounded-lg bg-darkBlue p-10 md:flex-row md:space-x-3 md:space-y-0"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 rounded-lg border-2 p-3 placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
      </div>
    </section>
  );
};

export default Search;
