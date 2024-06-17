import React from 'react';
import { ListItem, ListItemText, Button, ListItemSecondaryAction } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BookItem = ({ book, onAddToReadingList }) => {
  const theme = useTheme();
  
  return (
    <ListItem>
      <ListItemText primary={book.title} secondary={book.author} />
      <ListItemSecondaryAction>
        <Button 
          variant="contained" 
          style={{ backgroundColor: theme.palette.custom.turquoise, color: theme.palette.custom.white }}
          onClick={() => onAddToReadingList(book)}
        >
          Add to Reading List
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default BookItem;
