import { getSession } from "next-auth/react";
import { useDispatch } from "react-redux";
export default function MyAccount() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>My Account page.</h1>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
