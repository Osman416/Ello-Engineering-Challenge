import React from 'react';
import BookItem from './BookItem';
import { List } from '@mui/material';

const BookList = ({ books, onAddToReadingList }) => (
  <List>
    {books.map((book) => (
      <BookItem key={book.title} book={book} onAddToReadingList={onAddToReadingList} />
    ))}
  </List>
);

export default BookList;
