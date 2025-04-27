import { FC } from "react";

import LinkIcon from "@mui/icons-material/Link";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  Typography,
} from "@mui/material";

import { IBook } from "src/api";

interface IBookDetailsDialogProps {
  book?: IBook;
  onClose: () => void;
}

const BookDetailsDialog: FC<IBookDetailsDialogProps> = ({ book, onClose }) => {
  const authors = book?.volumeInfo.authors || [];
  const categories = book?.volumeInfo.categories || [];

  return (
    <Dialog open={Boolean(book)} onClose={onClose}>
      <DialogTitle>Book Details</DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box component="img" src={book?.volumeInfo.imageLinks.thumbnail} />
          <Box>
            <Typography>
              <b>Title:</b> {book?.volumeInfo.title}
            </Typography>
            <Typography>
              <b>Author(s):</b> {authors.join(", ")}
            </Typography>
            <Typography>
              <b>Categories</b> {categories.join(", ")}
            </Typography>
            <Typography>
              <b>Publisher:</b> {book?.volumeInfo.publisher}
            </Typography>
            <Typography>
              <b>Published:</b> {book?.volumeInfo.publishedDate}
            </Typography>
            <Typography>
              <b>Page count:</b> {book?.volumeInfo.pageCount}
            </Typography>

            <Typography>
              <Link
                href={book?.volumeInfo.infoLink}
                rel="noopener"
                target="_blank"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <LinkIcon />
                See more details
              </Link>
            </Typography>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookDetailsDialog;
