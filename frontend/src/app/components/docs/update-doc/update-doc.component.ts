import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServive } from '../../../api.service';
import { Document } from '../../../models/document.model';

@Component({
  selector: 'app-update-doc',
  templateUrl: './update-doc.component.html',
  styleUrls: ['./update-doc.component.css']
})
export class UpdateDocumentComponent {


  document: Document = {
    id: 0,
    name: '',
    deleted: false,
    signature_deadline: new Date(),
    signed: false,
    user_created:{ id: 0, name:'', email: '', verifed_email: false, password: ''}
  };


  constructor(private service: ApiServive, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const docId = +params['id'];

      this.service.getObject("docs/",docId).subscribe(
        (docCreated) =>{
          this.document  = docCreated
        },
        (error)=>{
          console.error('Erro ao obter detalhes do usuário:', error)
        }
      );
    });
  }

  updateDoc(): void {
    this.service.updateObject("docs/",this.document).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erro ao atualizar o usuário:', error);
      }
      );
  }

  
}


