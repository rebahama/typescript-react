import axios from 'axios';
import IResult from '../utilis/Types.tsx';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [post, setPost] = useState<{ results: IResult[] }>({
    results: [],
  });

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
      {post.results.map((post) => {
        return (
          <p key={post.id}>
            {post.id} {post.title}
          </p>
        );
      })}
    </div>
  );
};

export default HomePage;
