import { Component } from '@angular/core';
import { ApiServive } from '../../../api.service';
import { Company } from '../../../models/company.model';
import { User } from '../../../models/user.model';
import { Document } from '../../../models/document.model';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent {
  companys: Company[] = [];
  associates_doc: Document[] = [];
  guests : User[] = [];
  associate_company: Company[];

  user_created: User = {
    id: 0,
    name: '',
    email: '',
    date_last_pass_reset: null,
    verifed_email: false,
    password : '',
    date_updated: new Date(),
    date_creation: new Date(), 
  };


  companyView: Company = {
    id: 0,
    name: '',
    associates_doc: [],
    guests: [],
    user_created:{ 
      id: 0,
      name: '',
      email: '',
      date_last_pass_reset: new Date(),
      verifed_email: false,
      password : '',
      date_updated: new Date(),
      date_creation: new Date()
    },
    date_updated: new Date(),
    date_creation: new Date(),
    language: '',
    timezone: ''
  };

  path: any;

  constructor(private service: ApiServive) { 
   
  }

  ngOnInit(): void {
    this.path = 'companys/';
    this.service.getObjects(this.path).subscribe(
      data => {
      this.companys = data
    });
  }

  deleteCompany() {
    this.service.deleteObject(this.path, this.companyView.id).subscribe(data => {
      this.ngOnInit();
    });
  }

  openConfirm(id: number){
    this.service.getObject(this.path, id).subscribe((data)=>{
      this.companyView = data;
    });
  }

  openPainel(id: number){
    this.service.getObject(this.path, id).subscribe((data)=>{
      this.companyView = data;
      this.setUser();
      this.setGuests();
      this.setDocuments();
    });
  }

  setUser(){
    const url = this.companyView.user_created;

    // Use uma expressão regular para extrair a parte entre as duas últimas barras
    const match = url.match(/\/([^\/]+)\/$/);

    // A parte desejada estará em match[1] se houver uma correspondência
    const id_user = match ? match[1] : null;

    this.service.getObject("users/", id_user).subscribe((user)=>{
      this.companyView.user_created = user;
      this.user_created = user;
    });
  }

  setGuests(){
    const url_list = this.companyView.guests;

    url_list.forEach((url) => {
      // Use uma expressão regular para extrair a parte entre as duas últimas barras
      const match = url.match(/\/([^\/]+)\/$/);

      // A parte desejada estará em match[1] se houver uma correspondência
      const id_user = match ? match[1] : null;

      this.service.getObject("user/", id_user).subscribe((data)=>{
        this.guests.push(data);
      });
    });
  }

  setDocuments(){
    const url_list = this.companyView.associates_doc;

    url_list.forEach((url) => {
      // Use uma expressão regular para extrair a parte entre as duas últimas barras
      const match = url.match(/\/([^\/]+)\/$/);

      // A parte desejada estará em match[1] se houver uma correspondência
      const id_doc = match ? match[1] : null;

      this.service.getObject("docs/", id_doc).subscribe((data)=>{
        this.associates_doc.push(data);
      });
    });
  }

  

}
