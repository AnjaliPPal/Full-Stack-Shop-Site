import React from "react";
import "./Header.css";
import amazonLogo from "../assets/logo.svg";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import DropDown from "./DropDown";
import { useHistory, useLocation } from "react-router-dom";

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Tamil",
  "Hindi",
  "Chinese",
  "Russian",
  "Japanese",
  "Arabic",
];

function Header() {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="header">
      <div className="header__nav">
        {location.pathname !== "/" && (
          <button onClick={() => history.goBack()} className="header__back">
            Back
          </button>
        )}
        <div className="header__search">
          <SearchRoundedIcon className="header__searchIcon" />
          <input type="text" placeholder="Search..." />
        </div>
        <DropDown
          className="header__langDropDown"
          items={languages}
          defaultItem={languages[0]}
        />
        {/* <img src={amazonLogo} className="header__logo" /> */}
      </div>
    </div>
  );
}
export default Header;
