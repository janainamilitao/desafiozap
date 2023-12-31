import { Component } from '@angular/core';
import { ApiServive } from '../../../api.service';
import { Document } from '../../../models/document.model';

@Component({
  selector: 'app-view-doc',
  templateUrl: './view-doc.component.html',
  styleUrls: ['./view-doc.component.css']
})
export class ViewDocumentComponent {
  docs: Document[] = [];

  constructor(private service: ApiServive) { 
   
  }

  ngOnInit(): void {
    this.service.getObjects("docs/").subscribe(
      data => {
      this.docs = data
    },
    error => {
      console.log("Documento não encontrado")
    }
    );
  }

  deleteDoc(id: number) {
    this.service.deleteObject("docs/", id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
