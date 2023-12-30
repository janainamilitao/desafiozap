import { Component } from '@angular/core';
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
    associates_user: [],
    guests: [],
    user_created:{ id: 0, name:'', email: '', verifed_email: false, password: '' }
  };

    constructor(private service: ApiServive, private router: Router) { }
  

    addCompany(): void {
      this.service.addObject("companys/",this.company).subscribe(() => {
        this.router.navigate(['companys/']);
      });
    }

  }
    
