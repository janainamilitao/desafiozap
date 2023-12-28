import { Component } from '@angular/core';
import { ApiServive } from '../../../api.service';
import { Router } from '@angular/router';
import { Document } from '../../../models/document.model';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.css']
})
export class AddDocumentComponent {
  
  document: Document = {
    id: 0,
    name: '',
    deleted: false,
    signature_deadline: new Date(),
    signed: false
  };

    constructor(private service: ApiServive, private router: Router) { }
  

    addDoc(): void {
      this.service.addObject("docs/",this.document).subscribe(() => {
        this.router.navigate(['/docs']);
      });
    }

  }
    
