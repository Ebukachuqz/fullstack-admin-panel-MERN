import { Search } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import FlexBetween from "components/FlexBetween";
import React from "react";

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setQuery }) => {
  return (
    <GridToolbarContainer>
      <FlexBetween width={"100%"}>
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>

        <TextField
          label="Search..."
          variant="standard"
          size="small"
          sx={{ mt: "0.5rem", width: "15rem" }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setQuery((prev) => ({ ...prev, search: searchInput }))
                  }
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
