import clsx from "clsx";
import styles from "./Search.module.scss";
//import icon mui
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { Link } from "react-router-dom";
const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={clsx(styles.search)}>
      <input
        placeholder="Search for items and brands"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Link to={`/search?q=${searchValue}`}>
        <button
          className={clsx(styles.searchIcon)}
          onClick={() => setSearchValue("")}
        >
          <SearchIcon />
        </button>
      </Link>
      <button
        className={clsx(styles.clearIcon)}
        style={{ display: searchValue ? "block" : "none" }}
        onClick={() => setSearchValue("")}
      >
        <ClearIcon sx={{ fontSize: 20 }} />
      </button>
    </div>
  );
};

export default Search;
