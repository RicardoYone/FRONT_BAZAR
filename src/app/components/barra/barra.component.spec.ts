import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraComponent } from './barra.component';

describe('BarraComponent', () => {
  let component: BarraComponent;
  let fixture: ComponentFixture<BarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
