import Head from "next/head";
import Wrapper from "../components/Wrapper";
import styles from "../styles/index.module.scss";
import * as React from "react";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import {useState} from "react";

export const Home = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Head>
        <title>Next Todo List Application</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
          <Header/>
          <AddTodo todos={todos} setTodos={setTodos}/>
      </Wrapper>
    </>
  );
}

export default Home;
