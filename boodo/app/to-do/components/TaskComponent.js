// components/TaskComponent.js
import React, { useState } from 'react';
import CreateModal from './CreateModal';

const TaskComponent = ({ tasks, addTaskList, incrementDailyScore, decrementDailyScore }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedList, setSelectedList] = useState(null);

    const handleListClick = (list) => {
        setSelectedList(list);
    };

    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            incrementDailyScore();
        } else {
            decrementDailyScore();
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.listSection}>
                <button onClick={() => setShowModal(true)} style={styles.addButton}>+</button>
                {tasks.map((list, index) => (
                    <button 
                        key={index} 
                        style={styles.listButton} 
                        onClick={() => handleListClick(list)}
                    >
                        {list.name}
                    </button>
                ))}
            </div>
            <div style={styles.taskSection}>
                {selectedList ? (
                    <div>
                        <h3>{selectedList.name}</h3>
                        {selectedList.tasks.map((task, index) => (
                            <div key={index} style={styles.taskItem}>
                                <input type="checkbox" id={`task-${index}`} onChange={handleCheckboxChange} />
                                <label htmlFor={`task-${index}`}>{task}</label>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Select a list to view its tasks</p>
                )}
            </div>
            <CreateModal show={showModal} onClose={() => setShowModal(false)} addTaskList={addTaskList} />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '400px',
        backgroundColor: '#253031',
        borderRadius: '10px'
    },
    listSection: {
        width: '30%',
        borderRight: '1px solid black',
        overflowY: 'auto',
        padding: '10px',
        margin: '15px',
        backgroundColor: '#D9D9D9',
        borderRadius: '10px'
    },
    taskSection: {
        width: '70%',
        padding: '10px',
        margin: '15px',
        backgroundColor: '#D9D9D9',
        borderRadius: '10px'
    },
    addButton: {
        marginBottom: '10px',
        cursor: 'pointer',
        padding: '10px',
        fontSize: '16px',
        width: '100%',
        border:'none',
        borderRadius: '10px'
    },
    listButton: {
        display: 'block',
        width: '100%',
        textAlign: 'left',
        padding: '10px',
        marginBottom: '5px',
        cursor: 'pointer',
        border:'none',
        borderRadius: '10px',
        backgroundColor:'FF9259'
    },
    taskItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px'
    }
};

export default TaskComponent;
