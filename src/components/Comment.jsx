import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src='https://xesque.rocketseat.dev/users/avatar/profile-7ff61704-175b-4ab6-8cc1-1df0bc8619ca.jpg' alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="Oct, 25th 2023 at 15:30pm"dateTime="2023-25-10 15:30:15">Reacted 1h ago</time>
                        </div>

                        <button title='Delete Comment'>
                            <Trash size={22} />
                        </button>


                    </header>

                    <p>Awesome Wagner! Congratulations!</p>
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