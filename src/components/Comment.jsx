import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';


export function Comment(props) {
    function handleDeleteComment() {
        props.onDeleteComment(props.content);
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src='https://github.com/diego3g.png' 
                 alt=''
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="Oct, 25th 2023 at 15:30pm"dateTime="2023-25-10 15:30:15">Reacted 1h ago</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Delete Comment'>
                            <Trash size={22} />
                        </button>


                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Applause <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}