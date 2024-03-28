import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProjectList from "./Pages/ProjectList"
import ProjectCreate from "./Pages/ProjectCreate"
import ProjectEdit from "./Pages/ProjectEdit"
import ProjectShow from "./Pages/ProjectShow"
 
function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/"  element={<ProjectList/>} />
          <Route path="/create"  element={<ProjectCreate/>} />
          <Route path="/edit/:id"  element={<ProjectEdit/>} />
          <Route path="/show/:id"  element={<ProjectShow/>} />
      </Routes>
    </Router>
  );
}
 
export default App;