import NavBar from './components/NavBar';
import './styles/style.scss';
import './api/axiosDefault';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import ShowAll from './pages/ShowAll';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="typescript-react/" element={<HomePage />} />
      <Route path="typescript-react/home" element="hello" />
      <Route path="typescript-react/showall" element={<ShowAll/>} />
      </Routes>
    </div>
  );
}

export default App;
