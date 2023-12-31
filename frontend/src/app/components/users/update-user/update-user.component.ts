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
    date_last_pass_reset: new Date(),
    verifed_email: false,
    password : '',
    date_updated: new Date(),
    date_creation: new Date(), 
  };

  userOld: any;


  constructor(private service: ApiServive, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = +params['id'];

      this.service.getObject("users/", userId).subscribe(
        (userCreated) =>{
          this.userOld  = userCreated
          this.user = this.userOld
        },
        (error)=>{
          console.error('Erro ao obter detalhes do usuário:', error)
        }
      );
    });
  }

  updateUser(): void {
    if(this.userOld.password!=this.user.password){
        this.user.date_last_pass_reset = new Date()
    }
    this.service.updateObject("users/",this.user).subscribe(
      () => {
        this.router.navigate(['users/']);
      },
      (error) => {
        console.error('Erro ao atualizar o usuário:', error);
      }
      );
  }

  
}


