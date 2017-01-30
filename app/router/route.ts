import { Routes, RouterModule }		from '@angular/router';
import { IndexComponent }			from '../../app/controllers/front/index';
import { NewsComponent }			from '../../app/controllers/front/news';
import { PersonComponent }			from '../../app/controllers/front/person';
import { BasicComponent }			from '../../app/controllers/front/person_Basic';
import { CertificateComponent }		from '../../app/controllers/front/person_Certificate';
import { RecordComponent }			from '../../app/controllers/front/person_Record';
import { TestRecordComponent }		from '../../app/controllers/front/person_TestRecord';
import { Tabs }          from '../../app/controllers/tabSet';
import { Tab }          from '../../app/controllers/tab';

export const FontRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'person',
    component: PersonComponent
  }
];

// export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
