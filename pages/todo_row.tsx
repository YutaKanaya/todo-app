import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { Button } from "react-bootstrap";

import type { Task } from "../store/task";

import { tasksSlice } from "../store/task";

type ToDoRowProps = {
  task: Task;
};

const ToDoRow = ({ task }: ToDoRowProps) => {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(
      tasksSlice.actions.UpdateTask({
        ...task,
        is_completed: !task.is_completed,
      })
    );
  };

  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.deadline}</td>
      <td>
        <Button
          variant={task.is_completed ? "success" : "primary"}
          onClick={handleUpdate}
        >
          {task.is_completed ? "完了" : "未完了"}
        </Button>
      </td>
    </tr>
  );
};

export default ToDoRow;
