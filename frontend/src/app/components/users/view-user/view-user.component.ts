import { Component } from '@angular/core';
import { ApiServive } from '../../../api.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  users: any | undefined;

  user: User = {
    id: 0,
    name: '',
    email: '',
    date_last_pass_reset: new Date(),
    verifed_email: false,
    password : '',
    date_updated: new Date(),
    date_creation: new Date(), 
  };

  path: any;

  constructor(private service: ApiServive) { 
   
  }

  ngOnInit(): void {
    this.path = 'users/'
    this.service.getObjects(this.path).subscribe(
      data => {
      this.users = data
    }
    );
  }

  openPainel(id: number){
    this.service.getObject(this.path, id).subscribe((data)=>{
      this.user = data;
    });
  }

  deleteUser(id: number) {
    this.service.deleteObject(this.path,id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
