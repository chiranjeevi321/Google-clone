import React from "react";
import AppsIcon from "@mui/icons-material/Apps";

import Avatar from "@mui/material/Avatar";
import "./Home.css";
import Search from "./Search";
import Stack from "@mui/material/Stack";
function Home() {
  return (
    <div className="Home">
      <div className="home_header">
        <div className="home_headerLeft">
          <p></p>
          <p></p>
        </div>
        <div className="home_headerRight">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon />
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Stack>
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="googleImage"
        />
        <div className="home_inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
