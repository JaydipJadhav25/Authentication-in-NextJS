import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import {useSession , signIn , signOut} from "next-auth/react"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const session = useSession();
  console.log("session : " , session);

  if(session.data === null){
    return <button onClick={signIn}>Login</button>
  }

  return (
    <>
     <h1>Authentication</h1>
     <button onClick={signOut}>LogOut</button>
    </>
  );
}
