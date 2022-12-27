import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import React from "react";
import { useGetAllProductswithStatQuery } from "redux/api";
import Product from "./components/Product";

const Products = () => {
  const { data, isLoading } = useGetAllProductswithStatQuery();
  const isMobile = useMediaQuery("(max-width:700px)");
  return (
    <Box>
      <Header title={"products"} subtitle="See your list of products." />
      {data || !isLoading ? (
        <Box
          mt={"20px"}
          display="grid"
          gridTemplateColumns={"repeat(4, minmax(0, 1fr))"}
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": {
              gridColumn: isMobile ? "span 4" : undefined,
            },
          }}
        >
          {data.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Box>
      ) : (
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          width="100%"
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Products;
