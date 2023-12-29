import { Component } from '@angular/core';
import { ApiServive } from '../../../api.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent {
  companys: any | undefined;

  constructor(private service: ApiServive) { 
   
  }

  ngOnInit(): void {
    this.service.getObjects("companys/").subscribe(
      data => {
      this.companys = data
    },
    error => {
      console.log("Companhia não encontrado")
    }
    );
  }

  deleteCompany(id: number) {
    this.service.deleteObject("companys/", id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
