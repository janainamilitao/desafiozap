import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDocumentComponent } from './update-doc.component';

describe('UpdateUserComponent', () => {
  let component: UpdateDocumentComponent;
  let fixture: ComponentFixture<UpdateDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
