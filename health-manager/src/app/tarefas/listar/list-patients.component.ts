import { Component, OnInit } from '@angular/core';
import { Patient, PatientService } from '../shared';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) { };

  ngOnInit(): void {
    this.patients = this.listAll();
  }

  listAll(): Patient[] {
    return this.patientService.listAll();
  }

  deletePatient($event: any, patient: Patient): void {
    $event.preventDefault();
    if (confirm('Do you want to delete the patient: "' + patient.name + '"?')) {
      this.patientService.deletePatients(patient.id);
      this.patients = this.patientService.listAll()
    }
  }

  changePatientDone(patient: Patient): void {
    if (confirm('Deseja alterar o status da tarefa "' + patient.name + '"?')) {
      this.patientService.changePatientDone(patient.id);
      this.patients = this.listAll();
    }
  }

  removeStatus(id: number): void {
    this.patientService.removeStatus(id);
    this.patients = this.listAll();
  }
};
