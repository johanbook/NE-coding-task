import { FC, useState } from "react";

import { Box } from "@mui/material";

import { IBook } from "./api";
import BookDetailsDialog from "./components/BookDetailsDialog";
import BookList from "./components/BookList";
import Header from "./components/Header";
import useDebounce from "./hooks/useDebounce";

const App: FC = () => {
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState<IBook | undefined>();

  // Debounce search value to avoid sending one API
  // request per key stroke
  const debouncedSearch = useDebounce(search);

  return (
    <Box sx={{ p: 4 }}>
      <Header onSearch={setSearch} search={search} sx={{ mb: 2 }} />
      <BookList search={debouncedSearch} onClickBook={setSelectedBook} />
      <BookDetailsDialog
        book={selectedBook}
        onClose={() => setSelectedBook(undefined)}
      />
    </Box>
  );
};

export default App;
