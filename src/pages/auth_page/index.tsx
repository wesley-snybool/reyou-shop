import { useSession, signIn, signOut } from "next-auth/react";

const Loguin = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Logado como {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Você Não está logado <br />
      <button onClick={() => signIn('auth0')}>Fazer Login</button>
    </>
  );
};
export default Loguin;
