import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServive } from '../../../api.service';
import { Company } from '../../../models/company.model';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent {


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


  constructor(private service: ApiServive, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const companyId = +params['id'];

      this.service.getObject("companys/",companyId).subscribe(
        (companyCreated) =>{
          this.company  = companyCreated
        },
        (error)=>{
          console.error('Erro ao obter detalhes da companhia:', error)
        }
      );
    });
  }

  updateCompany(): void {
    this.service.updateObject("companys/",this.company).subscribe(
      () => {
        this.router.navigate(['companys/']);
      },
      (error) => {
        console.error('Erro ao atualizar o usuário:', error);
      }
      );
  }

  
}


