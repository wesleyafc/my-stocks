import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Transactions } from './components/transactions/index'
import { GlobalStyles } from './globalStyles'

function App() {



  return (

    <BrowserRouter>
      <Routes>
        <Route path="/transactions" element={<Transactions />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>

  );
}

export default App;
