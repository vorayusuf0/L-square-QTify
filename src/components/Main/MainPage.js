import React from "react";
import Hero from "../Hero/Hero";
import Section from "../Section/Section";
import { Box } from "@mui/material";
import SongSection from "../Section/SongSection";

function MainPage() {
  return (
    <Box sx={{background: "var(--color-black)", color: "var(--color-white)"}}>
      <Hero />
      <br/>
      <Section/>
      <SongSection/>
    </Box>
  );
}

export default MainPage;
