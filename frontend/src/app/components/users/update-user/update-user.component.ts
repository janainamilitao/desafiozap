import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServive } from '../../../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

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

  formEdit: FormGroup;

  path: any;
 
  
  constructor(private service: ApiServive, private route: ActivatedRoute, private router : Router, private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.path = 'users/'

    this.route.params.subscribe((params) => {
      const userId = +params['id'];

      this.service.getObject(this.path, userId).subscribe(
        (userCreated) =>{
          this.user = userCreated;
          this.formEdit = this.formBuilder.group({
            name: [this.user.name, [Validators.required, Validators.maxLength(255)]],
            email: [this.user.email, [Validators.required, Validators.email, Validators.maxLength(255)]],
            verifed_email: [this.user.verifed_email],
            password: [this.user.password, [Validators.required, Validators.required, Validators.minLength(6)]]
          });
        },
        (error)=>{
          console.error('Erro ao obter detalhes do usuário:', error)
        }
      );
    });

  
  }

  updateUser(): void {
    if (this.formEdit.valid) {
      if(this.user.password!=this.formEdit.get('password').value){
        this.user.date_last_pass_reset = new Date()
      }

        this.user.name = this.formEdit.get('name').value;
        this.user.email = this.formEdit.get('email').value;
        this.user.verifed_email = this.formEdit.get('verifed_email').value;
        this.user.password = this.formEdit.get('password').value;
        this.user.date_updated = new Date();
      
      this.service.updateObject(this.path,this.user).subscribe(
        () => {
          this.router.navigate([this.path]);
        },
        (error) => {
          console.error('Erro ao atualizar o usuário:', error);
        }
      );
    }else{
      console.log('Formulário inválido. Corrija os erros.');
    }
   
  }

  
}


