// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IResult from '../utilis/Types.tsx';

const HomePage = () => {
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
      <h1> Adding new content over here</h1>
      <p> Check the content below</p>
      <p> Click here for another content</p>
      <p> this is another test you know </p>
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
