import { useSelector } from "react-redux";
import { getMode } from "./redux/globalSlice";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo } from "react";
import { themeSettings } from "theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "scenes/dashboard/Index";
import Layout from "scenes/layout/Index";
import Products from "scenes/clients/products/Index";
import Customers from "scenes/clients/customers/Index";
import Transactions from "scenes/clients/transactions/Index";
import Geolocation from "scenes/clients/geolocation/Index";
import Overview from "scenes/sales/Overview/Index";
import Monthly from "scenes/sales/monthly/Index";
import Breakdown from "scenes/sales/breakdown/Index";
import Admin from "scenes/management/admin/Index";
import Performance from "scenes/management/performance/Index";

function App() {
  const mode = useSelector(getMode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={<Navigate to={"/dashboard"} replace />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geolocation" element={<Geolocation />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
