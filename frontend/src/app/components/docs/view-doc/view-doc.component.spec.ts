import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewDocComponent } from './view-doc.component';


describe('ViewUserComponent', () => {
  let component: ViewDocComponent;
  let fixture: ComponentFixture<ViewDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
