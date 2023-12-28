import { Component, OnInit } from '@angular/core';
import { ApiServive } from '../../../api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  users: any | undefined;

  constructor(private service: ApiServive) { 
   
  }

  ngOnInit(): void {
    this.service.getObjects("users/").subscribe(
      data => {
      this.users = data
    },
    error => {
      console.log("Usuárrio não encontrado")
    }
    );
  }

  deleteUser(id: number) {
    this.service.deleteObject("users/",id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
