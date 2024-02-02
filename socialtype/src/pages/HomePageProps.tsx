interface ChildComponentProps {
  title?: string;
  message?: string;
  id: number;
}

const HomePageProps: React.FC<ChildComponentProps> = ({message, id, title}) => {
  return (
    <>
      <h1> Welcome to buddy sales! </h1>
      <p> THIs is a {id}</p>
      <p> and this is {title}</p>

      <p> {message}</p>
   </>
  );
};

export default HomePageProps;