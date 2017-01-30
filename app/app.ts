import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { AppComponent }       from './controllers/root';
import { FormsModule }        from '@angular/forms';
import { IndexComponent,NewListComponent,CourseListComponent }     from './controllers/front/index';
import { BackendIndexComponent,SlidebarPartialComponent}     from './controllers/backend/index';
import { BackendComponent }  from './controllers/backend/backendRoot';
import { FrontComponent }  from './controllers/front';
import { LoginComponent } 	  from './controllers/front/loginPartial';
import { NewsComponent } 	  from './controllers/front/news';
// import { routing }      	  from './router/route';
import { routing }      	  from './router/baseRoute';
import { PersonComponent }	  from './controllers/front/person';
import { BasicComponent }      	  from './controllers/front/person_Basic';
import { CertificateComponent }      	  from './controllers/front/person_Certificate';
import { RecordComponent }      	  from './controllers/front/person_Record';
import { TestRecordComponent }      	  from './controllers/front/person_TestRecord';
import { Tabs }      	  from './controllers/tabSet';
import { Tab }      	  from './controllers/tab';

@NgModule({
  imports: [ BrowserModule,  FormsModule, routing],
  declarations: [
    AppComponent, IndexComponent,LoginComponent,NewsComponent,BasicComponent,CertificateComponent,PersonComponent
    ,RecordComponent,TestRecordComponent,Tabs,Tab,NewListComponent,CourseListComponent,BackendIndexComponent,BackendComponent,SlidebarPartialComponent,FrontComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

