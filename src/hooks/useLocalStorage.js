import { useEffect, useState } from "react";

const updateLocalStorage = (data) => {
  localStorage.setItem("todos", JSON.stringify(data));
};

const getFromLocalStorage = () => {
  const data = localStorage.getItem("todos");
  if (data !== null) {
    return JSON.parse(data);
  }
  return [];
};

function useLocalStorage() {
  const [todos, setTodos] = useState(getFromLocalStorage());

  useEffect(() => {
    updateLocalStorage(todos);
  }, [todos]);

  return [todos, setTodos];
}

export default useLocalStorage;
