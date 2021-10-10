import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[taskDone]'
})
export class TarefaConcluidaDirective {

  @Input() taskDone: boolean;
  constructor(private element: ElementRef) { }

  ngOnInit(){
    if (this.taskDone){
      this.element.nativeElement.style.textDecoration = 'line-throught'
    }
  }
}
