import { format, formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useState } from 'react';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

export function Post(props) {
    const [comments, setComments] = useState([
        'This is my first comment',    
    ]);
    // Set the initial state of the new comment text an empty string.
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(props.publishedAt, "MMM, dd yyyy 'at' h:mm a");
  /*  const publishedDateFormatted = new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }).format(props.publishedAt);
    */
    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: enUS,
        addSuffix: true,
    })


    // function to create a new comment - add the new comment to the comments array
    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }
    // get the value of the new comment text
    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete){
        // imutabilidade - nao posso alterar o valor de um estado diretamente. As variaveis nao sofrem mutacao
        // Nunca alteramos uma variavel na memoria de nossa aplicacao
        // nos criamos um novo valor um novo espaco na memoria
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete});

       setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Please, this field is required');
        console.log('invalid');
    }

    return (
    <article className={styles.post}>

    {/* This is the Header area of the Post */}
        <header className={styles.header}>
            <div className={styles.author}>
                {/* Nao preciso definir o valor de hasBorder no Avatar abaixo pois ja defini como default = true nas propriedades deste componente em Avatar.jsx */}
                <Avatar src={props.author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{props.author.name}</strong>
                    <span>{props.author.role}</span>
                 </div>
            </div>
                
                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
        </header>
{/* This is the Content area  of the Post */}
{/* A key deve ir no primeiro elemento de retorno dentro de um map no caso abaixo dentro do <p> */}
        <div className={styles.content}>
           {props.content.map(line => {
            if (line.type === 'paragraph'){
                return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
                return <p key={line.content}><a href="#">{line.content}</a></p>;
            }
           })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Leave your feedback</strong>

            <textarea
                name='input'
                placeholder='Leave your comment here'
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required={true}
            />
            <footer>
                <button>Comment</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment => {
                return (<Comment 
                            key={comment} 
                            content={comment} 
                            // aqui estou enviando uma propriedade para que o componente comment se comunique com a funcao que criei aqui no post
                            // pois aqui que sei qual o estado ou conteudo qq que seja que quero deletar
                            onDeleteComment={deleteComment} 
                        />)
            })}
        </div>


    </article>
    )
}