import styles from './Post.module.css'

export const Post = () => {
    return (
        <article className={styles.post}>
            <div className={styles.leftArea}>
                <img src="https://github.com/gustavosalviato.png" />

                <div className={styles.leftAreaInfo}>
                    <h3>Gustavo Henrique</h3>
                    <span>Desenvolvedor Front-End</span>
                </div>


                <time>
                    Há um dia
                </time>
            </div>


            <div className={styles.body}>

                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href=""> 👉 jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto</a> <a href="#nlw"></a> <a href="">#nlw</a> <a href="">#rocketseat</a> </p>
            </div>

            <form className={styles.formContainer} >
                <strong>Deixe seu feeback</strong>

                <textarea placeholder='Escreva um comentário...'/>

                <button>Publicar</button>
            </form>

        </article >
    )
}