import React, { useState } from 'react';

const NavBar: React.FC = () => {
  const [hello, setHello] = useState<string | null>('testing');

  const NotLogg: React.FC = () => {
    const content: string = 'this is true';
    setHello(content); // Using the state updater function

    return <div>{content}</div>;
  };

  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>{hello}</li>
      </ul>
      {hello === 'testing' ? hello : 'nothing here'} {/* Fixed conditional rendering */}
      <button onClick={NotLogg}>click here</button>
    </div>
  );
};

export default NavBar;
