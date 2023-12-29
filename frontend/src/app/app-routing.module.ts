import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { ViewUserComponent } from './components/users/view-user/view-user.component';
import { ViewDocumentComponent } from './components/docs/view-doc/view-doc.component';
import { AddDocumentComponent } from './components/docs/add-doc/add-doc.component';
import { UpdateDocumentComponent } from './components/docs/update-doc/update-doc.component';
import { ViewCompanyComponent } from './components/companys/view-company/view-company.component';
import { UpdateCompanyComponent } from './components/companys/update-company/update-company.component';

const routes: Routes = [
  { path: 'users', component: ViewUserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent},

  { path: 'docs', component: ViewDocumentComponent },
  { path: 'add-doc', component: AddDocumentComponent},
  { path: 'update-doc/:id', component: UpdateDocumentComponent},

  { path: 'companys', component: ViewCompanyComponent },
  { path: 'add-company', component: AddDocumentComponent},
  { path: 'update-company/:id', component: UpdateCompanyComponent},

  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
