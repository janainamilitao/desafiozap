import { Component } from '@angular/core';
import { ApiServive } from '../../../api.service';
import { Company } from '../../../models/company.model';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent {
  companys: Company[] = [];
  companyView: Company = {
    id: 0,
    name: '',
    associates_doc: [],
    associates_user: [],
    guests: [],
    user_created:{ 
      id: 0,
      name: '',
      email: '',
      date_last_pass_reset: new Date(),
      verifed_email: false,
      password : '',
      date_updated: new Date(),
      date_creation: new Date()
    },
    date_updated: new Date(),
    date_creation: new Date(),
    language: '',
    timezone: ''
  };

  path: any;

  constructor(private service: ApiServive) { 
   
  }

  ngOnInit(): void {
    this.path = 'companys/';
    this.service.getObjects(this.path).subscribe(
      data => {
      this.companys = data
    });
  }

  deleteCompany() {
    this.service.deleteObject(this.path, this.companyView.id).subscribe(data => {
      this.ngOnInit();
    });
  }

  openConfirm(id: number){
    this.service.getObject(this.path, id).subscribe((data)=>{
      this.companyView = data;
    });
  }

  openPainel(id: number){
    this.service.getObject(this.path, id).subscribe((data)=>{
      this.companyView = data;
    });
  }


}
