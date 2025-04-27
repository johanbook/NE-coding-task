import { FC } from "react";

import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputAdornment,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";

interface IHeaderProps {
  onSearch: (search: string) => void;
  search: string;
  sx?: SxProps;
}

const Header: FC<IHeaderProps> = ({ onSearch, search, sx }) => {
  return (
    <Box
      component="header"
      sx={{ display: "flex", alignItems: "flex-end", gap: 4, ...sx }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3">NE-coding-task</Typography>

        <Typography color="textSecondary" gutterBottom>
          This explores a list of books related to Tolkien. Click any book to
          get more details.
        </Typography>
      </Box>

      <TextField
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search books by title or author"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        size="small"
        sx={{ minWidth: 300 }}
        value={search}
      />
    </Box>
  );
};

export default Header;
