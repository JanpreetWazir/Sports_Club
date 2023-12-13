import React from "react";
import { Routes, Route } from "react-router-dom";

import EventDetails from "./Components/EventDetails";
import Main from "./Main";
import MyForm from "./Components/MyForm"; // Import the MyForm component

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/EventDetails/:id" element={<EventDetails />} />
        <Route path="/form" element={<MyForm />} /> {/* Add a route for the form */}
      </Routes>
    </div>
  );
}

export default App;
