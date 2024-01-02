import { Component } from '@angular/core';
import { ApiServive } from '../../../api.service';
import { Document } from '../../../models/document.model';
import { User } from '../../../models/user.model';
import { Company } from '../../../models/company.model';

@Component({
  selector: 'app-view-doc',
  templateUrl: './view-doc.component.html',
  styleUrls: ['./view-doc.component.css']
})
export class ViewDocumentComponent {
  docs: Document[] = [];
  associate_company: Company = {
    id: 0,
    name: '',
    associates_doc: [],
    guests: [],
    user_created:'',
    date_updated: new Date(),
    date_creation: new Date(),
    language: '',
    timezone: ''
  };
  guests: User[] = [];

  document : Document = { 
    id: 0,
    name: '',
    date_updated: new Date(),
    date_creation: new Date(),  
    deleted: false,
    signature_deadline: new Date(),
    signed: false,
    user_created: '',
    associate_company: ''
  };

  path: any;

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

  constructor(private service: ApiServive) { }

  ngOnInit(): void {
    this.path = 'docs/';
    this.service.getObjects(this.path).subscribe(
      data => {
      this.docs = data
    },
    error => {
      console.log("Documento não encontrado")
    }
    );
  }

  openConfirm(id: number){
    this.service.getObject(this.path, id).subscribe((data)=>{
      this.document = data;
    });
  }

  openPainel(id: number){
  
    this.service.getObject(this.path, id).subscribe((data)=>{
      this.document = data;
      this.setUser();
      this.setAssociateCompany();
    });
  }

  deleteDoc() {
    this.document.deleted = true
    this.service.updateObject(this.path, this.document).subscribe(data => {
      this.ngOnInit();
    });
  }

  setUser(){
    const url = this.document.user_created;

    // Use uma expressão regular para extrair a parte entre as duas últimas barras
    const match = url.match(/\/([^\/]+)\/$/);

    // A parte desejada estará em match[1] se houver uma correspondência
    const id_user = match ? match[1] : null;

    this.service.getObject("users/", id_user).subscribe((user)=>{
      this.document.user_created = user;
      this.user_created = user;
    });
  }


  setAssociateCompany(){
    const url = this.document.associate_company;

    // Use uma expressão regular para extrair a parte entre as duas últimas barras
    const match = url.match(/\/([^\/]+)\/$/);

    // A parte desejada estará em match[1] se houver uma correspondência
    const id_company = match ? match[1] : null;

    this.service.getObject("companys/", id_company).subscribe((company)=>{
      this.document.associate_company = company;
      this.associate_company = company;
    });
  
  }

}
