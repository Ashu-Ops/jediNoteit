import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
import { AuthorizerProvider } from "./context/AuthorizerContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthorizerProvider>
       <SidebarProvider>
      <App />
    </SidebarProvider>
    </AuthorizerProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
