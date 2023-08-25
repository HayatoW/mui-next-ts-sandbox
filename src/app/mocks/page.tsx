"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Book, Review } from "@/mocks/types";

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
          <button onClick={handleGetBook}>Load book</button>
          {book && (
            <>
              <img src={book.imageUrl} alt={book.title} width="250" />
              <h1>{book.title}</h1>
              <p>{book.description}</p>
              <button onClick={handleGetReviews}>Load reviews</button>
            </>
          )}
          {reviews && (
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <p>{review.text}</p>
                  <p>{review.author}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Box>
    </Container>
  );
}
