import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServive } from '../../../api.service';
import { Company } from '../../../models/company.model';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent {

  users: any[] = []; 
  formCompany: FormGroup; 
  path: any;

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


  constructor(private service: ApiServive, private route: ActivatedRoute, private router : Router, private formBuilder: FormBuilder) { 
    this.formCompany = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      guests: [],
      user_created: ['', Validators.required],
      language: [ 'pt', Validators.required],
      timezone: [ '-03:00', Validators.required]
    });
  }

  // ngOnInit(): void {
 
  //   this.route.params.subscribe((params) => {
  //     const companyId = +params['id'];

  //     this.service.getObject("companys/",companyId).subscribe(
  //       (companyCreated) =>{
  //         this.company  = companyCreated
  //       },
  //       (error)=>{
  //         console.error('Erro ao obter detalhes da companhia:', error)
  //       }
  //     );
  //   });
  // }

  ngOnInit(): void {
    this.path = 'companys/';
    this.initUsers();
 
    
    this.route.params.subscribe((params) => {
    const companyId = +params['id'];

      this.service.getObject(this.path, companyId).subscribe(
        (companyCreated) =>{
          this.company  = companyCreated;
          this.setUserCreated();
          this.setGuests();
          
          this.formCompany = this.formBuilder.group({
            name: [this.company.name, [Validators.required, Validators.maxLength(255)]],
            language: [this.company.language],
            timezone: [this.company.timezone]

            });
        });       
    });
  }


  updateCompany(): void {
    if (this.formCompany.valid) {
      this.company.name = this.formCompany.get('name').value;
      this.company.language = this.formCompany.get('language').value;
      this.company.timezone = this.formCompany.get('timezone').value;
      this.company.user_created = this.formCompany.get('user_created').value;
      this.setGuests();
      this.company.date_updated = new Date();
     
      this.service.updateObject("companys/",this.company).subscribe(
        () => {
          this.router.navigate(["companys/"]);
        }
        );
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

  initUsers(){
    this.service.getObjects('users/').subscribe(
      data => {
      this.users = data;
    });
  }


  
}


