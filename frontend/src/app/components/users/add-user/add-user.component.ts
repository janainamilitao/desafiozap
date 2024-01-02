import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServive } from '../../../api.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {

  user: User = {
    id: 0,
    name: '',
    email: '',
    date_last_pass_reset: null,
    verifed_email: false,
    password : '',
    date_updated: new Date(),
    date_creation: new Date(), 
  };

  formUser: FormGroup;
 
    constructor(private service: ApiServive, private router: Router, private formBuilder: FormBuilder) { 
      this.formUser = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(255)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
        verifed_email: [false],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    } 

    addUser(): void {
      if (this.formUser.valid) {
        this.user.name = this.formUser.get('name').value;
        this.user.email = this.formUser.get('email').value;
        this.user.verifed_email = this.formUser.get('verifed_email').value;
        this.user.password = this.formUser.get('password').value;

        this.service.addObject("users/",this.user).subscribe(() => {
          this.router.navigate(['users/']);
        });
      } else{
        console.log('Formulário inválido. Corrija os erros.');
      }
    }

  }
    
