import Head from "next/head";
import Wrapper from "../components/Wrapper";
import styles from "../styles/index.module.scss";
import {LegacyRef, MutableRefObject, useRef} from "react";
import * as React from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Head>
        <title>Next Todo List Application</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <h1>Todo List Application - NextJS</h1>
        <section className={styles.addTodoSection}>
          <input
            ref={inputRef}
            className={styles.inputField}
            type="text"
            id="todo"
            required
          />
          <label className={styles.todoLabel} htmlFor="todo">
            Input Todo Item
          </label>
        </section>
      </Wrapper>
    </>
  );
}
