import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'


const App = () => {

  return (<>
    <Router basename="/infiniteScrolling">
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage />} />
        <Route
          path="/DetailsPage/:id"
          element={<DetailPage />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  </>)
}

export default App