import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation, Auth } from "aws-amplify";
import { createTodo } from "../../graphql/mutations";
import { listTodos } from "../../graphql/queries";
import { useNavigate } from "react-router-dom";

import updatedAwsConfig from "../../aws-exports-custom";
Amplify.configure(updatedAwsConfig);

const initialState = { task: "" };

const ListingComponent = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      //   console.log(user);
      if (user) {
        await fetchTodos();
      } else navigate("/login");
    } catch (error) {
      navigate("/login");
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addTodo() {
    try {
      if (!formState.task) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }
  const  onLogoutClick = async () => {
    localStorage.clear();
    // await Auth.signOut();
    let {aws_cognito_region : region, aws_user_pools_web_client_id: client_id, oauth: {providerDomain: domain, redirectSignOut}}  = updatedAwsConfig;
    let uri = `https://${domain}.auth.${region}.amazoncognito.com/logout?client_id=${client_id}&logout_uri=${redirectSignOut}`;
    // let uri = `https://okta-test-int-dev.auth.us-east-1.amazoncognito.com/logout?client_id=s4jtqkr9ek227aagl5qibpub9&logout_uri=http%3A%2F%2Flocalhost%3A3001%2Flogin`
    window.location.assign(uri);

  };
  return (
    <div className="main-task-div" style={styles.wrapper}>
      <button style={styles.logoutButton} onClick={onLogoutClick}>
        Logout
      </button>
      <div style={styles.container}>
        <h2>Add Tasks</h2>
        <input
          onChange={(event) => setInput("task", event.target.value)}
          style={styles.input}
          value={formState.task}
          placeholder="Name"
        />
        <button style={styles.button} onClick={addTodo}>
          Create Task
        </button>
        <h2>Tasks Listing</h2>
        {todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>
              {index + 1} . {todo.task}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "relative",
  },
  logoutButton: {
    position: "absolute",
    right: "6px",
    backgroundColor: "transparent",
    color: "blue",
    outline: "none",
    border: "none",
    fontSize: 18,
    fontWeight: 600,
    textDecoration: "underline",
    cursor: "pointer",
  },
  container: {
    width: 400,
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15, textAlign: "start" },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default ListingComponent;
