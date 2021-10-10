import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /**
   * List all tasks saved inside the browser local storage
   * @returns type of Tarefa
   */
  listAll(): Tarefa[] {
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }

  /**
   * Save a new task on local storage
   * @param task 
   */
  newTask(task: Tarefa): void {
    const tasks = this.listAll();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  /**
   * Iterates using .find() looking for
   * some task that matches the id passed
   * @param id 
   * @returns 
   */
  idSearch(id: number): Tarefa {
    const tasks: Tarefa[] = this.listAll();
    return tasks.find(task => task.id === id);
  }

  /**
   * Update chages at the selected task
   * @param task 
   */
  updateTask(task: Tarefa): void {
    const tasks: Tarefa[] = this.listAll();
    tasks.forEach((cur_task, index, udate_array) => {
      if (task.id === cur_task.id) udate_array[index] = task
    });
    localStorage['tasks'] = JSON.stringify(tasks)
  }

  /**
   * Delete selected task
   * @param id 
   */
  deleteTask(id:number):void{
    let tasks: Tarefa[] = this.listAll();
    tasks = tasks.filter(keep_task => keep_task.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  /**
   * Change "done" boolean. 1 == done || 0 == not done
   * @param id 
   */
  changeTaskStatus(id:number):void{
    const tasks:Tarefa[] =this.listAll();
    tasks.forEach((curr_task, index, update_array)=>{
      if (id === curr_task.id) update_array[index].done = !curr_task.done;
    });
    localStorage['tasks'] = JSON.stringify(tasks)
  }

}
