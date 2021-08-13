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
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: props.post.content }} />
        <p className={styles.time}>بروز رسانی:
          <time className={styles.time}>{ props.post.updated_at }</time>
        </p>
      </div>
    )
}


