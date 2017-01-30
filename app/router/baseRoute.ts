import { Routes, RouterModule }  from '@angular/router';
import { BackendRoute }  from './backendRoute';
import { FontRoutes }  from './route';
import { Guard }  from '../../app/service/GuardService';
import { BackendComponent }  from '../controllers/backend/backendRoot';
import { FrontComponent }  from '../controllers/front';



const appRoutes: Routes = [
	{ path: '', component: FrontComponent,children: FontRoutes },
	{ path: 'backend', component: BackendComponent,children: BackendRoute }
];
// 範例
 // { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
 //  { path: '', component: SecureComponent, canActivate: [Guard], data: { title: 'Secure Views' }, children: BackendRoute }
export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
