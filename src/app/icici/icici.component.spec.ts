import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IciciComponent } from './icici.component';

describe('IciciComponent', () => {
  let component: IciciComponent;
  let fixture: ComponentFixture<IciciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IciciComponent]
    });
    fixture = TestBed.createComponent(IciciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
