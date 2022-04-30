import { React, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import ArtistGroup from "../components/Artists/ArtistGroup";
import {artistMock as artistData} from "../components/Artists/artist-util";
export default function MainScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <ArtistGroup artists={artistData} />
    </>
  );
}

