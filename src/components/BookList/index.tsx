import { FC } from "react";

import { CircularProgress, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { IBook, getBooks } from "../..//api";
import BookCard from "../BookCard";

interface IBookListProps {
  onClickBook: (book: IBook) => void;
  search: string;
}

const BookList: FC<IBookListProps> = ({ onClickBook, search }) => {
  const query = useQuery({
    queryKey: ["book-search", search],
    queryFn: () => getBooks(search),
  });

  if (query.isPending) {
    return <CircularProgress />;
  }

  if (query.error) {
    return (
      <Typography>
        Something went wrong when trying to fetch our list of books :(
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {query.data.items.map((book) => (
        <Grid key={book.id}>
          <BookCard book={book} onClick={onClickBook} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
