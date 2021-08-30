import { useRouter } from 'next/router';

const UsersDetails = () => {
  const routerObj = useRouter();
  console.log(routerObj.query.userName);
  return (
    <>
      <h1>User {routerObj.query.userName} Details</h1>
    </>
  );
};

export default UsersDetails;
