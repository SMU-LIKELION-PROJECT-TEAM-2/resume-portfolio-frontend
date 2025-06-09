import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
// import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;