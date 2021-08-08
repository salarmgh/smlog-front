import styles from "./Header.module.scss";

export default function Header() {
    return (
        <a className={styles.headLink} href="/"><h1 className={styles.headTitle}>White Paper</h1></a>
    );
}
