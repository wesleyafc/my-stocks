import { GlobalStyles } from './globalStyles'

import { NavBar } from '../src/components/navbar/index'
import { Home } from '../src/pages/home/index'

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
