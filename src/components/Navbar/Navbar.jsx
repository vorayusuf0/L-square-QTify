import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import { Button } from "@mui/material";
import Logo from "../Logo/Logo";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo/>
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button className={styles.givefeedBtn}>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
