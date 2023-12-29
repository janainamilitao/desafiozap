import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';

import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { ViewUserComponent } from './components/users/view-user/view-user.component';

import { ViewDocumentComponent } from './components/docs/view-doc/view-doc.component';
import { AddDocumentComponent } from './components/docs/add-doc/add-doc.component';
import { UpdateDocumentComponent } from './components/docs/update-doc/update-doc.component';

import { ViewCompanyComponent } from './components/companys/view-company/view-company.component';
import { AddCompanyComponent } from './components/companys/add-company/add-company.component';
import { UpdateCompanyComponent } from './components/companys/update-company/update-company.component';

import { MenuComponent } from './menu.component';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UpdateUserComponent,
    ViewUserComponent,
    ViewDocumentComponent,
    AddDocumentComponent,
    UpdateDocumentComponent,
    ViewCompanyComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    MenuComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent, ContactComponent]
})
export class AppModule { }