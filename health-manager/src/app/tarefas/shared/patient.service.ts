import { Injectable } from '@angular/core';
import { Patient } from '.';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  /**
   * List all tasks saved inside the browser local storage
   * @returns type of Tarefa
   */
  listAll(): Patient[] {
    const patients = localStorage['patients'];
    return patients ? JSON.parse(patients) : [];
  }

  /**
   * Save a new task on local storage
   * @param patient 
   */
  newPatient(patient: Patient): void {
    const patients = this.listAll();
    patient.first_status = patient.status
    patient.id = new Date().getTime();
    patients.push(patient);
    localStorage['patients'] = JSON.stringify(patients);
  }

  /**
   * Iterates using .find() looking for
   * some task that matches the id passed
   * @param id 
   * @returns 
   */
  idSearch(id: number): Patient {
    const patients: Patient[] = this.listAll();
    return patients.find(patient => patient.id === id);
  }

  /**
   * Update chages at the selected task
   * @param patient 
   */
  updatePatient(patient: Patient): void {
    const patients: Patient[] = this.listAll();
    patients.forEach((cur_patient, index, udate_array) => {
      if (patient.id === cur_patient.id) udate_array[index] = patient
    });
    localStorage['patients'] = JSON.stringify(patients)
  }

  /**
   * Delete selected task
   * @param id 
   */
  deletePatients(id: number): void {
    let patients: Patient[] = this.listAll();
    patients = patients.filter(keep_patient => keep_patient.id !== id);
    localStorage['patients'] = JSON.stringify(patients);
  }



  /**
   * Change "done" boolean. 1 == done || 0 == not done
   * @param id 
   */
  changePatientDone(id: number): void {
    const patients: Patient[] = this.listAll();
    patients.forEach((curr_patient, index, update_array) => {
      if (id === curr_patient.id) {
        update_array[index].done = !curr_patient.done;
        if (curr_patient.status === "done") {
          update_array[index].status = curr_patient.first_status;
        } else {
          update_array[index].status = "done"
        }
      }
    });
    localStorage['patients'] = JSON.stringify(patients)
  }



  removeStatus(id: number): void {
    const patients: Patient[] = this.listAll();
    patients.forEach((curr_patient, index, update_array) => {
      if (id === curr_patient.id)

        if (update_array[index].status === update_array[index].first_status)
          update_array[index].status = "removed"

        else update_array[index].status = update_array[index].first_status
    });
    localStorage['patients'] = JSON.stringify(patients)
  }
}
