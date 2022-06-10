import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dataParser from '../../utils/dataparser'

export default function BasicSelect(props: any) {
  const handleChange = (event: SelectChangeEvent) => {
    props.setBand(event.target.value as string);
    props.setData(dataParser(event.target.value as string))
  };



  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Band</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.band}
          label="Band"
          onChange={handleChange}
        >
          <MenuItem value={"nashvillians"}>The Nashvillians</MenuItem>
          <MenuItem value={"chainsmokers"}>The Chainsmokers</MenuItem>
          <MenuItem value={"bellvalaire"}>Ariel Bellvalaire</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}