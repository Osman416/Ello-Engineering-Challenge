import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ReadingList = ({ readingList, onRemoveFromReadingList }) => {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      {readingList.map((book) => (
        <Grid item key={book.title} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              alt={book.title}
              height="250"
              image={`/assets/${book.coverPhotoURL}`}
              title={book.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ color: theme.palette.custom.steelBlue }}>
                {book.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {book.author}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              style={{ backgroundColor: theme.palette.custom.orangeRed, color: theme.palette.custom.white }}
              onClick={() => onRemoveFromReadingList(book)}
            >
              Remove
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReadingList;
