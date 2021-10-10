import { Component, OnInit } from '@angular/core';
import { Tarefa,TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tasks: Tarefa[];

  constructor(private taskService: TarefaService) { };

  ngOnInit(): void {
    this.tasks = this.listAll();
  }

  listAll(): Tarefa[]{
    return this.taskService.listAll();
  }

  deleteTask($event: any, task:Tarefa):void{
    $event.preventDefault();
    if (confirm('Do you want to delete the task: "'+ task.name + '"?')){
      this.taskService.deleteTask(task.id);
      this.tasks = this.taskService.listAll()
    }
  }

  changeTaskStatus(task:Tarefa):void{
    if(confirm('Deseja alterar o status da tarefa "'+ task.name +'"?')){
      this.taskService.changeTaskStatus(task.id);
      this.tasks = this.listAll();
    }
  }
};
