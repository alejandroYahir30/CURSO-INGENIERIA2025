import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yrodriguez } from './yrodriguez';

describe('Yrodriguez', () => {
  let component: Yrodriguez;
  let fixture: ComponentFixture<Yrodriguez>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yrodriguez]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yrodriguez);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
