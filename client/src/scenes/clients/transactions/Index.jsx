import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import React, { useState } from "react";
import { useGetTransactionsQuery } from "redux/api";
import DataGridCustomToolbar from "./components/DataGridCustomToolbar";
import { transactionsColumn } from "./utils";

const Transactions = () => {
  const [query, setQuery] = useState({
    page: 0,
    pageSize: 20,
    sort: {},
    search: "",
  });
  const { data, isLoading } = useGetTransactionsQuery({
    page: query.page,
    pageSize: query.pageSize,
    sort: JSON.stringify(query.sort),
    search: query.search,
  });
  const [searchInput, setSearchInput] = useState("");
  return (
    <Box>
      <Header title={"Transactions"} subtitle="Table of Our Transactions" />
      <Box>
        <DataGrid
          autoHeight
          loading={isLoading || !data}
          rows={(data && data.transactions) || []}
          getRowId={(row) => row._id}
          columns={transactionsColumn}
          rowCount={data?.total || 0}
          pagination
          page={query.page}
          pageSize={query.pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) =>
            setQuery((prev) => ({ ...prev, page: newPage }))
          }
          onPageSizeChange={(newPageSize) =>
            setQuery((prev) => ({ ...prev, pageSize: newPageSize }))
          }
          onSortModelChange={(newSortModel) =>
            setQuery((prev) => ({ ...prev, sort: { ...newSortModel } }))
          }
          components={{
            Toolbar: DataGridCustomToolbar,
          }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setQuery },
          }}
        />
      </Box>
    </Box>
  );
};

export default Transactions;
