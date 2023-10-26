import { PencilLine } from '@phosphor-icons/react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div 
                className={styles.profile}>
                    <Avatar src='https://xesque.rocketseat.dev/users/avatar/profile-7ff61704-175b-4ab6-8cc1-1df0bc8619ca.jpg' />
                
                
                <strong>Wagner Filgueiras</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={18}/>
                    Edit profile
                </a>
            </footer>



   

        </aside>

    );
}
