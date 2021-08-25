import { signIn, signOut, useSession, getSession } from "next-auth/client";
const SignButton = (props) => {
  const [session, loading] = useSession();
  return (
    <>
      {!session && (
        <>
          <h3>Not Signed In</h3>
          <button
            onClick={async () => {
              await signIn("google");
            }}
          >
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          <h3>{session.id}</h3>

          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
};

export default SignButton;
