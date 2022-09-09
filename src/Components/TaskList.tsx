import { CheckCircle, Circle, Trash } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";

import styles from './TaskList.module.css'

interface TaskListProps{
  task: {
    checked: boolean;
    content: string;
  }
  taskCompletion: (content: string) => void;
  deleteTask: (taskToDelete: string) => void;
}

export function TaskList({ task, taskCompletion, deleteTask} : TaskListProps) {
  

  return (
    <div className={styles.taskList} key={task.content}>
          {
            task.checked ?
            <CheckCircle
              className={styles.checkCircle} 
              size={20} 
              color="#4EA8DE" 
              onClick={() => taskCompletion(task.content)}  
            /> 
              : 
            <Circle 
              className={styles.checkCircle} 
              size={20} 
              color="#4EA8DE" 
              onClick={() => taskCompletion(task.content)} 
            /> 
          }
          <div className={styles.divContent}>
            <span className={task.checked ? styles.spanContentCompleted : styles.spanContent}>{task.content}</span>
          </div>
          <button onClick={() => deleteTask(task.content)} title='Deletar task'>
            <Trash size={20}/>
          </button>
        </div>
  )
}