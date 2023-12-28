import { Component } from '@angular/core';
import { ApiServive } from '../../../api.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  
  user: User = {
    id: 0,
    name: '',
    email: '',
    verifed_email: false,
    password : ''
  };

    constructor(private service: ApiServive, private router: Router) { }
  

    addUser(): void {
      this.service.addObject("users/",this.user).subscribe(() => {
        this.router.navigate(['/']);
      });
    }

  }
    
