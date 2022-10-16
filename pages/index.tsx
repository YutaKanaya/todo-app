import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import { Container, Button } from "react-bootstrap";

import ToDoTable from "../features/task/todo_table";
import TodoModal from "../features/task/todo_modal";

const TodoPage = () => {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const [show_modal, setShowModal] = useState<boolean>(false);

  return (
    <Container fluid>
      <h1>ToDo App</h1>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        タスクを作成
      </Button>

      <ToDoTable tasks={tasks} />
      <TodoModal show_modal={show_modal} setShowModal={setShowModal} />
    </Container>
  );
};

export default TodoPage;
