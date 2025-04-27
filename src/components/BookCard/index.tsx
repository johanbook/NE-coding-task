import { FC, useState } from "react";

import { Box, Chip, Typography } from "@mui/material";

import { IBook } from "src/api";

interface IBookCardProps {
  book: IBook;
  onClick: (book: IBook) => void;
}

const BookCard: FC<IBookCardProps> = ({ book, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(book)}
      sx={{
        cursor: "pointer",
        display: "flex",
        p: 2,
        gap: 2,
        borderColor: isHovered ? "black" : undefined,
      }}
    >
      <Box
        component="img"
        src={book.volumeInfo.imageLinks.smallThumbnail}
        sx={{
          borderRadius: 2,
          border: "1px solid gray",
          boxShadow: isHovered ? 16 : undefined,
        }}
      />
      <Box sx={{ width: 200 }}>
        <Typography noWrap sx={{ fontWeight: 600 }} variant="h6">
          {book.volumeInfo.title}
        </Typography>
        <Typography color="textSecondary" noWrap>
          {book.volumeInfo.authors?.join(",")}
        </Typography>

        <Box sx={{ mt: 1 }}>
          {book.volumeInfo.categories?.map((category) => (
            <Chip key={book.id + category} label={category} size="small" />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BookCard;
