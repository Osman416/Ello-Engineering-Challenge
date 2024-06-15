import React from 'react';
import { TextField } from '@material-ui/core';

const SearchBar = ({ searchTerm, onSearchChange }) => (
  <TextField
    label="Search Books"
    variant="outlined"
    fullWidth
    value={searchTerm}
    onChange={(e) => onSearchChange(e.target.value)}
  />
);

export default SearchBar;
