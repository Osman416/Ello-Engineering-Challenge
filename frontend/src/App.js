import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { gql, useQuery } from '@apollo/client';
import SearchBar from './assets/components/SearchBar';
import BookList from './assets/components/BookList';
import ReadingList from './assets/components/ReadingList';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Mulish, sans-serif',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.custom.turquoiseLight,
  },
  section: {
    marginTop: theme.spacing(3),
  },
  heading: {
    color: theme.palette.custom.steelBlue,
  },
}));

const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const App = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredBooks(data.books);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setFilteredBooks(
        data.books.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, data]);

  const handleAddToReadingList = (book) => {
    setReadingList([...readingList, book]);
  };

  const handleRemoveFromReadingList = (book) => {
    setReadingList(readingList.filter((b) => b.title !== book.title));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.heading}>Book Assignment View</Typography>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} books={data.books} />
      <div className={classes.section}>
        <Typography variant="h6" className={classes.heading}>Search Results</Typography>
        <BookList books={filteredBooks} onAddToReadingList={handleAddToReadingList} />
      </div>
      <div className={classes.section}>
        <Typography variant="h6" className={classes.heading}>Reading List</Typography>
        <ReadingList readingList={readingList} onRemoveFromReadingList={handleRemoveFromReadingList} />
      </div>
    </Container>
  );
};

export default App;
