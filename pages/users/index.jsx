import Link from 'next/link';

const UsersPage = () => {
  return (
    <>
      <h1>Or Users</h1>
      <ul>
        <li>
          <Link href="/users/bob">User Bob</Link>
        </li>
        <li>
          <Link href="/users/james">User James</Link>
        </li>
      </ul>
    </>
  );
};

export default UsersPage;
