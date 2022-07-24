import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'


const App = () => {

  return (<>
    <Router>
      <Routes>
        <Route
          exact
          path="/infiniteScrolling"
          element={<HomePage />} />
        <Route
          exact
          path="/infiniteScrolling/DetailsPage/:id"
          element={<DetailPage />} />
        <Route
          path="*"
          element={<Navigate to="/infiniteScrolling" replace />}
        />
      </Routes>
    </Router>
  </>)
}

export default App