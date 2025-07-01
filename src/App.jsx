import { BrowserRouter, useLocation } from 'react-router-dom';
import Router from './routes/Router';
import Layout from './Layout/Layout';
import GlobalStyles from './styles/GlobalStyles';

function AppWrapper() {
  const location = useLocation();
  const isWritePage = location.pathname === "/community/write"; 

  return (
    <>
      <GlobalStyles />
      {isWritePage ? <Router /> : <Layout><Router /></Layout>}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
