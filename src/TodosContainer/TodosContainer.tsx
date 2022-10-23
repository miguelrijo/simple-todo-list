import { FormEvent, useState, useMemo } from "react";

import TodoElement from "../TodoElement";
import { TodoProps } from "../TodoElement/TodoElement";
import styles from "./styles";

const TodosContainer = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoProps, setTodoProps] = useState<TodoProps[]>([]);

  const onDeteleItem = (index: number) => {
    const newTodoProps = [...todoProps];
    newTodoProps.splice(index, 1);
    setTodoProps(newTodoProps);
  };

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!todoValue.trim()) {
      return;
    }
    const newTodoProps = [...todoProps];
    newTodoProps.push({
      value: todoValue,
      index: newTodoProps.length - 1,
      onDelete: onDeteleItem,
    });
    setTodoProps(newTodoProps);
  };

  const todos = useMemo(
    () => todoProps.map((props) => <TodoElement {...props} />),
    [todoProps]
  );

  return (
    <div style={styles.mainContainer}>
      <h1>Todo List Management</h1>
      <form onSubmit={addTodo}>
        <div style={styles.formContainer}>
          <input
            style={styles.valueInput}
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
            type="text"
          />
          <button style={styles.buttonAdd}> + </button>
        </div>
      </form>
      <div style={styles.todosContainer as React.CSSProperties}>{todos}</div>
    </div>
  );
};

export default TodosContainer;
