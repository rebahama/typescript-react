import NavBar from './components/NavBar';
import './styles/style.scss';
import './api/axiosDefault';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  interface IResult {
    id: number;
    title: string;
    // Add other properties as needed
  }

  const [calculate, setCalculate] = useState<{ results: IResult[] }>({
    results: [],
  });

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axios.get(
          `https://buddy-sale.herokuapp.com/posts/`
        );
        setCalculate(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    handleData();
  }, []);

  return (
    <div>
      <NavBar />

      {calculate.results.map((calculate) => {
        return (
          <p>
            {' '}
            {calculate.id} {calculate.title}{' '}
          </p>
        );
      })}
    </div>
  );
}

export default App;
