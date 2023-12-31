import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
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

  ngOnInit() {
    this.service.getObjects("users/").subscribe(
      data => {
      this.users = data;
    })
  }

  
  document: Document = {
    id: 0,
    name: '',
    date_updated: new Date(),
    date_creation: new Date(),  
    deleted: false,
    signature_deadline: new Date(),
    signed: false,
    user_created: ''
  };


  constructor(private service: ApiServive, private router: Router) { }

  @ViewChild('formDocument') formulario!: NgForm;

  addDoc(): void {
    this.service.addObject("docs/",this.document).subscribe(() => {
      this.router.navigate(['docs/']);     
    });
  }

}

