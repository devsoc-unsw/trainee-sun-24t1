"use client";

// components/CreateModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const CreateModal = ({ show, onClose, addTaskList }) => {
    const [listName, setListName] = useState('');
    const [tasks, setTasks] = useState(['']);

    const handleAddTask = () => {
        setTasks([...tasks, '']);
    };

    const handleTaskChange = (index, value) => {
        const newTasks = [...tasks];
        newTasks[index] = value;
        setTasks(newTasks);
    };

    const handleSubmit = () => {
        if (listName.trim()) {
            addTaskList({ name: listName, tasks });
            onClose();
        }
    };

    return (
        <Modal isOpen={show} onRequestClose={onClose}>
            <h2>Create a Boodo List</h2>
            <input
                type="text"
                placeholder="List Name"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                maxLength={30}
            />
            <div>
                {tasks.map((task, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder="Task"
                        value={task}
                        onChange={(e) => handleTaskChange(index, e.target.value)}
                    />
                ))}
                {tasks.length < 30 && <button onClick={handleAddTask}>Add Task</button>}
            </div>
            <button onClick={handleSubmit}>Create</button>
        </Modal>
    );
};

export default CreateModal;
