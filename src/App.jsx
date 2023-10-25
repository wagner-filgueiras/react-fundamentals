import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "../src/components/Post";


import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>
      <Header/>

    <div className={styles.wrapper}>
     <Sidebar />
      <main>
        <Post
          author="Wagner Filgueiras"
          content="lorem ipsun dolor sit amet consectetur adipisicing alit. Assumenda aliquam"
        />
        <Post
          author="Camila Antonelli"
          content="lorem ipsun dolor sit amet consectetur adipisicing alit. Assumenda aliquam"
        />
          

      </main>

    </div>
      
      
    </div>
  )
}

