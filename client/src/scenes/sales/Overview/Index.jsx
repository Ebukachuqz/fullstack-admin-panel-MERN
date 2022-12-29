import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";
import React, { useState } from "react";

const UNITS = "units";
const SALES = "sales";

const Overview = () => {
  const [view, setView] = useState(UNITS);
  return (
    <Box>
      <Header
        title={"Overview"}
        subtitle="Overview of general revenue and profits"
      />
      <Box height={"75vh"}>
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            size="small"
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value={UNITS}>Units</MenuItem>
            <MenuItem value={SALES}>Sales</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
