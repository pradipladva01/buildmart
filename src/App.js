import React, { Suspense } from "react";
import Routes from "./Routes";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <ScrollToTop />
        <Suspense>
          <Routes />
        </Suspense>
      </SnackbarProvider>
    </>
  );
}

export default App;
