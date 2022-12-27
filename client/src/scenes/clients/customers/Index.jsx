import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import React from "react";
import { useGetCustomersQuery } from "redux/api";
import { customersColumn } from "./utils";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  return (
    <Box>
      <Header title={"customers"} subtitle="List of Our Customers" />
      <Box p="30px 0">
        <DataGrid
          autoHeight
          rows={data || []}
          columns={customersColumn}
          loading={isLoading}
          rowsPerPageOptions={[20, 50, 100]}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default Customers;
