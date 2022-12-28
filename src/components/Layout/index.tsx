import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "components/Menu";
import Spinner from "components/Spinner";
import TopBar from "components/TopBar";

const Tickets = lazy(() => import("pages/Tickets"));

function Layout() {
  return (
    <TopBar menu={<Menu />}>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Tickets />} />
        </Routes>
      </Suspense>
    </TopBar>
  );
}

export default Layout;
