import {React} from "react";
import { Avatar, Box, Container, Stack } from "@mui/material/";
import { Typography, makeStyles } from "@material-ui/core";

function ArtistIcon({ image, name }) {
  return (
    <>
    <Stack>
      <Avatar src={image} sx={{ width: 150, height: 150 }} />
      <Typography align={"center"} variant={"h6"}>{name}</Typography>
    </Stack>
    </>
  );
}

export default ArtistIcon;
