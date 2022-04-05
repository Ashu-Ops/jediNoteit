import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
import { AuthorizerProvider } from "./context/AuthorizerContext";
import { NotesProvider } from "./context/NotesContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthorizerProvider>
      <NotesProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </NotesProvider>
    </AuthorizerProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
