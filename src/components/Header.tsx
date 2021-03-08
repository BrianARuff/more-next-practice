import * as React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Image src={"/icon.svg"} width={72} height={72} layout={"fixed"}/>
      </nav>
    </header>
  )
}

export default Header;