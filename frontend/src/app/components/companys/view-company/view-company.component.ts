import { Component } from '@angular/core';
import { ApiServive } from '../../../api.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent {
  companys: any | undefined;
  company : any;
  path: any;

  constructor(private service: ApiServive) { 
   
  }

  ngOnInit(): void {
    this.path = 'companys/'
    this.service.getObjects(this.path).subscribe(
      data => {
      this.companys = data
    },
    error => {
      console.log("Companhia não encontrado")
    }
    );
  }

  deleteCompany() {
    this.service.deleteObject(this.path, this.company).subscribe(data => {
      this.ngOnInit();
    });
  }

  openConfirm(id: number){
    this.service.getObject(this.path, id).subscribe((data)=>{
      this.company = data;
    });
  }

  openPainel(id: number){
    this.companys = [];
    this.service.getObject(this.path, id).subscribe((data)=>{
      this.company = data;
    });
  }


}
