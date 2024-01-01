import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServive } from '../../../api.service';
import { Router } from '@angular/router';
import { Document } from '../../../models/document.model';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.css']
})
export class AddDocumentComponent {

  users: any[] = [];
  companys: any[] = []; 
  formDocument: FormGroup; 
  path: any;

  ngOnInit() {
    this.path = 'docs/'

    this.service.getObjects("companys/").subscribe(
      data => {
      this.companys = data
    },
    error => {
      console.log("Companhia não encontrado: "+error)
    }
    );

    this.service.getObjects('users/').subscribe(
      data => {
      this.users = data;
    });
    
  }

  
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


  constructor(private service: ApiServive, private router: Router, private formBuilder: FormBuilder) { 
    this.formDocument = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      signature_deadline: [''],
      signed: [false],
      user_created: ['', Validators.required],
      associates_company: [[], Validators.required]
    });
  }


  addDoc(): void {
    if (this.formDocument.valid) {
      this.document.name = this.formDocument.get('name').value;
      this.document.signature_deadline = this.formDocument.get('signature_deadline').value;
      this.document.signed = this.formDocument.get('signed').value;
     
      this.setUserCreated();
      this.setCompanys();
      
      this.service.addObject(this.path,this.document).subscribe(() => {
        this.router.navigate([this.path]);     
      });
    }else{
      console.log('Formulário inválido. Corrija os erros.');
    }

   
  }

  setCompanys(){
    let list_id = this.formDocument.get('user_created').value;
    for(let id of list_id ){
      this.document.associates_company.push(this.service.baseUrl+'companys/'+id+'/')
    }
  }

  setUserCreated(){
    let user_id = this.formDocument.get('user_created').value;
    this.document.user_created =  this.service.baseUrl+'users/'+user_id+'/'
  }

}

