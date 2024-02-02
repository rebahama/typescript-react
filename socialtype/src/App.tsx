import NavBar from './components/NavBar';
import './styles/style.scss';
import './api/axiosDefault';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import ShowAll from './pages/ShowAll';

function App() {
  const data = "hello";
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="typescript-react/" element={<HomePage message={data}/>} />
      <Route path="typescript-react/home" element="hello" />
      <Route path="typescript-react/showall" element={<ShowAll/>} />
      <Route path="*" element="not found" />
      </Routes>
    </div>
  );
}

export default App;
