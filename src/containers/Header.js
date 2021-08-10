import styles from "./Header.module.scss";

export default function Header(props) {
    return (
        <a className={styles.headLink} href="/"><h1 className={styles.headTitle}>{props.meta.name}</h1></a>
    );
}
