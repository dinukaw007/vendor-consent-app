import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentVerifyComponent } from './consent-verify.component';

describe('ConsentVerifyComponent', () => {
  let component: ConsentVerifyComponent;
  let fixture: ComponentFixture<ConsentVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
