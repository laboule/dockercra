import React from "react";
import * as ReactDOM from 'react-dom/client';
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = ReactDOM.createRoot(div);
  root.render(<App />);
});
