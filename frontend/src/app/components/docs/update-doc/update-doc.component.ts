import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServive } from '../../../api.service';
import { Document } from '../../../models/document.model';

@Component({
  selector: 'app-update-doc',
  templateUrl: './update-doc.component.html',
  styleUrls: ['./update-doc.component.css']
})
export class UpdateDocumentComponent {

  users: any[] = [];
  companys: any[] = [];  
  formDocument: FormGroup; 
  path: any;
  usuario_criado : any;



  document: Document = {
    id: 0,
    name: '',
    date_updated: new Date(),
    date_creation: new Date(),  
    deleted: false,
    signature_deadline: new Date(),
    signed: false,
    user_created: '',
    associates_company: []
  };


  constructor(private service: ApiServive, private route: ActivatedRoute, private router : Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.path = 'docs/';
    this.initUsers();
    this.initCompanys();
    
    this.route.params.subscribe((params) => {
    const docId = +params['id'];

      this.service.getObject(this.path, docId).subscribe(
        (docCreated) =>{
        this.document  = docCreated;
        this.setUser();
        this.setCompanys();
        this.formDocument = this.formBuilder.group({
          name: [this.document.name, [Validators.required, Validators.maxLength(255)]],
          signed: [this.document.signed],
          user_created: [this.document.user_created, Validators.required],
          associates_company: [this.companys, Validators.required]
          });
        });
    });
  }

  updateDoc(): void {
    if (this.formDocument.valid) {
      this.document.name = this.formDocument.get('name').value;
      this.document.signed = this.formDocument.get('signed').value;
      this.document.user_created = this.formDocument.get('user_created').value;
      this.document.associates_company = this.formDocument.get('associates_company').value;
      this.document.date_updated = new Date();

      this.service.updateObject(this.path,this.document).subscribe(
        () => {
          this.router.navigate([this.path]);
        }
        );
    }
    
  }

  initCompanys(){
    this.service.getObjects('companys/').subscribe(
      (data) => {
      this.companys = data;
    });
  }

  initUsers(){
    this.service.getObjects('users/').subscribe(
      data => {
      this.users = data;
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
    });
  }

  setCompanys(){
    const url_list = this.document.associates_company;

    url_list.forEach((url) => {
      // Use uma expressão regular para extrair a parte entre as duas últimas barras
      const match = url.match(/\/([^\/]+)\/$/);

      // A parte desejada estará em match[1] se houver uma correspondência
      const id_company = match ? match[1] : null;

      this.service.getObject("companys/", id_company).subscribe((data)=>{
        this.companys.push(data);
      });
    });

  }

  
}


