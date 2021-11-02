import React, { useState } from "react";
import "./Search.css";

import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue("");

  const [input, setInput] = useState("");

  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    //    console.log("you hit the search button",input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="searchicon" />

        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {/* using this tenary operator we hides the buttons of search component
        when we pass the value through Home page then the Buttons will be hide else the buttons will be displayed*/}
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>

          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>

          <Button className="search_buttonHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
