import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';

const routes: Routes = [];

export const TarefaRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list', //if i am here
        component: ListarTarefaComponent // show this component
    },
    {
        path:'tasks/newTask',
        component: CadastrarTarefaComponent
    },
    {
        path:'tasks/editTask/:id',
        component:EditarTarefasComponent
    }
]