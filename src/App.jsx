import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { GlobalStyles } from './globalStyles'
import { Home } from '../src/pages/home/index'
import { NavBar } from '../src/components/nav'
import { NewHome } from './components/nav'

function App() {



  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/transactions" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </Router>

  );
}

export default App;
