import { React } from "react";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import ArtistIcon from "./ArtistIcon";

function ArtistGroup({ artists }) {
  return (
    <Grid
      columns={8}
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={3}
      sx={{ p: 5, px: 3 }}
    >
      {artists.map((artist) => {
        return (
          <Grid item sx={{ p: 6 }}>
            <ArtistIcon image={artist.image} name={artist.fullName} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ArtistGroup;
