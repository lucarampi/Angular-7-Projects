import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient, PatientService } from '..';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  @ViewChild('formPatient', { static: true }) formPatient: NgForm;
  patient: Patient;



  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.patient = new Patient();
    this.patient.status = "emergencia"
  }

  newPatient(): void {
    if (this, this.formPatient.form.valid) {
      this.patientService.newPatient(this.patient);
      this.router.navigate(["/patients"]);
    }
  }
}
