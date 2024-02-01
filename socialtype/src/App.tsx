import NavBar from './components/NavBar';
import './styles/style.scss';
import './api/axiosDefault';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="typescript-react/" element={<HomePage />} />
      <Route path="typescript-react/home" element="hello" />
      </Routes>
    </div>
  );
}

export default App;
