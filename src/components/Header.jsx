import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.brand}>JUB</div>
        <strong>news feed</strong>
      </div>
    </header>
  );
}
