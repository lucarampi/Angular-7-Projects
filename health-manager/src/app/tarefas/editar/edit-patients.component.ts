import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient, PatientService } from '../shared';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patients.component.html',
  styleUrls: ['./edit-patients.component.css']
})
export class EditPatientsComponent implements OnInit {
  @ViewChild('formPatient', { static: true }) formPatient: NgForm;
  patient: Patient;
  
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.patient = this.patientService.idSearch(id);
  }

  updatePatient():void{
    if(this.formPatient.form.valid){
      this.patientService.updatePatient(this.patient);
      this.router.navigate(['/patients'])
    }
  }

}
