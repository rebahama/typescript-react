import NavBar from './components/NavBar';
import './styles/style.scss';
import './api/axiosDefault';
import HomePage from './pages/HomePage';
import Logo from './components/Logo';

function App() {
  return (
    <div>
      <NavBar />
      <Logo />
      <HomePage />
    </div>
  );
}

export default App;
