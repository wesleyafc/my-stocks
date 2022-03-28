import { useEffect, useState } from 'react'
import { Container } from './components/TransactionsTable/styles'

import { Transactions } from './components/transactions/index'
import { GlobalStyles } from './globalStyles'

function App() {



  return (
    <>
      <Transactions />
      <GlobalStyles />

    </>

  );
}

export default App;
