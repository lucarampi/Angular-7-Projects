import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa, TarefaService } from '../';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {
  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Tarefa;
  
  constructor(
    private taskService: TarefaService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.task = this.taskService.idSearch(id);
  }

  updateTask():void{
    if(this.formTask.form.valid){
      this.taskService.updateTask(this.task);
      this.router.navigate(['/tasks'])
    }
  }

}
