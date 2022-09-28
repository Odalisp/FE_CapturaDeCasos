import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptacionComponent } from './captacion.component';

describe('CaptacionComponent', () => {
  let component: CaptacionComponent;
  let fixture: ComponentFixture<CaptacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
