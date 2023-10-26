/* eslint-disable react/prop-types */
import styles from './Avatar.module.css';

// atraves da desestruturacao dentro das propriedades estou definindo como a propriedade hasBorder como true as default. E no class name eu defino um if para 
// definir o estilo que o componente vai receber dependendo do valor atribuido a essa propriedade de borda (true or false).
export function Avatar({hasBorder = true, src}) {
    return (
        <img 
        // Abaixo eu faco um is demonstrando o valor que o componente recebe de acordo com a propriedade.
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    )
}