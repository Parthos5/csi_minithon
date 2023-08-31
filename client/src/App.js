import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import landingPg from "./screens/landingPg"

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/ll" element={<landingPg />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
