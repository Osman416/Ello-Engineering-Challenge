import React from 'react';
import { ListItem, ListItemText, Button, ListItemSecondaryAction } from '@mui/material';

const BookItem = ({ book, onAddToReadingList }) => (
  <ListItem>
    <ListItemText primary={book.title} secondary={book.author} />
    <ListItemSecondaryAction>
      <Button variant="contained" color="primary" onClick={() => onAddToReadingList(book)}>
        Add to Reading List
      </Button>
    </ListItemSecondaryAction>
  </ListItem>
);

export default BookItem;
