// import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/header";
import { Home } from './components/home';
import { Transactions } from './components/transactions';
import { About } from './components/about';
import { NewTransactionModal } from '../src/components/newTransaction'
import { CreateNewTransaction } from '../src/components/createNewTransaction'
import { SingleTransaction } from '../src/components/singleTransaction'
import { Profile } from '../src/components/profile';
import { Login } from '../src/components/login';
import { Register } from '../src/components/register';
// import { Context } from '../src/context/Context';



import { GlobalStyles } from "./globalStyles";

function App() {
  // const { user } = useContext(Context)
  return (
    <>

      <header>
        <Header />
      </header>

      <main>
        <Routes>


          <Route path="/" element={<Home />} exact />
          {/* home page */}

          <Route path="/about" element={<About />} exact />
          {/* about */}

          {/* this is for test only */}
          <Route path="/transaction" element={<NewTransactionModal />} exact />
          {/* this is for test only */}

          <Route path="/transactions" element={<Transactions />} exact />
          {/* show all transactions */}

          <Route path="/single-transaction-detail/:transaction_id" element={<SingleTransaction />} exact />
          {/* show single transaction details */}

          {/* <Route path="/add" element={<CreateNewTransaction />} exact /> */}
          {/* create new transaction */}

          <Route path="/profile" element={<Profile />} exact />

          <Route path="/login" element={<Login />} exact />
          {/* login page */}

          <Route path="/sign-up" element={<Register />} exact />
          {/* register page */}

        </Routes>
      </main>
      <GlobalStyles />
    </>

  );
}

export default App;
