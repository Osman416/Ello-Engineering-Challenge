import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const SearchBar = ({ searchTerm, onSearchChange, books }) => (
  <FormControl fullWidth variant="outlined">
    <InputLabel id="book-select-label">Select Book</InputLabel>
    <Select
      labelId="book-select-label"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      label="Select Book"
    >
      {books.map((book) => (
        <MenuItem key={book.title} value={book.title}>
          {book.title}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SearchBar;
