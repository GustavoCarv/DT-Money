import {GlobalStyle} from './styles/global';
import {Header} from './components/header/index';
import {Dashboard} from './components/dashboard/index';
import {TransactionTable} from './components/transactionTable/index'

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <TransactionTable />
      <GlobalStyle />
    </div>
  );
}

export default App;
