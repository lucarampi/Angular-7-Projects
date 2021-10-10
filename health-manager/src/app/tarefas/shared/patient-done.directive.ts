import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[patientDone]'
})
export class PatientDoneDirective {

  @Input() patientDone: string;
  constructor(private element: ElementRef) { }

  ngOnInit() {
    if (this.patientDone == 'removed') {
      let done: string[] = ["text-secondary", "bg-white"]
      this.element.nativeElement.classList.add(...done);
      // this.element.nativeElement.style.cssText = `    `

    }else if (this.patientDone == 'done') {
      let done: string[] = ["text-white", "bg-success"]
      this.element.nativeElement.classList.add(...done);
      // this.element.nativeElement.style.cssText = `    `

    } else if (this.patientDone == 'emergencia') {
      let ermegencia: string[] = ["text-white", "bg-danger"]
      this.element.nativeElement.classList.add(...ermegencia);

    } else if (this.patientDone == 'intermediario') {
      let intermediario: string[] = ["text-dark", "bg-warning"]
      this.element.nativeElement.classList.add(...intermediario);

    } else if (this.patientDone == 'leve') {
      let leve: string[] = ["text-dark", "bg-info"]
      this.element.nativeElement.classList.add(...leve);
    }
  }
}
