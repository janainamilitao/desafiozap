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


  ngOnInit() {
    this.service.getObjects("users/").subscribe(
      data => {
      this.users = data
    })
  }
  
  company: Company = {
    id: 0,
    name: '',
    guests: [],
    associates_doc: [],
    user_created: '',
    date_updated: new Date(),
    date_creation: new Date(),
    language: '',
    timezone: ''
  };

    constructor(private service: ApiServive, private router: Router, private formBuilder: FormBuilder) {
      this.formCompany = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(255)]],
        guests: [],
        user_created: ['', Validators.required],
        language: [ 'pt', Validators.required],
        timezone: [ '-03:00', Validators.required]
      });
    }
  

    addCompany(): void {
      if (this.formCompany.valid) {
        this.company.name = this.formCompany.get('name').value;
        this.company.language = this.formCompany.get('language').value;
        this.company.timezone = this.formCompany.get('timezone').value;
        this.company.date_creation = new Date();
        this.setUserCreated();
        this.setGuests();
        
        this.service.addObject("companys/",this.company).subscribe(() => {
          this.router.navigate(['companys/']);
        });
      }else{
        console.log('Formulário inválido. Corrija os erros.');
      }

    }

    setGuests(){
      let list_id = this.formCompany.get('guests').value;
      list_id.forEach((id) => {
        this.company.guests.push(this.service.baseUrl+'users/'+id+'/')
      });
    }

    setUserCreated(){
      let user_id = this.formCompany.get('user_created').value;
      this.company.user_created =  this.service.baseUrl+'users/'+user_id+'/'
    }
  

  }
    
