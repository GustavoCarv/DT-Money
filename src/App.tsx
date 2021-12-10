import {GlobalStyle} from './styles/global';
import {Header} from './components/header/index';
import {Dashboard} from './components/dashboard/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <GlobalStyle />
    </div>
  );
}

export default App;
