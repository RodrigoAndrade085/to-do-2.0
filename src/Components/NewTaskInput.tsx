import { CheckCircle, Circle, PlusCircle, Trash } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './NewTaskInput.module.css'
import { TaskList } from './TaskList';

interface TaskListState {
  checked: boolean;
  content: string;
}

export function NewTaskInput() {
  const [tasks, setTasks] = useState<TaskListState[]>([])
  const [newTaskInput, setNewTaskInput] = useState('')
  
  function handleTaskCompletion(content: string) {
    const newTasks = tasks.map(task => task.content === content ? {
      ...task,
      checked: !task.checked
    }: task)

    setTasks(newTasks);
  }

  function deleteComment(taskToDelete: string) {
    const newTaskDelete = tasks.filter(task => {
      return task.content !== taskToDelete
    })

    setTasks(newTaskDelete)
  }

  function handlenewTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskInput(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newtask = {
      checked: false,
      content: newTaskInput,
    }

     setTasks([...tasks, newtask])
     setNewTaskInput('') 
  }
  function taskCheckedQtd() {
    const qtdTaskChecked = tasks.filter(task => {
      return task.checked === true
    })

    return qtdTaskChecked.length
  }

  return (
    <>
    <form onSubmit={handleCreateNewTask} className={styles.inputForm}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa' 
        required
        value={newTaskInput}
        onChange={handlenewTaskInputChange}
      />
      <button type='submit'>Criar <PlusCircle size={18} /></button>
    </form>
    <div className={styles.listComponet}>
    <header className={styles.headerTask}>
        <strong className={styles.strongCreated}>Tarefas criadas {''}
          <span> {tasks.length || 0} </span> 
        </strong>
        
        <strong className={styles.strongFineshed}>Concluídas {''}
          <span> {taskCheckedQtd()} de {tasks.length || 0}</span>
        </strong>
    </header>

    {tasks.map(task => {
      return (
        <TaskList
          task={task}
          deleteTask={deleteComment}
          taskCompletion={handleTaskCompletion}
        />
      )
    })}

  </div>
  </>
  )
}