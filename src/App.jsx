import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";


import styles from './App.module.css';

import './global.css';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

// Evite a todo custo que o Backend retorne HTML para o Frontend. O ideal é que o Backend retorne 
    // apenas dados e o Frontend se encarregue de montar o HTML.

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/wagner-filgueiras.png',  
      name: "Wagner Filgueiras",
      role: "Web  Developer"
    },
    content: [
      { type: 'paragraph', content: 'Hey guys! This is my new project for my portfolio. This is a project that I am using React.' },

      { type: 'paragraph', content: 'I started this project on Oct 2023' },

      { type: 'paragraph', content: 'Check the project below:' },

      {type: 'link', content:  'wagnerdesignlab.com' },

      { type: 'paragraph', content: 'Designed by Wagner Filgueiras' },
    ],
      publishedAt: new Date('2023-10-25 15:30:15'),
      },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',  
      name: "Miguel Antonelli",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Hey guys! This is my new project for my portfolio. This is a project that I am using React.' },

      { type: 'paragraph', content: 'I started this project on Oct 2023' },

      { type: 'paragraph', content: 'Check the project below:' },

      {type: 'link', content:  'wagnerdesignlab.com' },

      { type: 'paragraph', content: 'Designed by Wagner Filgueiras' },
    ],
      publishedAt: new Date('2023-10-31 13:00:15'),
      },
  ];
  

// iteração de posts - Criar uma estrutura de repetição.  vou ter um array por exemplo e para cada posição do array eu vou ter uma ação.
export function App() {
  return (
    <div>
      <Header/>

    <div className={styles.wrapper}>
     <Sidebar />
      <main>
        {posts.map(post => {
          return (
              <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              
            />
            )
        })}
      </main>
    </div>   
  </div>
  )
}

