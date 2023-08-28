"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Book, Review } from "@/mocks/types";
import Image from "next/image";

export default function MocksPage() {
  const [book, setBook] = React.useState<Book | null>(null);
  const [reviews, setReviews] = React.useState<Review[] | null>(null);

  const handleGetBook = () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    fetch("/book")
      .then((res) => res.json())
      .then(setBook);
  };

  const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    fetch("/reviews")
      .then((res) => res.json())
      .then(setReviews);
  };

  return (
    <Container>
      <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
        <AlertTitle>Hello again 👍</AlertTitle>
        This app uses the Next.js App Router and Mock Service Worker.
      </Alert>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" gutterBottom>
          Mocks Page
        </Typography>
        <div>
          {!book && (
            <Button variant="contained" onClick={handleGetBook}>
              Load book
            </Button>
          )}
          {book && (
            <>
              <Image
                src={book.imageUrl}
                alt={book.title}
                height={399.836}
                width="250"
              />
              <Typography variant="h4" component="h1" gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {book.description}
              </Typography>
              {!reviews && (
                <Button variant="contained" onClick={handleGetReviews}>
                  Load reviews
                </Button>
              )}
            </>
          )}
          {reviews && (
            <>
              <Typography variant="h4" component="h1" gutterBottom>
                Reviews
              </Typography>
              <ul>
                {reviews.map((review) => (
                  <li key={review.id}>
                    <Typography variant="body1" gutterBottom>
                      {review.text}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {review.author}
                    </Typography>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Box>
    </Container>
  );
}
