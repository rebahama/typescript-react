// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IResult from '../utilis/Types.tsx';
import HomePageProps from './HomePageProps.tsx';

interface ChildComponentProps {
  message: string;
}

const HomePage: React.FC<ChildComponentProps> = (props) => {
  const datatwo = "testing props";

  const [post, setPost] = useState<{ results: IResult[] }>({
    results: [],
  });
  console.log(React);
  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axios.get(
          `https://buddy-sale.herokuapp.com/posts/`
        );
        setPost(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    handleData();
  }, []);

  return (
    <div>
     
      {post.results.length > 0 && (
        <HomePageProps key={post.results[0].id} {...post.results[0]} message={datatwo} />
      )}
       {props.message}
    </div>
  );
};

export default HomePage;
