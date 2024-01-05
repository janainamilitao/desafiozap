import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServive } from '../../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../../../models/company.model';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  users: any[] = []; 
  formCompany: FormGroup; 
  path: any;


  constructor(private service: ApiServive, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.formCompany = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      guests: [],
      user_created: ['', Validators.required],
      language: [ 'pt', Validators.required],
      timezone: [ '-03:00', Validators.required]
    });
  }

  ngOnInit(): void {
    this.path = 'companys/';
    this.initUsers();
    
    this.route.params.subscribe((params) => {
    const companyId = +params['id'];

      this.service.getObject(this.path, companyId).subscribe(
        (companyCreated) =>{
        this.company  = companyCreated;
        this.setUser();
          
        this.formCompany = this.formBuilder.group({
          name: [this.company.name, [Validators.required, Validators.maxLength(255)]]
          });
        });       
    });
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

  
  

    addCompany(): void {
      if (this.formCompany.valid) {
        this.company.name = this.formCompany.get('name').value;
        this.company.language = this.formCompany.get('language').value;
        this.company.timezone = this.formCompany.get('timezone').value;
        this.company.date_creation = new Date();
        this.setUserCreated();
        this.setGuests();
        
        this.service.addObject(this.path,this.company).subscribe(() => {
          this.router.navigate([this.path]);
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

    initUsers(){
      this.service.getObjects('users/').subscribe(
        data => {
        this.users = data;
      });
    }
  
  
    
    setUser(){
      const url = this.company.user_created;
  
      // Use uma expressão regular para extrair a parte entre as duas últimas barras
      const match = url.match(/\/([^\/]+)\/$/);
  
      // A parte desejada estará em match[1] se houver uma correspondência
      const id_user = match ? match[1] : null;
  
      this.service.getObject("users/", id_user).subscribe((user)=>{
        this.company.user_created = user;
      });
    }

  }
    
