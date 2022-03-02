import { useSession, signIn, signOut } from "next-auth/react";

const Loguin = () => {
  const { data: session } = useSession();
  console.log(session)
    return (
      <div className="bg-facebook items-center gap-10 text-white flex flex-col p-10">
        <button className="button-start flex justify-center items-center bg-card_read_more font-bold text-black" onClick={() => signIn("facebook")}>Logar com facebook</button>
        <button className="button-start flex justify-center items-center bg-card_read_more font-bold text-black" onClick={() => signOut()}>Deslogar do Facebook</button>
      </div>
    );
};
export default Loguin;
