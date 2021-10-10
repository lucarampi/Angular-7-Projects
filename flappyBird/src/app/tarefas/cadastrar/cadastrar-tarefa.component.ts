import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa,TarefaService } from '..';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Tarefa;
  

  constructor(
    private taskService : TarefaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.task = new Tarefa();
  }

  newTask():void{
    if(this,this.formTask.form.valid){
      this.taskService.newTask(this.task);
    this.router.navigate(["/tarefas"]);
    }
  }
}
