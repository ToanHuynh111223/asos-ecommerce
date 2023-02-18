import clsx from "clsx";
import styles from "./Search.module.scss";
//import icon mui
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import { useState } from "react";
const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={clsx(styles.search)}>
      <input
        placeholder="Search for items and brands"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={clsx(styles.searchIcon)}>
        <SearchIcon />
      </button>
      <button
        className={clsx(styles.clearIcon)}
        style={{ display: inputValue ? "block" : "none" }}
        onClick={() => setInputValue("")}
      >
        <ClearIcon sx={{ fontSize: 20 }} />
      </button>
    </div>
  );
};

export default Search;
