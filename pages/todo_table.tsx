import { Table } from "react-bootstrap";

import type { Task } from "../store/task";

import ToDoRow from "./todo_row";

type ToDoTableProps = {
  tasks: Task[];
};

const ToDoTable = ({ tasks }: ToDoTableProps) => {
  const rows = tasks.map((task, idx) => <ToDoRow task={task} key={idx} />);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>タイトル</th>
          <th>期日</th>
          <th>ステータス</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default ToDoTable;
