"use client";

import React, { useState } from 'react';
import LogoutButton from './components/LogoutButton';
import Screen from './components/Screen';
import TaskComponent from './components/TaskComponent';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [dailyScore, setDailyScore] = useState(0);

    const addTaskList = (newList) => {
        setTasks([...tasks, newList]);
    };

    const incrementDailyScore = () => {
        setDailyScore(dailyScore + 1);
    };

    const decrementDailyScore = () => {
        setDailyScore(dailyScore - 1);
    };

    return (
        <div style={styles.page}>
            <LogoutButton />
            <Screen dailyScore={dailyScore} characterImage="/ghost-placeholder.png" />
            <TaskComponent tasks={tasks} addTaskList={addTaskList} incrementDailyScore={incrementDailyScore} decrementDailyScore={decrementDailyScore} />
        </div>
    );
};

const styles = {
    page: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#FCF5C7',
    }
};

export default Home;
