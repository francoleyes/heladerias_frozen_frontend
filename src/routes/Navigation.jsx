import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { map } from "lodash";
import routes from "./routes";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {map(routes, (route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
