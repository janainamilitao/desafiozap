import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServive } from '../../../api.service';
import { Router } from '@angular/router';
import { Company } from '../../../models/company.model';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  users: any[] = []; 
  formCompany: FormGroup; 
  associate_company: any;

  ngOnInit() {
    this.service.getObjects("users/").subscribe(
      data => {
      this.users = data
    })
  }
  
  company: Company = {
    id: 0,
    name: '',
    associates_doc: [],
    guests: [],
    user_created: '',
    date_updated: new Date(),
    date_creation: new Date(),
    language: '',
    timezone: ''
  };

    constructor(private service: ApiServive, private router: Router, private formBuilder: FormBuilder) {
      this.formCompany = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(255)]],
        associates_doc: [],
        guests: [],
        user_created: ['', Validators.required],
        language: [ 'pt', Validators.required],
        timezone: [ '-03:00', Validators.required]
      });
    }
  

    addCompany(): void {
      this.service.addObject("companys/",this.company).subscribe(() => {
        this.router.navigate(['companys/']);
      });
    }

  }
    
