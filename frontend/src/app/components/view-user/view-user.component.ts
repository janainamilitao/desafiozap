import { Component, OnInit } from '@angular/core';
import { ApiServive } from '../../api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  users: any | undefined;

  constructor(private userService: ApiServive) { 
   
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
      this.users = data
    },
    error => {
      console.log("User not found")
    }
    );
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
