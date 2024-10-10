import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenItemsComponent } from './resumen-items.component';

describe('ResumenItemsComponent', () => {
  let component: ResumenItemsComponent;
  let fixture: ComponentFixture<ResumenItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumenItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
