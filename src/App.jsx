import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/project" element={<Project />} />
          </Routes>
         </Router>
      </div>
      
    </>
  );
}

export default App;
