import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
