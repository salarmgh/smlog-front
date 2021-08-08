import styles from "./Post.module.scss";


export default function Post(props) {
    return (
      <div>
        <div className={styles.title}>
          <a className={styles.postLink} href={`/post/${props.post.slug}/`}>
            <h3>{ props.post.title }</h3>
          </a>
          <time className={styles.time}>{ props.post.created_at }</time>
        </div>
        <p className={styles.content}>{ props.post.content }</p>
        <p className={styles.time}>Updated at:
          <time className={styles.time}>{ props.post.updated_at }</time>
        </p>
      </div>
    )
}


