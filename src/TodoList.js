import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { Button, Col, Input, Row, Modal } from 'antd';

function TodoList() {
  const [inputValues, setInputValues] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const [editInputValue, setEditInputValue] = useState();

  function addTodoItem() {
    setTodoItems([...todoItems, inputValues]);

    console.log(todoItems);
  }
  const showModal = (index) => {
    setEditInputValue(todoItems[index]);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const editTodoItems = () => {
    var dupitems = [...todoItems];

    dupitems[editIndex] = editInputValue;

    setTodoItems(dupitems);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function deleteTodoItem(index) {
    var dupitems = [...todoItems];

    dupitems.splice(index, 1);

    setTodoItems(dupitems);
  }

  return (
    <Dashboard>
      <div className="todo">
        <h3 className="text-center">
          <b>TodoList</b>
        </h3>

        <Row justify={'center'}>
          <Col lg={10} sm={24} className="bs p-2">
            <div className="flex">
              <Input
                value={inputValues}
                onChange={(e) => {
                  setInputValues(e.target.value);
                }}
                placeholder="enter item"
              />
              <Button className="ml-2" onClick={addTodoItem}>
                ADD
              </Button>
            </div>
          </Col>
        </Row>

        <Row justify={'center'} className="mt-3">
          <Col lg={10} sm={24} className="bs p-2">
            {todoItems.map((item, index) => (
              <div
                className="flex"
                key={index}
                style={{ justifyContent: 'space-between' }}
              >
                <h3>{item}</h3>
                <div>
                  <Button
                    type="primary"
                    className="mr-2"
                    onClick={() => showModal(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    type="danger"
                    onClick={() => {
                      deleteTodoItem(index);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        <Modal
          title="Edit Todo Item"
          open={isModalOpen}
          onOk={editTodoItems}
          onCancel={handleCancel}
          okText="edit"
        >
          <Input
            value={editInputValue}
            onChange={(e) => {
              setEditInputValue(e.target.value);
            }}
          />
        </Modal>
      </div>
    </Dashboard>
  );
}

export default TodoList;
