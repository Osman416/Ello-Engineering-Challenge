import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SearchBar = ({ searchTerm, onSearchChange, books }) => {
  const theme = useTheme();

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="book-select-label">Select Book</InputLabel>
      <Select
        labelId="book-select-label"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        label="Select Books"
        style={{ color: theme.palette.custom.steelBlue }}
      >
        {books.map((book) => (
          <MenuItem key={book.title} value={book.title} style={{ color: theme.palette.custom.teal }}>
            {book.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SearchBar;
