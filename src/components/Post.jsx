import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post() {
    return (
    <article className={styles.post}>

    {/* This is the Header area of the Post */}
        <header className={styles.header}>
            <div className={styles.author}>
                {/* Nao preciso definir o valor de hasBorder no Avatar abaixo pois ja defini como default = true nas propriedades deste componente em Avatar.jsx */}
                <Avatar src='https://xesque.rocketseat.dev/users/avatar/profile-7ff61704-175b-4ab6-8cc1-1df0bc8619ca.jpg'/>
                <div className={styles.authorInfo}>
                    <strong>Wagner Filgueiras</strong>
                    <span>Web Developer</span>
                 </div>
            </div>
                
                <time title="Oct, 25th 2023 at 15:30pm"dateTime="2023-25-10 15:30:15">Published 1h ago</time>
        </header>
{/* This is the Content area  of the Post */}
        <div className={styles.content}>
            <p>Hey guys! This is my new project for my portfolio. This is a project that I am using React.</p>

            <p>I started this project on Oct 2023</p>

            <p>Check the project below:</p>

            <p><a href='#'>wagnerdesignlab.com</a></p>

            <p>Designed by Wagner Filgueiras</p>

            <p>
                <a href=''>#newProject</a>{' '} 
                <a href=''>#React</a>{' '}  
                <a href=''>#WebDevelopment</a>
            </p>

        </div>

        <form className={styles.commentForm}>
            <strong>Leave your feedback</strong>

            <textarea
                placeholder='Leave your comment here' 
            />
            <footer>
                <button>Comment</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>


    </article>
    )
}