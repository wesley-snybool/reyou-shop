import { useSession, signIn, signOut } from "next-auth/react";

const Loguin = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Logado como {session?.user?.email} <br />
        <button className="button-start bg-card_read_more font-bold text-black" onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Você Não está logado <br />
      <button className="button-start bg-card_read_more font-bold text-black" onClick={() => signIn('auth0')}>Fazer Login</button>
    </>
  );
};
export default Loguin;
