import { Routes, RouterModule }		from '@angular/router';
import { BackendIndexComponent }			from '../../app/controllers/backend/index';



export const BackendRoute: Routes = [
  
    { path: '', component: BackendIndexComponent }
];