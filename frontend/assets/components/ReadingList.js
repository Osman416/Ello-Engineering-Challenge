import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ReadingList = ({ readingList, onRemoveFromReadingList }) => (
  <Grid container spacing={3}>
    {readingList.map((book) => (
      <Grid item key={book.title} xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            component="img"
            alt={book.title}
            height="140"
            image={`/assets/${book.coverPhotoURL}`}
            title={book.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {book.author}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onRemoveFromReadingList(book)}
          >
            Remove
          </Button>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default ReadingList;
