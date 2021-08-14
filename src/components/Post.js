import styles from "./Post.module.scss";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

export default function Post(props) {
  return (
    <div>
      <div className={styles.title}>
        <a className={styles.postLink} href={`/post/${props.post.slug}/`}>
          <h3>{props.post.title}</h3>
        </a>
        <time className={styles.time}>{props.post.created_at}</time>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: props.post.content }}
      />
      <p className={styles.time}>
        بروز رسانی:
        <time className={styles.time}>{props.post.updated_at}</time>
      </p>
      <div>
        <TwitterShareButton
          title={props.post.title}
          via="@salarmgh"
          url={window.location.href}
        >
          <i class="bi bi-twitter"></i>
        </TwitterShareButton>
        <EmailShareButton
          subject={props.post.title}
          body={props.post.title}
          url={window.location.href}
        >
          <i class="bi bi-envelope-fill"></i>
        </EmailShareButton>
        <FacebookShareButton
          url={window.location.href}
          quote={props.post.title}
        >
          <i class="bi bi-facebook"></i>
        </FacebookShareButton>
        <LinkedinShareButton
          url={window.location.href}
          title={props.post.title}
          summary={props.post.title}
          source={window.location.href}
        >
          <i class="bi bi-linkedin"></i>
        </LinkedinShareButton>
        <TelegramShareButton
          title={props.post.title}
          url={window.location.href}
        >
          <i class="bi bi-telegram"></i>
        </TelegramShareButton>
        <WhatsappShareButton
          url={window.location.href}
          title={props.post.title}
        >
          <i class="bi bi-whatsapp"></i>
        </WhatsappShareButton>
      </div>
    </div>
  );
}
