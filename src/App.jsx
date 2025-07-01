import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Layout from './Layout/Layout';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <GlobalStyles />
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
