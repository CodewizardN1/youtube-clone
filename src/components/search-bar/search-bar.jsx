import { Input, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { colors } from "../constants/constant";
import { useNavigate } from "react-router-dom";

const searchBar = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(value);
    if(value){
      navigate(`/search/${value}`)
      setValue('')
    }
  }
  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
        mr: 5,
      }}
    >
      <input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder="search..." className="search-bar" />
      <IconButton type="Submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default searchBar;
