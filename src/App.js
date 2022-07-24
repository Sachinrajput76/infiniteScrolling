import { React, useState } from "react";
import { BrowserRouter as Router, HashRouter, Route, Routes, Navigate } from "react-router-dom";

import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'


const App = () => {

  return (<>
    <HashRouter>
      <Routes>
        <Route
          exact
          path="/infiniteScrolling"
          element={<HomePage />} />
        <Route
          path="/infiniteScrolling/DetailsPage/:id"
          element={<DetailPage />} />
        <Route
          path="*"
          element={<Navigate to="/infiniteScrolling" replace />}
        />
      </Routes>
    </HashRouter>
  </>)
}

export default App