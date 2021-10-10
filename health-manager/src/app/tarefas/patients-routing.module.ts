import { Routes } from '@angular/router';
import { ListPatientsComponent } from './listar';
import { AddPatientComponent } from './cadastrar';
import { EditPatientsComponent } from './editar';

const routes: Routes = [];

export const PatientRoutes: Routes = [
    {
        path: 'patients',
        redirectTo: 'patients/list'
    },
    {
        path: 'patients/list', //if i am here
        component: ListPatientsComponent // show this component
    },
    {
        path:'patients/newPatient',
        component: AddPatientComponent
    },
    {
        path:'patients/editPatient/:id',
        component:EditPatientsComponent
    }
]