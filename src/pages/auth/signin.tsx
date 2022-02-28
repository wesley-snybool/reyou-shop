import { useSession, signIn, signOut } from "next-auth/react";

const Loguin = () => {
    return (
      <div>Página de Login
        <button onClick={() => signIn("facebook")}>Logar com facebook</button>
      </div>
    );
};
export default Loguin;
