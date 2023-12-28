import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServive } from '../../../api.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

   user: User = {
    id : 0,
    name: '',
    email: '',
    verifed_email: false,
    password : ''
  };


  constructor(private service: ApiServive, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = +params['id'];

      this.service.getObject("users/", userId).subscribe(
        (userCreated) =>{
          this.user  = userCreated
        },
        (error)=>{
          console.error('Erro ao obter detalhes do usuário:', error)
        }
      );
    });
  }

  updateUser(): void {
    this.service.updateObject("users/",this.user).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erro ao atualizar o usuário:', error);
      }
      );
  }

  
}


