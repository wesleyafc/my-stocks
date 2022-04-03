import { GlobalStyles } from './globalStyles'

import { NavBar } from '../src/components/navbar/index'
import { Home } from '../src/pages/home/index'
import { SingleTransaction } from '../src/pages/singleTransaction/index'

function App() {



  return (
    <>
      <NavBar />
      <Home />


      <GlobalStyles />
    </>
  );
}

export default App;
