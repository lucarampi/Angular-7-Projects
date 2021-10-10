import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {PatientService,  PatientDoneDirective} from './shared';
import { ListPatientsComponent } from './listar/list-patients.component';
import { AddPatientComponent } from './cadastrar/add-patient.component';
import { EditPatientsComponent } from './editar/edit-patients.component';



@NgModule({
  declarations: [
    ListPatientsComponent,
    AddPatientComponent,
    EditPatientsComponent,
    PatientDoneDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    PatientService
  ]
})
export class PatientsModule { }
