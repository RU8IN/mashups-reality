import React from "react";
import './tasks-counter.css'

export default function TasksCounter({toDo, done}) {
    return (
        <h4 className="taskCounter mt-3">
            You have to do {toDo}. {done} tasks already done.
        </h4>
    )
}