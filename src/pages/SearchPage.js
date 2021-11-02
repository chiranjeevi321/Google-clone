import React from "react";
import useGoogleSearch from "../useGoogleSearch";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import BookIcon from "@mui/icons-material/Book";
import { LocalOfferOutlined } from "@mui/icons-material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./SearchPage.css";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  // MOCK API CALL
  //   const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="googleImage"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
          <div className="searchPage_option">
            <div className="searchPage_optionLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage_option">
                <BookIcon />
                <Link to="/all">Books</Link>
              </div>

              <div className="searchPage_option">
                <LocalOfferOutlined />

                <Link to="/all">Shopping</Link>
              </div>

              <div className="searchPage_option">
                <VideoLibraryIcon />
                <Link to="/all">Videos</Link>
              </div>

              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchPage_optionRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
