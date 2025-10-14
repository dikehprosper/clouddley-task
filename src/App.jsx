import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";

function App() {

  return (
        <Router>
          <Routes>
            <Route path="/">
              <Route path="/" element={<LandingPage />} />
            </Route>
          </Routes>
        </Router>
  );
}

export default App;