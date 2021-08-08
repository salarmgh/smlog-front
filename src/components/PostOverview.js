import styles from "./Post.module.scss";


export default function PostOverview(props) {
    return (
      <div>
        {
        props.posts.map((post, index) => {
            return (
                <div>
                  <div className={styles.title}>
                      <a href={`/post/${post.slug}/`}>
                        <h3>{ post.title }</h3>
                      </a>
                    <time className={styles.time}>{ post.created_at }</time>
                  </div>
                  <p className={styles.content}>{ post.content }</p>
                </div>
              )
            }
          )
        }
      </div>
    )
}

