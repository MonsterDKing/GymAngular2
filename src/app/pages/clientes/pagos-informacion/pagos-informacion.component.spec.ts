import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosInformacionComponent } from './pagos-informacion.component';

describe('PagosInformacionComponent', () => {
  let component: PagosInformacionComponent;
  let fixture: ComponentFixture<PagosInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
