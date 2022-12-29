import React from "react";
import { Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import { getUserId } from "redux/globalSlice";
import { performanceColumns } from "./utils";
import { useGetUserStatQuery } from "redux/api";

const Performance = () => {
  const theme = useTheme();
  const userId = useSelector(getUserId);
  const { data, isLoading } = useGetUserStatQuery(userId);

  return (
    <Box>
      <Header
        title="PERFORMANCE"
        subtitle="Track your Affiliate Sales Performance Here"
      />
      <Box
        mt="20px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.sales) || []}
          columns={performanceColumns}
        />
      </Box>
    </Box>
  );
};

export default Performance;
