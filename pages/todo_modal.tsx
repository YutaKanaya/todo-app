import { useState, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { tasksSlice } from "../store/task";

import dayjs from "dayjs";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

const TodoModal = ({
  show_modal,
  setShowModal,
}: {
  show_modal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [deadline_date, setDeadlineDate] = useState<string>("");
  const [deadline_time, setDeadlineTime] = useState<string>("");

  const handleAdd = () => {
    // TODO: 入力バリデーション入れる
    dispatch(
      tasksSlice.actions.AddTask({
        title: title,
        deadline: dayjs(`${deadline_date} ${deadline_time}`).format(
          "YYYY/MM/DD HH:mm"
        ),
        is_completed: false,
      })
    );
    handleClose();
  };
  const handleClose = () => {
    setTitle("");
    setDeadlineDate("");
    setDeadlineTime("");
    setShowModal(false);
  };

  return (
    <Modal show={show_modal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>タスクを作成</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="taskForm.title">
              <Form.Label>タイトル</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="taskForm.deadline_date">
              <Form.Label>期日(日付)</Form.Label>
              <Form.Control
                type="date"
                value={deadline_date}
                onChange={(e) => setDeadlineDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="taskForm.deadline_time">
              <Form.Label>期日(時刻)</Form.Label>
              <Form.Control
                type="time"
                value={deadline_time}
                onChange={(e) => setDeadlineTime(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          閉じる
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          作成
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoModal;
