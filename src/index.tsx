import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: ["Roboto Condensed"].join(","),
    },
    h2: {
      fontFamily: ["Roboto Condensed"].join(","),
    },
    h3: {
      fontFamily: ["Roboto Condensed"].join(","),
    },
    h4: {
      fontFamily: ["Roboto Condensed"].join(","),
    },
    h5: {
      fontFamily: ["Roboto Condensed"].join(","),
    },
    h6: {
      fontFamily: ["Roboto Condensed"].join(","),
    },
    body1: {
      fontFamily: ["Barlow"].join(","),
      fontSize: "1.15rem",
    },
  },
});

export default function App() {
  const Context = createContext({});
  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </ThemeProvider>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
