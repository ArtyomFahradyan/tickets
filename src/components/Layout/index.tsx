import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "components/Spinner";
import TopBar from "components/TopBar";

const Tickets = lazy(() => import("pages/Home"));

function Layout() {
  return (
    <TopBar>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Tickets />} />
        </Routes>
      </Suspense>
    </TopBar>
  );
}

export default Layout;
