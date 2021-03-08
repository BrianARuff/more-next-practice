let GET_TODOS: string;
let POST_TODO: string;

if (process.env.NODE_ENV === "production") {
  GET_TODOS = "https://more-next-practice.herokuapp.com/api/todos/get";
  POST_TODO = "https://more-next-practice.herokuapp.com/api/todos/post";
} else {
  GET_TODOS = "http://localhost:3000/api/todos/get";
  POST_TODO = "http://localhost:3000/api/todos/post";
}

export {
  GET_TODOS,
  POST_TODO
}