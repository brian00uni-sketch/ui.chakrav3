import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/common/NotFound";
import About from "../pages/intro/About";
import Home from "../pages/main/Home";

export default function AppRoutes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>

        <Route>
          {/* <Route index element={<Navigate to="/" replace />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
