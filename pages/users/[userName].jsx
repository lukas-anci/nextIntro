import { useRouter } from 'next/router';

const UsersDetails = () => {
  const routerObj = useRouter();
  return (
    <>
      <h1>User Details</h1>
      <div>This is james</div>
    </>
  );
};

export default UsersDetails;
